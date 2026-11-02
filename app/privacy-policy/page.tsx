import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy | AI Diet Calculator",
  description:
    "How AI Diet Calculator handles your information: what the calculators do with your inputs, the analytics we use, and the third-party services involved.",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 1, 2026">
      <p>
        This policy explains what information aidietcalculator.com (AI Diet Calculator, or we) collects when you visit
        the site and how it is used. The site is operated by AiDietCalculator.com. You can reach us at{" "}
        <a href="mailto:legal@aidietcalculator.com">legal@aidietcalculator.com</a>.
      </p>

      <h2>Information you enter into the calculators</h2>
      <p>
        The calculators (BMI, BMR, calorie, macro, protein and ideal weight) and the metabolic diagnostic on the
        homepage work from details you type in, such as age, sex, height, weight, activity level and goal. The
        calculation runs in your browser to show your result. The values you enter are not sent to our servers, and we
        do not ask you to create an account.
      </p>

      <h2>Analytics</h2>
      <p>
        We use Vercel Web Analytics to understand how the site is used. It records aggregate information such as pages
        viewed, referring site, approximate location, and device and browser type. We also record a small number of
        events: when the next-step button after a result is clicked, and when one of our videos is opened. These events
        carry only the name of the calculator or video involved, never the values you enter. Vercel Web Analytics is
        designed to work without cookies and without following you across other sites.
      </p>
      <p>
        We do not currently use session-recording tools, advertising pixels or advertising networks on this site.
      </p>

      <h2>Hosting and server logs</h2>
      <p>
        The site is hosted by Vercel, which processes standard server logs (for example IP address and request details)
        to deliver the site and keep it secure.
      </p>

      <h2>Cookies</h2>
      <p>
        We do not set our own cookies to identify or track you. The third-party services described below, such as the
        video player, Google and our affiliate network, may set or read their own cookies under their own policies.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Vimeo</strong> hosts our videos. The Vimeo player loads only when you choose to open a video, and we
          request it with Vimeo&apos;s do-not-track setting enabled. When it loads, Vimeo receives standard request
          information such as your IP address and browser details, and Vimeo&apos;s privacy policy applies.
        </li>
        <li>
          <strong>Google</strong>: every page loads a script hosted by Google (gstatic.com) that supports Google&apos;s
          preferred sources feature for search results. When it loads, Google receives standard request information
          such as your IP address and browser details, and Google&apos;s privacy policy applies. Some pages also link to
          a Google preferences page, and clicking that link takes you to Google.
        </li>
        <li>
          <strong>Affiliate partners</strong>: see the next section.
        </li>
      </ul>

      <h2>Affiliate links and redirects</h2>
      <p>
        Some links on this site are affiliate links, including links to the Gluco6 offer. These links pass through a
        redirect on our domain, which forwards campaign tags to our affiliate network, ClickBank, and the product
        seller. We do not store anything in that redirect. After you click, those companies may set cookies or collect
        information to credit us for a referral, and their own privacy policies apply. If you buy through an affiliate
        link we may earn a commission at no extra cost to you. See the <a href="/about-us">About page</a> for more.
      </p>

      <h2>How we use information</h2>
      <p>
        We use analytics and log data to operate, secure and improve the site and to understand which tools and content
        are useful. We do not sell your personal information, and we do not use it to build advertising profiles.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Because we collect very little personal information, there is usually little to access or delete. Depending on
        where you live (for example the EU, the UK or California), you may have rights to request access to,
        correction of, or deletion of personal information we hold about you, and to object to certain processing. To
        make a request, email <a href="mailto:legal@aidietcalculator.com">legal@aidietcalculator.com</a>. You can also limit cookies in your browser
        settings and use privacy tools to block analytics and third-party content.
      </p>

      <h2>Health information</h2>
      <p>
        Calculator results are estimates for general information. Please do not email us medical records or sensitive
        health details. See the <a href="/about-us#disclaimer">medical disclaimer</a> for important limits on how to
        use the content on this site.
      </p>

      <h2>Children</h2>
      <p>
        This site is not directed to children under 13, and we do not knowingly collect personal information from
        them. If you believe a child has sent us personal information, contact us and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it last changed.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:legal@aidietcalculator.com">legal@aidietcalculator.com</a>.
      </p>
    </LegalPage>
  )
}
// end of file
