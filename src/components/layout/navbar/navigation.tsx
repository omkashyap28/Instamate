"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu"
import { NAV_LINKS } from "@/src/constants"

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {NAV_LINKS.map(({ id, label, childrens, href }) => {
          return (
            <NavigationMenuItem key={id}>
              {childrens ? (
                <>
                  <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-fit min-w-78">
                      {childrens.map(({ id, label, description, href }) => (
                        <ListItem key={id} label={label} href={href}>
                          {description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink render={<Link href={href || ""} />}>
                  {label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  label,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  label: string
  href: string
  disabled?: boolean
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{label}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}
