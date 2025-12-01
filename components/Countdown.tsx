'use client'
import { useState, useEffect } from 'react'

export default function Countdown() {
  const [left, setLeft] = useState(10000)

  useEffect(() => {
    fetch('/api/count')
      .then(r => r.json())
      .then(data => setLeft(data.remaining))
  }, [])

  return (
    <div className="text-8xl font-bold tabular-nums">
      {left.toLocaleString()}
    </div>
  )
}
