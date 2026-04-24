import { Category, PROMPT_OPTIONS, GENDER_FEMALE_ONLY, GENDER_MALE_ONLY, VIBE_SETS } from './data';

export type PromptSelections = Partial<Record<Category, string[]>>;

export type GenderFilter = 'all' | 'male' | 'female';

export function getFilteredOptions(category: Category, genderFilter: GenderFilter): string[] {
  const options = PROMPT_OPTIONS[category] || [];
  return options.filter(option => {
    if (genderFilter === 'male' && GENDER_FEMALE_ONLY.includes(option)) return false;
    if (genderFilter === 'female' && GENDER_MALE_ONLY.includes(option)) return false;
    return true;
  });
}

export function getRecommendedOptions(selections: PromptSelections): Set<string> {
  const activeOptions = Object.values(selections).flat().filter(Boolean) as string[];
  if (activeOptions.length === 0) return new Set();

  const activeVibes = new Set<string>();
  
  // Find which vibes the current selections trigger
  for (const option of activeOptions) {
    for (const [vibeName, items] of Object.entries(VIBE_SETS)) {
      if (items.includes(option)) {
        activeVibes.add(vibeName);
      }
    }
  }

  // Collect all recommended items
  const recommendations = new Set<string>();
  for (const vibe of activeVibes) {
    for (const item of VIBE_SETS[vibe]) {
      recommendations.add(item);
    }
  }

  return recommendations;
}

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function generatePromptText(selections: PromptSelections, isManual: boolean = false, manualText: string = ""): string {
  if (isManual) return manualText;

  const parts: string[] = [];
  
  // Base Identity
  const identity = selections.identity?.[0];
  if (identity) {
    const startsWithVowel = /^[aeiou]/i.test(identity);
    parts.push(`Imagine me as ${startsWithVowel ? 'an' : 'a'} ${identity}`);
  } else {
    // If no identity, still start with the core phrase if other things exist
    const hasAnyKeys = Object.keys(selections).some(k => selections[k as Category]?.length && k !== 'identity');
    if (hasAnyKeys) {
        parts.push(`Imagine me`);
    } else {
        return ""; // Empty string if absolutely nothing is selected
    }
  }

  // Outfit
  const outfit = selections.outfit?.join(', ');
  if (outfit) parts.push(`wearing ${outfit}`);

  // Setting / Context
  const setting = selections.setting?.join(', ');
  const timeOfDay = selections.timeOfDay?.[0];
  if (setting) {
    if (timeOfDay) {
      parts.push(`in a ${setting} at ${timeOfDay}`);
    } else {
      parts.push(`in a ${setting}`);
    }
  } else if (timeOfDay) {
    parts.push(`at ${timeOfDay}`);
  }

  // Details / Features / Action
  const details = selections.details?.join(', ');
  if (details) parts.push(`with ${details}`);

  // Base Action / Pose
  const pose = selections.pose?.join(', ');
  if (pose) parts.push(pose);

  // Props
  const props = selections.props?.join(', ');
  if (props) parts.push(`with ${props}`);

  // Collect the rest of the descriptive modifiers
  const modifiers: string[] = [];
  if (selections.mood?.length) modifiers.push(...selections.mood);
  if (selections.era?.length) modifiers.push(...selections.era.map(e => `${e} era`));
  if (selections.lighting?.length) modifiers.push(...selections.lighting);
  if (selections.style?.length) modifiers.push(...selections.style);
  if (selections.cameraAngle?.length) modifiers.push(...selections.cameraAngle);
  if (selections.colorPalette?.length) modifiers.push(...selections.colorPalette);
  if (selections.quality?.length) modifiers.push(...selections.quality);

  if (modifiers.length > 0) {
      return parts.join(', ') + '. ' + modifiers.join(', ') + '.';
  }

  return parts.join(', ') + (parts.length > 0 ? '.' : '');
}

export function generateAnimationPrompt(selections: PromptSelections): string {
  const motions: string[] = ["Gentle breathing, slow natural blinking."];
  
  const settingStr = (selections.setting || []).join(' ').toLowerCase();
  const propsStr = (selections.props || []).join(' ').toLowerCase();
  const lightingStr = (selections.lighting || []).join(' ').toLowerCase();
  const outfitStr = (selections.outfit || []).join(' ').toLowerCase();
  const detailsStr = (selections.details || []).join(' ').toLowerCase();
  const identityStr = (selections.identity || []).join(' ').toLowerCase();

  // Settings/Environment
  if (settingStr.includes('rain') || settingStr.includes('storm') || settingStr.includes('slicked') || settingStr.includes('monsoon')) motions.push("Rain falling in the background.");
  if (settingStr.includes('neon') || settingStr.includes('cyberpunk') || settingStr.includes('tokyo') || settingStr.includes('cityscape')) motions.push("Neon lights flickering gently, subtle city movement.");
  if (settingStr.includes('forest') || settingStr.includes('garden') || settingStr.includes('tree') || settingStr.includes('jungle') || settingStr.includes('nature')) motions.push("Leaves rustling softly in the background.");
  if (settingStr.includes('ocean') || settingStr.includes('beach') || settingStr.includes('water') || settingStr.includes('reef') || settingStr.includes('river')) motions.push("Water shimmering and rippling softly.");
  if (settingStr.includes('snow') || settingStr.includes('blizzard') || settingStr.includes('winter')) motions.push("Snowflakes drifting softly through the air.");
  if (settingStr.includes('fire') || settingStr.includes('candle') || lightingStr.includes('fire') || settingStr.includes('torch')) motions.push("Flames flickering softly casting dynamic shadows.");
  if (settingStr.includes('space') || settingStr.includes('galaxy') || settingStr.includes('stars') || settingStr.includes('nebula') || settingStr.includes('planet')) motions.push("Stars twinkling slowly in the distant background, cosmic particles drifting.");
  if (settingStr.includes('cafe') || settingStr.includes('restaurant') || settingStr.includes('market')) motions.push("Subtle background activity and ambient movement.");
  if (settingStr.includes('graveyard') || settingStr.includes('mansion') || settingStr.includes('gothic') || settingStr.includes('spooky')) motions.push("Eerie shadows shifting, subtle fog rolling.");
  
  // Props
  if (propsStr.includes('coffee') || propsStr.includes('tea') || propsStr.includes('steaming') || propsStr.includes('chai') || propsStr.includes('cup')) motions.push("Steam gently rising from the cup.");
  if (propsStr.includes('smoke') || propsStr.includes('cigar') || propsStr.includes('incense')) motions.push("Smoke drifting slowly upwards.");
  if (propsStr.includes('sword') || propsStr.includes('staff') || propsStr.includes('crystal') || propsStr.includes('magic') || propsStr.includes('rune') || propsStr.includes('wand')) motions.push("Soft magical glow pulsing from the prop.");
  if (propsStr.includes('umbrella')) motions.push("Rain drops softly hitting the umbrella.");
  if (propsStr.includes('hologram') || propsStr.includes('screen') || propsStr.includes('cybernetic')) motions.push("Holographic elements glitching and glowing subtly.");
  if (propsStr.includes('gear') || propsStr.includes('steampunk') || propsStr.includes('clockwork')) motions.push("Brass gears slowly turning and clicking.");
  if (propsStr.includes('lantern') || propsStr.includes('diya') || propsStr.includes('lamp')) motions.push("Warm light flickering from the lamp.");

  // Outfit
  if (outfitStr.includes('dress') || outfitStr.includes('robe') || outfitStr.includes('cloak') || outfitStr.includes('sari') || outfitStr.includes('tutu') || outfitStr.includes('skirt') || outfitStr.includes('gown')) motions.push("Fabric swaying slightly in a subtle breeze.");
  if (outfitStr.includes('armor') || outfitStr.includes('knight') || outfitStr.includes('metal')) motions.push("Subtle metallic glints from the armor moving.");

  // Hair/Details
  if (detailsStr.includes('hair') || detailsStr.includes('bun') || identityStr.includes('flapper') || detailsStr.includes('wavy') || outfitStr.includes('scarf')) {
      motions.push("Hair gently moving in a soft breeze.");
  }
  if (detailsStr.includes('wings') || propsStr.includes('wings')) motions.push("Wings fluttering ever so slightly.");

  // Lighting
  if (lightingStr.includes('flash') || lightingStr.includes('strobe') || lightingStr.includes('lightning')) motions.push("Subtle light flashes illuminating the scene.");
  if (lightingStr.includes('fog') || lightingStr.includes('mist')) motions.push("Thick fog rolling slowly across the background.");
  if (lightingStr.includes('sunlight') || lightingStr.includes('golden') || lightingStr.includes('beam')) motions.push("Dust motes dancing in the sunbeams.");

  // Base motion fallback if no triggers hit
  if (motions.length === 1 && (settingStr.length > 0 || lightingStr.length > 0)) {
      motions.push("Subtle atmospheric motion in the background.");
  }

  const guardrail = "Static camera, no panning. Subject remains perfectly still. Keep facial features completely stable with no distortion or morphing. Loop seamlessly.";

  const motionText = Array.from(new Set(motions)).join(' ');
  return `${motionText} ${guardrail}`;
}

export function generateSocialCaption(selections: PromptSelections): string {
  const identities = selections.identity || [];
  const settings = selections.setting || [];
  const moods = selections.mood || [];
  const outfits = selections.outfit || [];
  const styles = selections.style || [];
  const lighting = selections.lighting || [];

  // Helper to grab a clean joined string of array items
  const joinList = (list: string[]) => {
    if (list.length === 0) return "";
    if (list.length === 1) return list[0].toLowerCase();
    return list.slice(0, -1).join(", ").toLowerCase() + " and " + list[list.length - 1].toLowerCase();
  };

  let captionParts: string[] = [];

  // 1. Hook (Identity + Mood)
  if (identities.length > 0) {
    const idStr = joinList(identities);
    if (moods.length > 0) {
      captionParts.push(`Feeling ${joinList(moods)} while channeling my inner ${idStr}. ✨`);
    } else {
      captionParts.push(`Embracing the ${idStr} aesthetic today. 💫`);
    }
  } else if (moods.length > 0) {
    captionParts.push(`Currently living for these ${joinList(moods)} vibes. ✨`);
  } else {
    captionParts.push(`Loving this new look! ✨ What do you think?`);
  }

  // 2. Context (Outfit + Setting)
  // Use "Outfit check:" instead of "wearing" to avoid grammar issues with missing "a" or "an"
  if (outfits.length > 0) {
    captionParts.push(`Outfit check: obsessing over this ${joinList(outfits)} look. 👗`);
  }
  if (settings.length > 0) {
    captionParts.push(`Taking in the vibes from the ${joinList(settings)}.`);
  }

  // 3. Style / Lighting
  // Note: We skip 'details' completely in the caption sentences because anatomical or 
  // posing instructions (like "hands in pockets" or "athletic silhouette") sound very weird when spoken out loud.
  if (lighting.length > 0) {
    captionParts.push(`Caught in that perfect ${joinList(lighting)} lighting. 🔆`);
  }
  if (styles.length > 0) {
    captionParts.push(`Love the ${joinList(styles)} aesthetic of this shot! 📸`);
  }

  // 4. CTA
  if (captionParts.length > 1) { 
    const ctas = [
      "What do you guys think of this aesthetic? Drop a comment below! 👇",
      "Rate this vibe from 1-10! 🎯",
      "Which part of this look is your favorite? ✨"
    ];
    captionParts.push("\n" + ctas[Math.floor(Math.random() * ctas.length)]);
  }

  // 5. Build Hashtags: Instead of making entire 6-word phrases into one hashtag, 
  // we break everything down into Individual Keywords.
  const allWordsString = Object.values(selections).flat().join(" ");
  const rawWords = allWordsString.split(/[\s-]+/);
  
  // Words that make terrible hashtags
  const stopWords = new Set([
    "in", "a", "an", "the", "with", "and", "of", "to", "at", "on", "for", 
    "looking", "directly", "viewer", "hands", "pockets", "well", "proportioned", 
    "ultra", "medium", "shot", "wearing", "style", "silhouette"
  ]);
  
  let validKeywords = rawWords
    .map(w => w.replace(/[^a-zA-Z]/g, "")) // Keep only letters
    .filter(w => w.length > 3 && !stopWords.has(w.toLowerCase())); // Strip short words & stop words

  // Deduplicate our keyword pool
  validKeywords = Array.from(new Set(validKeywords));

  // Capitalize and format into hashtags, limit to 3 descriptive tags (total 5 max)
  let hashtags = validKeywords.slice(0, 3).map(w => "#" + w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
  
  // Add standard baseline tags safely
  hashtags.push("#MetaAI", "#ImagineMe");

  const uniqueTags = Array.from(new Set(hashtags));
  // Ensure we do not exceed 5 total
  const finalTags = uniqueTags.slice(0, 5);
  
  const finalCaption = captionParts.join(" ") + "\n\n" + finalTags.join(" ");
  return finalCaption.trim();
}

export interface ValidationWarning {
  type: 'warning' | 'error' | 'success';
  message: string;
}

export function validatePrompt(selections: PromptSelections, promptText: string): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];
  const isEmpty = !promptText || promptText.trim().length === 0;

  if (isEmpty) {
    return [{ type: 'error', message: 'Prompt is empty. Start by picking an Identity or Setting.' }];
  }

  if (!selections.identity || selections.identity.length === 0) {
    warnings.push({ type: 'error', message: 'Missing Identity. Meta AI Imagine me requires a clear subject.' });
  }

  if (promptText.length > 500) {
    warnings.push({ type: 'warning', message: 'Prompt is very long. Meta AI might drop tokens after 500 characters.' });
  }

  if (selections.cameraAngle?.some(a => ['full-body', 'wide shot', 'top-down'].includes(a))) {
    warnings.push({ type: 'warning', message: 'Distance Warning: Framing from too far away can distort facial features in "Imagine me". Consider "medium shot" or "close-up".' });
  }

  if (selections.style && selections.style.length > 2) {
    warnings.push({ type: 'warning', message: 'Too many styles selected. Combining more than 2 styles might confuse the generator.' });
  }

  // Conflict check (simple heuristic)
  if (selections.setting?.includes('outer space') && selections.outfit?.includes('beachwear')) {
     warnings.push({ type: 'warning', message: 'Beachwear in outer space? The AI might struggle with this abstract concept.' });
  }

  if (!selections.setting && !selections.outfit) {
     // Not an error, but a suggestion
     warnings.push({ type: 'warning', message: 'Consider adding a Setting or Outfit for more concrete context.' });
  }

  if (warnings.length === 0) {
    warnings.push({ type: 'success', message: 'Looks good! High chance of a great generation.' });
  }

  return warnings;
}

// Random picker helper
export function pickRandom<T>(array: T[], count: number = 1): T[] {
  if (!array || array.length === 0) return [];
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function generateSurpriseMeSelections(genderFilter: GenderFilter = 'all'): PromptSelections {
  const selections: PromptSelections = {};
  
  // Pick a random Vibe Theme
  const vibeNames = Object.keys(VIBE_SETS);
  const chosenVibe = pickRandom(vibeNames)[0];
  const vibeTerms = VIBE_SETS[chosenVibe];

  // Helper to filter by Gender AND Vibe
  const getVibeOptions = (category: Category) => {
    const genderFiltered = getFilteredOptions(category, genderFilter);
    const vibeFiltered = genderFiltered.filter(opt => vibeTerms.includes(opt));
    
    // If this specific vibe doesn't have terms for this category (e.g. no specific "cyberpunk" camera angle),
    // we just fallback safely to the purely gender-filtered generic list
    return vibeFiltered.length > 0 ? vibeFiltered : genderFiltered;
  };
  
  // Always pick an identity strongly tied to the vibe
  selections.identity = pickRandom(getVibeOptions('identity'));
  
  // 70% chance to pick setting
  if (Math.random() > 0.3) selections.setting = pickRandom(getVibeOptions('setting'));
  
  // 50% chance for others to keep it organic
  if (Math.random() > 0.5) selections.outfit = pickRandom(getVibeOptions('outfit'));
  if (Math.random() > 0.5) selections.lighting = pickRandom(getVibeOptions('lighting'));
  if (Math.random() > 0.5) selections.style = pickRandom(getVibeOptions('style'));
  
  // Add 1-2 random modifiers from remaining to sprinkle spice
  if (Math.random() > 0.7) selections.mood = pickRandom(getVibeOptions('mood'));
  if (Math.random() > 0.8) selections.cameraAngle = pickRandom(getVibeOptions('cameraAngle'));

  return selections;
}

export function exportPromptToFile(prompt: string, type: 'txt' | 'json') {
  const content = type === 'json' ? JSON.stringify({ prompt, generatedAt: new Date().toISOString() }, null, 2) : prompt;
  const blob = new Blob([content], { type: type === 'json' ? 'application/json' : 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `meta-ai-prompt.${type}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
