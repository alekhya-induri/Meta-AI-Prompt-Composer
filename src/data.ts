export const PROMPT_OPTIONS = {
  identity: [
    "everyday person", "fashion model", "Gen Z influencer", "fitness enthusiast", "business professional", 
    "streetwear icon", "traditional bride", "traditional groom", "Bollywood star", "Hollywood actor", 
    "cyberpunk protagonist", "fantasy adventurer", "astronaut", "cowboy", "superhero", "CEO", 
    "doctor", "artist", "musician", "gamer", "traveler", "scientist", "detective", "chef", 
    "pirate", "samurai", "pilot", "entrepreneur", "athlete", "photographer", "desert nomad"
  ],
  details: [
    "natural glowing skin", "sharp facial features", "soft youthful features", "athletic toned physique", 
    "slender elegant frame", "broad-shouldered build", "traditional ethnic jewelry", "minimalist modern jewelry", 
    "stylish glasses", "messy wavy hair", "sleek straight hair", "curly volume hair", "neatly styled hair", 
    "expressive eyes", "subtle day makeup", "bold artistic makeup", "natural unedited look"
  ],
  outfit: [
    "casual minimalist clothes", "oversized linen shirt", "ribbed knit top and jeans", "smart casual blazer", 
    "tailored business suit", "elegant evening gown", "traditional printed kurta", "designer lehenga", 
    "classic sherwani", "silk sari", "vintage 90s streetwear", "chunky knit sweater", "activewear", 
    "futuristic cyberpunk gear", "leather jacket and boots", "bohemian summer dress", "luxurious velvet robe", 
    "beachwear", "winter coat", "chef uniform"
  ],
  setting: [
    "sun-drenched minimalist apartment", "cozy dimly lit cafe", "bustling global city street", "neon-lit cyberpunk alley", 
    "traditional ancestral courtyard", "ancient ornate temple", "serene tropical resort", "rooftop overlooking the city", 
    "lush green forest", "modern office workspace", "high-end fashion studio", "scenic mountain viewpoint", 
    "futuristic metropolis", "train station platform", "luxury hotel lobby", "quiet library", "concert stage"
  ],
  timeOfDay: [
    "dawn", "sunrise", "early morning", "morning", "noon", "golden hour", "late afternoon", 
    "sunset", "twilight", "evening", "night", "midnight"
  ],
  mood: [
    "soft gentle smile", "confident and powerful", "calm and relaxed", "mysterious", "dramatic", 
    "thoughtful", "dreamy", "playful", "serious", "elegant", "victorious", "intense", "romantic", "candid mid-laugh"
  ],
  pose: [
    "looking directly at the viewer", "looking over the shoulder", "candid looking away", "standing confidently", 
    "sitting gracefully", "leaning against a wall", "walking towards camera", "mid-action movement", 
    "arms crossed", "hands in pockets", "meditating", "posing dynamically"
  ],
  cameraAngle: [
    "medium shot portrait", "close-up portrait", "85mm portrait lens", "smartphone selfie style", 
    "candid snapshot", "Vogue editorial angle", "35mm film photography", "eye level", "low angle cinematic", 
    "over-the-shoulder", "symmetrical framing"
  ],
  lighting: [
    "soft morning sunlight", "warm golden hour rim-light", "studio beauty lighting", "neon city bokeh", 
    "cool blue ambient light", "dramatic high contrast", "soft window side-lighting", "cinematic moody lighting", 
    "natural diffused light", "harsh flash photography"
  ],
  style: [
    "Instagram lifestyle aesthetic", "photorealistic", "ultra realistic", "cinematic", "35mm film", 
    "disposable camera aesthetic", "anime", "illustration", "watercolor", "3D render", "fantasy art", 
    "vintage photo", "cyberpunk", "fashion editorial", "magazine cover", "polaroid"
  ],
  era: [
    "modern day", "90s nostalgic", "80s retro", "futuristic", "medieval", "ancient history", "Victorian", 
    "post-apocalyptic", "timeless", "mythology-inspired"
  ],
  props: [
    "coffee cup", "smartphone", "book", "laptop", "camera", "sunglasses", "headphones", "flower bouquet", 
    "guitar", "traditional oil lamp", "vintage car", "motorcycle", "sword", "shield"
  ],
  colorPalette: [
    "warm earthy tones", "cool blue and silver", "neon cyberpunk colors", "soft pastel tones", "black and white", 
    "high contrast vivid colors", "muted vintage tones", "sepia", "teal and orange cinematic", "royal jewel tones"
  ],
  quality: [
    "8k resolution", "authentic skin texture", "sharp focus on face", "crisp clarity", "high detail", 
    "clean background", "professional composition", "cinematic look", "premium quality", "subtle lens bloom"
  ]
};

export const EXAMPLE_PROMPTS = [
  "Imagine me as a confident business professional, looking directly at the viewer, medium shot portrait. Natural glowing skin and a sharp jawline, wearing a tailored business suit. In a modern office workspace at golden hour, warm golden hour rim-light, photorealistic, 8k resolution, authentic skin texture.",
  "Imagine me as a traditional bride, candid looking away, close-up portrait. Soft youthful features and traditional ethnic jewelry, wearing a designer lehenga. In a traditional ancestral courtyard at morning, soft morning sunlight, Instagram lifestyle aesthetic, crisp clarity.",
  "Imagine me as a fashion model, standing confidently, symmetrical framing. Athletic toned physique, wearing an oversized linen shirt and casual minimalist clothes. In a sun-drenched minimalist apartment at late afternoon, soft window side-lighting, 35mm film aesthetic, sharp focus on face.",
  "Imagine me as a cyberpunk protagonist, looking over the shoulder, 85mm portrait lens. Sleek straight hair and minimalist modern jewelry, wearing futuristic cyberpunk gear and a leather jacket. In a neon-lit cyberpunk alley at night, neon city bokeh, cinematic moody lighting, ultra realistic."
];

export type Category = keyof typeof PROMPT_OPTIONS;

// Export human readable labels
export const CATEGORY_LABELS: Record<Category, string> = {
  identity: "Identity / Role",
  details: "Physical Features / Details",
  outfit: "Appearance / Outfit",
  setting: "Setting / Background",
  timeOfDay: "Time of Day",
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
