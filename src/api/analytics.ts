import type { SalesData, Product, DashboardStats, Period } from '@/types'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

function generateSalesData(days: number): SalesData[] {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (days - i))
    const base = 80000 + Math.random() * 40000
    return {
      date: date.toISOString().split('T')[0],
      revenue: Math.round(base),
      orders: Math.round(base / 1200),
      returns: Math.round((base / 1200) * 0.04),
    }
  })
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Игровая валюта Gold x1000', sku: 'GLD-1000', price: 299, stock: 9999, sold: 4812, rating: 4.8, category: 'Игры' },
  { id: '2', name: 'Подписка Premium 30 дней', sku: 'PREM-30', price: 599, stock: 9999, sold: 2341, rating: 4.9, category: 'Подписки' },
  { id: '3', name: 'Донат-пакет Starter', sku: 'DON-START', price: 149, stock: 9999, sold: 7203, rating: 4.7, category: 'Игры' },
  { id: '4', name: 'Steam Gift Card 500₽', sku: 'STM-500', price: 530, stock: 500, sold: 1893, rating: 4.6, category: 'Gift Cards' },
  { id: '5', name: 'Xbox Game Pass Ultimate', sku: 'XBX-GPU-1', price: 499, stock: 9999, sold: 3102, rating: 4.9, category: 'Подписки' },
]

export async function fetchSalesData(period: Period): Promise<SalesData[]> {
  await delay(300)
  const days = period === '7d' ? 7 : period === '30d' ? 30 : 90
  return generateSalesData(days)
}

export async function fetchProducts(): Promise<Product[]> {
  await delay(200)
  return PRODUCTS
}

export async function fetchStats(period: Period): Promise<DashboardStats> {
  await delay(150)
  const multiplier = period === '7d' ? 1 : period === '30d' ? 4.2 : 12.8
  return {
    totalRevenue: Math.round(2_340_000 * multiplier * (0.9 + Math.random() * 0.2)),
    totalOrders: Math.round(1950 * multiplier),
    avgOrderValue: 1200 + Math.round(Math.random() * 200),
    returnRate: 3.8 + Math.random() * 0.5,
    revenueGrowth: 12 + Math.random() * 8,
    ordersGrowth: 8 + Math.random() * 6,
  }
}
