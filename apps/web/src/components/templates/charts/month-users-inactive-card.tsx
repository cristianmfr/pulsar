import { DollarSign, Loader2 } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card'

import { Skeleton } from '@/components/atoms/skeleton'

export function MonthUsersInactiveCard() {
  const monthCanceledOrdersAmount = {
    amount: 1000,
    diffFromLastMonth: 10,
  }

  const isLoading = false

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Cancelamentos (mês)</CardTitle>
        {isLoading ? (
          <Loader2 className='h-4 w-4 animate-spin text-muted-foreground' />
        ) : (
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        )}
      </CardHeader>
      <CardContent className='space-y-1'>
        {monthCanceledOrdersAmount ? (
          <>
            <span className='text-2xl font-bold'>{monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}</span>
            <p className='text-xs text-muted-foreground'>
              <span className={monthCanceledOrdersAmount.diffFromLastMonth < 0 ? 'text-emerald-500' : 'text-red-500'}>
                {monthCanceledOrdersAmount.diffFromLastMonth > 0
                  ? `+${monthCanceledOrdersAmount.diffFromLastMonth}`
                  : monthCanceledOrdersAmount.diffFromLastMonth}
                %
              </span>{' '}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <Skeleton />
        )}
      </CardContent>
    </Card>
  )
}
