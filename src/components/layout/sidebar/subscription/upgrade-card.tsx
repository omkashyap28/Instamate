import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/card"
import { UpgradeButton } from "./upgrade-button"

export const UpgradeCard = () => {
  return (
    <Card className="rounded-2xl bg-background pt-0!">
      <CardHeader className="px-4! pt-4">
        <CardTitle>
          Upgrade to get{" "}
          <span
            className="bg-[linear-gradient(to_right,var(--grad-from),var(--grad-via),var(--grad-to))] bg-size-[200%_auto] bg-clip-text font-bold text-transparent"
          >
            All-Access
          </span>
        </CardTitle>
        <CardDescription>
          Upgrade your plan to access all feature, AI agent and more without
          limits.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4!">
        <UpgradeButton />
      </CardContent>
    </Card>
  )
}
