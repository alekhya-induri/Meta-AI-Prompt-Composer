import { Category, PROMPT_OPTIONS } from './data';

export type PromptSelections = Partial<Record<Category, string[]>>;

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

  // Details / Features
  const details = selections.details?.join(', ');
  if (details) parts.push(details);

  // Outfit
  const outfit = selections.outfit?.join(' and ');
  if (outfit) parts.push(`wearing ${outfit}`);

  // Base Action / Pose
  const pose = selections.pose?.join(' and ');
  if (pose) parts.push(pose);

  // Setting / Context
  const setting = selections.setting?.join(' and ');
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

  // Props
  const props = selections.props?.join(' and ');
  if (props) parts.push(`with a ${props}`);

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
      return parts.join(', ') + ', ' + modifiers.join(', ') + '.';
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
  if (settingStr.includes('rain') || settingStr.includes('storm') || settingStr.includes('slicked')) motions.push("Rain falling in the background.");
  if (settingStr.includes('neon') || settingStr.includes('cyberpunk') || settingStr.includes('tokyo crosswalk')) motions.push("Neon lights flickering gently.");
  if (settingStr.includes('forest') || settingStr.includes('garden') || settingStr.includes('tree') || settingStr.includes('jungle')) motions.push("Leaves rustling softly in the background.");
  if (settingStr.includes('ocean') || settingStr.includes('beach') || settingStr.includes('water') || settingStr.includes('reef')) motions.push("Water shimmering and rippling softly.");
  if (settingStr.includes('snow') || settingStr.includes('blizzard')) motions.push("Snowflakes drifting softly through the air.");
  if (settingStr.includes('fire') || settingStr.includes('candle') || lightingStr.includes('fire')) motions.push("Flames flickering softly casting dynamic shadows.");
  if (settingStr.includes('space') || settingStr.includes('galaxy') || settingStr.includes('stars')) motions.push("Stars twinkling slowly in the distant background.");
  
  // Props
  if (propsStr.includes('coffee') || propsStr.includes('tea') || propsStr.includes('steaming') || propsStr.includes('test tube')) motions.push("Steam gently rising from the prop.");
  if (propsStr.includes('smoke') || propsStr.includes('cigar')) motions.push("Smoke drifting slowly upwards.");
  if (propsStr.includes('sword') || propsStr.includes('staff') || propsStr.includes('crystal')) motions.push("Soft magical glow pulsing from the prop.");
  if (propsStr.includes('umbrella')) motions.push("Rain drops softly hitting the umbrella.");

  // Outfit
  if (outfitStr.includes('dress') || outfitStr.includes('robe') || outfitStr.includes('cloak') || outfitStr.includes('sari') || outfitStr.includes('tutu')) motions.push("Fabric swaying slightly in a subtle breeze.");

  // Hair/Details
  if (detailsStr.includes('hair') || detailsStr.includes('bun') || identityStr.includes('flapper') || detailsStr.includes('wavy')) {
      motions.push("Hair gently moving in a soft breeze.");
  }

  // Lighting
  if (lightingStr.includes('flash') || lightingStr.includes('strobe') || lightingStr.includes('lightning')) motions.push("Subtle light flashes illuminating the scene.");
  if (lightingStr.includes('fog')) motions.push("Thick fog rolling slowly across the background.");

  // Base motion fallback if no triggers hit
  if (motions.length === 1 && (settingStr.length > 0 || lightingStr.length > 0)) {
      motions.push("Subtle atmospheric motion in the background.");
  }

  const guardrail = "Static camera, no panning. Subject remains perfectly still. Keep facial features completely stable with no distortion or morphing.";

  const motionText = Array.from(new Set(motions)).join(' ');
  return `${motionText} ${guardrail}`;
}

export function generateSocialCaption(selections: PromptSelections): string {
  const captions: string[] = [];
  const hashtags: Set<string> = new Set();
  
  const moodStr = (selections.mood || []).join(' ').toLowerCase();
  const eraStr = (selections.era || []).join(' ').toLowerCase();
  const settingStr = (selections.setting || []).join(' ').toLowerCase();
  const styleStr = (selections.style || []).join(' ').toLowerCase();
  const identityStr = (selections.identity || []).join(' ').toLowerCase();
  
  if (moodStr.includes('mysterious') || moodStr.includes('dramatic')) {
     captions.push("Lost in the vibe 🌑✨");
  } else if (moodStr.includes('playful') || moodStr.includes('joyful') || moodStr.includes('smile')) {
     captions.push("Just bringing the good energy today ✨😊");
  } else if (moodStr.includes('serious') || moodStr.includes('focused')) {
     captions.push("Focused and locked in. ⚡");
  } else if (moodStr.includes('dreamy') || moodStr.includes('ethereal')) {
     captions.push("Living in a daydream ☁️✨");
  } else if (eraStr.includes('90s') || eraStr.includes('y2k') || eraStr.includes('retro')) {
     captions.push("Taking it back in time 📼 throwback vibes only.");
  } else if (identityStr.includes('cyberpunk') || settingStr.includes('neon') || styleStr.includes('cyberpunk')) {
     captions.push("Welcome to the future 🟩👾");
  } else if (settingStr.includes('forest') || settingStr.includes('mountain') || settingStr.includes('nature')) {
     captions.push("Out of office. In my element 🌲🍃");
  } else if (styleStr.includes('cinematic') || styleStr.includes('film')) {
     captions.push("Main character energy 🎬✨");
  } else if (identityStr.includes('fashion') || styleStr.includes('vogue')) {
     captions.push("Making every moment a runway 🖤🔥");
  } else {
     captions.push("Loving this new look ✨ Let me know what you think!");
  }

  // Fallback caption
  let finalCaption = captions[0];
  if (!finalCaption) {
    finalCaption = "Loving this new look ✨ Let me know what you think!";
  }

  hashtags.add("#AIArt");
  hashtags.add("#MetaAI");
  
  if (styleStr.includes('cinematic')) hashtags.add("#CinematicPhotography");
  if (moodStr.includes('dreamy')) hashtags.add("#EtherealAesthetic");
  if (eraStr.includes('90s') || eraStr.includes('y2k')) hashtags.add("#RetroVibes");
  if (settingStr.includes('forest') || settingStr.includes('mountain')) hashtags.add("#NatureVibes");
  if (identityStr.includes('cyberpunk') || settingStr.includes('neon')) hashtags.add("#CyberpunkArt");
  if (styleStr.includes('anime')) hashtags.add("#AnimeArt");
  if (selections.lighting && selections.lighting.join(' ').toLowerCase().includes('golden hour')) hashtags.add("#GoldenHour");
  if (selections.cameraAngle && selections.cameraAngle.join(' ').toLowerCase().includes('portrait')) hashtags.add("#PortraitPhotography");
  
  if (selections.identity && selections.identity.length > 0) {
      hashtags.add(`#${selections.identity[0].replace(/[\s-]/g, '')}`);
  }

  const hashtagStr = Array.from(hashtags).slice(0, 5).join(' ');

  return `${finalCaption}\n\n${hashtagStr}`;
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
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function generateSurpriseMeSelections(): PromptSelections {
  const selections: PromptSelections = {};
  
  // Always pick an identity
  selections.identity = pickRandom(PROMPT_OPTIONS.identity);
  
  // 70% chance to pick setting
  if (Math.random() > 0.3) selections.setting = pickRandom(PROMPT_OPTIONS.setting);
  
  // 50% chance for others to keep it organic
  if (Math.random() > 0.5) selections.outfit = pickRandom(PROMPT_OPTIONS.outfit);
  if (Math.random() > 0.5) selections.lighting = pickRandom(PROMPT_OPTIONS.lighting);
  if (Math.random() > 0.5) selections.style = pickRandom(PROMPT_OPTIONS.style);
  
  // Add 1-2 random modifiers from remaining to sprinkle spice
  if (Math.random() > 0.7) selections.mood = pickRandom(PROMPT_OPTIONS.mood);
  if (Math.random() > 0.8) selections.cameraAngle = pickRandom(PROMPT_OPTIONS.cameraAngle);

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
