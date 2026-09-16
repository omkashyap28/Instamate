import { Button } from "@/src/components/ui/button"
import { Sparkles } from "lucide-react"

export const UpgradeButton = () => {
  // WIP: Add payment logic and loading state

  return (
    <Button
      size="lg"
      className="animate-gradient w-full rounded-lg bg-[linear-gradient(to_right,var(--grad-from),var(--grad-via),var(--grad-to))] bg-size-[200%_auto] text-white shadow-lg brightness-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/5 hover:brightness-100"
    >
      <Sparkles className="size-4" />
      <span className="text-sm font-medium">Get All-Access</span>
    </Button>
  )
}
