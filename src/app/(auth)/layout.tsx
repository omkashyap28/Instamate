import React from "react"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      {children}
    </main>
  )
}

export default Layout
