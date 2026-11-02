const platforms = [
  {
    slug: "youtube",
    name: "YouTube",
    color: "#ff0000",
    icon: "youtube",
    domains: ["youtube.com", "youtu.be", "youtube-nocookie.com"],
    title: "YouTube Video and Shorts Downloader",
    short: "Review public YouTube video and Shorts links.",
    description: "Paste a public YouTube video or Shorts URL and review video options offered by a third-party service. Availability depends on the source and your permissions.",
    types: ["Videos", "Shorts", "MP4", "Available video quality"],
    tips: ["Use the original YouTube watch or Shorts link.", "Private, deleted, restricted, or unavailable videos may not be accessible.", "Only save videos you are authorized to keep."]
  },
  {
    slug: "instagram",
    name: "Instagram",
    color: "#e4405f",
    icon: "instagram",
    domains: ["instagram.com", "instagr.am"],
    title: "Instagram Reels and Video Downloader",
    short: "Review public Instagram Reels and video posts.",
    description: "Paste a public Instagram Reel or video post URL and review video options offered by a third-party service. Private or restricted media may not be accessible.",
    types: ["Reels", "Public video posts", "MP4", "Available video quality"],
    tips: ["Copy the share link from the Instagram app or browser.", "Use public media links only.", "For best quality, use the original post link."]
  },
  {
    slug: "tiktok",
    name: "TikTok",
    color: "#00f2ea",
    icon: "tiktok",
    domains: ["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"],
    title: "TikTok Video Downloader",
    short: "Review public TikTok video links.",
    description: "Paste a public TikTok video URL and review video options offered by a third-party service. Availability depends on the source and your permissions.",
    types: ["Public videos", "MP4", "Available video quality"],
    tips: ["Copy the TikTok share URL directly.", "Private, removed, or region-restricted videos may not load.", "Only save videos you are authorized to keep."]
  },
  {
    slug: "facebook",
    name: "Facebook",
    color: "#1877f2",
    icon: "facebook",
    domains: ["facebook.com", "fb.watch", "fb.com"],
    title: "Facebook Video and Reels Downloader",
    short: "Review public Facebook videos and Reels.",
    description: "Paste a public Facebook video or Reel URL and review video options offered by a third-party service. Private posts may not be accessible.",
    types: ["Public videos", "Reels", "Clips", "MP4"],
    tips: ["Public Facebook links work best.", "Private group or login-only content may be blocked.", "Copy the full post or video link."]
  },
  {
    slug: "x",
    name: "X Twitter",
    color: "#111111",
    icon: "x",
    domains: ["twitter.com", "x.com"],
    title: "X (Twitter) Video Downloader",
    short: "Review public video posts on X (Twitter).",
    description: "Paste a public X or Twitter post URL and review video options offered by a third-party service. Results depend on post access and permissions.",
    types: ["Public post videos", "MP4", "Available video quality"],
    tips: ["Use the post URL, not only a profile URL.", "Some posts may contain several media files.", "Public links give the best results."]
  },
  {
    slug: "snapchat",
    name: "Snapchat",
    color: "#fffc00",
    icon: "snapchat",
    domains: ["snapchat.com"],
    title: "Snapchat Spotlight Video Downloader",
    short: "Review public Snapchat Spotlight videos.",
    description: "Paste a public Snapchat Spotlight video link and review video options offered by a third-party service. Private or app-only content may not work.",
    types: ["Spotlight videos", "Public story videos", "MP4"],
    tips: ["Use public Snapchat links.", "App-only or private content may not be available.", "Respect creator permissions."]
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    color: "#0a66c2",
    icon: "linkedin",
    domains: ["linkedin.com", "lnkd.in"],
    title: "LinkedIn Video Downloader",
    short: "Review public LinkedIn post videos.",
    description: "Paste a public LinkedIn post URL and review video options offered by a third-party service. Login-restricted posts may not be accessible.",
    types: ["Public post videos", "MP4", "Available video quality"],
    tips: ["Use public post URLs.", "Login-restricted company or profile media can be unavailable.", "Keep downloaded content for lawful personal use."]
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    color: "#e60023",
    icon: "pinterest",
    domains: ["pinterest.com", "pin.it"],
    title: "Pinterest Video Downloader",
    short: "Review public Pinterest video Pins.",
    description: "Paste a public Pinterest video Pin URL and review video options offered by a third-party service. Results depend on Pin access.",
    types: ["Video Pins", "Idea Pin videos", "MP4", "Available video quality"],
    tips: ["Copy the video Pin URL from share options.", "Private or removed Pins may not be accessible.", "Use source links responsibly."]
  },
  {
    slug: "reddit",
    name: "Reddit",
    color: "#ff4500",
    icon: "reddit",
    domains: ["reddit.com", "redd.it", "v.redd.it"],
    title: "Reddit Video Downloader",
    short: "Review public Reddit video posts.",
    description: "Paste a public Reddit post URL and review video options offered by a third-party service. Results depend on post access and permissions.",
    types: ["Public post videos", "MP4", "Available video quality"],
    tips: ["Copy the Reddit post URL.", "Removed, private, or restricted posts may not work.", "Only save videos you are authorized to keep."]
  },
  {
    slug: "discord",
    name: "Discord",
    color: "#5865f2",
    icon: "discord",
    domains: ["discord.com", "discordapp.com", "cdn.discordapp.com", "media.discordapp.net"],
    title: "Discord Video Downloader",
    short: "Review public Discord video attachments.",
    description: "Paste a direct public Discord video attachment URL and review video options offered by a third-party service. Private or expired links may not work.",
    types: ["Public video attachments", "MP4", "Available video quality"],
    tips: ["Use a direct public media link.", "Private server links can expire.", "Never share private messages or credentials."]
  },
  {
    slug: "telegram",
    name: "Telegram",
    color: "#26a5e4",
    icon: "telegram",
    domains: ["t.me", "telegram.me", "telegram.dog"],
    title: "Telegram Video Downloader",
    short: "Review public Telegram channel videos.",
    description: "Paste a public Telegram video post URL and review video options offered by a third-party service. Private channels and chats are not supported.",
    types: ["Public channel videos", "MP4", "Available video quality"],
    tips: ["Public channel or post URLs work best.", "Private chats are not supported.", "Use the full t.me post link."]
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    color: "#25d366",
    icon: "whatsapp",
    domains: ["whatsapp.com", "wa.me"],
    title: "WhatsApp Video Downloader",
    short: "Review accessible public WhatsApp video links.",
    description: "Paste an accessible public WhatsApp video link and review video options offered by a third-party service. Private or device-only status media is not available.",
    types: ["Public video links", "Status videos where accessible", "MP4"],
    tips: ["Use only media you have permission to save.", "Some WhatsApp content is local to the device.", "Do not share private chat data."]
  },
  {
    slug: "threads",
    name: "Threads",
    color: "#111111",
    icon: "threads",
    domains: ["threads.com", "threads.net"],
    title: "Threads Video Downloader",
    short: "Review public Threads video posts.",
    description: "Paste a public Threads video post URL and review video options offered by a third-party service. Results depend on post access.",
    types: ["Public post videos", "MP4", "Available video quality"],
    tips: ["Use a public Threads video post link.", "Private or deleted posts may not be accessible.", "Respect copyright and platform terms."]
  },
  {
    slug: "dailymotion",
    name: "Dailymotion",
    color: "#0066dc",
    icon: "dailymotion",
    domains: ["dailymotion.com", "dai.ly"],
    title: "Dailymotion Video Downloader",
    short: "Download Dailymotion videos in HD quality where available.",
    description: "Paste a public Dailymotion video URL and review quality options offered by a third-party service. Results depend on availability.",
    types: ["Public videos", "MP4", "Available video quality"],
    tips: ["Copy the full Dailymotion video link.", "Available quality depends on the source upload.", "Choose a lower quality if your connection is slow."]
  },
  {
    slug: "twitch",
    name: "Twitch",
    color: "#9146ff",
    icon: "twitch",
    domains: ["twitch.tv", "clips.twitch.tv"],
    title: "Twitch Clip and VOD Video Downloader",
    short: "Review public Twitch clips and VOD videos.",
    description: "Paste a Twitch clip, stream, or VOD URL to prepare clip, MP4, and available quality download choices.",
    types: ["Clips", "Streams", "VODs", "MP4", "Quality selection"],
    tips: ["Use clip or VOD URLs for best results.", "Long streams can take more time to process.", "Respect streamer and platform rules."]
  }
];

const allTools = platforms;
const platformBySlug = Object.fromEntries(allTools.map((platform) => [platform.slug, platform]));
const SITE_BASE_URL = "https://snapvideohub.com/";
const COOKIE_CONSENT_KEY = "snapvideohub-cookie-consent-v2";
const LEGACY_COOKIE_CONSENT_KEY = "snapvideohub-cookie-consent";
const GOOGLE_ANALYTICS_ID = "G-SWN1H5TQS2";
const GOOGLE_ADS_ID = "AW-11083388283";
const redirectDestinations = {
  youtube: ["https://tech-trans.com.pl/", "https://vidssave.com/youtube-video-downloader-8hs", "https://www.snapyt.app/"],
  instagram: ["https://fastdl.app/en5IW", "https://videodropper.app/", "https://indown.io/en5"],
  tiktok: ["https://snaptik.app/en3", "https://ssstik.io/", "https://snaptik.com.lc/"],
  facebook: ["https://fdown.net/", "https://snapsave.app/", "https://fdownloader.net/en"],
  x: ["https://twitterapi.io/tools/twitter-video-downloader", "https://x-downloader.com/en/"],
  pinterest: ["https://klickpin.com/en5", "https://ssspin.io/", "https://pindown.io/en1"],
  reddit: ["https://rapidsave.com/", "https://redvid.io/", "https://viddit.io/"],
  snapchat: ["https://storygrab.io/en2", "https://www.socialking.in/snapchat-video-downloader", "https://schatdownloader.com/"],
  linkedin: ["https://taplio.com/linkedin-video-downloader", "https://myfeedin.co/free-tools/linkedin-video-downloader", "https://reepl.io/free-tools/linkedin-video-downloader"],
  telegram: ["https://steptodown.com/telegram-video-downloader/", "https://screenapp.io/features/telegram-video-downloader", "https://telegramdownloadmedia.com/"],
  whatsapp: ["https://www.statusvide.com/category/whatsapp-status-video-download/", "https://www.kkonline.in/status-tag/love-status-download?page=6"],
  twitch: ["https://untwitch.com/", "https://dwitch.net/", "https://clipr.gg/"],
  threads: ["https://www.threadsdownloader.com/", "https://threadster.app/", "https://www.threadsdl.app/"],
  dailymotion: ["https://www.savethevideo.com/dailymotion-downloader", "https://vidssave.com/dailymotion-1mf", "https://snapscooper.com/tools/dailymotion"],
  discord: ["https://screenapp.io/features/discord-video-downloader", "https://online.fliflik.com/discord-video-downloader/", "https://screenapp.io/features/video-downloader"]
};
const LANGUAGE_STORAGE_KEY = "snapvideohub-language";
const GOOGLE_TRANSLATE_ELEMENT_ID = "google_translate_element";
const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-script";

const languages = [
  { code: "en", nativeName: "English", name: "English", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", name: "Hindi", dir: "ltr" },
  { code: "es", nativeName: "Español", name: "Spanish", dir: "ltr" },
  { code: "fr", nativeName: "Français", name: "French", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", name: "German", dir: "ltr" },
  { code: "pt", nativeName: "Português", name: "Portuguese", dir: "ltr" },
  { code: "ru", nativeName: "Русский", name: "Russian", dir: "ltr" },
  { code: "ar", nativeName: "العربية", name: "Arabic", dir: "rtl" },
  { code: "bn", nativeName: "বাংলা", name: "Bengali", dir: "ltr" },
  { code: "zh-CN", nativeName: "中文", name: "Chinese", dir: "ltr" },
  { code: "ja", nativeName: "日本語", name: "Japanese", dir: "ltr" },
  { code: "ko", nativeName: "한국어", name: "Korean", dir: "ltr" },
  { code: "tr", nativeName: "Türkçe", name: "Turkish", dir: "ltr" },
  { code: "it", nativeName: "Italiano", name: "Italian", dir: "ltr" },
  { code: "id", nativeName: "Bahasa Indonesia", name: "Indonesian", dir: "ltr" },
  { code: "ta", nativeName: "தமிழ்", name: "Tamil", dir: "ltr" },
  { code: "te", nativeName: "తెలుగు", name: "Telugu", dir: "ltr" },
  { code: "ml", nativeName: "മലയാളം", name: "Malayalam", dir: "ltr" },
  { code: "gu", nativeName: "ગુજરાતી", name: "Gujarati", dir: "ltr" },
  { code: "kn", nativeName: "ಕನ್ನಡ", name: "Kannada", dir: "ltr" },
  { code: "pa", nativeName: "ਪੰਜਾਬੀ", name: "Punjabi", dir: "ltr" },
  { code: "ur", nativeName: "اردو", name: "Urdu", dir: "rtl" }
];

const tutorials = [
  {
    id: "youtube-hd",
    tag: "YouTube",
    title: "How to Download YouTube Videos and Shorts",
    intro: "Use the YouTube guide to review video options for a public video or Shorts link.",
    steps: ["Open YouTube and copy the video or Shorts link.", "Visit SnapVideoHub and paste the copied URL into the video link field.", "Choose a download site to prepare the handoff.", "Review the external site's name and link.", "Select its button to open the site and continue there."],
    notes: ["Private, age-restricted, removed, or region-blocked videos may not be available.", "Use only content you have permission to download."]
  },
  {
    id: "youtube-fixes",
    tag: "Troubleshooting",
    title: "Why Cannot I Download YouTube Videos? Common Fixes",
    intro: "A YouTube link can fail for several normal reasons. Most issues are caused by the URL, privacy settings, region restrictions, or temporary processing errors.",
    steps: ["Refresh the page and paste the URL again.", "Re-copy the link from the Share button.", "Try another browser or disable a VPN temporarily.", "Check that the video is public and still available.", "Try a lower quality if your network is unstable."],
    notes: ["SnapVideoHub never asks for your YouTube password or private account access."]
  },
  {
    id: "instagram-reels",
    tag: "Instagram",
    title: "How to Download Instagram Reels and Videos",
    intro: "Use this guide to review video options for public Instagram Reels and video posts.",
    steps: ["Open a public Instagram Reel or video post.", "Copy its share link.", "Open the Instagram guide on SnapVideoHub.", "Paste the URL and review video options.", "Continue to the listed third-party service if you choose."],
    notes: ["Public content works best. Private account content may be unavailable."]
  },
  {
    id: "instagram-hd",
    tag: "Instagram",
    title: "How to Save Instagram Videos in HD Quality",
    intro: "Video quality depends on the public source link and the third-party service.",
    steps: ["Use the original Instagram video or Reel link.", "Paste the link into the Instagram guide.", "Review options provided by the third-party service.", "Check whether a suitable quality is available.", "Continue to that service if you choose."],
    notes: ["For best quality, keep your internet stable and use the original post link."]
  },
  {
    id: "tiktok-watermark",
    tag: "TikTok",
    title: "How to Review Public TikTok Videos",
    intro: "Use this guide to review video options for public TikTok links.",
    steps: ["Copy a public TikTok video link.", "Open the TikTok guide on SnapVideoHub.", "Paste the URL into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open it."],
    notes: ["Respect creator rights and platform rules."]
  },
  {
    id: "facebook-reels",
    tag: "Facebook",
    title: "How to Download Facebook Videos and Reels Easily",
    intro: "The Facebook guide helps you review public video and Reel links.",
    steps: ["Open the Facebook video or Reel.", "Copy the post or video link.", "Paste it into SnapVideoHub.", "Choose the video quality.", "Click download."],
    notes: ["Private groups, login-only videos, and restricted posts may not return files."]
  },
  {
    id: "whatsapp-status",
    tag: "WhatsApp",
    title: "How to Review Public WhatsApp Video Links",
    intro: "Some WhatsApp status videos are local to a device, so use only public video links you are authorized to access.",
    steps: ["Copy a public WhatsApp video link you can access.", "Open the WhatsApp guide on SnapVideoHub.", "Paste the URL into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open that service."],
    notes: ["Do not upload private chat data or sensitive personal media."]
  },
  {
    id: "telegram-media",
    tag: "Telegram",
    title: "How to Review Public Telegram Videos",
    intro: "Use this guide to review video options for public Telegram channel posts.",
    steps: ["Copy the public Telegram video post URL.", "Open the Telegram guide on SnapVideoHub.", "Paste the URL into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open that service."],
    notes: ["Private chats and restricted content are not supported."]
  },
  {
    id: "pinterest-media",
    tag: "Pinterest",
    title: "How to Review Pinterest Video Pins",
    intro: "Use this guide to review video options for public Pinterest video Pins.",
    steps: ["Open a public Pinterest video Pin.", "Copy the Pin URL.", "Open the Pinterest guide on SnapVideoHub.", "Paste the link and review video options.", "Continue to the third-party service if you choose."],
    notes: ["Available video quality depends on the Pin source."]
  },
  {
    id: "snapchat-spotlight",
    tag: "Snapchat",
    title: "How to Download Snapchat Spotlight Videos",
    intro: "Use the Snapchat page for public Spotlight and story video links.",
    steps: ["Copy the Snapchat Spotlight link.", "Open SnapVideoHub Snapchat Downloader.", "Paste the URL.", "Choose HD video.", "Download the prepared video."],
    notes: ["Private or app-only Snapchat content may not be available."]
  },
  {
    id: "threads-media",
    tag: "Threads",
    title: "How to Review Threads Videos",
    intro: "Use this guide to review video options for public Threads video posts.",
    steps: ["Copy the link to a public Threads video post.", "Open the Threads guide on SnapVideoHub.", "Paste the link into the video field.", "Review options from the third-party service.", "Continue only if you choose to open it."],
    notes: ["Public post links give the best results."]
  },
  {
    id: "twitch-clips",
    tag: "Twitch",
    title: "How to Download Twitch Clips and Stream Videos",
    intro: "Use Twitch pages to review public clips, VODs, stream highlights, and video quality options.",
    steps: ["Copy the Twitch clip, stream, or VOD URL.", "Paste it into the Twitch guide on SnapVideoHub.", "Review video options from the external service.", "Check the quality and destination.", "Continue to that service if you choose."],
    notes: ["Long VODs can take more time to process."]
  },
  {
    id: "discord-attachments",
    tag: "Discord",
    title: "How to Review Public Discord Videos",
    intro: "Use this guide to review a public Discord video attachment link.",
    steps: ["Copy a public Discord video attachment URL.", "Paste it into SnapVideoHub.", "Review video options from the third-party service.", "Check that the link has not expired.", "Continue to that service if you choose."],
    notes: ["Private server media can expire or require permissions."]
  },
  {
    id: "linkedin-video",
    tag: "LinkedIn",
    title: "How to Download LinkedIn Videos Online",
    intro: "Use LinkedIn pages for public post videos, business clips, learning posts, and media previews.",
    steps: ["Copy the LinkedIn post URL.", "Open the LinkedIn guide on SnapVideoHub.", "Paste it into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open it."],
    notes: ["Login-restricted media may not be available."]
  },
  {
    id: "dailymotion-hd",
    tag: "Dailymotion",
    title: "How to Download Dailymotion Videos in HD",
    intro: "Use this guide to review quality options for public Dailymotion video links.",
    steps: ["Copy the Dailymotion video link.", "Paste it into SnapVideoHub.", "Select HD quality.", "Choose MP4.", "Download instantly."],
    notes: ["Available quality depends on the source upload."]
  },
  {
    id: "x-video",
    tag: "X (Twitter)",
    title: "How to Review Public X Videos",
    intro: "Use this guide to review video options for public X (Twitter) posts.",
    steps: ["Copy the link to a public post containing a video.", "Open the X guide on SnapVideoHub.", "Paste the post URL into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open it."],
    notes: ["Posts with restricted visibility may not be accessible."]
  },
  {
    id: "reddit-video",
    tag: "Reddit",
    title: "How to Review Public Reddit Videos",
    intro: "Use this guide to review video options for public Reddit posts.",
    steps: ["Copy the public Reddit post URL.", "Open the Reddit guide on SnapVideoHub.", "Paste the post URL into the video link field.", "Review options from the third-party service.", "Continue only if you choose to open it."],
    notes: ["Removed, private, or restricted posts may not be accessible."]
  },
  {
    id: "mobile-speed",
    tag: "Mobile",
    title: "How to Download Videos Faster on Mobile Devices",
    intro: "Mobile speed depends on your connection, device storage, browser, and selected quality.",
    steps: ["Use strong WiFi or a stable mobile connection.", "Close background apps.", "Use the latest browser version.", "Clear browser cache when pages feel slow.", "Choose lower quality if your internet is weak."],
    notes: ["Large 4K files take more time and storage space."]
  },
  {
    id: "safety",
    tag: "Safety",
    title: "Is SnapVideoHub Safe to Use?",
    intro: "SnapVideoHub is designed around a simple public-link workflow without asking for private credentials.",
    steps: ["Paste only public video links.", "Never enter social media passwords.", "Avoid suspicious third-party popups.", "Use HTTPS browsing.", "Download content legally and responsibly."],
    notes: ["The website should never request private messages, payment details, or account passwords."]
  },
  {
    id: "devices",
    tag: "Devices",
    title: "How to Use SnapVideoHub on Android, iPhone and PC",
    intro: "The downloader layout is responsive and works across common devices.",
    steps: ["Android users can open Chrome and use SnapVideoHub normally.", "iPhone users can use Safari for video links.", "PC and laptop users can use Chrome, Edge, Firefox, or another modern browser.", "Paste the video URL and review available quality options."],
    notes: ["Browser download locations vary by device."]
  },
  {
    id: "beginner-guide",
    tag: "Beginner",
    title: "Beginner Guide to Online Video Downloaders",
    intro: "SnapVideoHub helps users review public video URLs without installing software.",
    steps: ["Copy a public video link from a supported platform.", "Paste it into the video link field.", "Choose the platform and review video quality options.", "Wait for the external service to show available choices.", "Continue to that service if you choose."],
    notes: ["Availability depends on the source video and third-party service."]
  }
];

const partnerWebsites = [
  { platform: "YouTube", items: [
    ["tech-trans.com.pl", "A third-party YouTube video link tool listed in the supplied partner directory."],
    ["VidsSave (YouTube)", "An online media tool with a YouTube video downloader for public links."],
    ["SnapYT", "A YouTube-focused website for preparing video downloads from supported public links."]
  ] },
  { platform: "Instagram", items: [
    ["FastDl", "An Instagram video tool for supported public Reels and video posts."],
    ["VideoDropper", "A web tool listed for processing supported Instagram video links."],
    ["Indown", "An Instagram link utility for public posts and media when available."]
  ] },
  { platform: "TikTok", items: [
    ["SnapTik", "A TikTok video tool for supported public video links and available download formats."],
    ["SSSTik", "A third-party TikTok downloader for public clips and available video options."],
    ["SnapTik.com.lc", "A TikTok-focused website listed for public video link downloads."]
  ] },
  { platform: "Facebook", items: [
    ["FDown", "A Facebook video tool for supported public videos and Reels."],
    ["SnapSave", "A third-party media website listed for Facebook video links and available quality options."],
    ["FDownloader", "A Facebook downloader website for public video links where the source permits access."]
  ] },
  { platform: "X (Twitter)", items: [
    ["TwitterAPI.io", "A set of X/Twitter tools that includes a video downloader for supported public post links."],
    ["X Downloader", "A third-party website listed for downloading media from supported public X posts."]
  ] },
  { platform: "Pinterest", items: [
    ["KlickPin", "A Pinterest tool for supported video Pins and other available Pin media."],
    ["SSSpin", "A Pinterest video downloader website for public Pins that expose media."],
    ["PinDown", "A third-party Pinterest tool listed for supported video and Pin links."]
  ] },
  { platform: "Reddit", items: [
    ["RapidSave", "A Reddit media tool listed for supported public video posts."],
    ["RedVid", "A third-party website for viewing or saving media from supported Reddit posts."],
    ["Viddit", "A Reddit video tool for public post links and available media formats."]
  ] },
  { platform: "Snapchat", items: [
    ["StoryGrab", "A Snapchat media website listed for supported public Spotlight and story links."],
    ["SocialKing", "A third-party Snapchat video tool for public links that remain accessible."],
    ["SChat Downloader", "A Snapchat-focused website listed for supported public video links."]
  ] },
  { platform: "LinkedIn", items: [
    ["Taplio", "A LinkedIn creator toolkit that includes a video downloader utility."],
    ["MyFeedIn", "A LinkedIn tools website with a video downloader for supported public posts."],
    ["Reepl", "A LinkedIn utility site listed for downloading supported post videos."]
  ] },
  { platform: "Telegram", items: [
    ["StepToDown", "A Telegram video tool for supported public links and available media."],
    ["ScreenApp (Telegram)", "An online media utility with Telegram and general video downloader pages."],
    ["TelegramDownloadMedia", "A Telegram-focused website listed for supported public media links."]
  ] },
  { platform: "WhatsApp", items: [
    ["StatusVide", "A website listed for WhatsApp Status video links and related public status media."],
    ["KKOnline", "A status-media website listed in the supplied directory for WhatsApp status content."]
  ] },
  { platform: "Twitch", items: [
    ["UnTwitch", "A Twitch tool listed for supported VODs, clips, and stream recordings."],
    ["Dwitch", "A third-party Twitch video website listed for available clips and VOD links."],
    ["Clipr", "A Twitch clip utility listed for supported public clip links."]
  ] },
  { platform: "Threads", items: [
    ["ThreadsDownloader", "A Threads video website listed for supported public video posts."],
    ["Threadster", "A third-party Threads tool for public media links supported by the source."],
    ["ThreadsDL", "A Threads-focused website listed for supported post media downloads."]
  ] },
  { platform: "Dailymotion", items: [
    ["SaveTheVideo", "An online video utility with a Dailymotion downloader page."],
    ["VidsSave (Dailymotion)", "A multi-platform media tool with a Dailymotion video downloader page."],
    ["SnapScooper", "A third-party website listed for downloading supported Dailymotion videos."]
  ] },
  { platform: "Discord", items: [
    ["ScreenApp (Discord)", "An online media utility with Discord attachment and general video downloader pages."],
    ["Fliflik", "A third-party website listed for processing supported Discord video links."],
    ["ScreenApp Video Downloader", "A general video tool for supported public media URLs and downloadable formats."]
  ] }
];

const partnerUrls = {
  "tech-trans.com.pl": "https://tech-trans.com.pl",
  "VidsSave (YouTube)": "https://vidssave.com/youtube-video-downloader-8hs",
  "SnapYT": "https://www.snapyt.app",
  "FastDl": "https://fastdl.app/en5IW",
  "VideoDropper": "https://videodropper.app",
  "Indown": "https://indown.io/en5",
  "SnapTik": "https://snaptik.app/en3",
  "SSSTik": "https://ssstik.io",
  "SnapTik.com.lc": "https://snaptik.com.lc",
  "FDown": "https://fdown.net",
  "SnapSave": "https://snapsave.app",
  "FDownloader": "https://fdownloader.net/en",
  "TwitterAPI.io": "https://twitterapi.io/tools/twitter-video-downloader",
  "X Downloader": "https://x-downloader.com/en/",
  "KlickPin": "https://klickpin.com/en5",
  "SSSpin": "https://ssspin.io",
  "PinDown": "https://pindown.io/en1",
  "RapidSave": "https://rapidsave.com",
  "RedVid": "https://redvid.io",
  "Viddit": "https://viddit.io",
  "StoryGrab": "https://storygrab.io/en2",
  "SocialKing": "https://www.socialking.in/snapchat-video-downloader",
  "SChat Downloader": "https://schatdownloader.com",
  "Taplio": "https://taplio.com/linkedin-video-downloader",
  "MyFeedIn": "https://myfeedin.co/free-tools/linkedin-video-downloader",
  "Reepl": "https://reepl.io/free-tools/linkedin-video-downloader",
  "StepToDown": "https://steptodown.com/telegram-video-downloader/",
  "ScreenApp (Telegram)": "https://screenapp.io/features/telegram-video-downloader",
  "TelegramDownloadMedia": "https://telegramdownloadmedia.com",
  "StatusVide": "https://www.statusvide.com/category/whatsapp-status-video-download/",
  "KKOnline": "https://www.kkonline.in/status-tag/love-status-download?page=6",
  "UnTwitch": "https://untwitch.com",
  "Dwitch": "https://dwitch.net",
  "Clipr": "https://clipr.gg",
  "ThreadsDownloader": "https://www.threadsdownloader.com",
  "Threadster": "https://threadster.app",
  "ThreadsDL": "https://www.threadsdl.app",
  "SaveTheVideo": "https://www.savethevideo.com/dailymotion-downloader",
  "VidsSave (Dailymotion)": "https://vidssave.com/dailymotion-1mf",
  "SnapScooper": "https://snapscooper.com/tools/dailymotion",
  "ScreenApp (Discord)": "https://screenapp.io/features/discord-video-downloader",
  "Fliflik": "https://online.fliflik.com/discord-video-downloader/",
  "ScreenApp Video Downloader": "https://screenapp.io/features/video-downloader"
};

const legalDocs = {
  privacy: {
    label: "Privacy Policy",
    title: "Privacy Policy for SnapVideoHub",
    intro: "Protecting user privacy and maintaining a secure browsing experience is a high priority for SnapVideoHub.",
    sections: [
      ["Information We Collect", ["Browser type and version", "Operating system", "Device type", "IP address", "Language preferences", "Referral source", "Website usage statistics"]],
      ["Cookies and Browser Storage", ["Theme, language, and cookie consent choices are stored in your browser's local storage.", "Selecting a language may set Google's googtrans preference cookie.", "Google Analytics is off unless you allow analytics. Google may set cookies such as _ga to measure website usage.", "Google Ads receives limited cookieless page-view signals before you choose a cookie option. Advertising storage and user data remain denied until you allow analytics and ads measurement; Google may then use advertising identifiers and cookies such as _gcl_* to measure ad visits and conversions. Ad personalization remains disabled.", "Use Cookie Settings in the footer to change your choice. Necessary-only browsing does not prevent use of the site.", "Third-party video services opened by you may use their own cookies and tracking. Review their privacy information; SnapVideoHub does not control those sites."]],
      ["Third-Party Services", ["Google Analytics (only after you allow analytics)", "Google Ads (limited cookieless page-view signals before a choice; advertising storage and user data only after you allow analytics and ads measurement)", "Google Translate (when you select a translated language)", "Cloud hosting providers", "CDN and security services"]],
      ["Service Description", ["SnapVideoHub is a video-link directory that passes public video URLs to third-party services selected by users.", "SnapVideoHub does not process or host video files. Review each third-party service's privacy policy and terms before using it."]],
      ["What We Do Not Collect", ["Social media passwords", "Private account credentials", "Personal payment information", "Private messages or chats"]],
      ["Data Security", ["We use standard security practices and encrypted infrastructure to reduce unauthorized access, abuse, and malicious activity."]],
      ["Children's Privacy", ["SnapVideoHub is not intended for children under 13 years old and does not knowingly collect personal information from children."]],
      ["Copyright Responsibility", ["Users are responsible for ensuring downloaded content complies with copyright laws and platform terms."]],
      ["Contact", ["gmail-mrdudefirstattempt@gmail.com"]]
    ]
  },
  terms: {
    label: "Terms of Service",
    title: "Terms and Conditions for SnapVideoHub",
    intro: "By accessing or using SnapVideoHub, users agree to comply with these terms of service.",
    sections: [
      ["Service Description", ["SnapVideoHub is a free online video downloader and media downloading platform for publicly accessible media from supported platforms."]],
      ["Usage Rules", ["Use SnapVideoHub only for lawful purposes and download only content you own or are legally authorized to access."]],
      ["Intellectual Property", ["Third-party content belongs to its respective owners. SnapVideoHub does not claim ownership of downloaded content."]],
      ["Disclaimer", ["SnapVideoHub is provided as is and as available without warranties of any kind."]],
      ["Limitation of Liability", ["SnapVideoHub is not responsible for user misuse, copyright violations, third-party platform changes, data loss, or interruptions."]],
      ["Indemnification", ["Users agree to defend and hold SnapVideoHub harmless from claims arising from misuse of the service."]],
      ["Service Changes and Termination", ["SnapVideoHub may modify, suspend, limit, or discontinue any part of the service at any time."]],
      ["Privacy", ["Your use of SnapVideoHub is also governed by our Privacy Policy."]]
    ],
    content: [
      {
        heading: "1. Service Description",
        sections: [
          {
            heading: "1.1 Service Content",
            paragraphs: [
              "SnapVideoHub is a video-link directory that helps users review public video URLs and continue to listed third-party video services for supported platforms.",
              "SnapVideoHub provides fast, secure, and cloud-based downloading tools for users worldwide without requiring software installation or account registration."
            ]
          },
          {
            heading: "1.2 Service Features",
            list: [
              "Completely free to use",
              "No registration or login required",
              "Supports HD, Full HD, 2K, and 4K downloads",
              "Fast cloud-based processing technology",
              "Mobile, tablet, and desktop compatible",
              "Supports public video links from the listed platforms",
              "Does not permanently store user download history",
              "Supports public videos, Reels, Shorts, clips, and VODs where available",
              "Works on Chrome, Safari, Firefox, Edge, Opera, and modern browsers"
            ]
          },
          {
            heading: "1.3 Supported Platforms",
            paragraphs: ["SnapVideoHub supports downloading publicly accessible media from supported platforms including:"],
            list: ["YouTube", "Instagram", "TikTok", "Facebook", "X Twitter", "Reddit", "Pinterest", "Telegram", "WhatsApp", "Threads", "Twitch", "Discord", "LinkedIn", "Dailymotion"],
            footer: "Platform availability may change over time depending on third-party platform updates and restrictions."
          }
        ]
      },
      {
        heading: "2. Usage Rules",
        sections: [
          {
            heading: "2.1 Lawful Use",
            paragraphs: ["By using SnapVideoHub, you agree to:"],
            list: [
              "Use the Service only for lawful purposes",
              "Comply with applicable local, national, and international laws",
              "Respect copyright and intellectual property rights",
              "Download only content you own or are legally authorized to access",
              "Use downloaded content responsibly and ethically"
            ],
            footer: "Users are solely responsible for ensuring they have permission to download and use media content."
          },
          {
            heading: "2.2 Prohibited Actions",
            paragraphs: ["You must not:"],
            list: [
              "Download copyrighted content without authorization",
              "Use the Service for illegal activities",
              "Attempt unauthorized access to the platform",
              "Abuse servers or use automated bots excessively",
              "Remove copyright notices or ownership information",
              "Redistribute downloaded content illegally",
              "Upload malicious software or harmful code",
              "Violate privacy, intellectual property, or legal rights of others"
            ]
          },
          {
            heading: "2.3 Personal Use",
            paragraphs: ["SnapVideoHub is intended primarily for personal and non-commercial use.", "We strongly recommend users:"],
            list: [
              "Obtain permission before sharing downloaded content",
              "Follow source platform terms of service",
              "Respect creator rights and platform policies"
            ]
          }
        ]
      },
      {
        heading: "3. Intellectual Property",
        sections: [
          {
            heading: "3.1 Third-Party Content",
            paragraphs: [
              "All copyrights, trademarks, and intellectual property rights related to downloaded content belong to their respective owners and creators.",
              "SnapVideoHub does not claim ownership of third-party content.",
              "Users are fully responsible for how downloaded content is used."
            ]
          },
          {
            heading: "3.2 Platform Content",
            paragraphs: [
              "The SnapVideoHub website, including design, branding, code, text, graphics, and platform features, is protected by intellectual property and copyright laws.",
              "You may not copy, distribute, modify, or reproduce platform content without written permission."
            ]
          }
        ]
      },
      {
        heading: "4. Disclaimer",
        sections: [
          {
            heading: "4.1 Service Provided As Is",
            paragraphs: ["SnapVideoHub is provided on an as is and as available basis without warranties of any kind.", "We do not guarantee:"],
            list: [
              "Uninterrupted service",
              "Error-free operation",
              "Continuous platform compatibility",
              "Permanent content availability"
            ]
          },
          {
            heading: "4.2 Content Disclaimer",
            paragraphs: ["SnapVideoHub does not host or permanently store third-party media files.", "We are not responsible for:"],
            list: [
              "Accuracy of downloaded content",
              "Availability of source media",
              "Changes made by third-party platforms",
              "User misuse of downloaded content"
            ]
          },
          {
            heading: "4.3 Third-Party Platforms",
            paragraphs: [
              "SnapVideoHub is not affiliated with, endorsed by, or officially connected to third-party social media platforms.",
              "All trademarks and platform names belong to their respective owners."
            ]
          }
        ]
      },
      {
        heading: "5. Limitation of Liability",
        sections: [
          {
            paragraphs: ["To the maximum extent permitted by applicable law:"],
            list: [
              "SnapVideoHub shall not be liable for direct, indirect, incidental, or consequential damages",
              "We are not responsible for data loss, business interruption, or service interruptions",
              "Users assume full responsibility for downloaded content and usage"
            ],
            footer: "The Service is provided free of charge and without liability guarantees."
          }
        ]
      },
      {
        heading: "6. Indemnification",
        sections: [
          {
            paragraphs: ["By using SnapVideoHub, you agree to defend, indemnify, and hold harmless SnapVideoHub, its affiliates, employees, and partners from any claims, liabilities, damages, losses, or legal expenses arising from:"],
            list: [
              "Violation of these Terms",
              "Misuse of the Service",
              "Infringement of third-party rights",
              "Illegal use of downloaded content"
            ]
          }
        ]
      },
      {
        heading: "7. Service Changes and Termination",
        sections: [
          {
            heading: "7.1 Service Modification",
            paragraphs: ["SnapVideoHub reserves the right to modify, suspend, limit, or discontinue any part of the Service at any time without prior notice."]
          },
          {
            heading: "7.2 Termination of Use",
            paragraphs: ["We may restrict or terminate access to the Service for users who:"],
            list: [
              "Violate these Terms",
              "Abuse platform resources",
              "Engage in illegal or harmful activities",
              "Attempt unauthorized access or attacks"
            ]
          }
        ]
      },
      {
        heading: "8. Privacy",
        sections: [
          {
            paragraphs: [
              "Your use of SnapVideoHub is also governed by our Privacy Policy.",
              "SnapVideoHub respects user privacy and does not require passwords, private social media credentials, or unnecessary personal information.",
              "All website traffic is protected using secure HTTPS encryption technology."
            ]
          }
        ]
      }
    ]
  },
  dmca: {
    label: "DMCA",
    title: "DMCA Copyright Policy for SnapVideoHub",
    intro: "SnapVideoHub respects intellectual property rights and responds to valid copyright complaints.",
    sections: [
      ["Filing a DMCA Complaint", ["Full legal name", "Contact email", "Copyright ownership proof", "URL of copyrighted content", "Description of the issue", "Good faith statement", "Signature or authorized confirmation"]],
      ["DMCA Contact", ["gmail-mrdudefirstattempt@gmail.com"]],
      ["Review Process", ["We review the request", "We investigate reported content", "We take necessary action when required"]],
      ["False Claims", ["Submitting false copyright claims may result in legal liability."]]
    ]
  },
  about: {
    label: "About Us",
    title: "About SnapVideoHub",
    intro: "SnapVideoHub is a modern cloud-based media downloading platform created to provide users with a fast, secure, and simple way to save online content from popular social media platforms.",
    sections: [
      ["Our Mission", ["Make media downloading accessible, fast, secure, and user-friendly for users worldwide."]],
      ["What Makes Us Different", ["Fast cloud technology", "Multi-platform support", "Privacy-focused design", "HD, Full HD, 2K, and 4K quality controls", "Simple mobile and desktop interface"]],
      ["Supported Platforms", platforms.map((platform) => platform.name)],
      ["Global Access", ["SnapVideoHub is designed for users worldwide with multilingual support and responsive performance across devices."]],
      ["Thank You", ["Thank you for choosing SnapVideoHub. We continue improving services to provide a better downloading experience."]]
    ]
  },
  contact: {
    label: "Contact",
    title: "Contact SnapVideoHub",
    intro: "We value feedback, support requests, business inquiries, platform suggestions, and copyright messages.",
    sections: [
      ["Contact Information", ["gmail-mrdudefirstattempt@gmail.com"]],
      ["Common Reasons to Contact Us", ["Technical issues", "Download problems", "Feature requests", "Platform support suggestions", "Business partnerships", "Copyright concerns"]],
      ["Response Time", ["We aim to respond within 24 to 72 hours."]]
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applySavedLanguageShell();
  applyPageSeoDefaults();
  renderHeader();
  renderFooter();
  renderSearchModal();
  initializeCookieConsent();
  routePage();
  renderDownloaders();
  renderPopularPlatformLinks();
  bindGlobalControls();
  initReveal();
  initScreenAnt();
  refreshIcons();
});

function pageUrl(path, params = {}) {
  const url = new URL(path, SITE_BASE_URL);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.href;
}

function platformPagePath(slug) {
  return `platforms/${slug}/`;
}

function setHeadMeta(selector, attribute, value) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

function applySeoMetadata({ title, description, canonical, indexable = true }) {
  document.title = title;
  setHeadMeta('meta[name="description"]', "name", description);
  setHeadMeta('meta[name="robots"]', "name", indexable ? "index,follow,max-image-preview:large" : "noindex,follow");
  setHeadMeta('meta[property="og:type"]', "property", "website");
  setHeadMeta('meta[property="og:site_name"]', "property", "SnapVideoHub");
  setHeadMeta('meta[property="og:title"]', "property", title);
  setHeadMeta('meta[property="og:description"]', "property", description);
  setHeadMeta('meta[property="og:url"]', "property", canonical);
  setHeadMeta('meta[property="og:image"]', "property", pageUrl("assets/logo-wide.png"));
  setHeadMeta('meta[property="og:image:alt"]', "property", "SnapVideoHub public video link guide");
  setHeadMeta('meta[name="twitter:card"]', "name", "summary_large_image");
  setHeadMeta('meta[name="twitter:title"]', "name", title);
  setHeadMeta('meta[name="twitter:description"]', "name", description);
  setHeadMeta('meta[name="twitter:image"]', "name", pageUrl("assets/logo-wide.png"));

  let canonicalTag = document.head.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = canonical;
}

function applyPageSeoDefaults() {
  const pages = {
    home: {
      title: "SnapVideoHub | Public Video Link Guide",
      description: "Review public video links for 15 platforms and explore quality options from third-party video services. SnapVideoHub does not process or host your video files.",
      path: ""
    },
    blog: {
      title: "Video Download Guides and Tips | SnapVideoHub",
      description: "Read practical video guides on public video links, video quality choices, common download issues, device tips, and responsible use of third-party video sites.",
      path: "blog.html"
    },
    extension: {
      title: "SnapVideoHub Browser Shortcut Guide",
      description: "Learn how a browser shortcut can open SnapVideoHub platform pages and tutorials from a copied public video link.",
      path: "extension.html",
      indexable: false
    },
    supported: {
      title: "Supported Video and Social Platforms | SnapVideoHub",
      description: "Explore 15 supported video platforms, learn about public-link handoff, and review access limits before visiting third-party video services for quality options.",
      path: "supported-platforms.html"
    },
    tutorials: {
      title: "Video Downloader Tutorials and Help | SnapVideoHub",
      description: "Find guides for public video links, video quality options, common downloader issues, device tips, and responsible video use across supported platforms.",
      path: "tutorials.html"
    }
  };
  const config = pages[document.body.dataset.page];
  if (!config) return;
  applySeoMetadata({ ...config, canonical: pageUrl(config.path), indexable: config.indexable !== false });

  if (document.body.dataset.page === "home") {
    let schema = document.querySelector('script[data-site-schema="website"]');
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.siteSchema = "website";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SnapVideoHub",
      url: pageUrl(""),
      description: config.description
    });
  }
}

// Clear the transient redirect UI whenever the browser restores this page.
window.addEventListener("pagehide", resetDownloaderRedirects);
window.addEventListener("pageshow", resetDownloaderRedirects);

function resetDownloaderRedirects() {
  document.querySelectorAll("[data-redirect-modal]").forEach((modal) => {
    modal.hidden = true;
    const bar = modal.querySelector("[data-redirect-progress]");
    const percent = modal.querySelector("[data-redirect-percent]");
    const progressBar = modal.querySelector('[role="progressbar"]');
    const continueLink = modal.querySelector("[data-redirect-link]");
    const title = modal.querySelector("[data-redirect-title]");
    const hint = modal.querySelector("[data-redirect-hint]");
    const spinner = modal.querySelector(".progress-spinner");
    if (bar) bar.style.width = "0%";
    if (percent) percent.textContent = "0%";
    progressBar?.setAttribute("aria-valuenow", "0");
    if (continueLink) {
      continueLink.hidden = true;
      continueLink.textContent = "Download from selected site";
    }
    if (title) title.textContent = "Preparing your link";
    if (hint) hint.textContent = "Please wait. SnapVideoHub will not redirect you automatically.";
    if (spinner) spinner.hidden = false;
  });
}

function routePage() {
  const page = document.body.dataset.page;
  if (page === "home") {
    renderPlatformGrids();
    renderLanguageCloud();
  }
  if (page === "platform") {
    renderPlatformPage();
  }
  if (page === "tutorials") {
    renderTutorials();
  }
  if (page === "supported") {
    renderPlatformGrids();
    renderSupportMatrix();
  }
  if (page === "legal") {
    renderLegalPage();
  }
  if (page === "blog") {
    renderBlogGrid();
  }
}

function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;
  const currentPage = document.body.dataset.page;
  const currentPlatform = document.body.dataset.platformSlug || new URLSearchParams(location.search).get("platform") || "";
  const currentDoc = new URLSearchParams(location.search).get("doc") || "";
  const selectedLanguage = getSelectedLanguage();
  const links = [
    ["Home", "index.html", currentPage === "home"],
    ["YouTube Downloader", platformPagePath("youtube"), currentPlatform === "youtube"],
    ["Instagram Downloader", platformPagePath("instagram"), currentPlatform === "instagram"],
    ["TikTok Downloader", platformPagePath("tiktok"), currentPlatform === "tiktok"],
    ["Facebook Downloader", platformPagePath("facebook"), currentPlatform === "facebook"],
    ["Tutorials", "tutorials.html", currentPage === "tutorials"],
    ["Supported Platforms", "supported-platforms.html", currentPage === "supported"],
    ["Chrome Extension", "extension.html", currentPage === "extension"],
    ["Blog", "blog.html", currentPage === "blog"],
    ["Contact", "legal.html?doc=contact", currentDoc === "contact"]
  ];

  mount.innerHTML = `
    <header class="site-header">
      <div class="nav-shell">
        <a class="brand-link" href="index.html" aria-label="SnapVideoHub home">
          <img src="assets/logo-wide.png" alt="SnapVideoHub">
        </a>
        <nav class="nav-menu" aria-label="Main navigation">
          ${links.map(([label, href, active]) => `<a class="nav-link${active ? " active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <div class="language-wrap notranslate" translate="no">
            <button class="icon-btn notranslate" type="button" data-language-toggle aria-label="Language: ${escapeHtml(languageDisplayName(selectedLanguage))}" title="Language: ${escapeHtml(languageDisplayName(selectedLanguage))}" translate="no"><i data-lucide="languages"></i></button>
            <div class="language-menu notranslate" data-language-menu translate="no" hidden>
              ${languages.map((language) => `
                <button class="notranslate" type="button" data-language-option="${language.code}" lang="${language.code}" dir="${language.dir}" translate="no" aria-pressed="${language.code === selectedLanguage.code ? "true" : "false"}">
                  <span class="notranslate" translate="no">${escapeHtml(language.nativeName)}</span>
                  <small class="notranslate" translate="no">${escapeHtml(language.name)}</small>
                </button>
              `).join("")}
            </div>
          </div>
          <button class="icon-btn" type="button" data-theme-toggle aria-label="Dark mode" title="Dark mode"><i data-lucide="moon"></i></button>
          <button class="icon-btn" type="button" data-search-open aria-label="Search" title="Search"><i data-lucide="search"></i></button>
          <button class="icon-btn mobile-toggle" type="button" data-mobile-toggle aria-label="Menu" title="Menu"><i data-lucide="menu"></i></button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;
  const serviceLinks = allTools.map((platform) => `<li><a href="${platformPagePath(platform.slug)}">${platform.title}</a></li>`).join("");
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="footer-shell">
        <div class="footer-main">
          <div class="footer-col">
            <h2>Our Services</h2>
            <ul>${serviceLinks}</ul>
          </div>
          <div class="footer-brand">
            <img src="assets/logo-wide.png" alt="SnapVideoHub">
            <p>Video-link guides for public videos, Reels, Shorts, clips, and VODs from supported platforms.</p>
          </div>
          <div class="footer-col">
            <h2>Company</h2>
            <ul>
              <li><a href="legal.html?doc=privacy">Privacy Policy</a></li>
              <li><a href="legal.html?doc=terms">Terms of Service</a></li>
              <li><a href="legal.html?doc=dmca">DMCA</a></li>
              <li><a href="legal.html?doc=about">About Us</a></li>
              <li><a href="legal.html?doc=contact">Contact</a></li>
              <li><a href="tutorials.html">Tutorials</a></li>
              <li><a href="supported-platforms.html">Supported Platforms</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-credit">
            <span>&copy; 2026 SnapVideoHub - All Rights Reserved</span>
            <span>Founder - RASHMI RANJAN BEHERA</span>
          </div>
          <div class="footer-links">
            <a href="legal.html?doc=privacy">Privacy Policy</a>
            <a href="legal.html?doc=terms">Terms</a>
            <a href="legal.html?doc=contact">Contact</a>
            <a href="legal.html?doc=dmca">DMCA</a>
            <a href="legal.html?doc=about">About</a>
            <button type="button" class="footer-cookie-settings" data-cookie-settings>Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function initializeCookieConsent() {
  const banner = document.createElement("section");
  banner.className = "cookie-banner";
  banner.dataset.cookieBanner = "";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-labelledby", "cookie-banner-title");
  banner.hidden = true;
  banner.innerHTML = `
    <div class="cookie-banner-copy">
      <h2 id="cookie-banner-title">Cookie preferences</h2>
      <p>Google Ads receives limited cookieless page-view signals before you choose. Advertising storage and user data stay off unless you allow analytics and ads measurement. Google Analytics loads only if you allow analytics. Ad personalization stays off. External sites have separate privacy policies.</p>
      <a href="legal.html?doc=privacy">Read our Privacy Policy</a>
    </div>
    <div class="cookie-banner-actions">
      <button class="btn btn-secondary" type="button" data-cookie-essential>Necessary only</button>
      <button class="btn btn-secondary" type="button" data-cookie-analytics>Analytics only</button>
      <button class="btn btn-primary" type="button" data-cookie-measurement>Allow analytics and ads measurement</button>
    </div>
  `;
  document.body.appendChild(banner);

  const saveConsent = (consent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    banner.hidden = true;
    setGoogleMeasurementConsent(consent);
  };
  banner.querySelector("[data-cookie-essential]")?.addEventListener("click", () => saveConsent("essential"));
  banner.querySelector("[data-cookie-analytics]")?.addEventListener("click", () => saveConsent("analytics"));
  banner.querySelector("[data-cookie-measurement]")?.addEventListener("click", () => saveConsent("measurement"));
  document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      banner.hidden = false;
      banner.querySelector("[data-cookie-essential]")?.focus();
    });
  });

  let consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!consent && localStorage.getItem(LEGACY_COOKIE_CONSENT_KEY) === "essential") {
    consent = "essential";
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  }
  if (consent !== "analytics" && consent !== "measurement" && consent !== "essential") {
    banner.hidden = false;
  }
  setGoogleMeasurementConsent(consent || "essential");
}

function setGoogleMeasurementConsent(consent) {
  const analyticsAllowed = consent === "analytics" || consent === "measurement";
  const adsAllowed = consent === "measurement";
  const googleScriptId = "google-measurement-script";
  const googleScript = document.getElementById(googleScriptId);
  if (!analyticsAllowed) clearGoogleMeasurementCookies();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  if (!window.snapVideoHubConsentInitialized) {
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.snapVideoHubConsentInitialized = true;
  }
  window.gtag("consent", "update", {
    analytics_storage: analyticsAllowed ? "granted" : "denied",
    ad_storage: adsAllowed ? "granted" : "denied",
    ad_user_data: adsAllowed ? "granted" : "denied",
    ad_personalization: "denied"
  });

  if (!window.snapVideoHubAdsTagConfigured) {
    window.gtag("config", GOOGLE_ADS_ID);
    window.snapVideoHubAdsTagConfigured = true;
  }

  if (analyticsAllowed && !window.snapVideoHubAnalyticsTagConfigured) {
    window.gtag("config", GOOGLE_ANALYTICS_ID);
    window.snapVideoHubAnalyticsTagConfigured = true;
  }

  if (!googleScript) {
    const script = document.createElement("script");
    script.id = googleScriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    script.onerror = () => showToast("Google measurement could not load. The site remains available.");
    document.head.appendChild(script);
  }
}

function clearGoogleMeasurementCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name.startsWith("_gcl_"));
  const domain = canUseDomainCookie(location.hostname) ? `; domain=.${location.hostname}` : "";
  names.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
  });
}

function renderSearchModal() {
  const mount = document.querySelector("[data-search-modal]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="search-modal" data-search-modal-inner hidden>
      <div class="search-box" role="dialog" aria-modal="true" aria-label="Search SnapVideoHub">
        <div class="search-head">
          <input class="text-input" type="search" data-search-input placeholder="Search platform, tutorial, policy...">
          <button class="icon-btn" type="button" data-search-close aria-label="Close search"><i data-lucide="x"></i></button>
        </div>
        <div class="search-results" data-search-results></div>
      </div>
    </div>
  `;
}

function bindGlobalControls() {
  document.querySelector("[data-mobile-toggle]")?.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => document.body.classList.remove("nav-open"));
  });

  bindLanguageControls();

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("snapvideohub-theme", next);
    updateThemeIcon();
  });

  const modal = document.querySelector("[data-search-modal-inner]");
  const input = document.querySelector("[data-search-input]");
  const results = document.querySelector("[data-search-results]");
  const openSearch = () => {
    modal.hidden = false;
    input.value = "";
    renderSearchResults("", results);
    setTimeout(() => input.focus(), 20);
  };
  document.querySelector("[data-search-open]")?.addEventListener("click", openSearch);
  document.querySelector("[data-search-close]")?.addEventListener("click", () => {
    modal.hidden = true;
  });
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.hidden = true;
  });
  input?.addEventListener("input", () => renderSearchResults(input.value, results));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) modal.hidden = true;
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });

  bindLegalNavigation();
}

function bindLegalNavigation() {
  if (document.body.dataset.page !== "legal") return;

  document.addEventListener("click", (event) => {
    const link = event.target.closest(".legal-tabs a");
    if (!link) return;

    const nextUrl = new URL(link.href, location.href);
    if (nextUrl.pathname !== location.pathname) return;

    event.preventDefault();
    const previousY = window.scrollY;
    history.pushState({ doc: nextUrl.searchParams.get("doc") || "privacy" }, "", nextUrl.href);
    renderLegalPage();
    initReveal();
    refreshIcons();
    window.scrollTo({ top: previousY, left: 0, behavior: "auto" });
  });

  window.addEventListener("popstate", () => {
    renderLegalPage();
    initReveal();
    refreshIcons();
  });
}

function bindLanguageControls() {
  const languageToggle = document.querySelector("[data-language-toggle]");
  const languageMenu = document.querySelector("[data-language-menu]");
  const languageWrap = document.querySelector(".language-wrap");
  const selectedLanguage = getSelectedLanguage();

  applyLanguageShell(selectedLanguage);
  updateLanguageButtons(selectedLanguage.code);

  if (selectedLanguage.code !== "en") {
    loadGoogleTranslate(selectedLanguage.code);
  }

  languageToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (languageMenu) languageMenu.hidden = !languageMenu.hidden;
  });

  languageMenu?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language-option]");
    if (!button) return;
    selectLanguage(button.dataset.languageOption);
  });

  document.addEventListener("click", (event) => {
    if (languageMenu && !languageMenu.hidden && !languageWrap?.contains(event.target)) {
      languageMenu.hidden = true;
    }
  });
}

function selectLanguage(code) {
  const language = getLanguageByCode(code);
  const languageMenu = document.querySelector("[data-language-menu]");

  localStorage.setItem(LANGUAGE_STORAGE_KEY, language.code);
  applyLanguageShell(language);
  updateLanguageButtons(language.code);
  if (languageMenu) languageMenu.hidden = true;

  if (language.code === "en") {
    clearGoogleTranslateCookie();
    showToast("Language changed to English.");
    if (isGoogleTranslated()) {
      setTimeout(() => location.reload(), 350);
    }
    return;
  }

  setGoogleTranslateCookie(language.code);
  showToast(`Language changed to ${languageDisplayName(language)}.`);
  loadGoogleTranslate(language.code);
}

function applySavedLanguageShell() {
  applyLanguageShell(getSelectedLanguage());
}

function applyLanguageShell(language) {
  const selected = language || languages[0];
  document.documentElement.lang = selected.code;
  document.documentElement.dir = selected.dir || "ltr";
}

function updateLanguageButtons(code) {
  const language = getLanguageByCode(code);
  const label = `Language: ${languageDisplayName(language)}`;
  const toggle = document.querySelector("[data-language-toggle]");

  toggle?.setAttribute("aria-label", label);
  toggle?.setAttribute("title", label);

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === language.code));
  });
}

function getSelectedLanguage() {
  return getLanguageByCode(localStorage.getItem(LANGUAGE_STORAGE_KEY) || getGoogleTranslateCookieLanguage() || "en");
}

function getLanguageByCode(code) {
  return languages.find((language) => language.code === code) || languages[0];
}

function languageDisplayName(language) {
  const selected = language || languages[0];
  return selected.nativeName === selected.name ? selected.name : `${selected.nativeName} (${selected.name})`;
}

function getGoogleTranslateCookieLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return "";
  const value = decodeURIComponent(match[1]);
  return value.split("/")[2] || "";
}

function loadGoogleTranslate(languageCode) {
  const language = getLanguageByCode(languageCode);
  if (language.code === "en") return;

  setGoogleTranslateCookie(language.code);
  ensureGoogleTranslateMount();
  window.googleTranslateTargetLanguage = language.code;
  window.googleTranslateElementInit = () => {
    const translateApi = window.google?.translate;
    if (!translateApi?.TranslateElement) return;

    new translateApi.TranslateElement({
      pageLanguage: "en",
      includedLanguages: languages.filter((item) => item.code !== "en").map((item) => item.code).join(","),
      autoDisplay: false
    }, GOOGLE_TRANSLATE_ELEMENT_ID);
    waitForGoogleTranslateCombo(window.googleTranslateTargetLanguage);
  };

  if (document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID)) {
    if (!document.querySelector(".goog-te-combo")) {
      window.googleTranslateElementInit();
    }
    waitForGoogleTranslateCombo(language.code);
    return;
  }

  const script = document.createElement("script");
  script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.onerror = () => showToast("Translation service could not load. Check your internet connection.");
  document.body.appendChild(script);
}

function ensureGoogleTranslateMount() {
  let mount = document.getElementById(GOOGLE_TRANSLATE_ELEMENT_ID);
  if (mount) return mount;

  mount = document.createElement("div");
  mount.id = GOOGLE_TRANSLATE_ELEMENT_ID;
  mount.className = "google-translate-mount notranslate";
  mount.setAttribute("aria-hidden", "true");
  mount.setAttribute("translate", "no");
  document.body.appendChild(mount);
  return mount;
}

function waitForGoogleTranslateCombo(languageCode, attempt = 0) {
  const combo = document.querySelector(".goog-te-combo");
  if (combo) {
    combo.value = languageCode;
    combo.dispatchEvent(new Event("change"));
    return;
  }

  if (attempt < 30) {
    setTimeout(() => waitForGoogleTranslateCombo(languageCode, attempt + 1), 250);
  }
}

function setGoogleTranslateCookie(languageCode) {
  writeGoogleTranslateCookie(`/en/${languageCode}`);
}

function clearGoogleTranslateCookie() {
  expireGoogleTranslateCookie();
}

function writeGoogleTranslateCookie(value) {
  document.cookie = `googtrans=${value}; path=/`;
  const hostname = location.hostname;
  if (canUseDomainCookie(hostname)) {
    document.cookie = `googtrans=${value}; path=/; domain=.${hostname}`;
  }
}

function expireGoogleTranslateCookie() {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  const hostname = location.hostname;
  if (canUseDomainCookie(hostname)) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${hostname}`;
  }
}

function canUseDomainCookie(hostname) {
  return Boolean(hostname && hostname.includes(".") && !/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname));
}

function isGoogleTranslated() {
  const translatedClass = `${document.documentElement.className} ${document.body.className}`;
  return translatedClass.includes("translated") || Boolean(document.querySelector(".goog-te-combo"));
}

function applyTheme() {
  const stored = localStorage.getItem("snapvideohub-theme");
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = stored || (prefersDark ? "dark" : "light");
}

function updateThemeIcon() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;
  const dark = document.documentElement.dataset.theme === "dark";
  toggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
  refreshIcons();
}

function renderDownloaders() {
  document.querySelectorAll("[data-downloader]").forEach((mount) => {
    const defaultPlatform = mount.dataset.defaultPlatform || "auto";
    renderDownloader(mount, defaultPlatform);
  });
}

function renderDownloader(mount, defaultPlatform = "auto") {
  const pageConfig = window.snapVideoHubPlatformPage;
  const placeholder = pageConfig?.slug === defaultPlatform
    ? pageConfig.urlPlaceholder
    : "Paste Video URL Here...";
  const options = [
    `<option value="auto"${defaultPlatform === "auto" ? " selected" : ""}>Auto Detect</option>`,
    ...allTools.map((platform) => {
      return `<option value="${platform.slug}"${defaultPlatform === platform.slug ? " selected" : ""}>${escapeHtml(platform.name)}</option>`;
    })
  ].join("");
  mount.innerHTML = `
    <form class="download-panel" data-downloader-form>
      <div class="download-grid">
        <div class="url-wrap">
          <input class="download-input" type="url" data-url-input placeholder="${escapeHtml(placeholder)}" aria-label="Paste video URL">
          <button class="icon-btn paste-btn" type="button" data-paste-url aria-label="Paste from clipboard" title="Paste"><i data-lucide="clipboard-paste"></i></button>
        </div>
        <select class="select-input" data-platform-select aria-label="Choose platform">${options}</select>
        <select class="select-input" data-quality-select aria-label="Choose video quality">
          <option value="auto">Best Available</option>
          <option value="4k">4K Quality</option>
          <option value="2k">2K Quality</option>
          <option value="1080p">Full HD 1080p</option>
          <option value="720p">HD 720p</option>
        </select>
      </div>
      <div class="download-actions">
        <button class="btn btn-primary" type="submit"><i data-lucide="external-link"></i> Choose Download Site</button>
      </div>
      <p class="download-legal-note">
        Paste a public video link to review available video options. Results depend on the platform and link.
        Respect copyright. Only download or back up content you are authorized to keep.
        By using this service, you agree to the <a href="legal.html?doc=terms">Terms of Service</a>.
      </p>
      <section class="redirect-modal" data-redirect-modal hidden aria-labelledby="redirect-title" aria-describedby="redirect-message">
        <div class="redirect-dialog">
          <span class="progress-spinner" aria-hidden="true"></span>
          <h2 id="redirect-title" data-redirect-title>Preparing your link</h2>
          <p id="redirect-message">Opening <strong data-redirect-domain></strong> sends your video URL to that independent site. Review its privacy policy; SnapVideoHub does not certify third-party security. Never share your social account password.</p>
          <div class="redirect-progress-track" role="progressbar" aria-label="Link preparation progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span data-redirect-progress></span></div>
          <strong class="redirect-progress-percent" data-redirect-percent aria-live="polite">0%</strong>
          <p class="redirect-hint" data-redirect-hint aria-live="polite">Please wait. SnapVideoHub will not redirect you automatically.</p>
          <a class="btn btn-primary redirect-continue" data-redirect-link rel="noopener noreferrer" hidden>Download from selected site</a>
        </div>
      </section>
    </form>
  `;
  const form = mount.querySelector("[data-downloader-form]");
  bindDownloader(form);
  refreshIcons();
}

function renderPopularPlatformLinks() {
  const rows = [
    ["instagram", "youtube", "facebook", "snapchat", "tiktok"],
    ["discord", "pinterest", "reddit", "telegram"]
  ];
  rows.forEach((slugs, index) => {
    const mount = document.querySelector(index === 0 ? "[data-popular-platforms-primary]" : "[data-popular-platforms-secondary]");
    if (!mount) return;
    mount.innerHTML = slugs.map((slug) => {
      const platform = platformBySlug[slug];
      return `<a class="hero-platform-link" href="${platformPagePath(platform.slug)}" aria-label="Open ${platform.name} downloader">${platformLogoHtml(platform, true)}<span>${platform.name}</span></a>`;
    }).join("");
  });
  refreshIcons();
}

function bindDownloader(form) {
  if (!form) return;
  const input = form.querySelector("[data-url-input]");
  const platformSelect = form.querySelector("[data-platform-select]");
  const modal = form.querySelector("[data-redirect-modal]");
  const setPlatformAccent = (platform) => {
    form.style.setProperty("--platform-color", platform?.color || "#08a9f4");
    form.dataset.platformAccent = platform?.slug || "auto";
  };
  const selectedPlatform = () => platformSelect.value === "auto"
    ? detectTool(input.value)
    : platformBySlug[platformSelect.value];
  setPlatformAccent(selectedPlatform());
  platformSelect.addEventListener("change", () => setPlatformAccent(selectedPlatform()));
  input.addEventListener("input", () => {
    if (platformSelect.value === "auto") setPlatformAccent(selectedPlatform());
  });
  form.querySelector("[data-paste-url]")?.addEventListener("click", async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        input.value = text;
        showToast("Link pasted into the download box.");
      }
    } catch {
      showToast("Clipboard permission is not available in this browser.");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (!url) {
      showToast("Paste a public video URL first.");
      input.focus();
      return;
    }
    let sourceUrl;
    try {
      sourceUrl = new URL(url);
      if (!["http:", "https:"].includes(sourceUrl.protocol)) throw new Error("Unsupported protocol");
    } catch {
      showToast("Enter a complete public link that starts with http:// or https://.");
      input.focus();
      return;
    }

    let platform = platformSelect.value === "auto" ? detectTool(url) : platformBySlug[platformSelect.value];
    if (!platform) platform = detectTool(url);
    const destinations = platform && redirectDestinations[platform.slug];
    if (!destinations?.length) {
      showToast("Choose a supported platform or paste a link from one of the listed platforms.");
      platformSelect.focus();
      return;
    }

    const destination = new URL(destinations[Math.floor(Math.random() * destinations.length)]);
    destination.searchParams.set("url", sourceUrl.href);
    const sourceLink = sourceUrl.href;
    const domainLabel = modal?.querySelector("[data-redirect-domain]");
    const bar = modal?.querySelector("[data-redirect-progress]");
    const percentLabel = modal?.querySelector("[data-redirect-percent]");
    const progressBar = modal?.querySelector('[role="progressbar"]');
    const continueLink = modal?.querySelector("[data-redirect-link]");
    const title = modal?.querySelector("[data-redirect-title]");
    const hint = modal?.querySelector("[data-redirect-hint]");
    const spinner = modal?.querySelector(".progress-spinner");
    if (!modal || !bar || !percentLabel || !progressBar || !continueLink) return;

    continueLink.href = destination.href;
    continueLink.hidden = true;
    continueLink.innerHTML = `${platformLogoHtml(platform, false)}<span>Download from ${escapeHtml(destination.hostname)}</span>`;
    continueLink.setAttribute("aria-label", `Download from ${destination.hostname}, an external website`);
    title.textContent = "Preparing your link";
    hint.textContent = "Please wait. SnapVideoHub will not redirect you automatically.";
    if (spinner) spinner.hidden = false;
    domainLabel.textContent = destination.hostname;
    modal.hidden = false;
    navigator.clipboard?.writeText(sourceLink).catch(() => {});
    const startedAt = performance.now();
    const progressTick = (now) => {
      const percent = Math.min(100, Math.floor(((now - startedAt) / 1000) * 100));
      bar.style.width = `${percent}%`;
      percentLabel.textContent = `${percent}%`;
      progressBar.setAttribute("aria-valuenow", String(percent));
      if (percent >= 100) {
        title.textContent = "Your link is ready";
        hint.textContent = `Click “Download from ${destination.hostname}” to open the external video service.`;
        if (spinner) spinner.hidden = true;
        continueLink.hidden = false;
        refreshIcons();
      } else {
        requestAnimationFrame(progressTick);
      }
    };
    requestAnimationFrame(progressTick);
  });
}

function detectTool(url) {
  try {
    const hostname = new URL(String(url || "")).hostname.toLowerCase();
    return platforms.find((platform) => platform.domains.some((domain) => hostMatchesDomain(hostname, domain)));
  } catch {
    const value = String(url || "").toLowerCase();
    return platforms.find((platform) => platform.domains.some((domain) => value.includes(domain)));
  }
}

function hostMatchesDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(`.${domain}`);
}

function renderPlatformGrids() {
  document.querySelectorAll("[data-platform-grid]").forEach((mount) => {
    mount.innerHTML = platforms.map(platformCard).join("");
  });
}

function platformCard(platform) {
  return `
    <a class="platform-card reveal" style="--platform-color: ${platform.color}" href="${platformPagePath(platform.slug)}" aria-label="${platform.title}">
      <div>
        ${platformLogoHtml(platform, true)}
        <h3>${platform.name}</h3>
        <p>${platform.short}</p>
      </div>
      <span class="platform-arrow">Open Downloader <i data-lucide="arrow-right"></i></span>
    </a>
  `;
}

function renderPlatformPage() {
  const mount = document.querySelector("[data-platform-page]");
  if (!mount) return;
  if (mount.children.length > 0) return;
  const slug = document.body.dataset.platformSlug || new URLSearchParams(location.search).get("platform") || "youtube";
  const platform = platformBySlug[slug] || platformBySlug.youtube;
  const platformLabel = platform.slug === "x" ? "X/Twitter" : platform.name;
  const description = `${platform.short} Paste a public link and continue to a third-party site.`;
  applySeoMetadata({
    title: `${platform.title} | SnapVideoHub`,
    description,
    canonical: pageUrl(platformPagePath(platform.slug))
  });
  mount.innerHTML = `
    <section class="page-hero platform-hero">
      <div class="platform-hero-inner">
        <div>
          <div class="platform-title-row">
            ${platformLogoHtml(platform, false)}
            <p class="eyebrow">${platformLabel} Downloader</p>
          </div>
          <h1>${platform.title}</h1>
          <p>${platform.description}</p>
          <div class="platform-badges">
            ${platform.types.map((type) => `<span>${type}</span>`).join("")}
          </div>
        </div>
        <div data-downloader data-default-platform="${platform.slug}"></div>
      </div>
    </section>

    <section class="section detail-grid">
      <div>
        <p class="eyebrow">What you can download</p>
        <h2>${platform.name} video quality options</h2>
        <p>Review video options, then continue to one of the external ${platformLabel} video services.</p>
      </div>
      <ul class="check-list">
        <li>Your link is copied before you choose whether to continue</li>
        ${platform.types.map((type) => `<li>${type}</li>`).join("")}
        <li>No sign-up required for the frontend flow</li>
        <li>Mobile, tablet, desktop, and smart browser support</li>
      </ul>
    </section>

    <section class="section process-band">
      <div class="section-heading">
        <p class="eyebrow">Simple guide</p>
        <h2>How to use the ${platformLabel} downloader</h2>
      </div>
      <div class="steps-grid">
        <article><span>01</span><h3>Copy link</h3><p>Open ${platformLabel} and copy the public video URL.</p></article>
        <article><span>02</span><h3>Paste URL</h3><p>Paste the copied link into the SnapVideoHub ${platformLabel} download box.</p></article>
        <article><span>03</span><h3>Review video quality</h3><p>Check the video quality options provided by the external service.</p></article>
        <article><span>04</span><h3>Choose whether to continue</h3><p>At 100%, review the external downloader’s name. Click its button only if you want to leave SnapVideoHub and open that site.</p></article>
        <article><span>05</span><h3>Paste and download</h3><p>If the site does not fill the link automatically, paste it from your clipboard and continue there.</p></article>
      </div>
    </section>

    <section class="section split-section">
      <div>
        <p class="eyebrow">Best results</p>
        <h2>Tips for ${platformLabel}</h2>
        <p>These details help users understand why a public link may not return a video or every quality level.</p>
      </div>
      <div class="feature-list">
        ${platform.tips.map((tip, index) => `<article><i data-lucide="${["badge-check", "shield-check", "lightbulb"][index % 3]}"></i><h3>${tip}</h3><p>SnapVideoHub keeps the workflow clear so users know what to try next when a source link has limits.</p></article>`).join("")}
        <article><i data-lucide="scale"></i><h3>Download legally and responsibly</h3><p>Only save content you own, have permission to use, or are legally allowed to download.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">More tools</p>
        <h2>Open another dedicated downloader</h2>
      </div>
      <div class="platform-grid">
        ${platforms.filter((item) => item.slug !== platform.slug).slice(0, 5).map(platformCard).join("")}
      </div>
    </section>
  `;
}

function renderTutorials() {
  const list = document.querySelector("[data-tutorial-list]");
  const filter = document.querySelector("#tutorial-filter");
  if (!list) return;
  const draw = () => {
    const query = (filter?.value || "").toLowerCase();
    const filtered = tutorials.filter((item) => `${item.title} ${item.tag} ${item.intro}`.toLowerCase().includes(query));
    list.innerHTML = filtered.map(tutorialItem).join("") || `<article class="accordion-item"><p>No tutorials match this search.</p></article>`;
    list.querySelectorAll(".accordion-item").forEach((item) => item.classList.add("in-view"));
    bindAccordions();
    refreshIcons();
    openTutorialFromHash();
  };
  filter?.addEventListener("input", draw);
  draw();
}

function tutorialItem(item) {
  return `
    <article class="accordion-item reveal" id="tutorial-${item.id}">
      <button class="accordion-button" type="button" aria-expanded="false">
        <span>
          <span class="eyebrow">${item.tag}</span>
          <h2>${item.title}</h2>
        </span>
        <i data-lucide="chevron-down"></i>
      </button>
      <div class="accordion-body" hidden>
        <p>${item.intro}</p>
        <ol>${item.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <ul>${item.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function bindAccordions() {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const body = button.parentElement.querySelector(".accordion-body");
      const open = body.hidden;
      body.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      button.querySelector("i")?.setAttribute("data-lucide", open ? "chevron-up" : "chevron-down");
      refreshIcons();
    });
  });
}

function openTutorialFromHash() {
  const id = location.hash.replace("#", "");
  if (!id) return;
  const item = document.getElementById(id);
  const button = item?.querySelector(".accordion-button");
  const body = item?.querySelector(".accordion-body");
  if (button && body) {
    body.hidden = false;
    button.setAttribute("aria-expanded", "true");
    setTimeout(() => item.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }
}

function renderSupportMatrix() {
  const mount = document.querySelector("[data-support-matrix]");
  if (!mount) return;
  mount.innerHTML = platforms.map((platform) => `
      <article class="matrix-card reveal">
        <h3>${platform.name}</h3>
        <p>${platform.title}</p>
        <p>${platform.short}</p>
        <ul>${platform.types.slice(0, 5).map((type) => `<li>${type}</li>`).join("")}</ul>
      <a class="btn btn-secondary" href="${platformPagePath(platform.slug)}"><i data-lucide="arrow-right"></i> Open Downloader</a>
      </article>
    `).join("");
}

function renderLegalPage() {
  const mount = document.querySelector("[data-legal-page]");
  if (!mount) return;
  const requested = new URLSearchParams(location.search).get("doc") || "privacy";
  const key = legalDocs[requested] ? requested : "privacy";
  const doc = legalDocs[key];
  const metaDescription = key === "contact"
    ? "Browse external tools for public YouTube, Instagram, TikTok, Facebook, Reddit, and other media links, with notes on their features and limits."
    : `${doc.title}. ${doc.intro}`.slice(0, 160);
  applySeoMetadata({
    title: `${doc.label} | SnapVideoHub`,
    description: metaDescription,
    canonical: pageUrl("legal.html", { doc: key })
  });
  const partnersMarkup = key === "contact" ? `
    <section class="legal-card legal-full partner-directory reveal" aria-labelledby="partner-directory-title">
      <h2 id="partner-directory-title">Our Partners</h2>
      <p>Explore external websites for public video, social media, and online media tools. Each partner site sets its own features, availability, and terms. Only use content you own or have permission to save.</p>
      <div class="partner-directory-grid">
        ${partnerWebsites.map(({ platform, items }) => `
          <article class="partner-platform-group">
            <h3>${escapeHtml(platform)} tools</h3>
            <ul class="partner-tool-list">
              ${items.map(([name, details]) => `
                <li>
                  <a href="${partnerUrls[name]}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)}</a>
                  <p>${escapeHtml(details)}</p>
                </li>
              `).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    </section>
  ` : "";
  mount.innerHTML = `
    <section class="page-hero compact-hero">
      <div>
        <p class="eyebrow">${doc.label}</p>
        <h1>${doc.title}</h1>
        <p>${doc.intro}</p>
      </div>
    </section>
    <section class="section legal-layout">
      <nav class="legal-tabs" aria-label="Policy navigation">
        ${Object.entries(legalDocs).map(([slug, item]) => `<a class="${slug === key ? "active" : ""}" href="legal.html?doc=${slug}">${item.label}</a>`).join("")}
      </nav>
      <div class="legal-content">
        ${doc.content ? renderLegalContent(doc.content) : doc.sections.map(([heading, items]) => `
          <article class="legal-card reveal">
            <h2>${heading}</h2>
            <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
        `).join("")}
        ${partnersMarkup}
      </div>
    </section>
  `;
}

function renderLegalContent(content) {
  return content.map((group) => `
    <article class="legal-card legal-full reveal">
      <h2>${escapeHtml(group.heading)}</h2>
      ${(group.sections || []).map((section) => `
        <div class="legal-subsection">
          ${section.heading ? `<h3>${escapeHtml(section.heading)}</h3>` : ""}
          ${(section.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          ${section.list ? `<ul>${section.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
          ${section.footer ? `<p>${escapeHtml(section.footer)}</p>` : ""}
        </div>
      `).join("")}
    </article>
  `).join("");
}

function renderBlogGrid() {
  const mount = document.querySelector("[data-blog-grid]");
  if (!mount) return;
  mount.innerHTML = tutorials.slice(0, 18).map((item) => `
    <article class="blog-card reveal">
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p>${item.intro}</p>
      <a class="btn btn-secondary" href="tutorials.html#tutorial-${item.id}"><i data-lucide="book-open"></i> Read Guide</a>
    </article>
  `).join("");
}

function renderLanguageCloud() {
  const mount = document.querySelector("[data-language-cloud]");
  if (!mount) return;
  mount.innerHTML = languages.map((language) => `<span lang="${language.code}" dir="${language.dir}">${escapeHtml(languageDisplayName(language))}</span>`).join("");
}

function renderSearchResults(query, mount) {
  if (!mount) return;
  const normalized = String(query || "").trim().toLowerCase();
  const pages = [
    { title: "Home", label: "Main downloader", url: "index.html" },
    { title: "Supported Platforms", label: "Choose a platform and open a downloader", url: "supported-platforms.html" },
    { title: "Tutorials", label: "Detailed platform guides", url: "tutorials.html" },
    { title: "Chrome Extension", label: "Browser workflow page", url: "extension.html" },
    { title: "Blog", label: "Downloader articles", url: "blog.html" },
    ...platforms.map((platform) => ({ title: platform.title, label: platform.short, url: platformPagePath(platform.slug) })),
    ...Object.entries(legalDocs).map(([slug, doc]) => ({ title: doc.label, label: doc.title, url: `legal.html?doc=${slug}` })),
    ...tutorials.map((item) => ({ title: item.title, label: item.intro, url: `tutorials.html#tutorial-${item.id}` }))
  ];
  const results = normalized ? pages.filter((item) => `${item.title} ${item.label}`.toLowerCase().includes(normalized)).slice(0, 16) : pages.slice(0, 12);
  mount.innerHTML = results.map((item) => `
    <a class="search-result" href="${item.url}">
      <strong>${item.title}</strong>
      <span>${item.label}</span>
    </a>
  `).join("") || `<p class="search-result">No results found.</p>`;
}

function platformLogoHtml(platform, lazy = true) {
  const fallback = platform.slug === "linkedin" ? "in" : platform.name.slice(0, 2);
  return `
    <div class="platform-logo platform-logo-${platform.slug}" data-fallback="${escapeHtml(fallback)}">
      <img src="${iconUrl(platform)}" alt="${platform.name} logo"${lazy ? " loading=\"lazy\"" : ""} onerror="this.parentElement.classList.add('logo-failed');this.remove();">
    </div>
  `;
}

function iconUrl(platform) {
  if (platform.slug === "linkedin") {
    return linkedinIconDataUrl();
  }
  return `https://cdn.simpleicons.org/${platform.icon}/${platform.color.replace("#", "")}`;
}

function linkedinIconDataUrl() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0a66c2"/><circle cx="20" cy="19" r="6" fill="#fff"/><path fill="#fff" d="M15 28h10v24H15zM30 28h9v3.4c1.4-2.1 4-4 8.1-4 8.5 0 10 5.6 10 12.9V52H47V41.7c0-2.5 0-5.7-3.5-5.7s-4 2.7-4 5.5V52H30z"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function initReveal() {
  const items = document.querySelectorAll(".platform-card, .feature-list article, .media-grid article, .steps-grid article, .matrix-card, .blog-card, .accordion-item, .legal-card");
  items.forEach((item) => item.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initScreenAnt() {
  if (document.querySelector("[data-screen-ant]")) return;

  const createAnt = (kind, asset, label, size) => {
    const element = document.createElement("button");
    element.type = "button";
    element.className = `screen-ant screen-ant--${kind}`;
    element.dataset.screenAnt = kind;
    element.setAttribute("aria-label", label);
    element.title = label;
    element.style.setProperty("--ant-size", `${size}px`);
    element.innerHTML = `<img src="assets/${asset}" alt="" draggable="false">`;
    document.body.appendChild(element);
    return { element, image: element.querySelector("img"), angle: 0, turnTimer: 0, moveTimer: 0, autoTimer: 0 };
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const turnDuration = reducedMotion ? 0 : 320;
  const crawlSpeed = 0.3;
  const redAnt = createAnt("red", "ant.png", "Guide the red ant: click anywhere to make it turn and crawl there.", 50);
  const pinkAnt = createAnt("pink", "ant-pink.png", "Pink ant", 42);
  const ants = [redAnt, pinkAnt];
  let phase = "waiting";
  let phaseTimer = 0;
  let phaseDeadline = 0;
  let phaseAction = null;
  let phaseRemaining = 0;
  let scrollPaused = false;
  let scrollResumeTimer = 0;
  let previousScrollY = window.scrollY;
  let loveHeart = null;

  const schedulePhase = (action, delay) => {
    window.clearTimeout(phaseTimer);
    phaseAction = action;
    phaseRemaining = delay;
    phaseDeadline = performance.now() + delay;
    phaseTimer = window.setTimeout(() => {
      phaseTimer = 0;
      phaseAction = null;
      phaseRemaining = 0;
      action();
    }, delay);
  };

  const clampPoint = (x, y) => ({
    x: Math.max(26, Math.min(window.innerWidth - 26, x)),
    y: Math.max(26, Math.min(window.innerHeight - 26, y))
  });

  const stopAnt = (ant) => {
    window.clearTimeout(ant.turnTimer);
    window.clearTimeout(ant.moveTimer);
    window.clearTimeout(ant.autoTimer);
    const rect = ant.element.getBoundingClientRect();
    ant.element.classList.remove("is-moving", "is-turning");
    ant.element.style.left = `${rect.left + rect.width / 2}px`;
    ant.element.style.top = `${rect.top + rect.height / 2}px`;
  };

  const moveAnt = (ant, requestedX, requestedY, options = {}) => {
    window.clearTimeout(ant.turnTimer);
    window.clearTimeout(ant.moveTimer);
    window.clearTimeout(ant.autoTimer);

    const rect = ant.element.getBoundingClientRect();
    const fromX = rect.left + rect.width / 2;
    const fromY = rect.top + rect.height / 2;
    const target = clampPoint(requestedX, requestedY);
    const dx = target.x - fromX;
    const dy = target.y - fromY;
    const distance = Math.hypot(dx, dy);

    ant.element.classList.remove("is-moving");
    ant.element.style.left = `${fromX}px`;
    ant.element.style.top = `${fromY}px`;

    const desiredAngle = options.angle ?? (Math.atan2(dy, dx) * 180 / Math.PI + 90);
    const turn = ((desiredAngle - ant.angle + 540) % 360) - 180;
    ant.angle += turn;
    ant.image.style.transform = `rotate(${ant.angle}deg)`;
    ant.element.classList.add("is-turning");

    ant.turnTimer = window.setTimeout(() => {
      ant.element.classList.remove("is-turning");
      const duration = reducedMotion ? 0 : Math.max(900, Math.min(5600, distance * 7)) / crawlSpeed;
      if (duration > 0 && distance > 1) {
        ant.element.style.setProperty("--walk-duration", `${duration}ms`);
        ant.element.classList.add("is-moving");
      }
      ant.element.style.left = `${target.x}px`;
      ant.element.style.top = `${target.y}px`;
      ant.moveTimer = window.setTimeout(() => {
        ant.element.classList.remove("is-moving");
        options.onArrive?.();
      }, duration + 80);
    }, turnDuration);
  };

  const wanderAgain = (ant, delay = 0) => {
    window.clearTimeout(ant.autoTimer);
    if (phase !== "wandering" || reducedMotion || scrollPaused) return;
    ant.autoTimer = window.setTimeout(() => {
      if (phase !== "wandering" || scrollPaused) return;
      const margin = 42;
      const x = margin + Math.random() * Math.max(1, window.innerWidth - margin * 2);
      const y = margin + Math.random() * Math.max(1, window.innerHeight - margin * 2);
      moveAnt(ant, x, y, { onArrive: () => wanderAgain(ant, 700 + Math.random() * 1700) });
    }, delay);
  };

  const hideLoveHeart = () => {
    loveHeart?.remove();
    loveHeart = null;
  };

  const beginWandering = () => {
    phase = "wandering";
    hideLoveHeart();
    ants.forEach(stopAnt);
    wanderAgain(redAnt, 150);
    wanderAgain(pinkAnt, 1000);
    schedulePhase(beginMeetup, 60_000);
  };

  const beginMeetup = () => {
    phase = "approaching";
    ants.forEach(stopAnt);
    const centerX = window.innerWidth / 2;
    const centerY = Math.max(58, Math.min(window.innerHeight - 58, window.innerHeight * 0.58));
    const headGap = 15;
    let arrivals = 0;
    const onArrive = () => {
      arrivals += 1;
      if (arrivals < ants.length || phase !== "approaching") return;
      phase = "kissing";
      loveHeart = document.createElement("span");
      loveHeart.className = "ant-love-heart";
      loveHeart.setAttribute("aria-hidden", "true");
      loveHeart.textContent = "♥";
      loveHeart.style.left = `${centerX}px`;
      loveHeart.style.top = `${centerY - 20}px`;
      document.body.appendChild(loveHeart);
      schedulePhase(beginWandering, 5000);
    };

    moveAnt(redAnt, centerX - headGap / 2, centerY, { angle: 90, onArrive });
    moveAnt(pinkAnt, centerX + headGap / 2, centerY, { angle: -90, onArrive });
  };

  redAnt.element.style.left = `${window.innerWidth * 0.76}px`;
  redAnt.element.style.top = `${window.innerHeight * 0.7}px`;
  pinkAnt.element.style.left = `${window.innerWidth * 0.24}px`;
  pinkAnt.element.style.top = `${window.innerHeight * 0.36}px`;

  pinkAnt.element.addEventListener("click", (event) => {
    event.stopPropagation();
    if (scrollPaused) {
      hideLoveHeart();
      phase = "wandering";
      phaseAction = beginMeetup;
      phaseRemaining = 60_000;
      return;
    }
    beginWandering();
  });

  const faceScrollDirection = (angle) => {
    ants.forEach((ant) => {
      const turn = ((angle - ant.angle + 540) % 360) - 180;
      ant.angle += turn;
      ant.image.style.transform = `rotate(${ant.angle}deg)`;
    });
  };

  const resumeAfterScroll = () => {
    scrollPaused = false;
    if (phase === "approaching") {
      beginMeetup();
      return;
    }
    if (phaseAction && phaseRemaining > 0) {
      schedulePhase(phaseAction, phaseRemaining);
    }
    if (phase === "wandering") {
      wanderAgain(redAnt, 150);
      wanderAgain(pinkAnt, 1000);
    }
  };

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY >= previousScrollY ? 180 : 0;
    previousScrollY = currentScrollY;

    if (!scrollPaused) {
      scrollPaused = true;
      if (phaseTimer) {
        phaseRemaining = Math.max(0, phaseDeadline - performance.now());
        window.clearTimeout(phaseTimer);
        phaseTimer = 0;
      }
      ants.forEach(stopAnt);
    }

    faceScrollDirection(direction);
    window.clearTimeout(scrollResumeTimer);
    scrollResumeTimer = window.setTimeout(resumeAfterScroll, 450);
  }, { passive: true });

  document.addEventListener("click", (event) => {
    if (phase === "kissing" || phase === "approaching") beginWandering();
    moveAnt(redAnt, event.clientX, event.clientY, {
      onArrive: () => wanderAgain(redAnt, 650 + Math.random() * 1100)
    });
  });

  window.addEventListener("resize", () => {
    ants.forEach((ant) => {
      const rect = ant.element.getBoundingClientRect();
      const point = clampPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
      stopAnt(ant);
      ant.element.style.left = `${point.x}px`;
      ant.element.style.top = `${point.y}px`;
    });
    if (phase === "kissing") beginWandering();
  });

  schedulePhase(beginWandering, 10_000);
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  updateThemeIconSafe();
}

function updateThemeIconSafe() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle || toggle.dataset.ready === document.documentElement.dataset.theme) return;
  const dark = document.documentElement.dataset.theme === "dark";
  toggle.dataset.ready = document.documentElement.dataset.theme;
  toggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}
