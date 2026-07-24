export type ExperienceItem = {
  id: number;
  title: string;
  titleEn: string;
  image: string;
  description: string[];
  descriptionEn: string[];
  skills?: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 3,
    title: "Creating TikTok Content with AI Tools",
    titleEn: "Creating TikTok Content with AI Tools",
    image: "/projects/Experience/Fireexpress.jpg?v=202607212342",
    description: [
      "ในช่วงปี 2568 ผมได้ลองสร้างช่อง TikTok ชื่อ เติมไฟด่วน เพื่อทำคอนเทนต์เกี่ยวกับการ “เติมไฟ” ผ่านคลิปวิดีโอสั้นที่ใช้ตัวการ์ตูนไฟน่ารักๆเป็นตัวหลัก",
      "ผมสร้างคอนเทนต์ด้วยตัวเอง ตั้งแต่การคิดแนวทางของช่อง ออกแบบตัวละคร คิดเนื้อเรื่องและมุกสำหรับแต่ละคลิป เขียน Prompt เพื่อสร้างภาพและวิดีโอ รวมถึงทดลองใช้เครื่องมือ AI หลายประเภท เช่น เครื่องมือช่วยคิดเนื้อหา สร้างภาพ สร้างวิดีโอ และปรับแต่งผลงานให้เหมาะกับรูปแบบคอนเทนต์สั้นบน TikTok",
      "ประสบการณ์นี้ทำให้ผมได้ฝึกการเขียน Prompt ให้มีรายละเอียดและสื่อสารกับ AI ได้ตรงตามความต้องการมากขึ้น รวมถึงได้เรียนรู้ว่าผลงานจาก AI ไม่สามารถนำมาใช้งานได้ทันทีทุกครั้ง แต่ต้องทดลอง ปรับคำสั่ง คัดเลือก และแก้ไขหลายรอบ เพื่อให้ภาพ ตัวละคร เนื้อเรื่อง และอารมณ์ของวิดีโอมีความต่อเนื่องกัน",
      "ประสบการณ์นี้ช่วยให้ผมเข้าใจทั้งความสามารถและข้อจำกัดของ AI รวมถึงวิธีนำเครื่องมือเหล่านี้มาประยุกต์ใช้ในกระบวนการสร้างสรรค์ผลงานจริง",
    ],
    descriptionEn: [
      "In 2025, I created a TikTok channel called Fire Express to produce content based on the concept of “เติมไฟ” (Tem Fai) through short videos featuring a cute flame character as the main focus.",
      "I created the content independently, from developing the channel’s direction and designing the character to planning the stories and jokes for each video. I also wrote prompts to generate images and videos and experimented with various AI tools for content ideation, image generation, video creation, and refining the final results to suit TikTok’s short-form content format.",
      "This experience helped me improve my prompt-writing skills by learning how to provide clear details and communicate my ideas to AI more accurately. I also learned that AI-generated content cannot always be used immediately. It often requires testing, prompt adjustments, careful selection, and multiple rounds of editing to maintain consistency across the visuals, characters, stories, and emotional tone of each video.",
      "Through this experience, I gained a better understanding of both the capabilities and limitations of AI, as well as how these tools can be effectively applied in a real creative workflow.",
    ],
    skills: ["ChatGPT", "Gemini", "Kling AI", "Google Veo", "Sora", "Grok", "AI Prompt Engineering"],
  },
  {
    id: 1,
    title: "Facebook Page Content Creator",
    titleEn: "Facebook Page Content Creator",
    image: "/projects/Experience/FacebookPages.png",
    description: [
      "ในช่วงยุคของโควิด19 ผมได้ลองสร้างและดูแล Facebook Pages หลายเพจด้วยตัวเองคนเดียวทั้งหมด โดยนำเสนอคอนเทนต์หลากหลายรูปแบบ เช่น คำคม มีม แชทมุกตลก และเนื้อหาที่อิงจากกระแสบนโซเชียลมีเดียในช่วงเวลานั้น จนปัจจุบันก็ยังมีมีมหรือมุขแชทที่ผมเคยสร้างไว้ ก็ยังคงมีการแชร์ต่อกันในโซเชียลอยู่บ้าง",
      "ผมรับผิดชอบตั้งแต่การติดตามเทรนด์ คิดหัวข้อ วางแนวทางของคอนเทนต์ เขียนข้อความ เลือกภาพ และเผยแพร่โพสต์ให้เหมาะกับกลุ่มผู้ติดตาม รวมถึงสังเกตผลตอบรับจากยอดเข้าถึง การกดถูกใจ ความคิดเห็น และการแชร์ เพื่อนำมาปรับปรุงรูปแบบคอนเทนต์ในครั้งต่อไป",
      "ประสบการณ์นี้ช่วยฝึกให้ผมคิดคอนเทนต์ได้รวดเร็ว เข้าใจพฤติกรรมของผู้ใช้งานบนโซเชียลมีเดีย และเรียนรู้ว่าการสื่อสารที่ดีต้องคำนึงถึงทั้งจังหวะของกระแส รูปแบบการนำเสนอ และความสนใจของกลุ่มเป้าหมาย นอกจากนี้ยังช่วยพัฒนาทักษะด้านความคิดสร้างสรรค์ การเขียนข้อความสั้น การออกแบบคอนเทนต์ และการบริหารเพจอย่างต่อเนื่อง",
    ],
    descriptionEn: [
      "During the COVID-19 pandemic, I independently created and managed several Facebook pages entirely on my own. I produced a variety of content, including quotes, memes, humorous chat-style posts, and content inspired by social media trends at the time. Even today, some of the memes and chat jokes I created can still be seen circulating online.",
      "I was responsible for every part of the process, from monitoring trends, developing content ideas, and planning the direction of each post to writing captions, selecting images, and publishing content that matched the interests of the audience. I also reviewed performance through reach, reactions, comments, and shares, then used those insights to improve future content.",
      "This experience trained me to develop content ideas quickly, understand user behavior on social media, and recognize that effective communication depends on timing, presentation, and the interests of the target audience. It also helped me strengthen my creativity, concise writing, content design, and ongoing page management skills.",
    ],
  },
];
