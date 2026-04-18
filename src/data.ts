export const PROMPT_OPTIONS = {
  identity: [
    "astronaut", "cowboy", "90s gangster", "superhero", "queen", "king", "CEO", "doctor", "teacher", "artist", "musician", "gamer", "traveler", "warrior", "scientist", "detective", "chef", "fitness coach", "model", "pirate", "medieval knight", "cyberpunk hacker", "fantasy mage", "princess", "samurai", "pilot", "influencer", "entrepreneur", "soldier", "monk", "lawyer", "engineer", "dancer", "athlete", "photographer", "streetwear icon", "retro Bollywood star", "mythological hero", "space explorer", "desert nomad"
  ],
  outfit: [
    "casual clothes", "formal suit", "business attire", "traditional clothing", "royal clothing", "futuristic outfit", "streetwear", "leather jacket", "armor", "robe", "sari", "kurta", "hoodie", "tracksuit", "tuxedo", "gown", "battle gear", "space suit", "vintage 90s outfit", "elegant fashion", "sporty outfit", "beachwear", "winter coat", "lab coat", "chef uniform", "pilot uniform"
  ],
  setting: [
    "beach", "Indian beach", "rooftop", "city street", "neon alley", "desert", "forest", "palace", "castle", "mountain", "snowfield", "moon", "outer space", "studio", "office", "café", "street market", "temple", "futuristic city", "village", "train station", "library", "concert stage", "battlefield", "underwater world", "luxury hotel", "sunset viewpoint", "garden", "old town lane", "cyberpunk street", "medieval hall"
  ],
  mood: [
    "confident", "calm", "joyful", "mysterious", "dramatic", "heroic", "relaxed", "serious", "elegant", "powerful", "playful", "angry", "thoughtful", "dreamy", "rebellious", "romantic", "focused", "smiling", "intense", "victorious"
  ],
  pose: [
    "standing", "sitting", "walking", "running", "looking at camera", "looking away", "arms crossed", "hands in pockets", "pointing", "dancing", "flying", "holding a prop", "riding a horse", "on a throne", "leaning on wall", "kneeling", "mid-action", "waving", "meditating", "posing confidently"
  ],
  cameraAngle: [
    "close-up", "portrait", "half-body", "full-body", "wide shot", "low angle", "eye level", "cinematic angle", "over-the-shoulder", "side profile", "top-down", "centered composition"
  ],
  lighting: [
    "natural light", "golden hour", "sunset glow", "sunrise light", "studio lighting", "soft light", "dramatic lighting", "neon lighting", "moonlight", "warm light", "cool light", "backlit", "rim light", "moody lighting"
  ],
  style: [
    "realistic", "ultra realistic", "cinematic", "photorealistic", "anime", "comic book", "illustration", "watercolor", "3D render", "fantasy art", "retro poster", "vintage photo", "cyberpunk", "sci-fi", "oil painting", "cartoon", "fashion editorial", "film still", "magazine cover", "surreal", "low poly", "minimal", "glossy", "HDR"
  ],
  era: [
    "modern", "90s", "80s", "futuristic", "medieval", "ancient", "Victorian", "cyberpunk", "retro", "timeless", "ancient India", "Mughal era", "mythology-inspired", "post-apocalyptic", "utopian", "dystopian"
  ],
  props: [
    "coffee cup", "sword", "book", "laptop", "microphone", "camera", "guitar", "crown", "helmet", "sunglasses", "skateboard", "car", "horse", "flower bouquet", "staff", "shield", "scroll", "phone", "headphones", "telescope", "map"
  ],
  colorPalette: [
    "warm tones", "cool tones", "neon colors", "pastel colors", "black and gold", "silver and blue", "earthy tones", "vibrant colors", "monochrome", "high contrast", "soft beige", "deep red", "royal purple", "teal and orange"
  ],
  quality: [
    "high detail", "sharp focus", "clean background", "realistic skin texture", "natural proportions", "professional composition", "detailed clothing", "detailed background", "cinematic look", "premium quality", "full resolution feel", "visually balanced", "no text", "no watermark"
  ]
};

export const EXAMPLE_PROMPTS = [
  "Imagine me as a cowboy on a desert road at sunset, realistic, full-body, dramatic lighting, cinematic, high detail.",
  "Imagine me as a 90s gangster sipping coffee at an Indian beach, vintage photo, confident, half-body, warm tones, sharp focus.",
  "Imagine me as a futuristic queen in a neon palace, elegant, glowing light, ultra realistic, portrait, royal purple.",
  "Imagine me as an astronaut standing on the moon, cinematic, low angle, moonlight, detailed suit, sharp focus."
];

export type Category = keyof typeof PROMPT_OPTIONS;

// Export human readable labels
export const CATEGORY_LABELS: Record<Category, string> = {
  identity: "Identity / Role",
  outfit: "Appearance / Outfit",
  setting: "Setting / Background",
  mood: "Mood / Expression",
  pose: "Pose",
  cameraAngle: "Camera Angle / Framing",
  lighting: "Lighting",
  style: "Style",
  era: "Era / Theme",
  props: "Props / Objects",
  colorPalette: "Color Palette",
  quality: "Quality Constraints"
};
