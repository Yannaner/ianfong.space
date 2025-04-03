const hackathonProjects = [
  {
    id: 1,
    title: "BrainLabs",
    event: "Hack PSU 2025",
    date: "March 2025",
    thumbnail: "./assets/images/trueconsensus.png",
    description: "Basically a physical learning network",
    technologies: ["Arduino","PySerial","Vite","React","Ngork","Nest.js","Vercel","Firebase"],
    achievement: "3rd Place Overall",
    demoLink: "https://www.youtube.com/watch?v=sG_KVpkztmY",
    githubLink: "https://github.com/Yannaner/HackPSU2025_BrainLab",
    teamMembers: ["Ian Fong", "Gary Gao"]
  },
  {
    id: 1,
    title: "MedEx",
    event: "MIT Grand Hack 2025",
    date: "March 2025",
    thumbnail: "./assets/images/trueconsensus.png",
    description: "An automation tool that enhances pharmacists' patient care by eliminating the need to call insurance companies for medication authorizations.",
    technologies: ["Retell","Vite","React","TailwindCSS","Nest.js","Vercel"],
    achievement: "3rd Place in Transformative Intelligence",
    demoLink: "https://youtu.be/xPrYNFir1h4",
    githubLink: "https://github.com/Yannaner/MIT-GH2025",
    teamMembers: ["Ian Fong", "Thomas Tam","Rayan Bachaoui","Thibault Heintz","Abhiruchi Mehta"]
  },
  {
    id: 1,
    title: "TrueConsensus",
    event: "Hack Knight 2025",
    date: "March 2025",
    thumbnail: "./assets/images/trueconsensus.png",
    description: "TrueConsensus is an open source voting platform where the voting algorithm is transparent and people can modify",
    technologies: ["Firebase","PostgreSQL","Next.js","React","TailwindCSS","Nest.js","Vercel"],
    achievement: "",
    demoLink: "https://tcfrontend.backendboosterbeast.com/main/",
    githubLink: "https://github.com/ShashiSugrim/TrueConsensus",
    teamMembers: ["Ian Fong", "Shashi Sugrim","Debasree Sen"]
  },
  {
    id: 1,
    title: "TurkEye",
    event: "Harvard Live AI 2025",
    date: "February 2025",
    thumbnail: "./assets/images/turkeye.png",
    description: "TurkEye is a Chrome extension that blocks AI-generated deepfakes, explicit content, and fake news.",
    technologies: ["Google cloud","Huggingface","javascript","python","OCR","Model finetune"],
    achievement: "Global Honorable Award in Artificial Intelliegence at Harvard",
    demoLink: "https://www.youtube.com/watch?v=J68gHvVtBZI&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=Mjg2NjY",
    githubLink: "https://devpost.com/software/turkeye?ref_content=user-portfolio&ref_feature=in_progress",
    teamMembers: ["Ian Fong", "Jessica Wang", "Joanna Wang","Khagendra Khatri"]
  },
  {
    id: 1,
    title: "Coupn",
    event: "HackNYU 2025",
    date: "February 2025",
    thumbnail: "./assets/images/coupn.png",
    description: "Coupn is built to help you save money by finding promo codes hidden in your email. We noticed many people ignore promo emails and existing promo code tools just don't work. Coupn fixes that by automatically scanning your promotion emails, finding the best deals, and showing them to you",
    technologies: ["Next.js", "Supabase","Gemini","Google cloud","OCR"],
    achievement: "",
    demoLink: "https://www.youtube.com/watch?v=vV4pUpTNVnE",
    githubLink: "https://devpost.com/software/coupn",
    teamMembers: ["Ian Fong", "Tom Zheng", "Ken Cheng"]
  },
  {
    id: 1,
    title: "PharmaSee",
    event: "HoyaHacks 2025",
    date: "Janurary 2024",
    thumbnail: "./assets/images/PharmaSee.png",
    description: "The inspiration behind PharmaSee stems from the alarming rate of medication prescription errors, up to 25% annually. These errors can lead to severe health complications and even fatalities. Our goal with PharmaSee is to bridge the communication gap between doctors, pharmacies, and patients by leveraging technology to ensure medication accuracy and adherence.",
    technologies: ["Next.js", "React","MongoDB","Flask","OCR"],
    achievement: "",
    demoLink: "https://devpost.com/software/pharmasee-cyhgki",
    githubLink: "https://github.com/Steven-UY/hoyahacks25",
    teamMembers: ["Ian Fong", "Chris Jin", "Steven Uy","Omobolaji Alabi"]
  },
  
  {
    id: 1,
    title: "In2ne",
    event: "Hack@Brown 2025",
    date: "February 2025",
    thumbnail: "./assets/images/in2ne.png",
    description: "",
    technologies: ["Next.js", "React","AWS","Flask","Swarm Agency","Pinecone","FastAPI"],
    achievement: "",
    demoLink: "https://devpost.com/software/in2ne",
    githubLink: "https://github.com/Yannaner/HackBrown25",
    teamMembers: ["Ian"]
  },
  {
    id: 1,
    title: "DataMesh",
    event: "Taipei Block Chain International Hackathon 2024",
    date: "December 2024",
    thumbnail: "./assets/images/datamesh.png",
    description: "DataMesh — the innovative solution that lets you turn your everyday purchases into a source of income! By uploading your grocery and retail receipts to our decentralized platform, you can earn stablecoins while helping build a more secure and transparent financial ecosystem. Whether you're shopping for essentials or treating yourself, every transaction matters!",
    technologies: ["Next.js", "React","Web3","Render Hosting","MongoDB","OrbitDB", "OCR"],
    achievement: "2nd Place in Student Track",
    demoLink: "https://www.youtube.com/watch?v=aw9_EpVe_Qo",
    githubLink: "https://github.com/Datamesh-Solana/DataMesh",
    teamMembers: ["Ian Fong", "DIVIJ", "Belenko","Sheng","Rojeng"]
  },
  
  
  
  {
    id: 1,
    title: "SustainAI",
    event: "HackPrinceton 2024",
    date: "November 2024",
    thumbnail: "./assets/images/sustainai.png",
    description: "SustainAI is an AI-powered web application designed to serve as your personal sustainability assistant. Through an interactive chatbot interface, users receive personalized recommendations on how to reduce their environmental impact. Whether it's suggesting energy-saving habits, recommending eco-friendly products, or providing sustainable transportation options, SustainAI tailors its advice to fit each user's unique lifestyle.",
    technologies: ["Next.js", "React","Python","MATLAB","MongoDB","TailWindCSS", "OpenAI"],
    achievement: "First Place at Amazon Sponsored Best use of GenAI",
    demoLink: "https://dorahacks.io/buidl/19493/",
    githubLink: "https://github.com/aymane-omari/HackPrinceton",
    teamMembers: ["Ian Fong", "Aymane Omari", "Salman Elgamal","Bimarsha Adhikari"]
  }
  
];