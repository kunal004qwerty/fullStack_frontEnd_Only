'use client' // 👈 MUST be at the top!

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/redux/slices/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
