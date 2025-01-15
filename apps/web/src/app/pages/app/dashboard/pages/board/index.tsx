import { MonthReceiptCard } from '@/components/templates/charts/month-receipt-card'
import { MonthUsersInactiveCard } from '@/components/templates/charts/month-users-inactive-card'
import { MonthClientsAmountCard } from '@/components/templates/charts/month-clients-amount-card'
import { ReceiptChart } from '@/components/templates/charts/receipt-chart'

export const Board = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-4 gap-4'>
        <MonthReceiptCard />
        <MonthReceiptCard />
        <MonthClientsAmountCard />
        <MonthUsersInactiveCard />
      </div>
      <div className='flex flex-col gap-4'>
        <ReceiptChart />
      </div>
    </div>
  )
}
