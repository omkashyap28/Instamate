type LinkProps = {
  id: number
  label: string
  href?: string
  childrens?: ChildrenProps[]
}

type ChildrenProps = {
  id: number
  label: string
  description: string
  href: string
  icon?: React.ReactNode
}

export const NAV_LINKS: LinkProps[] = [
  {
    id: 1,
    label: "Getting Started",
    href: "/getting-started",
  },
  {
    id: 2,
    label: "Products",
    childrens: [
      {
        id: 1,
        label: "Instagram",
        description: "Automate your instagram presence",
        href: "/products/instagram",
      },
      {
        id: 2,
        label: "Messenger",
        description: "Automate your messenger presence",
        href: "/products/messenger",
      },
      {
        id: 3,
        label: "WhatsApp",
        description: "Automate your whatsapp presence",
        href: "/products/whatsapp",
      },
    ],
  },
  {
    id: 3,
    label: "Resources",
    childrens: [
      {
        id: 1,
        label: "Blog",
        description: "Articles and insights",
        href: "/blog",
      },
      {
        id: 2,
        label: "About",
        description: "Learn more about us",
        href: "/about",
      },
      {
        id: 3,
        label: "Contact",
        description: "Get in touch with us",
        href: "/contact",
      },
    ],
  },
  {
    id: 4,
    label: "Pricing",
    href: "#pricing",
  },
]
