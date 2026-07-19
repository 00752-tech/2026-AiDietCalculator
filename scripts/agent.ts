import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai'; // Or your preferred provider framework (e.g., cerebras, anthropic)
import { z } from 'zod';

// Define type-safe schema matching your frontend data consumption
export const NicheProfileSchema = z.object({
  title: z.string().describe('SEO Optimized title tag ending with | Clinical Metabolic Profile & Diet Strategy'),
  description: z.string().describe('High-CTR meta description optimized for AI answer engine snippet ingestion.'),
  category: z.enum(['macro-ratio-matrices', 'metabolic-diagnostic-profiles', 'microbiome-metabolism-bridges']),
  markdownBody: z.string().describe('The complete authority text profile written in raw semantic markdown headings (#, ##, ###).')
});

export type NicheProfile = z.infer<typeof NicheProfileSchema>;

/**
 * Generates an authoritative metabolic or macro intelligence profile using clinical nutritional guidelines
 * and bridges the context into the gut-microbiome weight loss framework.
 */
export async function generateDietProfile(slug: string, category: string): Promise<NicheProfile> {
  // Convert slug back to human readable phrase for the AI prompt
  const profileName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const systemPrompt = `You are an elite clinical nutritionist, metabolic data architect, and direct-response health copywriter specializing in the Mifflin-St Jeor equation and gut-microbiome optimization.
  
Your goal is to generate a comprehensive, deeply authoritative structural intelligence profile for the metabolic niche: "${profileName}".

Follow this strict architectural outline for the "markdownBody" field:
1. # Niche Profile: [Exact Profile Name]
2. ## Structural Intelligence & Clinical Strategy
   - Provide highly technical, specific breakdowns of how this profile functions metabolically. Use data-driven analysis matching the Mifflin-St Jeor philosophy.
3. ### Ready to Scale Your Metabolism?
   - Write a high-converting direct-response bridge (inspired by Craig Clemens and Jon Benson architectures). Explain that traditional caloric tracking and macro math fail if the hidden root cause—a bacterial imbalance in the gut microbiome—is left unaddressed.
   - Mention that clinical studies and real-world breakthroughs (like Meghan See's legendary 240-lb transformation featured on major talk shows) prove that rebalancing lean bacteria strains is the key to firing up a sluggish metabolism, crushing cravings, and stopping stubborn fat storage.
   - Note: Do NOT output the literal affiliate links here; the frontend layout wrapper will handle dynamic button link injection natively.
4. ## Targeted Monetization Framework
   - Outline a strategic 4-phase implementation plan for individuals matching this profile to optimize their macronutrient matrices and integrate gut microflora protocols.
5. ## Transparency & Disclaimer Statement
   - Explicitly include standard compliance text stating that aidietcalculator.com maintains affiliate relationships with vetted platforms and may receive referral compensation, ensuring complete operational transparency.

Maintain an authoritative, scientific, yet deeply persuasive direct-response tone throughout. Do not use conversational filler or meta-commentary.`;

  const { object } = await generateObject({
    model: openai('gpt-4o-mini'), // Calibrate to your workspace model choice (e.g., gemma-4-31b via your configured provider)
    schema: NicheProfileSchema,
    system: systemPrompt,
    prompt: `Generate the complete clinical data profile for the target slug: ${slug} under the operational category: ${category}.`,
    temperature: 0.4,
  });

  return object;
}
