export interface SalesData {
  date: string
  revenue: number
  orders: number
  returns: number
}

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  stock: number
  sold: number
  rating: number
  category: string
}

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  avgOrderValue: number
  returnRate: number
  revenueGrowth: number
  ordersGrowth: number
}

export type Period = '7d' | '30d' | '90d'

export interface FilterState {
  period: Period
  category: string | null
}
