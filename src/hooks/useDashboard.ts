import { useEffect, useState } from 'react'
import { fetchSalesData, fetchProducts, fetchStats } from '@/api/analytics'
import { useDashboardStore } from '@/store/dashboardStore'
import type { SalesData, Product, DashboardStats } from '@/types'

interface DashboardData {
  sales: SalesData[]
  products: Product[]
  stats: DashboardStats | null
  error: string | null
}

export function useDashboard(): DashboardData {
  const { period, setLoading } = useDashboardStore()
  const [data, setData] = useState<DashboardData>({
    sales: [],
    products: [],
    stats: null,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    setLoading(true)

    Promise.all([fetchSalesData(period), fetchProducts(), fetchStats(period)])
      .then(([sales, products, stats]) => {
        if (!cancelled) setData({ sales, products, stats, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setData((prev) => ({ ...prev, error: err.message }))
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [period, setLoading])

  return data
}
