import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create permissions
  const createPermissions = await prisma.permission.createMany({
    data: [{ name: 'admin:root', description: 'Root administrator permission' }],
  });

  // Create roles
  const createRoles = await prisma.role.createMany({
    data: [{ name: 'administrator', description: 'Administrator role' }],
  });

  // Hash password
  const hashedPassword = await bcrypt.hash('admin@123', 10);

  // Create users
  const createUser = await prisma.user.create({
    data: {
      name: 'Cristian Freitas',
      document: '00000000000',
      email: 'admin@admin.com',
      status: 'ACTIVE',
      role: {
        connect: { name: 'administrator' },
      },
      password: hashedPassword,
    },
  });

  console.log({ createPermissions, createRoles, createUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
