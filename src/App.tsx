import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"

export function App() {
  return (
    <div>
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-3xl">upload.ai</h1>
        <div className="flex items-center gap-4">
          <span>Feito com muito 💜 pela RocketSeat.</span>
          <Separator orientation="vertical" />
          <Button>Github</Button>
        </div>
      </div>
    </div>
  )
}
