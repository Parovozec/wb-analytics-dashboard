import { create } from 'zustand'
import type { FilterState, Period } from '@/types'

interface DashboardStore extends FilterState {
  setPeriod: (period: Period) => void
  setCategory: (category: string | null) => void
  isLoading: boolean
  setLoading: (v: boolean) => void
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  period: '30d',
  category: null,
  isLoading: false,
  setPeriod: (period) => set({ period }),
  setCategory: (category) => set({ category }),
  setLoading: (isLoading) => set({ isLoading }),
}))
