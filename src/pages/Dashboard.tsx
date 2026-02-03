import type { FC } from 'react'
import { useDashboard } from '@/hooks/useDashboard'
import { useDashboardStore } from '@/store/dashboardStore'
import StatCard from '@/components/StatCard'
import RevenueChart from '@/components/RevenueChart'
import ProductsTable from '@/components/ProductsTable'
import PeriodFilter from '@/components/PeriodFilter'

const Dashboard: FC = () => {
  const { sales, products, stats, error } = useDashboard()
  const { isLoading } = useDashboardStore()

  if (error) return <div className="error-state">Ошибка загрузки: {error}</div>

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">WB Analytics</h1>
          <p className="dashboard__subtitle">Аналитика продаж в реальном времени</p>
        </div>
        <PeriodFilter />
      </header>

      {isLoading ? (
        <div className="loading-state">
          <div className="spinner" />
          <span>Загрузка данных...</span>
        </div>
      ) : (
        <>
          <div className="stats-grid">
            <StatCard
              title="Выручка"
              value={stats ? `${(stats.totalRevenue / 1_000_000).toFixed(2)}M ₽` : '—'}
              growth={stats?.revenueGrowth}
              icon="💰"
            />
            <StatCard
              title="Заказы"
              value={stats ? stats.totalOrders.toLocaleString('ru-RU') : '—'}
              growth={stats?.ordersGrowth}
              icon="📦"
            />
            <StatCard
              title="Средний чек"
              value={stats ? `${stats.avgOrderValue.toLocaleString('ru-RU')} ₽` : '—'}
              icon="🧾"
            />
            <StatCard
              title="Возвраты"
              value={stats ? `${stats.returnRate.toFixed(1)}%` : '—'}
              icon="↩️"
            />
          </div>

          <RevenueChart data={sales} />
          <ProductsTable products={products} />
        </>
      )}
    </div>
  )
}

export default Dashboard
