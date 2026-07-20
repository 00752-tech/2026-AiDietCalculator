import fs from 'fs';
import path from 'path';
import { generateDietProfile } from './agent';

// Define strict regulatory disclaimers for compliance
const FDA_MEDICAL_DISCLAIMER = `

---

### ⚠️ Medical Disclaimer
Statements on this website have not been evaluated by the Food and Drug Administration. The structural intelligence profiles and macro calculations provided are for informational and educational purposes only. Products or strategies mentioned are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before implementing any dietary changes or utilizing recommended protocols.`;

const FTC_AFFILIATE_DISCLAIMER = `

### 📢 Affiliate Transparency Disclosure
In full compliance with FTC guidelines, please be advised that aidietcalculator.com maintains a strategic advertising relationship with vetted health platforms. Pages within this macro intelligence index contain tracking links that dynamically generate referral commissions from verified purchases. This operational funding supports our clinical calculator engineering infrastructure at no additional cost to you.`;

async function runBatchPipeline() {
  const dataPath = path.join(process.cwd(), 'scripts', 'niches.json');
  const outputDir = path.join(process.cwd(), 'content', 'niches');
  
  // Pipeline configuration
  let failureCount = 0;
  const MAX_FAILURES = 5;
  const DELAY_MS = 500; 
  const ERROR_DELAY_MS = 5000;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Load targets
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  
  // PILOT MODE: .slice(0, 1) ensures we only process the first item.
  // When you are ready for the full batch, remove .slice(0, 1)
  // Change it to this:
const targets = JSON.parse(rawData);

  console.log(`🚀 Starting batch processing pipeline for ${targets.length} targets...`);

  for (let i = 0; i < targets.length; i++) {
    const { slug, category } = targets[i];
    const fileName = `${slug}.json`;
    const filePath = path.join(outputDir, fileName);
    const progress = (((i + 1) / targets.length) * 100).toFixed(1);

    // Idempotency check
    if (fs.existsSync(filePath)) {
      console.log(`[${i + 1}/${targets.length} | ${progress}%] Skipping: ${slug} (Exists)`);
      continue;
    }

    try {
      console.log(`[${i + 1}/${targets.length} | ${progress}%] Processing profile: ${slug}...`);
      
      const profileData = await generateDietProfile(slug, category);
      
      // Compliance Injection
      profileData.markdownBody += `${FDA_MEDICAL_DISCLAIMER}${FTC_AFFILIATE_DISCLAIMER}`;

      fs.writeFileSync(filePath, JSON.stringify(profileData, null, 2), 'utf-8');
      
      await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
      
    } catch (error) {
      failureCount++;
      console.error(`❌ Error on ${slug}. (Failures: ${failureCount}/${MAX_FAILURES}):`, error);
      
      if (failureCount >= MAX_FAILURES) {
        console.error("🚨 Critical failure threshold met. Aborting pipeline.");
        process.exit(1);
      }

      console.log(`⏳ Cooling down for ${ERROR_DELAY_MS/1000}s before next attempt...`);
      await new Promise((resolve) => setTimeout(resolve, ERROR_DELAY_MS));
      continue; 
    }
  }

  console.log('🎉 Batch pipeline run completed successfully!');
}

runBatchPipeline();