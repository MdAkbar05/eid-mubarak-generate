export const TONES = [
  { id: "islamic", label: "Islamic", emoji: "🌙", desc: "Spiritual & blessed" },
  {
    id: "emotional",
    label: "Emotional",
    emoji: "❤️",
    desc: "Heartfelt & warm",
  },
  { id: "funny", label: "Funny", emoji: "😄", desc: "Light & playful" },
  { id: "short", label: "Short & Simple", emoji: "✨", desc: "Quick & sweet" },
  { id: "bangla", label: "বাংলা", emoji: "🇧🇩", desc: "বাংলা শুভেচ্ছা" },
];

export const THEMES = [
  {
    id: "emerald",
    label: "Emerald Night",
    from: "#064e3b",
    via: "#065f46",
    to: "#0f172a",
    accent: "#34d399",
  },
  {
    id: "violet",
    label: "Midnight Violet",
    from: "#1e1b4b",
    via: "#312e81",
    to: "#0f172a",
    accent: "#a78bfa",
  },
  {
    id: "gold",
    label: "Desert Gold",
    from: "#78350f",
    via: "#92400e",
    to: "#1c1917",
    accent: "#fbbf24",
  },
  {
    id: "rose",
    label: "Rose Garden",
    from: "#4c0519",
    via: "#881337",
    to: "#1c1917",
    accent: "#fb7185",
  },
  // Add cold and dark themes
  {
    id: "dark",
    label: "Dark",
    from: "#0f172a",
    via: "#1c1917",
    to: "#1c1917",
    accent: "#fbbf24",
  },
];

const islamic = [
  ({ r, s }) =>
    `Eid Mubarak, ${r}! May Allah SWT shower His infinite blessings upon you and your family this blessed day. Taqabbal Allahu Minna wa Minkum. — ${s}`,
  ({ r, s }) =>
    `Assalamu Alaikum, ${r}! Wishing you and your loved ones a joyful Eid Mubarak. May Allah accept our prayers and fasts, and fill your home with peace and barakat. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! As the crescent moon graces our skies, may Allah's noor illuminate your heart and guide you on the straight path. — With love, ${s}`,
  ({ r, s }) =>
    `Dearest ${r}, Eid Mubarak! May the spirit of Ramadan remain in your heart always, and may Allah reward you abundantly for your patience and devotion. — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May this sacred occasion bring you closer to Allah, fill your days with His mercy, and your home with His blessings. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Taqabbal Allahu Minna wa Minkum — may Allah accept from us and from you. Wishing you a blessed celebration full of joy and gratitude. — ${s}`,
  ({ r, s }) =>
    `Ya ${r}, Eid Sa'eed! May Allah's rahma envelop you and your entire family. May this Eid be a reminder of His endless generosity and love. — ${s}`,
  ({ r, s }) =>
    `Blessed Eid to you, ${r}! May the Al-Mighty bless every step you take, every dua you make, and every dream you hold dear. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `${r}, may this Eid bring you the peace of paradise and the joy of knowing Allah is pleased with you. Eid Mubarak, dear one! — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! After a month of fasting, reflection and worship — may Allah accept all your ibadah and grant you and your family Jannah. — ${s}`,
  ({ r, s }) =>
    `To my beloved ${r} — Eid Mubarak! May your sadaqah be accepted, your sins forgiven, and your heart forever attached to the Quran. — ${s}`,
  ({ r, s }) =>
    `${r}, as the takbeer fills the air on this beautiful Eid morning, I pray Allah blesses you with health, happiness, and hidayah. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! May Allah make this a day of barakah for you — in your rizq, your health, your relationships and your deen. — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! "And complete the prescribed period and proclaim the greatness of Allah for guiding you, and be grateful." (2:185) — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! May Allah never deprive us of celebrating this blessed occasion together, and may He keep our bonds strong in faith and love. — ${s}`,
  ({ r, s }) =>
    `${r}! The day of Eid has arrived — a gift from Allah for the believers. May He accept your worship and bless you beyond measure. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `Dearest ${r}, on this Eid I ask Allah to grant you 'afiyah — complete wellbeing in your deen, dunya and akhirah. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May the angels carry your duas straight to the 'Arsh and may Allah answer every whisper of your heart. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak ${r}! SubhanAllah — another Eid, another opportunity to be grateful. May Allah keep us steadfast and bless us with many more. — ${s}`,
  ({ r, s }) =>
    `${r}, may this Eid be a new beginning — fresh mercy from Allah, renewed iman, and a heart full of hope. Eid Mubarak! — ${s}`,
];

const emotional = [
  ({ r, s }) =>
    `${r}, words can't describe how much you mean to me. On this beautiful Eid, I want you to know that I carry you in my heart every single day. Eid Mubarak, always. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}. Celebrating without you nearby isn't the same, but know that my thoughts and my love travel across every mile to reach you. — ${s}`,
  ({ r, s }) =>
    `This Eid, I'm grateful for so many things — and near the top of that list is you, ${r}. Thank you for being in my life. Eid Mubarak. — ${s}`,
  ({ r, s }) =>
    `${r}, as I look back on all our Eids together, my heart fills with gratitude and tears of joy. May we share countless more. Eid Mubarak. — With all my love, ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, my dearest ${r}. You are the reason some of my best memories are so beautiful. I hope this Eid brings you as much joy as you've given me. — ${s}`,
  ({ r, s }) =>
    `${r}, there are people who make ordinary moments feel extraordinary — you are one of them. Wishing you a Eid as warm and bright as your heart. — ${s}`,
  ({ r, s }) =>
    `No distance is too far when the heart remembers. Eid Mubarak, ${r} — I miss you, I love you, and I'm so proud of who you are. — ${s}`,
  ({ r, s }) =>
    `${r}, watching you grow, seeing your strength, your faith, your kindness — this Eid I am overwhelmed with pride and love. Eid Mubarak. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}. In a world that moves too fast, you are a reminder to slow down, to be grateful, and to love deeply. Thank you for that. — ${s}`,
  ({ r, s }) =>
    `${r}, I wish I could hold you close today. But until then, receive these words as a hug from my heart — Eid Mubarak, with all my love. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Some bonds defy time, distance, and everything in between. Ours is one of them. Here's to us and every Eid still to come. — ${s}`,
  ({ r, s }) =>
    `${r}, the laughter we've shared, the prayers we've said, the memories we've built — they are my treasures. Eid Mubarak, you mean the world to me. — ${s}`,
  ({ r, s }) =>
    `This Eid morning, my first thought was of you, ${r}. I hope your day is filled with love, light, and everything your beautiful heart deserves. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}. You have been through so much, and yet you smile. May this Eid reward you for every silent sacrifice you've made. — ${s}`,
  ({ r, s }) =>
    `${r}, you deserve a Eid filled with warmth, laughter, and peace. You give so much to everyone around you — today, let it all come back to you. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, my dear ${r}. May your eyes only see beauty, your heart only feel joy, and your life only bring you closer to your dreams. — ${s}`,
  ({ r, s }) =>
    `${r}, on this special day I just want to say — I love you, I appreciate you, and I am so blessed to call you mine. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! I know we haven't spoken in a while, but Eid felt like the perfect time to reach out and remind you — you are loved. — ${s}`,
  ({ r, s }) =>
    `${r}, some people are sunshine in human form — that's you. Wishing you the most radiant Eid Mubarak. — With a full heart, ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}. I don't say it enough — but having you in my life is one of Allah's greatest gifts to me. — ${s}`,
];

const funny = [
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Fair warning: I've already eaten three plates of biryani and I am NOT apologising. May your plate be as full as my heart 🍛 — ${s}`,
  ({ r, s }) =>
    `${r}! Eid Mubarak! Now that Ramadan is over, I can finally stop pretending I wasn't sneaking dates at 2am. 😅 May your Eid be blessed! — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! I fasted 30 days for this — I WILL have seconds at the Eid table and nobody is stopping me. Hope you're doing the same! 🎉 — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! This is your annual reminder that Eid calories don't count. It's science. Very Islamic science. — ${s} 🌙✨`,
  ({ r, s }) =>
    `Eid Mubarak to the one person I tolerated during Ramadan even when I was hungry — ${r}! That's true love. Now let's eat. — ${s} 😂`,
  ({ r, s }) =>
    `${r}! Eid Mubarak! May your eidiyah be generous, your clothes be new, and your relatives' questions about marriage be at an all-time low. 🤲 — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Sending you virtual hugs, biryani vibes, and the energy of someone who just did 30 days of fasting and wants EVERYONE to know. — ${s} 😄`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! I practiced patience all Ramadan. Please don't test it today by eating the last piece of seviyan before me. 😤🍮 — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! May your Eid be long, your nap be deep, and your relatives only ask you one awkward question max. — ${s} 🌙`,
  ({ r, s }) =>
    `${r}! Eid Mubarak! If you're reading this before eating breakfast on Eid morning, please stop and go eat something — you've EARNED it. — ${s} 🥐`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! The best part of Ramadan is that it makes Eid taste SO much better. Literally. I'm talking about the food. — ${s} 😋`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May this be the year you actually remember to call your relatives BEFORE they call you and give you a guilt trip. — ${s} 📞😂`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! I cleaned my room, ironed my thobe/abaya AND showed up on time to Eid prayer. Today I am a completely different person. — ${s} 😇`,
  ({ r, s }) =>
    `${r}! A whole month of suhoor at 4am has prepared me for ANYTHING. Including finally replying to your texts. Eid Mubarak! — ${s} 💬`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Roses are red, the moon is bright, I fasted a whole month and now I'm eating everything in sight. 🌙🍽️ — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May your Eid outfit slay, your selfies be stunning, and your WiFi be strong enough to send them all! — ${s} 📸✨`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! This is a legal notice that I am coming to your house and eating your mum's food. Please inform her. — ${s} 😂`,
  ({ r, s }) =>
    `${r}! Eid Mubarak! I've been saving my appetite since sehri. I hope whoever is cooking in your house is ready for this energy. — ${s} 🍖`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Some people glow up during Ramadan. I just got better at napping. Either way — we made it! 🎊 — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May your day be full of love, laughter, and an auntie who does NOT ask when you're getting married. We can dream. — ${s} 😅`,
];

const short = [
  ({ r, s }) =>
    `Eid Mubarak, ${r}! 🌙✨ Wishing you joy, peace and blessings. — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May this day be filled with happiness and love. — ${s} 🌙`,
  ({ r, s }) =>
    `Eid Mubarak! 🎉 Sending you all the warmth of this blessed day, ${r}. — ${s}`,
  ({ r, s }) =>
    `Happy Eid, ${r}! 🌙 May Allah bless you today and always. — ${s}`,
  ({ r, s }) =>
    `${r} — Eid Mubarak! Wishing you a day as beautiful as you. ✨ — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! 🕌 Peace, love, and endless blessings to you. — ${s}`,
  ({ r, s }) =>
    `Wishing you a joyful Eid, ${r}! May it be your best one yet. 🌙 — ${s}`,
  ({ r, s }) => `${r}, Eid Mubarak! 🌟 Grateful for you, always. — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak to you, ${r}! May happiness find you today. 💫 — ${s}`,
  ({ r, s }) => `${r} — Eid Sa'eed! 🌙 May your day be full of light. — ${s}`,
  ({ r, s }) => `Eid Mubarak, ${r}! Short message, big love. 🤍 — ${s}`,
  ({ r, s }) =>
    `Happy Eid! ${r}, may this day bring you everything you need. 🌙 — ${s}`,
  ({ r, s }) =>
    `${r}! Eid Mubarak 🎊 — May Allah bless you and keep you. — ${s}`,
  ({ r, s }) => `Eid Mubarak, ${r}. May your smile never fade. ✨ — ${s}`,
  ({ r, s }) => `${r}, sending Eid love and duas your way! 🌙 — ${s}`,
  ({ r, s }) => `Eid Mubarak ${r}! A blessed day for a blessed soul. 🕌 — ${s}`,
  ({ r, s }) =>
    `${r} — may this Eid be full of joy and gratitude. Eid Mubarak! — ${s}`,
  ({ r, s }) =>
    `Eid Mubarak, ${r}! Here's to love, laughter, and good food. 🍽️✨ — ${s}`,
  ({ r, s }) => `Happy Eid, ${r}! 🌙 You deserve every blessing today. — ${s}`,
  ({ r, s }) =>
    `${r}, Eid Mubarak! May this be a day you always remember. 🌟 — ${s}`,
];

const bangla = [
  ({ r, s }) =>
    `${r}, ঈদ মোবারক! 🌙 আল্লাহ তোমার জীবন সুখ, শান্তি ও বরকতে ভরিয়ে দিন। — ${s}`,
  ({ r, s }) =>
    `প্রিয় ${r}, ঈদের এই পবিত্র দিনে তোমার জন্য রইল অনেক দোয়া ও ভালোবাসা। ঈদ মোবারক! — ${s}`,
  ({ r, s }) =>
    `${r}! ঈদ মোবারক! 🎊 মহান আল্লাহ তোমার সব ইচ্ছা পূরণ করুন এবং তোমাকে সুস্বাস্থ্য দান করুন। — ${s}`,
  ({ r, s }) =>
    `ঈদ মোবারক, ${r}! রমজানের এক মাস সিয়াম সাধনার পর আজকের এই আনন্দময় দিনটি তোমার জীবনে নতুন আলো নিয়ে আসুক। — ${s}`,
  ({ r, s }) =>
    `${r}, তোমাকে ও তোমার পরিবারকে ঈদের শুভেচ্ছা জানাই। 🌙 আল্লাহ তোমাদের সবসময় হেফাজত করুন। — ${s}`,
  ({ r, s }) =>
    `ঈদ মোবারক ${r}! ✨ এই ঈদে তোমার মনে থাকুক আনন্দ, ঘরে থাকুক শান্তি, আর জীবনে থাকুক আল্লাহর রহমত। — ${s}`,
  ({ r, s }) =>
    `${r}, ঈদের চাঁদ উঠেছে আকাশে — তোমার জীবনেও সুখের আলো ছড়িয়ে পড়ুক। ঈদ মোবারক! 🌙 — ${s}`,
  ({ r, s }) =>
    `প্রিয় ${r}, দূরে থেকেও মন পড়ে আছে তোমার কাছে। ঈদ মোবারক! আল্লাহ তোমাকে ভালো রাখুন সবসময়। — ${s}`,
  ({ r, s }) =>
    `${r}! ঈদ মোবারক! 🎉 তোমার হাসি লেগে থাকুক মুখে, দোয়া কবুল হোক আল্লাহর দরবারে। — ${s}`,
  ({ r, s }) =>
    `ঈদ মোবারক, ${r}! নতুন পোশাক, সেমাই আর প্রিয়জনের সঙ্গ — এই ঈদ হোক তোমার সেরা ঈদ। 🍮 — ${s}`,
  ({ r, s }) =>
    `${r}, রোজার মাস শেষে আজ ঈদের খুশি। তোমার ইবাদত আল্লাহ কবুল করুন। ঈদ মোবারক! — ${s}`,
  ({ r, s }) =>
    `প্রিয় ${r}, আজকের এই ঈদের দিনে তোমার জন্য রইল হৃদয়ের গভীর থেকে শুভকামনা। ঈদ মোবারক! — ${s}`,
  ({ r, s }) =>
    `${r}! ঈদ মোবারক! তাকাব্বালাল্লাহু মিন্না ওয়া মিনকুম। 🌙 আল্লাহ আমাদের ও তোমাদের সব আমল কবুল করুন। — ${s}`,
  ({ r, s }) =>
    `ঈদ মোবারক ${r}! 🌟 তোমার জীবনের প্রতিটি মুহূর্ত আনন্দে ভরপুর হোক — এই দোয়াই করি আজকের দিনে। — ${s}`,
  ({ r, s }) =>
    `${r}, ঈদের এই শুভক্ষণে তোমার পাশে থাকতে পারলে মন ভরে যেত। দূর থেকে হলেও জানাই — ঈদ মোবারক! ❤️ — ${s}`,
  ({ r, s }) =>
    `প্রিয় ${r}! ঈদ মোবারক! 🕌 আল্লাহ তোমার গুনাহ মাফ করুন, রিজিক বাড়িয়ে দিন এবং দুনিয়া-আখিরাতে কামিয়াব করুন। — ${s}`,
  ({ r, s }) =>
    `${r}, ঈদ মোবারক! তোমার ঘরে আনন্দ থাকুক, মনে সুখ থাকুক, জীবনে বরকত থাকুক। 🌙✨ — ${s}`,
  ({ r, s }) =>
    `ঈদের শুভেচ্ছা নিও ${r}! 🎊 পরিবারের সাথে আনন্দময় সময় কাটাও — সেটাই হোক এই ঈদের সেরা উপহার। — ${s}`,
  ({ r, s }) =>
    `${r}! চাঁদ রাতের তারার মতো তোমার জীবন উজ্জ্বল হোক। ঈদ মোবারক, প্রিয় বন্ধু! 🌙⭐ — ${s}`,
  ({ r, s }) =>
    `প্রিয় ${r}, আজ ঈদের দিনে মনে পড়ছে তোমার কথা। তুমি ভালো থেকো, সুস্থ থেকো। ঈদ মোবারক! — ${s}`,
];

const TEMPLATES = { islamic, emotional, funny, short, bangla };

export function generateMessage(tone, senderName, receiverName) {
  const list = TEMPLATES[tone] || TEMPLATES.short;
  const fn = list[Math.floor(Math.random() * list.length)];
  const r = receiverName?.trim() || "dear friend";
  const s = senderName?.trim() || "a well-wisher";
  return fn({ r, s });
}
