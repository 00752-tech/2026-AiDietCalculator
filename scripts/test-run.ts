import { generateDietProfile } from './agent';

const FDA_MEDICAL_DISCLAIMER = `

---

### ⚠️ Medical Disclaimer
Statements on this website have not been evaluated by the Food and Drug Administration. The structural intelligence profiles and macro calculations provided are for informational and educational purposes only. Products or strategies mentioned are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before implementing any dietary changes or utilizing recommended protocols.`;

const FTC_AFFILIATE_DISCLOSURE = `

### 📢 Affiliate Transparency Disclosure
In full compliance with FTC guidelines, please be advised that aidietcalculator.com maintains a strategic advertising relationship with vetted health platforms. Pages within this macro intelligence index contain tracking links that dynamically generate referral commissions from verified purchases. This operational funding supports our clinical calculator engineering infrastructure at no additional cost to you.`;

async function runSmokeTest() {
  console.log('🧪 Starting single-page programmatic smoke test...');
  const testSlug = 'mifflin-st-jeor-bmr-calculator-slow-metabolism';
  const testCategory = 'metabolic-diagnostic-profiles';

  try {
    console.log(`📡 Sending test generation request for slug: "${testSlug}"...`);
    const profileData = await generateDietProfile(testSlug, testCategory);
    
    // Append regulatory safety overrides exactly like the full pipeline execution
    profileData.markdownBody += `${FDA_MEDICAL_DISCLAIMER}${FTC_AFFILIATE_DISCLOSURE}`;

    console.log('\n✅ Smoke Test Successful! Fully Assembled Payload Object:\n');
    console.log(JSON.stringify(profileData, null, 2));
  } catch (error) {
    console.error('\n❌ Smoke Test Failed. Verify your API key, environment context, or model configuration:', error);
  }
}

runSmokeTest();
