import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  alternates: { canonical: "/about-us" },
  title: "About AI Diet Calculator",
  description:
    "What AI Diet Calculator is, how the calculators work, how the site earns money through affiliate links, and important health disclaimers.",
}

export default function AboutPage() {
  return (
    <LegalPage title="About AI Diet Calculator">
      <p>
        AI Diet Calculator is a free set of nutrition and metabolism tools: BMI, BMR, calorie, macro, protein and ideal
        weight calculators, a metabolic diagnostic, and a library of educational articles. The site is operated by
        AiDietCalculator.com.
      </p>

      <h2>What the calculators do</h2>
      <p>
        Each calculator turns the numbers you enter into an estimate using widely used published formulas. Results are
        estimates. They cannot account for your medical history, body composition, medications or individual
        metabolism, and real needs vary from person to person.
      </p>

      <h2>How this site is funded</h2>
      <p>
        This site contains affiliate links. If you click a link and buy a product, we may earn a commission from the
        seller at no extra cost to you. This includes links to products sold through the ClickBank marketplace, such as
        Gluco6. The commission is the reason those links appear, so please read the seller&apos;s own information and
        decide for yourself whether a product is right for you.
      </p>

      <h2 id="disclaimer">Medical disclaimer</h2>
      <p>
        The tools and articles on this site are for general information and education only. They are not medical advice
        and do not diagnose, treat, cure or prevent any condition. Talk with a qualified healthcare professional before
        changing your diet, starting an exercise program or taking any supplement, especially if you are pregnant or
        nursing, have a medical condition, or take medication. Never ignore or delay professional advice because of
        something you read here.
      </p>
      <p>
        Statements about supplements on this site have not been evaluated by the Food and Drug Administration. Products
        mentioned are not intended to diagnose, treat, cure or prevent any disease.
      </p>

      <h2>Your privacy</h2>
      <p>
        The calculators run in your browser and the values you enter are not sent to our servers. Read the{" "}
        <a href="/privacy-policy">privacy policy</a> for details.
      </p>

      <h2>Contact</h2>
      <p>
        Questions, corrections or feedback: <a href="mailto:legal@aidietcalculator.com">legal@aidietcalculator.com</a>.
      </p>
    </LegalPage>
  )
}
// end of file
