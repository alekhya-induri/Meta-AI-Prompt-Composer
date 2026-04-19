export const PROMPT_OPTIONS = {
  identity: [
    "everyday person", "fashion model", "Gen Z influencer", "fitness enthusiast", "business professional", 
    "streetwear icon", "traditional bride", "traditional groom", "Bollywood star", "Hollywood actor", 
    "cyberpunk protagonist", "fantasy adventurer", "astronaut", "cowboy", "superhero", "CEO", 
    "doctor", "artist", "musician", "gamer", "traveler", "scientist", "detective", "chef", 
    "pirate", "samurai", "pilot", "entrepreneur", "athlete", "photographer", "desert nomad",
    "software developer", "content creator", "yoga instructor", "freelancer", "vintage fashion enthusiast", 
    "cyberpunk street samurai", "boho traveler", "indie musician",
    "podcast host", "barista", "florist", "news anchor", "makeup artist", "vlogger", "DJ", "friendly librarian", "mountain climber", "botanist", "jazz singer", "tech CEO", "royal princess", "regal queen", "noble king", "handsome prince", "anime protagonist", "fantasy RPG cosplayer", "ethereal elf", "magical wizard",
    "Greek god", "ancient Egyptian pharaoh", "majestic vampire", "ethereal mermaid", "mischievous fairy", "Viking raider", "Roman gladiator", "1920s flapper", "post-apocalyptic survivor", "Formula 1 driver", "professional snowboarder", "graceful ballerina", "cyborg android", "mad scientist"
  ],
  details: [
    "natural glowing skin", "sharp facial features", "soft youthful features", "athletic toned physique", 
    "slender elegant frame", "broad-shouldered build", "traditional ethnic jewelry", "minimalist modern jewelry", 
    "stylish glasses", "messy wavy hair", "sleek straight hair", "curly volume hair", "neatly styled hair", 
    "expressive eyes", "subtle day makeup", "bold artistic makeup", "natural unedited look",
    "freckles", "dimples", "thick expressive eyebrows", "glasses with wire frames", "bold winged eyeliner", 
    "subtle lip gloss", "messy bun", "braided hair", "slicked back hair", "well proportioned full-figured hourglass silhouette", 
    "tall stature", "chiseled jawline", "soft jawline",
    "joyful laugh lines", "piercing gaze", "gentle highlights in hair", "subtle blush", "expressive hand gestures near face", "wind-blown hair", "soft freckles", "intense eye contact", "radiant smile", "intricate face paint", "elf ears", "dramatic anime-style makeup", "glowing ethereal skin",
    "glowing supernatural eyes", "vampire fangs", "war paint", "battle scars", "cybernetic facial implants", "intricate henna tattoos", "glittering aquatic scales on cheeks", "sweat-glistening skin", "smudged dirt on cheeks"
  ],
  outfit: [
    "casual minimalist clothes", "oversized linen shirt", "ribbed knit top and jeans", "smart casual blazer", 
    "tailored business suit", "elegant evening gown", "traditional printed kurta", "designer lehenga", 
    "classic sherwani", "silk sari", "vintage 90s streetwear", "chunky knit sweater", "activewear", 
    "futuristic cyberpunk gear", "leather jacket and boots", "bohemian summer dress", "luxurious velvet robe", 
    "beachwear", "winter coat", "chef uniform", "turtleneck and trench coat", "flowy summer sundress", 
    "baggy Y2K streetwear", "embroidered ethnic tunic", "minimalist monochrome outfit", "sequined party dress", 
    "vintage sports jersey", "tailored waistcoat", "denim jacket and white tee", "cozy oversized hoodie",
    "cashmere turtleneck", "flannel shirt", "denim overalls", "winter scarf and beanie", "leather aviator jacket", "silk bomber jacket", "heavy knitted cardigan", "ornate royal crown and robes", "jewel-encrusted tiara", "medieval knight armor", "elaborate anime cosplay outfit", "velvet Victorian gown", "tactical tech-wear vest",
    "heavy fur-lined Viking cloak", "shining silver plate armor", "Roman gladiator chest plate", "1920s sequined dress", "weathered leather duster", "Formula 1 racing suit", "protective snow gear", "elegant ballet tutu", "post-apocalyptic scavenger gear", "tattered gothic robes"
  ],
  setting: [
    "sun-drenched minimalist apartment", "cozy dimly lit cafe", "bustling global city street", "neon-lit cyberpunk alley", 
    "traditional ancestral courtyard", "ancient ornate temple", "serene tropical resort", "rooftop overlooking the city", 
    "lush green forest", "modern office workspace", "high-end fashion studio", "scenic mountain viewpoint", 
    "futuristic metropolis", "train station platform", "luxury hotel lobby", "quiet library", "concert stage",
    "minimalist Tokyo cafe", "rain-slicked city streets", "high-rise apartment balcony", "botanical greenhouse", 
    "hidden speakeasy bar", "rooftop garden at dusk", "subway train carriage", "ancient ruins", "desert oasis", 
    "art gallery exhibition",
    "recording studio", "botanical garden path", "cozy reading nook", "neon-lit diner booth", "art studio filled with canvas", "sunlit kitchen", "record store aisle", "grand castle throne room", "enchanted fantasy forest", "cherry blossom courtyard", "neon Tokyo crosswalk", "royal ballroom",
    "ancient Mount Olympus", "dark Gothic castle", "underwater coral reef", "Viking longship in a storm", "Roman Colosseum", "1920s speakeasy", "post-apocalyptic wasteland", "snowy mountain peak", "neon-lit underground racing track", "zero-gravity space station"
  ],
  timeOfDay: [
    "dawn", "sunrise", "early morning", "morning", "noon", "golden hour", "late afternoon", 
    "sunset", "twilight", "evening", "night", "midnight", "blue hour", "midday sun", "deep night"
  ],
  mood: [
    "soft gentle smile", "confident and powerful", "calm and relaxed", "mysterious", "dramatic", 
    "thoughtful", "dreamy", "playful", "serious", "elegant", "victorious", "intense", "romantic", "candid mid-laugh",
    "intensely focused", "sleepy and cozy", "ethereal and distant", "confident smirk", "gentle loving gaze", 
    "melancholy", "fierce and rebellious"
  ],
  pose: [
    "looking directly at the viewer", "looking over the shoulder", "candid looking away", "standing confidently", 
    "sitting gracefully", "leaning against a wall", "walking towards camera", "mid-action movement", 
    "arms crossed", "hands in pockets", "meditating", "posing dynamically",
    "looking up at the camera", "looking down at the camera", "fixing hair", "adjusting glasses", 
    "holding a coffee cup", "leaning back casually", "mid-stride walking", "sitting on the edge of a seat", 
    "resting chin on hand",
    "leaning in close to the camera", "resting face on hands", "looking up thoughtfully", "holding a warm cup near face", "peeking over sunglasses", "holding a vintage camera", "brushing hair behind ear", "wielding a glowing sword", "bowing gracefully", "striking a confident anime pose", "adjusting a royal crown",
    "floating weightlessly", "bracing against a blizzard", "wiping sweat from forehead", "adjusting driving goggles", "casting a magical spell", "biting lip playfully", "screaming in battle", "smirking wickedly"
  ],
  cameraAngle: [
    "medium shot portrait", "close-up portrait", "85mm portrait lens", "smartphone selfie style", 
    "candid snapshot", "Vogue editorial angle", "35mm film photography", "eye level", "low angle cinematic", 
    "over-the-shoulder", "symmetrical framing", "Dutch angle", "bird's-eye view", "worm's-eye view", 
    "extreme close-up", "50mm standard lens", "14mm wide-angle lens",
    "tight waist-up shot", "intimate face close-up", "portrait mode blur", "selfie angle from above", "vlogger camera perspective", "macro photography on face", "100mm portrait lens"
  ],
  lighting: [
    "soft morning sunlight", "warm golden hour rim-light", "studio beauty lighting", "neon city bokeh", 
    "cool blue ambient light", "dramatic high contrast", "soft window side-lighting", "cinematic moody lighting", 
    "natural diffused light", "harsh flash photography", "lens flare", "dappled sunlight through trees", 
    "neon sign glow", "candlelight", "dim moody lighting", "harsh direct sunlight", "soft overcast lighting", 
    "color gel lighting (red and blue)",
    "ring light glow", "soft cloudy daylight", "warm firelight", "golden hour backlighting with soft fill", "neon blue and pink side lighting", "sunlight filtering through blinds", "mystical glowing aura", "dramatic stage spotlighting",
    "strobe lights", "flashing paparazzi cameras", "underwater light rays", "thick glowing fog", "harsh desert sun", "lightning flashes", "bioluminescent glow"
  ],
  style: [
    "Instagram lifestyle aesthetic", "photorealistic", "ultra realistic", "cinematic", "35mm film", 
    "disposable camera aesthetic", "anime", "illustration", "watercolor", "3D render", "fantasy art", 
    "vintage photo", "cyberpunk", "fashion editorial", "magazine cover", "polaroid",
    "minimalist aesthetic", "dark academia", "light academia", "cottagecore", "retro 70s vintage", 
    "National Geographic style",
    "cinematic realism", "polaroid snapshot", "candid documentary style", "high fashion portrait", "Lofi aesthetic", "magazine cover photography", "Studio Ghibli style animation", "hyper-realistic fantasy illustration", "retro anime aesthetic", "CGI masterpiece",
    "dark fantasy illustration", "gothic horror aesthetic", "synthwave neon", "sports photography", "vintage 1920s sepia", "comic book art style"
  ],
  era: [
    "modern day", "90s nostalgic", "80s retro", "futuristic", "medieval", "ancient history", "Victorian", 
    "post-apocalyptic", "timeless", "mythology-inspired", "1920s classic", "Y2K era", "synthwave 80s", "Edwardian",
    "early 2000s Y2K", "retro 1950s diner", "victorian steampunk", "futuristic sci-fi", "1970s disco", "high fantasy medieval", "feudal Japan", "distant galactic future"
  ],
  props: [
    "coffee cup", "smartphone", "book", "laptop", "camera", "sunglasses", "headphones", "flower bouquet", 
    "guitar", "traditional oil lamp", "vintage car", "motorcycle", "sword", "shield",
    "vintage film camera", "steaming coffee mug", "wired headphones", "vinyl record", "canvas tote bag", 
    "skateboard", "neon umbrella", "glass of wine",
    "podcast microphone", "steaming teacup", "oversized headphones", "reading glasses", "polaroid picture", "vinyl record sleeve", "glowing magical staff", "ornate royal scepter", "katana", "steampunk goggles",
    "Viking battle axe", "gladiatorial shield", "steaming test tube", "racing helmet", "snowboard", "ancient scroll", "glowing crystal ball", "cybernetic arm"
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

export const OPTION_DESCRIPTIONS: Record<string, string> = {
  "85mm portrait lens": "Flattering for faces, softly blurs the background",
  "50mm standard lens": "Similar to the human eye, feels natural and balanced",
  "14mm wide-angle lens": "Captures a huge area, dynamic but stretches edges",
  "35mm film photography": "Vintage, cinematic look with subtle film grain",
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
  "color gel lighting (red and blue)": "Studio lighting using colored filters on the lamps",
  "disposable camera aesthetic": "Nostalgic 90s party vibe, harsh flash, saturated colors",
  "National Geographic style": "Stunning, authentic, world-class travel documentary photography",
  "dark academia": "Moody, vintage scholarly aesthetic (tweed, old books, dark wood)",
  "cottagecore": "Romanticized rural countryside aesthetic (nature, simplicity, flowy clothes)",
  "tight waist-up shot": "Forces the AI to focus mostly on the face and upper torso",
  "ring light glow": "Creates a modern vlogger look with circular catchlights in the eyes",
  "intimate face close-up": "Extreme close-up prioritizing facial expressions",
  "Studio Ghibli style animation": "Beautiful, soft, hand-drawn anime aesthetic",
  "hyper-realistic fantasy illustration": "Highly detailed, magical digital art style"
};
