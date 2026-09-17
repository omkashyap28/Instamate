"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDownIcon, SparklesIcon } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/src/components/ui/sheet"
import { Separator } from "@/src/components/ui/separator"
import { NAV_LINKS } from "@/src/constants"
import { cn } from "cn"
import { useAuth } from "@clerk/nextjs"

export const MobileNavigation = () => {
  const { isSignedIn } = useAuth()
  const [openGroup, setOpenGroup] = React.useState<number | null>(null)

  const toggleGroup = (id: number) => {
    setOpenGroup((prev) => (prev === id ? null : id))
  }

  // WIP: get user current plan and show access button only if user is not on pro plan
  // WIP: get user id to generate dashboard href

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon-lg" aria-label="Open menu" />
        }
      >
        <div className="flex flex-col items-center gap-y-1.5">
          <div className="h-px w-4.5 rounded bg-foreground" />
          <div className="h-px w-4.5 rounded bg-foreground" />
        </div>
      </SheetTrigger>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="flex w-72 flex-col p-0 sm:max-w-72"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>

        <SheetHeader className="px-5 pt-6 pb-4">
          {/* WIP: add logo */}
          <div className="text-lg font-bold">InstaMate</div>
        </SheetHeader>

        <Separator className="bg-border/40" />

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV_LINKS.map(({ id, label, childrens, href }) => {
            const isOpen = openGroup === id

            if (childrens) {
              return (
                <div key={id}>
                  <button
                    onClick={() => toggleGroup(id)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {label}
                    <ChevronDownIcon
                      className={cn(
                        "size-4 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                      {childrens.map(
                        ({
                          id: childId,
                          label: childLabel,
                          description,
                          href: childHref,
                        }) => (
                          <SheetClose
                            key={childId}
                            render={
                              <Button
                                variant="ghost"
                                className="flex h-fit w-full justify-start hover:bg-muted!"
                              />
                            }
                          >
                            <Link
                              href={childHref}
                              className="flex h-fit! w-full flex-col items-start gap-0.5 py-2 text-lg"
                            >
                              <span className="leading-none font-medium">
                                {childLabel}
                              </span>
                              <span className="line-clamp-2 text-xs text-muted-foreground">
                                {description}
                              </span>
                            </Link>
                          </SheetClose>
                        )
                      )}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <SheetClose
                key={id}
                render={
                  <Button
                    variant="ghost"
                    className="flex h-fit w-full justify-start hover:bg-muted!"
                  />
                }
              >
                <Link
                  href={href as string}
                  className="flex h-fit! w-full flex-col items-start gap-0.5 py-2 text-lg"
                >
                  {label}
                </Link>
              </SheetClose>
            )
          })}
          {isSignedIn && (
            <SheetClose
              render={
                <Button
                  variant="ghost"
                  className="flex h-fit w-full justify-start hover:bg-muted!"
                />
              }
            >
              <Link
                href="/dashboard"
                className="flex h-fit! w-full flex-col items-start gap-0.5 py-2 text-lg"
              >
                Dashboard
              </Link>
            </SheetClose>
          )}
        </nav>

        <div className="flex flex-col gap-2 px-4 py-5">
          <SheetClose
            render={
              <Button
                size="lg"
                className="block! w-full bg-[linear-gradient(to_top_right,var(--grad-from),var(--grad-via),var(--grad-to))] bg-size-[200%_auto] text-white shadow-lg transition-all duration-300 hover:brightness-90"
              />
            }
            className="w-full"
          >
            <Link
              href="/pricing"
              className="flex w-full items-center justify-center gap-2"
            >
              <SparklesIcon data-icon="inline-start" />
              Get All-Access
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
