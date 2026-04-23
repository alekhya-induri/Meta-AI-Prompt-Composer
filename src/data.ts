import { Category } from './utils';

export const PROMPT_OPTIONS: Record<Category, string[]> = {
  identity: [
    "everyday person", "fashion model", "fitness enthusiast", "business professional", 
    "streetwear icon", "traditional bride", "traditional groom", "Bollywood star", 
    "cyberpunk protagonist", "astronaut", "CEO", "doctor", "artist", "musician", "gamer", 
    "traveler", "scientist", "chef", "samurai", "athlete", "photographer",
    "software engineer", "college student", "wedding guest", "startup founder", 
    "classical dancer", "Sikh man", "tech worker", "street vendor", "fashion blogger",
    // New genres added
    "shonen hero", "elf warrior", "noble knight", "dragon rider", 
    "space marine", "space explorer", "steampunk inventor", "spiritual pilgrim",
    "desert nomad"
  ],
  details: [
    "natural glowing skin", "sharp facial features", "athletic build", 
    "slender frame", "broad-shouldered", "ethnic jewelry", "minimalist jewelry", 
    "stylish glasses", "messy wavy hair", "expressive eyes", "subtle makeup", 
    "freckles", "dimples", "thick eyebrows", "wire frame glasses", 
    "chiseled jawline", "soft jawline",
    "henna tattoos", "glowing ethereal skin", "bindi", "oxidized silver jewelry",
    "glass bangles", "traditional nose ring", "neatly trimmed beard", "jasmine in hair",
    "well proportioned athletic hourglass silhouette", "well proportioned full-figured hourglass silhouette",
    "slender and graceful statuesque frame", "strong muscular athletic build", 
    "petite and delicate frame", "softly rounded classical figure", "lean runner's physique",
    // New details added
    "cybernetic arm", "twin tails hairstyle", "translucent butterfly wings",
    "pale complexion", "blood red lips", "silver hair", "long braided hair",
    "clockwork heart implant"
  ],
  outfit: [
    "minimalist clothes", "oversized linen shirt", "ribbed knit top and jeans", "smart casual blazer", 
    "tailored business suit", "elegant evening gown", "traditional printed kurta", "designer lehenga", 
    "classic sherwani", "silk sari", "vintage streetwear", "activewear", 
    "cyberpunk gear", "leather jacket", "bohemian summer dress", "luxurious velvet robe", 
    "modest resort wear", "winter coat", "baggy Y2K streetwear", "embroidered tunic", 
    "monochrome outfit", "sequined dress", "vintage sports jersey", "denim jacket", 
    "Banarasi silk sari", "pastel Anarkali suit", "casual Kurti with jeans", "royal Jodhpuri suit", 
    "festive lehenga", "Nehru jacket", "dhoti kurta", "layered beachwear",
    // New outfits added
    "magical girl cosplay outfit", "gothic lolita dress", "tattered robes", "sheer nightgown",
    "heavy knight armor", "chainmail hauberk", "queenly royal gown", "flight suit",
    "spacesuit", "Victorian-era clothing", "leather apron", "simple monk's robe",
    "flowing robe", "headscarf", "worn leather boots", "flamboyant sari"
  ],
  setting: [
    "minimalist apartment", "cozy dimly lit cafe", "bustling city street", "neon cyberpunk alley", 
    "ancestral courtyard", "ancient ornate temple", "rooftop overlooking city", 
    "lush green forest", "modern office workspace", "scenic mountain view", 
    "futuristic metropolis", "luxury hotel lobby", "quiet library", "concert stage",
    "rain-slicked streets", "botanical greenhouse", "hidden speakeasy bar", 
    "desert oasis", "art gallery exhibition", "dark Gothic castle",
    "Bangalore tech park", "Mumbai marine drive", "Jaipur palace courtyard", "Kerala backwaters",
    "vibrant street market", "wedding mandap", "heritage stepwell", "local chai stall",
    // New settings added
    "cherry blossom garden", "floating island battlefield", "haunted mansion", "moonlit graveyard",
    "enchanted forest", "ancient castle ruins", "spaceship interior", "exoplanet landscape",
    "zero gravity environment", "airship over Victorian city", "serene mountain view", "zen garden",
    "monastery courtyard", "desert sand dunes", "sun-baked earth"
  ],
  timeOfDay: [
    "dawn", "sunrise", "morning", "noon", "golden hour", "late afternoon", 
    "sunset", "twilight", "evening", "night", "midnight", "blue hour"
  ],
  mood: [
    "serene", "joyful", "confident", "mysterious", "playful", 
    "serious", "elegant", "victorious", "intense", "romantic", 
    "focused", "sleepy", "melancholy", "fierce",
    // New moods added
    "macabre", "suspenseful", "inner peace", "intellectual pursuit"
  ],
  pose: [
    "looking at camera", "looking over shoulder", "candid looking away", "standing confidently", 
    "sitting gracefully", "leaning against wall", "walking towards camera", "mid-action", 
    "arms crossed", "meditating", "posing dynamically", "looking up", 
    "holding a coffee cup", "leaning back", "sitting on the edge of a seat", 
    "resting chin on hand", "adjusting glasses",
    // New poses added
    "dynamic pose"
  ],
  cameraAngle: [
    "medium shot portrait", "close-up portrait", "85mm portrait lens", "smartphone selfie", 
    "candid snapshot", "Vogue editorial angle", "35mm film", "low angle cinematic", 
    "Dutch angle", "bird's-eye view", "extreme close-up", "50mm standard lens", "14mm wide-angle"
  ],
  lighting: [
    "soft morning sunlight", "warm golden hour rim-light", "studio beauty lighting", "neon city bokeh", 
    "cool ambient light", "dramatic high contrast", "soft window side-lighting", "cinematic moody lighting", 
    "natural diffused light", "harsh flash", "lens flare", "candlelight", 
    "color gel lighting", "ring light glow", "warm diya light", "colorful string lights bokeh",
    // New lightings added
    "candlelit room", "glitching holographic light", "gas lamp light", "soft dappled sunlight",
    "bioluminescent glow"
  ],
  style: [
    "photorealistic", "ultra realistic", "cinematic", "35mm film", "disposable camera", 
    "anime", "illustration", "watercolor", "3D render", "cyberpunk", 
    "fashion editorial", "polaroid", "minimalist aesthetic", "dark academia", "Studio Ghibli style", 
    "retro 70s vintage", "Madhubani folk art", "Indian miniature painting",
    // New styles added
    "kawaii anime style", "gothic horror aesthetic", "retro sci-fi style", "atomic age design"
  ],
  era: [
    "modern day", "90s nostalgic", "80s retro", "futuristic", "medieval", "ancient history", "Victorian", 
    "post-apocalyptic", "timeless", "1920s classic", "Y2K era", "synthwave 80s", "Raj-era colonial", "Mughal era"
  ],
  props: [
    "coffee cup", "smartphone", "book", "laptop", "camera", "sunglasses", "headphones", "flower bouquet", 
    "guitar", "traditional oil lamp", "vintage car", "motorcycle", "sword", "shield",
    "steaming cutting chai", "puja thali", "clay diyas", "vinyl record",
    // New props added
    "holographic screens", "mecha suit", "ancient scroll", "vintage film camera",
    "ghostly figure", "spiderweb-draped chandelier", "colorful umbrella",
    "magic runes", "glowing magical staff", "sci-fi helmet", "warp drive", "cosmic nebula",
    "steampunk goggles", "intricate brass gadgets", "pocket watch", "steampunk gears texture",
    "prayer beads", "walking stick", "lotus flower", "incense smoke",
    "vintage television", "sputnik satellite", "mid-century modern furniture", "googie architecture",
    "jetpack", "plastic and chrome materials", "water skin", "dramatic jewellery"
  ],
  colorPalette: [
    "warm earthy tones", "cool blue and silver", "neon cyberpunk colors", "soft pastel tones", "black and white", 
    "high contrast vivid colors", "muted vintage tones", "sepia", "teal and orange cinematic", "royal jewel tones",
    "pastel pink and blue", "monochromatic greyscale", "vibrant primary colors", "moody dark tones", 
    "golden and amber", "mint and peach"
  ],
  quality: [
    "8k resolution", "authentic skin texture", "sharp focus on face", "crisp clarity", "high detail", 
    "clean background", "professional composition", "cinematic look", "premium quality", "subtle lens bloom",
    "hyper-detailed", "soft focus background", "masterpiece", "award-winning photography", "highly detailed textures", 
    "volumetric fog"
  ]
};

export const EXAMPLE_PROMPTS = [
  "Imagine me as a confident business professional, looking directly at the viewer, medium shot portrait. Natural glowing skin and a sharp jawline, wearing a tailored business suit. In a modern office workspace at golden hour, warm golden hour rim-light, photorealistic, 8k resolution, authentic skin texture.",
  "Imagine me as a traditional bride, candid looking away, close-up portrait. Soft youthful features and traditional ethnic jewelry, wearing a designer lehenga. In a traditional ancestral courtyard at morning, soft morning sunlight, Instagram lifestyle aesthetic, crisp clarity.",
  "Imagine me as a fashion model, standing confidently, symmetrical framing. Athletic toned physique, wearing an oversized linen shirt and casual minimalist clothes. In a sun-drenched minimalist apartment at late afternoon, soft window side-lighting, 35mm film aesthetic, sharp focus on face.",
  "Imagine me as a cyberpunk protagonist, looking over the shoulder, 85mm portrait lens. Sleek straight hair and minimalist modern jewelry, wearing futuristic cyberpunk gear and a leather jacket. In a neon-lit cyberpunk alley at night, neon city bokeh, cinematic moody lighting, ultra realistic."
];

export const CATEGORY_LABELS: Record<Category, string> = {
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

export const OPTION_DESCRIPTIONS: Record<string, string> = {
  "85mm portrait lens": "Flattering for faces, softly blurs the background",
  "50mm standard lens": "Similar to the human eye, feels natural and balanced",
  "14mm wide-angle lens": "Captures a huge area, dynamic but stretches edges",
  "35mm film": "Vintage, cinematic look with subtle film grain",
  "Vogue editorial angle": "High-fashion, dramatic, and stylized framing",
  "medium shot portrait": "Shows subject from waist up, balances face and outfit",
  "close-up portrait": "Focuses tightly on the face and expressions",
  "low angle cinematic": "Camera angled up, making you look powerful and dominant",
  "bird's-eye view": "Looking directly down from high above",
  "Dutch angle": "Camera is tilted, creates a dynamic, action-packed feel",
  "neon city bokeh": "Blurry, glowing circular out-of-focus city lights in background",
  "warm golden hour rim-light": "Glowing edges of light around you from the setting sun",
  "subtle lens bloom": "Soft glowing effect around bright light sources",
  "dramatic high contrast": "Strong difference between deep shadows and bright lights",
  "blue hour": "The deeply blue, shadowy time just before sunrise or after sunset",
  "golden hour": "The warm, golden lighting just after sunrise or before sunset",
  "volumetric fog": "Visible 3D light beams cutting through fog or mist",
  "soft focus background": "Keeps the subject sharp while deliberately blurring the setting",
  "color gel lighting": "Studio lighting using colored filters on the lamps",
  "disposable camera": "Nostalgic 90s party vibe, harsh flash, saturated colors"
};

export const GENDER_FEMALE_ONLY = [
  "traditional bride", "elegant evening gown", "designer lehenga", "silk sari", 
  "bohemian summer dress", "sequined dress", "Banarasi silk sari", "pastel Anarkali suit", 
  "casual Kurti with jeans", "festive lehenga", "glass bangles", "traditional nose ring", 
  "jasmine in hair", "bindi", "well proportioned athletic hourglass silhouette", 
  "well proportioned full-figured hourglass silhouette", "slender and graceful statuesque frame", 
  "petite and delicate frame", "softly rounded classical figure",
  "magical girl cosplay outfit", "gothic lolita dress", "sheer nightgown", "queenly royal gown",
  "flamboyant sari"
];

export const GENDER_MALE_ONLY = [
  "traditional groom", "classic sherwani", "broad-shouldered", "chiseled jawline", 
  "royal Jodhpuri suit", "Nehru jacket", "dhoti kurta", "Sikh man", 
  "neatly trimmed beard"
];

export const VIBE_SETS: Record<string, string[]> = {
  "cyberpunk": [
    "cyberpunk protagonist", "cyberpunk gear", "leather jacket", 
    "neon cyberpunk alley", "futuristic metropolis", 
    "neon city bokeh", "color gel lighting", 
    "cyberpunk", "synthwave 80s", "futuristic", 
    "fierce", "sunglasses", "neon cyberpunk colors",
    "cybernetic arm", "holographic screens", "mecha suit"
  ],
  "anime_cosplay": [
    "kawaii anime style", "shonen hero", "magical girl cosplay outfit",
    "cell shading", "gothic lolita dress", "Studio Ghibli style",
    "cherry blossom garden", "floating island battlefield",
    "twin tails hairstyle", "translucent butterfly wings", 
    "pastel pink and blue", "dynamic pose"
  ],
  "dark_academia": [
    "quiet library", "dark Gothic castle", "art gallery exhibition",
    "vintage streetwear", "oversized linen shirt", 
    "dark academia", "candlelight", "book", "reading glasses", "melancholy",
    "moody dark tones", "ancient scroll", "vintage film camera",
    "intellectual pursuit", "ink-stained fingers"
  ],
  "gothic_horror": [
    "haunted mansion", "moonlit graveyard", "dark Gothic castle",
    "pale complexion", "blood red lips", "tattered robes", "sheer nightgown",
    "gothic horror aesthetic", "macabre", "suspenseful",
    "ghostly figure", "spiderweb-draped chandelier", "candlelit room"
  ],
  "monsoon_romance": [
    "rain-slicked streets", "Mumbai marine drive", "Kerala backwaters",
    "soft window side-lighting", "cinematic moody lighting",
    "romantic", "melancholy", "colorful string lights bokeh",
    "colorful umbrella", "steaming cutting chai"
  ],
  "traditional_indian": [
    "traditional bride", "traditional groom", "classical dancer", "wedding guest",
    "traditional printed kurta", "designer lehenga", "classic sherwani", "silk sari", 
    "Banarasi silk sari", "pastel Anarkali suit", "royal Jodhpuri suit", "festive lehenga", "dhoti kurta",
    "ancestral courtyard", "ancient ornate temple", "Jaipur palace courtyard", "wedding mandap", "heritage stepwell",
    "ethnic jewelry", "henna tattoos", "bindi", "oxidized silver jewelry", "glass bangles",
    "warm diya light", "puja thali", "clay diyas", "Madhubani folk art", "Indian miniature painting"
  ],
  "modern_urban": [
    "everyday person", "Gen Z influencer", "college student", "fashion blogger",
    "minimalist clothes", "ribbed knit top and jeans", "baggy Y2K streetwear", "denim jacket", "casual Kurti with jeans",
    "minimalist apartment", "cozy dimly lit cafe", "bustling city street", "rooftop overlooking city", "Bangalore tech park", "Mumbai marine drive",
    "ring light glow", "soft window side-lighting", "colorful string lights bokeh",
    "smartphone selfie", "smartphone"
  ],
  "professional": [
    "business professional", "CEO", "doctor", "software engineer", "startup founder", "tech worker",
    "smart casual blazer", "tailored business suit", "Nehru jacket", 
    "modern office workspace", "luxury hotel lobby", "Bangalore tech park", 
    "confident", "serious", "focused", "laptop", "wire frame glasses"
  ],
  "high_fantasy": [
    "fantasy adventurer", "elf warrior", "noble knight", "dragon rider",
    "heavy knight armor", "chainmail hauberk", "queenly royal gown",
    "enchanted forest", "ancient castle ruins", "magic runes",
    "glowing magical staff", "silver hair", "long braided hair",
    "epic tale", "mythical creature companion", "bioluminescent glow"
  ],
  "space_explorer": [
    "space marine", "space explorer", "flight suit", "spacesuit",
    "spaceship interior", "exoplanet landscape", "zero gravity environment",
    "sci-fi helmet", "futuristic", "warp drive", "cosmic nebula",
    "glitching holographic light", "cool blue and silver"
  ],
  "steampunk_inventor": [
    "steampunk inventor", "steampunk goggles", "intricate brass gadgets",
    "Victorian-era clothing", "leather apron", "pocket watch",
    "airship over Victorian city", "steampunk gears texture",
    "gas lamp light", "clockwork heart implant"
  ],
  "spiritual_pilgrim": [
    "spiritual pilgrim", "simple monk's robe", "prayer beads", "walking stick",
    "serene mountain view", "zen garden", "monastery courtyard",
    "lotus flower", "incense smoke", "meditating", "inner peace",
    "soft dappled sunlight", "morning mist"
  ],
  "retro_futurism": [
    "retro sci-fi style", "vintage television", "sputnik satellite",
    "mid-century modern furniture", "googie architecture", "jetpack",
    "atomic age design", "plastic and chrome materials"
  ],
  "desert_nomad": [
    "desert nomad", "flowing robe", "headscarf", "worn leather boots",
    "desert sand dunes", "sun-baked earth", "nomadic lifestyle",
    "camel driver", "water skin", "starlit night sky", "sandstorm"
  ],
  "bollywood_glamour": [
    "Bollywood star", "elegant evening gown", "designer lehenga", 
    "concert stage", "luxury hotel lobby", 
    "studio beauty lighting", "dramatic high contrast",
    "cinematic", "joyful", "romantic", "vibrant primary colors",
    "flamboyant sari", "dramatic jewellery", "theatrical aesthetic"
  ]
};
