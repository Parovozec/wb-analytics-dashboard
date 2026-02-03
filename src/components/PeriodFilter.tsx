import type { FC } from 'react'
import clsx from 'clsx'
import { useDashboardStore } from '@/store/dashboardStore'
import type { Period } from '@/types'

const OPTIONS: { label: string; value: Period }[] = [
  { label: '7 дней', value: '7d' },
  { label: '30 дней', value: '30d' },
  { label: '90 дней', value: '90d' },
]

const PeriodFilter: FC = () => {
  const { period, setPeriod } = useDashboardStore()

  return (
    <div className="period-filter">
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          className={clsx('period-btn', period === o.value && 'period-btn--active')}
          onClick={() => setPeriod(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default PeriodFilter
