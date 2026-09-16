import { usePathname } from "next/navigation"

type UseActivePath = {
  pathname: string
  isActive: boolean
}

/**
 * @param path String to check path is is active path or not
 */
export function useActivePath(path: string): UseActivePath {
  const pathname = usePathname()

  let isActive;

  if (!path || path.trim().length === 0) {
    isActive = false
  }

  isActive = pathname.includes(path)

  return { pathname, isActive }
}
