import { auth } from "@clerk/nextjs/server"

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const {isAuthenticated, redirectToSignIn} = await auth()

  if (!isAuthenticated){
    redirectToSignIn()
  }

  return children
}

export default Layout