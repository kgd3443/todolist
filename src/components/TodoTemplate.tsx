import React from 'react'

export default function TodoTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      {children}
    </div>
  )
}
