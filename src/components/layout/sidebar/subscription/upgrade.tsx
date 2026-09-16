type Props = {
  children: React.ReactNode
  planType: "FREE" | "PRO"
}

export const Upgrade = ({ children, planType }: Props) =>
  planType === "FREE" ? children : null
