"use client"

import Link from "next/link"
import { Button } from "../../ui/button"
import { Navigation } from "./navigation"
import { MobileNavigation } from "./mobile-navigation"
import { useAuth, UserButton } from "@clerk/nextjs"
import { ThemeButton } from "../theme"
import { Sparkles } from "lucide-react"
import { Separator } from "../../ui/separator"

export const Navbar = () => {
  const { isSignedIn } = useAuth()

  // WIP: get user current plan and show access button only if user is not on pro plan
  // WIP: get user id to generate dashboard href

  return (
    <nav className="sticky inset-x-0 top-0 mx-auto flex h-16 w-full items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
          {/* WIP: add logo */}
          <div className="text-lg font-bold">InstaMate</div>
        </div>
        <div className="hidden lg:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center gap-0.5 sm:gap-2">
        <ThemeButton />
        <Separator orientation="vertical" className="mx-1 sm:mx-3" />
        {isSignedIn && (
          <>
            <Link
              className="hidden lg:block"
              href={"/dashboard"}
              title="Dashboard"
            >
              <Button variant="secondary" size="lg">
                Dashboard
              </Button>
            </Link>
          </>
        )}
        {!isSignedIn && (
          <Link href="/sign-in" title="Sign In">
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </Link>
        )}
        <Link
          className="hidden sm:block"
          href="/pricing"
          title="Get All-Access"
        >
          <Button
            size="lg"
            className="animate-gradient bg-[linear-gradient(to_top_right,var(--grad-from),var(--grad-via),var(--grad-to))] bg-size-[200%_auto] px-6 text-white shadow-lg shadow-purple-400/10 transition-all duration-300 hover:brightness-90"
          >
            <Sparkles />
            Get All-Access
          </Button>
        </Link>
        {isSignedIn && (
          <div className="ml-3 flex items-center">
            <UserButton />
          </div>
        )}
      </div>
    </nav>
  )
}
