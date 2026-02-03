import type { FC } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { SalesData } from '@/types'

interface RevenueChartProps {
  data: SalesData[]
}

const formatRevenue = (v: number) =>
  v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1)}M` : `${(v / 1000).toFixed(0)}K`

const RevenueChart: FC<RevenueChartProps> = ({ data }) => (
  <div className="chart-card">
    <h3 className="chart-card__title">Выручка</h3>
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2e" />
        <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={(d) => d.slice(5)} />
        <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickFormatter={formatRevenue} />
        <Tooltip
          formatter={(v: number) => [`${v.toLocaleString('ru-RU')} ₽`, 'Выручка']}
          contentStyle={{ background: '#1e1e2e', border: '1px solid #374151', borderRadius: 8 }}
          labelStyle={{ color: '#9ca3af' }}
        />
        <Area type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={2} fill="url(#revenueGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
)

export default RevenueChart
