import { motion, AnimatePresence } from 'framer-motion'
import type { FC } from 'react'
import { useDashboard } from '@/hooks/useDashboard'
import { useDashboardStore } from '@/store/dashboardStore'
import StatCard from '@/components/StatCard'
import RevenueChart from '@/components/RevenueChart'
import ProductsTable from '@/components/ProductsTable'
import PeriodFilter from '@/components/PeriodFilter'
import SkeletonGrid from '@/components/SkeletonCard'

const Dashboard: FC = () => {
  const { sales, products, stats, error } = useDashboard()
  const { isLoading } = useDashboardStore()

  if (error) return <div className="error-state">Ошибка загрузки: {error}</div>

  return (
    <div className="dashboard">
      <motion.header
        className="dashboard__header"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h1 className="dashboard__title">WB Analytics</h1>
          <p className="dashboard__subtitle">Аналитика продаж в реальном времени</p>
        </div>
        <PeriodFilter />
      </motion.header>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SkeletonGrid count={4} />
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="stats-grid">
              <StatCard index={0} title="Выручка" value={stats ? `${(stats.totalRevenue / 1_000_000).toFixed(2)}M ₽` : '—'} growth={stats?.revenueGrowth} icon="💰" />
              <StatCard index={1} title="Заказы" value={stats ? stats.totalOrders.toLocaleString('ru-RU') : '—'} growth={stats?.ordersGrowth} icon="📦" />
              <StatCard index={2} title="Средний чек" value={stats ? `${stats.avgOrderValue.toLocaleString('ru-RU')} ₽` : '—'} icon="🧾" />
              <StatCard index={3} title="Возвраты" value={stats ? `${stats.returnRate.toFixed(1)}%` : '—'} icon="↩️" />
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.4 }}>
              <RevenueChart data={sales} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.4 }}>
              <ProductsTable products={products} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dashboard
