import { LoadingIndicator } from "@/src/components/layout/loading-indicator"
import { Navbar } from "@/src/components/layout/navbar"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <LoadingIndicator />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
