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

  // Outfit
  const outfit = selections.outfit?.join(' and ');
  if (outfit) parts.push(`wearing ${outfit}`);

  // Base Action / Pose
  const pose = selections.pose?.join(' and ');
  if (pose) parts.push(`while ${pose}`);

  // Setting / Context
  const setting = selections.setting?.join(' and ');
  if (setting) parts.push(`in a ${setting}`);

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

  if (promptText.length > 400) {
    warnings.push({ type: 'warning', message: 'Prompt is quite long. Shorter, concise prompts often yield more reliable results in Meta AI.' });
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
