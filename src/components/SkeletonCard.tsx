import { motion } from 'framer-motion'
import type { FC } from 'react'

const SkeletonCard: FC = () => (
  <div className="stat-card skeleton-card">
    <div className="skeleton-card__header">
      <div className="skeleton skeleton--icon" />
      <div className="skeleton skeleton--title" />
    </div>
    <div className="skeleton skeleton--value" />
    <div className="skeleton skeleton--growth" />
  </div>
)

const skeletonVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.08 },
  }),
}

interface SkeletonGridProps {
  count?: number
}

const SkeletonGrid: FC<SkeletonGridProps> = ({ count = 4 }) => (
  <div className="stats-grid">
    {Array.from({ length: count }).map((_, i) => (
      <motion.div key={i} custom={i} variants={skeletonVariants} initial="hidden" animate="visible">
        <SkeletonCard />
      </motion.div>
    ))}
  </div>
)

export default SkeletonGrid
