import { Category } from './utils';

export const PROMPT_OPTIONS: Record<Category, string[]> = {
  identity: [
    "cyberpunk protagonist", "software engineer", "desert nomad", "fantasy adventurer", "anime protagonist", 
    "elderly sage", "steampunk inventor", "space explorer", "Bollywood starlet", "tribal shaman", 
    "post-apocalyptic survivor", "noble knight", "mecha pilot", "street artist", "courtesan", "Jawa trader",
    "Sikh man", "traditional groom", "ancient gladiator", "fantasy archer", "anime warrior boy", "cyberpunk hacker", 
    "corporate CEO", "medieval blacksmith", "space marine", "classical Kathakali performer", "steampunk inventor boy", 
    "young adventurer", "elderly wise wizard", "samurai warrior", "rebel leader", "athlete",
    "traditional bride", "ethereal mermaid", "1920s flapper", "cyberpunk hacker girl", "fantasy elf princess", 
    "magical girl", "gothic lolita character", "queen of the northern reaches", "Bollywood diva", 
    "classical Bharatanatyam dancer", "AI consciousness avatar", "Amazonian warrior", "Renaissance scholar", 
    "spacefarer captain", "nature dryad",
    // Base OG Identities
    "everyday person", "fashion model", "fitness enthusiast", "business professional", "streetwear icon", 
    "astronaut", "CEO", "doctor", "artist", "musician", "gamer", "traveler", "scientist", "chef", 
    "photographer", "college student", "wedding guest", "startup founder", "classical dancer", 
    "tech worker", "street vendor", "fashion blogger"
  ],
  details: [
    "neatly trimmed beard", "chiseled jawline", "broad-shouldered build", "athletic physique", "sun-kissed skin", 
    "wiry frame", "calm eyes", "calloused hands", "silver hair", "intricate tattoos", "royal crest marking", 
    "exosuit integration", "flowing robe", "weathered scars", "sharp nose", "long braided hair", "pierced ear",
    "bindi ornament", "jasmine flower in hair", "well proportioned full-figured hourglass silhouette", 
    "well proportioned athletic hourglass silhouette", "slender and graceful statuesque frame", 
    "strong muscular athletic build", "petite and delicate frame", "softly rounded classical figure", 
    "lean runner's physique", "slender elegant frame", "graceful posture", "expressive eyes", "freckled skin", "twin tails hairstyle", 
    "royal tiara adornment", "subtle makeup accent", "pearl earrings", "tribal body paint", 
    "translucent butterfly wings", "artificial neural lace implant", "glowing rune tattoo",
    // Base OG Details
    "natural glowing skin", "sharp facial features", "ethnic jewelry", "minimalist jewelry", 
    "stylish glasses", "messy wavy hair", "subtle makeup", "freckles", "dimples", "thick eyebrows", 
    "wire frame glasses", "soft jawline", "henna tattoos", "glowing ethereal skin", "bindi", 
    "oxidized silver jewelry", "glass bangles", "traditional nose ring"
  ],
  outfit: [
    "classic cream sherwani", "Nehru jacket", "heavy knight armor", "tailored three-piece suit", "denim jacket", 
    "leather armor", "modular tactical vest", "neon cyberpunk jacket", "simple monk's robe", "linen tunic and pants", 
    "gilded samurai armor", "flight suit", "steampunk goggles and coat", "minimalist apartment wear", 
    "tribal cloth wrap", "formal military uniform",
    "vibrant Banarasi silk sari", "designer lehenga", "cyberpunk crop-jacket", "modest flowing sundress", 
    "magical girl cosplay outfit", "gothic lolita dress", "queenly royal gown", "academic robes", 
    "athletic sportswear", "kimono robe", "imperial court headdress", "functional tactical skirt suit", 
    "bohemian maxi dress", "glittering mirror work lehenga", "sheer nightgown", "pastel-colored dress",
    // Base OG Outfits
    "minimalist clothes", "oversized linen shirt", "ribbed knit top and jeans", "smart casual blazer", 
    "elegant evening gown", "traditional printed kurta", "classic sherwani", "silk sari", 
    "vintage streetwear", "activewear", "cyberpunk gear", "bohemian summer dress", "luxurious velvet robe", 
    "winter coat", "baggy Y2K streetwear", "embroidered tunic", "monochrome outfit", "sequined dress", 
    "vintage sports jersey", "Banarasi silk sari", "pastel Anarkali suit", "casual Kurti with jeans", 
    "royal Jodhpuri suit", "festive lehenga", "dhoti kurta", "layered beachwear"
  ],
  setting: [
    "neon-lit cyberpunk alley", "heritage Rajasthani courtyard", "1920s speakeasy", "quiet library", 
    "enchanted forest", "futuristic neon cityscape", "ancient temple ruins", "cozy winter village night", 
    "spooky Halloween scene", "spaceship landing on desert planet", "steampunk airship over Victorian city", 
    "cherry blossom garden", "floating island battlefield", "modern tech park", "Holi festival celebration", 
    "abandoned laboratory", "zen garden", "desert sand dunes", "moonlit graveyard",
    // Base OG Settings
    "minimalist apartment", "cozy dimly lit cafe", "bustling city street", "ancestral courtyard", 
    "rooftop overlooking city", "lush green forest", "modern office workspace", "scenic mountain view", 
    "futuristic metropolis", "luxury hotel lobby", "concert stage", "rain-slicked streets", 
    "botanical greenhouse", "hidden speakeasy bar", "desert oasis", "art gallery exhibition", 
    "dark Gothic castle", "Bangalore tech park", "Mumbai marine drive", "Jaipur palace courtyard", 
    "Kerala backwaters", "vibrant street market", "wedding mandap", "heritage stepwell", "local chai stall"
  ],
  timeOfDay: [
    "dawn", "morning", "noon", "golden hour", "late afternoon", "sunset", "twilight", "evening", "night", "midnight",
    // Base OG TimeOfDay
    "sunrise", "blue hour"
  ],
  mood: [
    "fiercely confident", "softly melancholic", "joyful mid-laugh", "determined expression", "mysterious smirk", 
    "awestruck wonder", "serene contemplation", "frenzied energy", "peaceful slumber", "haunted torment", 
    "playful whimsy", "cold calculation", "festive jubilation", "stoic resolve", "bewildered surprise", "sinister intent",
    // Base OG Moods
    "serene", "joyful", "confident", "mysterious", "playful", "serious", "elegant", "victorious", 
    "intense", "romantic", "focused", "sleepy", "melancholy", "fierce"
  ],
  pose: [
    "looking directly at camera", "looking over shoulder", "candid looking away", "standing confidently", 
    "dynamic pose", "contemplative stance", "yoga pose", "mindful meditation",
    // Base OG Poses
    "looking at camera", "sitting gracefully", "leaning against wall", "walking towards camera", 
    "mid-action", "arms crossed", "meditating", "posing dynamically", "looking up", 
    "holding a coffee cup", "leaning back", "sitting on the edge of a seat", 
    "resting chin on hand", "adjusting glasses"
  ],
  cameraAngle: [
    "85mm portrait lens", "drone shot", "Dutch angle", "intimate face close-up", "vlogger camera perspective", 
    "wide-angle lens shot", "first-person view", "overhead aerial view", "low-angle shot", "fish-eye lens distortion", 
    "tracking shot", "isolated subject framing", "extreme close-up", "shallow depth of field", "symmetrical composition",
    // Base OG Camera Angles
    "medium shot portrait", "close-up portrait", "smartphone selfie", "candid snapshot", 
    "Vogue editorial angle", "35mm film", "low angle cinematic", "bird's-eye view", 
    "50mm standard lens", "14mm wide-angle"
  ],
  lighting: [
    "warm golden hour rim-light", "color gel lighting red and blue", "soft dappled sunlight", "bioluminescent glow", 
    "glowing runes", "cinematic lighting", "misty atmosphere", "neon lights", "candlelit room", "soft pastel colors", 
    "harsh noonday sun", "ethereal divine light", "flickering torchlight", "backlit silhouette", 
    "glitching holographic light", "moody low-key lighting",
    // Base OG Lighting
    "soft morning sunlight", "studio beauty lighting", "neon city bokeh", "cool ambient light", 
    "dramatic high contrast", "soft window side-lighting", "cinematic moody lighting", 
    "natural diffused light", "harsh flash", "lens flare", "candlelight", "color gel lighting", 
    "ring light glow", "warm diya light", "colorful string lights bokeh"
  ],
  style: [
    "35mm film photography", "Studio Ghibli illustration", "hyper-realistic Unreal Engine 5", "vintage polaroid", 
    "cell shading", "kawaii anime style", "gothic manga style", "realistic anime style", "miniature painting art", 
    "mural art style", "concept art style", "retro sci-fi style", "steampunk gears texture", "watercolor wash", 
    "oil painting brushstrokes", "pixel art retro game", "dark fantasy style",
    // Base OG Styles
    "photorealistic", "ultra realistic", "cinematic", "35mm film", "disposable camera", 
    "anime", "illustration", "watercolor", "3D render", "cyberpunk", "fashion editorial", 
    "polaroid", "minimalist aesthetic", "dark academia", "Studio Ghibli style", "retro 70s vintage", 
    "Madhubani folk art", "Indian miniature painting"
  ],
  era: [
    "Victorian-era", "mid-century modern", "atomic age", "retro 70s", "synthwave 80s",
    // Base OG Eras
    "modern day", "90s nostalgic", "80s retro", "futuristic", "medieval", "ancient history", 
    "Victorian", "post-apocalyptic", "timeless", "1920s classic", "Y2K era", "Raj-era colonial", "Mughal era"
  ],
  props: [
    "steaming chai cup", "glowing magical staff", "smartphone", "vintage film camera", "holographic screens", 
    "glittering lehenga jewelry", "ancient scroll", "mechanical cog", "sparkling wand", "sci-fi helmet", 
    "prayer beads", "circuit board tattoo", "lotus flower", "leather jacket", "mecha suit", "pocket watch", 
    "sputnik satellite", "walking stick", "incense smoke", "quill pen",
    // Base OG Props
    "coffee cup", "book", "laptop", "camera", "sunglasses", "headphones", "flower bouquet", 
    "guitar", "traditional oil lamp", "vintage car", "motorcycle", "sword", "shield", 
    "steaming cutting chai", "puja thali", "clay diyas", "vinyl record"
  ],
  colorPalette: [
    "warm earthy tones", "cool blue and silver", "neon cyberpunk colors", "soft pastel tones", "black and white",
    // Base OG Color Palette
    "high contrast vivid colors", "muted vintage tones", "sepia", "teal and orange cinematic", 
    "royal jewel tones", "pastel pink and blue", "monochromatic greyscale", "vibrant primary colors", 
    "moody dark tones", "golden and amber", "mint and peach"
  ],
  quality: [
    "photorealistic", "8k resolution", "highly detailed", "masterpiece", "award winning photography", "crisp clarity",
    // Base OG Quality
    "authentic skin texture", "sharp focus on face", "high detail", "clean background", 
    "professional composition", "cinematic look", "premium quality", "subtle lens bloom", 
    "hyper-detailed", "soft focus background", "award-winning photography", "highly detailed textures", "volumetric fog"
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
  "traditional bride", "ethereal mermaid", "1920s flapper", "cyberpunk hacker girl", "fantasy elf princess", 
  "magical girl", "gothic lolita character", "queen of the northern reaches", "Bollywood diva", 
  "classical Bharatanatyam dancer", "Amazonian warrior", "nature dryad", "bindi ornament", 
  "jasmine flower in hair", "well proportioned full-figured hourglass silhouette", 
  "well proportioned athletic hourglass silhouette", "slender and graceful statuesque frame", 
  "petite and delicate frame", "softly rounded classical figure",
  "slender elegant frame", "graceful posture", "twin tails hairstyle", "royal tiara adornment", "translucent butterfly wings", 
  "vibrant Banarasi silk sari", "designer lehenga", "magical girl cosplay outfit", "gothic lolita dress", 
  "queenly royal gown", "imperial court headdress", "bohemian maxi dress", "glittering mirror work lehenga", 
  "sheer nightgown", "pastel-colored dress",
  // Base OG Female Only
  "elegant evening gown", "silk sari", "bohemian summer dress", "sequined dress", "Banarasi silk sari", 
  "pastel Anarkali suit", "casual Kurti with jeans", "festive lehenga", "glass bangles", 
  "traditional nose ring", "jasmine in hair", "bindi", "flamboyant sari"
];

export const GENDER_MALE_ONLY = [
  "Sikh man", "traditional groom", "ancient gladiator", "samurai warrior", 
  "medieval blacksmith", "steampunk inventor boy", "elderly wise wizard",
  "neatly trimmed beard", "chiseled jawline", "broad-shouldered build", "calloused hands",
  "classic cream sherwani", "Nehru jacket", "heavy knight armor", "gilded samurai armor", 
  "formal military uniform",
  // Base OG Male Only
  "classic sherwani", "broad-shouldered", "royal Jodhpuri suit", "dhoti kurta"
];

export const VIBE_SETS: Record<string, string[]> = {
  "cyberpunk": [
    "neon-lit cyberpunk alley", "exosuit integration", "cyberpunk protagonist", "heavy knight armor", 
    "glitching holographic light", "modular tactical vest", "neon cyberpunk jacket", "futuristic neon cityscape", 
    "holographic screens", "color gel lighting red and blue", "cyberpunk hacker", "circuit board tattoo"
  ],
  "traditional_indian": [
    "heritage Rajasthani courtyard", "classic cream sherwani", "vibrant Banarasi silk sari", 
    "bindi ornament", "Holi festival celebration", "heritage craftsman", "ancient temple ruins", 
    "classical Kathakali performer", "royal tiara adornment", "miniature painting art"
  ],
  "bollywood_glamour": [
    "Bollywood diva", "designer lehenga", "glittering mirror work lehenga", "cinematic lighting", 
    "classic cream sherwani", "Bollywood starlet", "festive jubilation", "warm golden hour rim-light"
  ],
  "high_fantasy": [
    "enchanted forest", "ancient castle ruins", "fantasy archer", "glowing runes", "dragon rider", 
    "elf warrior", "mythological creature companion", "ancient gladiator", 
    "well proportioned full-figured hourglass silhouette", "long braided hair", "leather armor", 
    "chainmail hauberk", "translucent butterfly wings", "queenly royal gown", "fantasy adventurer"
  ],
  "global_western": [
    "modern tech park", "corporate CEO", "street artist", "minimalist apartment wear", "smartphone", 
    "denim jacket", "quiet library", "soft dappled sunlight", "vintage film camera", 
    "athletic sportswear", "functional tactical skirt suit", "software engineer", "business executive"
  ],
  "anime_cosplay": [
    "cell shading", "gothic lolita dress", "shonen hero", "kawaii anime style", "pastel-colored dress", 
    "manga style", "anime protagonist", "dynamic pose", "determined expression", "magical girl cosplay outfit",
    "cherry blossom garden", "floating island battlefield", "twin tails hairstyle"
  ],
  "dark_academia": [
    "quiet library", "academic robes", "soft dappled sunlight", "vintage film camera", "ancient scroll", 
    "Renaissance scholar", "moody low-key lighting", "candlelit room", "intellectual pursuit", "calm eyes"
  ],
  "gothic_horror": [
    "moonlit graveyard", "ghostly figure", "candlelit room", "spooky Halloween scene", "dark fantasy style", 
    "tattered robes", "pale complexion", "blood red lips", "spiderweb-draped chandelier", "sheer nightgown", 
    "haunted torment", "sinister intent"
  ],
  "desert_nomad": [
    "desert sand dunes", "flowing robe", "sun-baked earth", "tribal cloth wrap", "weathered scars", 
    "nomadic lifestyle", "tribal body paint", "desert nomad", "calloused hands", "harsh noonday sun"
  ],
  "space_explorer": [
    "spaceship interior", "exoplanet landscape", "zero gravity environment", "sci-fi helmet", "flight suit", 
    "cosmic nebula", "space marine", "spacefarer captain", "artificial neural lace implant"
  ],
  "steampunk_inventor": [
    "steampunk goggles and coat", "steampunk airship over Victorian city", "intricate brass gadgets", 
    "Victorian-era", "mechanical cog", "pocket watch", "steampunk inventor", "steampunk gears texture"
  ],
  "mythological_god_deity": [
    "ethereal divine light", "bioluminescent glow", "mythological creature companion", "ancient temple ruins", 
    "royal tiara adornment", "flowing robe", "glowing magical staff", "awestruck wonder", "Amazonian warrior",
    "nature dryad"
  ],
  "magical_girl": [
    "sparkling wand", "pastel-colored dress", "magical transformation sequence", "kawaii anime style", 
    "heart-shaped pendant", "translucent butterfly wings", "determined expression", "magical girl"
  ],
  "retro_futurism": [
    "retro sci-fi style", "atomic age", "sputnik satellite", "mid-century modern", "vintage television", 
    "post-apocalyptic survivor"
  ],
  "spiritual_pilgrim": [
    "simple monk's robe", "zen garden", "lotus flower", "prayer beads", "walking stick", 
    "incense smoke", "morning mist", "inner peace", "yoga pose", "mindful meditation", "serene contemplation"
  ]
};
