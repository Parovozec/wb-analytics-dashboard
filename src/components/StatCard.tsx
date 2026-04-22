import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { FC } from 'react'
import clsx from 'clsx'

interface StatCardProps {
  title: string
  value: string
  growth?: number
  icon: string
  index?: number
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35, ease: 'easeOut' as const },
  }),
}

const StatCard: FC<StatCardProps> = ({ title, value, growth, icon, index = 0 }) => {
  const positive = growth !== undefined && growth >= 0

  return (
    <motion.div
      className="stat-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
    >
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
    </motion.div>
  )
}

export default StatCard
