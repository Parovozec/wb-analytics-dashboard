import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion'
import type { FC } from 'react'

interface AnimatedCounterProps {
  value: number
  format?: (n: number) => string
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ value, format }) => {
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 60, damping: 18 })
  const displayed = useTransform(spring, (n) => (format ? format(n) : String(Math.round(n))))
  const prevValue = useRef(0)

  useEffect(() => {
    motionValue.set(prevValue.current)
    motionValue.set(value)
    prevValue.current = value
  }, [value, motionValue])

  return <motion.span>{displayed}</motion.span>
}

export default AnimatedCounter
