import fs from 'fs';
import path from 'path';
import { generateDietProfile } from './agent';

// Define strict regulatory disclaimers for compliance
const FDA_MEDICAL_DISCLAIMER = `

---

### ⚠️ Medical Disclaimer
Statements on this website have not been evaluated by the Food and Drug Administration. The structural intelligence profiles and macro calculations provided are for informational and educational purposes only. Products or strategies mentioned are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before implementing any dietary changes or utilizing recommended protocols.`;

const FTC_AFFILIATE_DISCLOSURE = `

### 📢 Affiliate Transparency Disclosure
In full compliance with FTC guidelines, please be advised that aidietcalculator.com maintains a strategic advertising relationship with vetted health platforms. Pages within this macro intelligence index contain tracking links that dynamically generate referral commissions from verified purchases. This operational funding supports our clinical calculator engineering infrastructure at no additional cost to you.`;

async function runBatchPipeline() {
  const dataPath = path.join(process.cwd(), 'scripts', 'niches.json');
  const outputDir = path.join(process.cwd(), 'content', 'niches');

  // Ensure output directory exists before writing files
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Load the 30 base-seed target mappings
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const targets = JSON.parse(rawData);

  console.log(`🚀 Starting batch processing pipeline for ${targets.length} targets...`);

  for (let i = 0; i < targets.length; i++) {
    const { slug, category } = targets[i];
    const fileName = `${slug}.json`;
    const filePath = path.join(outputDir, fileName);

    // Skip if profile was already built in a previous run (idempotency safety check)
    if (fs.existsSync(filePath)) {
      console.log(`[${i + 1}/${targets.length}] Skipping: ${slug} (Already exists)`);
      continue;
    }

    try {
      console.log(`[${i + 1}/${targets.length}] Processing profile: ${slug}...`);
      
      // Execute the AI generation matrix
      const profileData = await generateDietProfile(slug, category);

      // Append absolute legal protection blocks to the markdown stream
      profileData.markdownBody += `${FDA_MEDICAL_DISCLAIMER}${FTC_AFFILIATE_DISCLOSURE}`;

      // Write type-safe JSON structure to the dynamic page ingestion target
      fs.writeFileSync(filePath, JSON.stringify(profileData, null, 2), 'utf-8');
      console.log(`✅ Successfully deployed asset layout for: ${fileName}`);

      // Brief pause to stabilize network throughput and respect API ceilings
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Execution failed for target profile ${slug}:`, error);
      console.log('Halting pipeline to maintain environment status.');
      process.exit(1);
    }
  }

  console.log('🎉 Batch pipeline run completed successfully with complete compliance overlays!');
}

runBatchPipeline();
