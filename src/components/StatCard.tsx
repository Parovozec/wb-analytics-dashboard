import type { FC } from 'react'
import clsx from 'clsx'

interface StatCardProps {
  title: string
  value: string
  growth?: number
  icon: string
}

const StatCard: FC<StatCardProps> = ({ title, value, growth, icon }) => {
  const positive = growth !== undefined && growth >= 0

  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <span className="stat-card__icon">{icon}</span>
        <span className="stat-card__title">{title}</span>
      </div>
      <div className="stat-card__value">{value}</div>
      {growth !== undefined && (
        <div className={clsx('stat-card__growth', positive ? 'stat-card__growth--up' : 'stat-card__growth--down')}>
          {positive ? '↑' : '↓'} {Math.abs(growth).toFixed(1)}%
        </div>
      )}
    </div>
  )
}

export default StatCard
