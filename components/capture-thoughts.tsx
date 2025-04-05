import { Mic, Upload } from "lucide-react"
import Link from "next/link"

export default function CaptureThoughts() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Capture Your Thoughts</h2>
      <div className="bg-muted/50 p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <Link href="/record" className="w-full sm:w-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-2">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium">Record Voice</span>
            </div>
          </Link>

          <Link href="/record?tab=upload" className="w-full sm:w-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Upload Audio</span>
            </div>
          </Link>

          <div className="flex-1 ml-0 sm:ml-6">
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-sm font-medium mb-2">Quick Voice Commands:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>"Add a task to call Ramesh next Friday"</li>
                <li>"Summarize my last meeting"</li>
                <li>"Remind me to finish my blog draft"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

