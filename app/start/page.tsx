import type { Metadata } from "next"
import { MicroQuiz } from "@/components/landing/micro-quiz"

export const metadata: Metadata = {
  title: "Metabolic Assessment | AI Diet Calculator",
  description: "Take the 30-second metabolic assessment to discover your body's optimal caloric threshold and targeted fat-loss protocol.",
}

export default function StartQuizPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
            Free Metabolic Assessment
          </h1>
          <p className="text-base text-secondary">
            Answer 3 quick questions to unlock your mathematical caloric threshold and customized metabolic protocol.
          </p>
        </div>
        <MicroQuiz />
      </div>
    </main>
  )
}
