import type { PortfolioData } from "@/types/portfolio";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const portfolio: PortfolioData = {
  profile: {
    name: "Purin Amang",
    displayName: {
      th: { first: "ภูรินทร์", last: "อะมังค์" },
      en: { first: "PURIN", last: "AMANG" },
    },
    greeting: { th: "สวัสดีครับ ผมชื่อ", en: "Hello, I’m" },
    roles: {
      th: ["นักศึกษาวิทยาการคอมพิวเตอร์", "Frontend Development", "AI", "Software Testing"],
      en: ["Computer Science Student", "Frontend Development", "AI", "Software Testing"],
    },
    introduction: {
      th: "ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจการพัฒนาเว็บแอปพลิเคชันและการออกแบบส่วนหน้าเว็ป รวมถึงการประยุกต์ใช้ AI เพื่อแก้ไขปัญหาและพัฒนาโซลูชันที่สามารถนำไปใช้งานได้จริง",
      en: "A Computer Science student interested in web application development and front-end web design, as well as applying AI to solve problems and develop practical, real-world solutions.",
    },
    profileImage: "/images/profile.jpg?v=202607231219",
    education: { th: "ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์", en: "Bachelor’s Degree in Computer Science" },
    educationHistory: [
      {
        institution: {
          th: "โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม",
          en: "Thammasat Klongluang Wittayakom School",
        },
        period: { th: "2020 - 2023", en: "2020 - 2023" },
        details: {
          th: ["ห้องเรียนพิเศษวิทย์-คณิตทั่วไป", "เกรดเฉลี่ย 3.63"],
          en: ["Science Mathematics Enrichment Program", "(GPA) 3.63"],
        },
      },
      {
        institution: {
          th: "มหาวิทยาลัยกรุงเทพ",
          en: "Bangkok University",
        },
        period: { th: "2023 - ปัจจุบัน", en: "2023 - Recently" },
        details: {
          th: [
            "คณะเทคโนโลยีสารสนเทศและนวัตกรรม",
            "สาขา วิทยาการคอมพิวเตอร์",
            "เกรดเฉลี่ย 3.57",
          ],
          en: [
            "School of Information Technology and Innovation",
            "Major Computer Science",
            "(GPA) 3.57",
          ],
        },
      },
    ],
    personalDetails: [
      {
        label: { th: "ชื่อ", en: "Name" },
        value: { th: "ภูรินทร์ อะมังค์", en: "Purin Amang" },
      },
      {
        label: { th: "ชื่อเล่น", en: "Nickname" },
        value: { th: "ภู", en: "Pu" },
      },
      {
        label: { th: "วันเกิด", en: "Date of Birth" },
        value: { th: "6 กรกฎาคม 2547", en: "July 6, 2004" },
      },
      {
        label: { th: "ศาสนา", en: "Religion" },
        value: { th: "พุทธ", en: "Buddhism" },
      },
      {
        label: { th: "สัญชาติ", en: "Nationality" },
        value: { th: "ไทย", en: "Thai" },
      },
    ],
    location: { th: "ประเทศไทย", en: "Thailand" },
    mainInterest: { th: "Software Development และ AI", en: "Software Development & AI" },
    careerGoal: {
      th: "พัฒนาทักษะด้าน Software Development และสร้างระบบที่มีประโยชน์ต่อผู้ใช้งานจริง",
      en: "To grow as a software developer and create systems that deliver genuine value to users.",
    },
    about: [
      {
        th: "ผมเริ่มสนใจคอมพิวเตอร์มาตั้งแต่เด็ก และทำผลการเรียนในวิชาคอมพิวเตอร์ได้ดีมาโดยตลอด เมื่อเข้าศึกษาในระดับมหาวิทยาลัย ผมจึงเลือกเรียนสาขาวิทยาการคอมพิวเตอร์ และได้เริ่มฝึกพัฒนาทักษะด้านการเขียนโปรแกรมมาเรื่อยๆได้ในระดับพื้นฐาน",
        en: "I have been interested in computers since childhood and have consistently performed well in computer-related subjects. When I entered university, I chose to study Computer Science and began developing my programming skills. I currently have a basic foundation in programming and continue to improve my skills over time.",
      },
      {
        th: "ในการทำงานผมต้องบอกตรงๆ ว่าผมใช้เครื่องมือ AI ช่วยทำงานค่อนข้างมาก เพราะมันช่วยลดเวลาในการทำงานของเราได้เยอะ จากนั้นผมอ่านโค้ดทั้งหมด ทดลองใช้งาน ปรับแก้ส่วนที่ไม่ตรงกับความต้องการ และทำความเข้าใจว่าแต่ละส่วนทำงานอย่างไร สำหรับผมนี่คือวิธีทำงานของนักพัฒนายุคนี้ แต่เครื่องมือจะดีได้แค่ไหนก็ขึ้นอยู่กับคนที่ใช้มัน ผมจึงยังฝึกพื้นฐานของตัวเองอยู่เสมอ",
        en: "To be honest, I use AI tools quite frequently in my work because they help reduce the time required to complete tasks. After receiving the generated code, I read through it, test it, adjust any parts that do not meet my requirements, and make sure I understand how each part works. For me, this is part of how modern developers work. However, no matter how powerful a tool may be, its effectiveness still depends on the person using it. That is why I continue to practice and strengthen my programming fundamentals.",
      },
    ],
    interests: [
      { th: "พัฒนาเว็บไซต์", en: "Web Development" },
      { th: "พัฒนาแอปพลิเคชันมือถือ", en: "Mobile Application Development" },
      { th: "ปัญญาประดิษฐ์และ Machine Learning", en: "Artificial Intelligence & Machine Learning" },
      { th: "ออกแบบ UI/UX", en: "UI/UX Design" },
      { th: "ฐานข้อมูลและสถาปัตยกรรมซอฟต์แวร์", en: "Database & Software Architecture" },
    ],
    socials: [
      { platform: "GitHub", label: "github.com/Purin-Work", href: "https://github.com/Purin-Work" },
      { platform: "LinkedIn", label: "linkedin.com/in/purin-work", href: "https://www.linkedin.com/in/purin-work" },
      { platform: "Email", label: "purin.work67@gmail.com", href: "mailto:purin.work67@gmail.com" },
      { platform: "Phone", label: "0800456283", href: "tel:0800456283" },
    ],
  },
  projects: [
    {
      id: "fishy-game",
      title: "Fishy Game — AI Party Game (Android)",
      category: "Mobile Application",
      description: {
        th: "Fishy Game เป็นเกมปาร์ตี้แนวซ่อนบทบาทที่เล่นร่วมกันผ่านโทรศัพท์มือถือเพียงเครื่องเดียว โดยผู้เล่นผลัดกันส่งต่ออุปกรณ์เพื่อดูบทบาทของตนเอง ในแต่ละรอบ ระบบจะใช้ AI ของ OpenAI สร้างคำถาม คำตอบ และภาพประกอบให้เหมาะกับหมวดหมู่และช่วงอายุที่เลือก ได้แก่ เด็ก วัยรุ่น และผู้ใหญ่ ผู้เล่นจะถูกสุ่มให้รับบทเป็น Hunter, Blue Fish หรือ Red Fish โดยต้องใช้ทักษะการสังเกต การสื่อสาร และการวิเคราะห์ เพื่อค้นหาว่าใครพูดความจริงและใครกำลังหลอกลวง ตั้งแต่การเปิดเผยบทบาท ช่วงเล่าเรื่อง ช่วงไล่ล่า ไปจนถึงการคำนวณคะแนนและจัดอันดับ ทุกขั้นตอนสามารถดำเนินการภายในแอปพลิเคชันได้ทั้งหมด",
        en: "Fishy Game is a hidden-role party game designed to be played using a single mobile device that is passed between players. At the beginning of each round, OpenAI-powered AI generates questions, answers, and illustrations based on the selected category and age group, including children, teenagers, and adults. Players are randomly assigned as the Hunter, Blue Fish, or Red Fish and must use observation, communication, and analytical skills to identify who is telling the truth and who is bluffing. The entire gameplay process—including role assignment, storytelling, hunting, score calculation, and leaderboard management—is handled within the application.",
      },
      image: "/images/8.png",
      images: Array.from({ length: 18 }, (_, index) => `/images/${index + 1}.png`),
      technologies: ["C#", ".NET MAUI", "XAML", "SQLite", "OpenAI API"],
    },
    {
      id: "buemail-system",
      title: "BUemail System",
      category: "Web Application",
      description: {
        th: "BUemail System เป็นเว็บแอปพลิเคชันจำลองระบบอีเมลภายในมหาวิทยาลัย พัฒนาขึ้นเพื่อฝึกการออกแบบระบบเว็บและการจัดการข้อมูลผู้ใช้งาน ภายในระบบมีฟังก์ชันสมัครสมาชิก เข้าสู่ระบบ ดูรายการอีเมล อ่านข้อความ เขียนอีเมลใหม่ และลบอีเมล พร้อมระบบตรวจสอบความถูกต้องของข้อมูล เช่น รูปแบบอีเมล เบอร์โทรศัพท์ และรหัสผ่าน\n\nในส่วนของการออกแบบ ผมได้วาง Customer Journey ตั้งแต่การสมัครสมาชิกและเข้าสู่ระบบ ไปจนถึงการใช้งานกล่องข้อความ การอ่านอีเมล และการส่งข้อความใหม่ เพื่อให้ผู้ใช้งานสามารถเข้าใจขั้นตอนและใช้งานระบบได้ง่ายขึ้น\n\nโปรเจกต์นี้พัฒนาด้วย ASP.NET Core Razor Pages และ C# ใช้ ASP.NET Core Identity สำหรับระบบสมาชิกและการยืนยันตัวตน รวมถึงใช้ Entity Framework Core และ SQL Server ในการจัดการฐานข้อมูล",
        en: "BUemail System is a web application that simulates an internal university email system. It was developed to practice web application design and user data management. The system includes features for user registration, login, viewing email lists, reading messages, composing new emails, and deleting emails. It also includes input validation for information such as email addresses, phone numbers, and passwords.\n\nFor the design process, I created a customer journey covering the entire user flow, from registration and login to inbox navigation, email reading, and message composition. The goal was to make each step clear and easy for users to understand.\n\nThe project was developed using ASP.NET Core Razor Pages and C#. It uses ASP.NET Core Identity for user accounts and authentication, along with Entity Framework Core and SQL Server for database management.",
      },
      highlights: {
        th: [
          "สมัครสมาชิกและเข้าสู่ระบบ",
          "แสดงรายการอีเมลในกล่องข้อความ",
          "เปิดอ่านรายละเอียดของอีเมล",
          "เขียนและส่งอีเมลใหม่",
          "ลบอีเมลออกจากรายการ",
        ],
        en: [
          "User registration and login",
          "Email inbox display",
          "Email detail viewing",
          "Email composition and sending",
          "Email deletion",
        ],
      },
      image: "/projects/BUemail _system/video-poster.jpg",
      images: [
        "/projects/BUemail _system/BUemail_system1.png",
        "/projects/BUemail _system/BUemail_system2.png",
        "/projects/BUemail _system/BUemail_system3.png",
        "/projects/BUemail _system/BUemail_system4.png",
      ],
      video: "/projects/BUemail _system/BUemail_system.mp4",
      technologies: [
        "C#",
        "HTML",
        "ASP.NET Core",
        "CSS",
        "SQL Server",
      ],
      github: "https://github.com/Purin-Work/BUemail-System",
    },
    {
      id: "bankers-algorithm-simulator",
      title: "Banker’s Algorithm Simulator",
      category: "Operating Systems",
      description: {
        th: "Banker’s Algorithm Simulator เป็นโปรแกรม GUI สำหรับจำลองการจัดสรรทรัพยากรในระบบปฏิบัติการ และตรวจสอบว่าระบบอยู่ในสถานะปลอดภัยหรือไม่ เพื่อหลีกเลี่ยงปัญหา Deadlock\n\nผู้ใช้สามารถกำหนดจำนวน Process และ Resource Types จากนั้นกรอกข้อมูลในตาราง Allocation, Max และ Available ระบบจะคำนวณค่า Need อัตโนมัติ พร้อมตรวจสอบลำดับการทำงานของแต่ละ Process และแสดงผลว่าเป็น Safe State หรือ Unsafe State / Deadlock Detected\n\nโปรแกรมยังแสดงรายละเอียดการคำนวณ เช่น ค่า Work ก่อนและหลังในแต่ละรอบ สถานะ Finish ของแต่ละ Process และ Safe Sequence แบบทีละขั้นตอน เพื่อช่วยให้ผู้เรียนเข้าใจหลักการทำงานของ Banker’s Algorithm ได้ง่ายขึ้น",
        en: "Banker’s Algorithm Simulator is a GUI application designed to simulate resource allocation in an operating system and determine whether the system is in a safe state in order to avoid deadlock.\n\nUsers can define the number of processes and resource types, then enter values into the Allocation, Max, and Available tables. The system automatically calculates the Need Matrix, checks the execution sequence of each process, and displays whether the system is in a Safe State or an Unsafe State / Deadlock Detected condition.\n\nThe application also presents detailed calculation results, including the Work values before and after each step, the Finish Status of each process, and the Safe Sequence in a step-by-step format. This helps users understand the principles and workflow of Banker’s Algorithm more easily.",
      },
      highlights: {
        th: [
          "กำหนดจำนวน Process และ Resource Types ได้",
          "สร้างตาราง Allocation, Max, Need และ Available แบบอัตโนมัติ",
          "คำนวณ Need Matrix",
          "ตรวจสอบ Safe State และ Unsafe State",
          "แสดง Safe Sequence แบบ Step-by-Step",
          "แสดงค่า Work และ Finish Status ของแต่ละ Process",
          "มีปุ่ม Reset สำหรับล้างข้อมูลและเริ่มใหม่",
          "ออกแบบเป็น GUI เพื่อให้เข้าใจอัลกอริทึมได้ง่ายขึ้น",
        ],
        en: [
          "Defines the number of processes and resource types",
          "Automatically generates Allocation, Max, Need, and Available tables",
          "Calculates the Need Matrix",
          "Detects Safe and Unsafe States",
          "Displays the Safe Sequence step by step",
          "Shows Work values and Finish Status for each process",
          "Includes a Reset button for clearing data and starting over",
          "Uses a GUI to make the algorithm easier to understand",
        ],
      },
      image: "/projects/Banker’s Algorithm/video-poster.jpg",
      video: "/projects/Banker’s Algorithm/Banker’s Algorithm.mp4",
      technologies: [
        "Banker’s Algorithm",
        "GUI",
        "Pythons",
        "UI/UX Design",
        "Figma",
        "Gemini 2.5 Flash",
        "Prompt Engineering",
      ],
      figma: "https://www.figma.com/design/8jsUEuwkOMWCXXrtEebzYe/Banker-s-Algorithm?node-id=0-1&t=oqdxbycGnOnNGRTd-1",
    },
    {
      id: "ai-ecommerce-review-analyzer",
      title: "AI E-commerce Review Analyzer",
      category: "Artificial Intelligence",
      description: {
        th: "AI E-commerce Review Analyzer เป็นโปรเจกต์ที่ออกแบบระบบ AI สำหรับช่วยร้านค้าออนไลน์วิเคราะห์รีวิวและความคิดเห็นจากลูกค้าจำนวนมาก แทนการอ่านและตรวจสอบข้อความทีละรายการ ซึ่งอาจใช้เวลานานและทำให้มองข้ามปัญหาสำคัญที่เกิดขึ้นซ้ำ ๆ ได้\n\nระบบรับข้อความรีวิวจากลูกค้าแล้วนำมาผ่านกระบวนการเตรียมข้อมูล เช่น การทำความสะอาดข้อความและปรับรูปแบบข้อมูล ก่อนใช้ AI วิเคราะห์อารมณ์ของรีวิว แยกประเภทของปัญหา ตรวจสอบระดับความเร่งด่วน ค้นหาคำสำคัญ และสรุปประเด็นหลักให้อยู่ในรูปแบบที่เข้าใจง่าย\n\nผลลัพธ์จะแสดงเป็น Dashboard เพื่อช่วยให้ร้านค้ามองเห็นได้ว่าลูกค้ากำลังพูดถึงเรื่องใดบ่อยที่สุด เช่น ราคา คุณภาพสินค้า การจัดส่ง หรือการบริการ รวมถึงช่วยจัดลำดับว่าปัญหาใดควรได้รับการแก้ไขก่อน ทำให้ผู้ดูแลร้านสามารถตัดสินใจและตอบสนองต่อความคิดเห็นของลูกค้าได้รวดเร็วขึ้น",
        en: "AI E-commerce Review Analyzer is an AI-powered system designed to help online stores analyze large volumes of customer reviews and feedback. It reduces the need to read and inspect each message individually, which can be time-consuming and may cause important recurring issues to be overlooked.\n\nThe system receives customer reviews and processes them through several preparation steps, such as text cleaning and data normalization. It then uses AI to analyze the sentiment of each review, classify the type of issue, evaluate its urgency level, extract important keywords, and summarize the main problem in an easy-to-understand format.\n\nThe results are displayed through a dashboard, allowing store owners to identify the topics customers mention most frequently, such as price, product quality, delivery, or service. The system also helps prioritize which issues should be addressed first, enabling store administrators to make decisions and respond to customer feedback more quickly.",
      },
      highlights: {
        th: [
          "วิเคราะห์รีวิวเป็น Positive, Negative หรือ Neutral",
          "จัดหมวดหมู่ปัญหา เช่น Price, Quality, Delivery และ Service",
          "ประเมินความเร่งด่วนเป็น Low, Medium หรือ High",
          "ดึงคำสำคัญและสรุปปัญหาจากรีวิว",
          "แสดงภาพรวมและสถิติผ่าน Dashboard",
          "ช่วยค้นหาปัญหาที่เกิดซ้ำและควรได้รับการแก้ไขก่อน",
        ],
        en: [
          "Classifies reviews as Positive, Negative, or Neutral",
          "Categorizes issues such as Price, Quality, Delivery, and Service",
          "Evaluates urgency as Low, Medium, or High",
          "Extracts keywords and summarizes the main issue",
          "Displays insights and statistics through a dashboard",
          "Identifies recurring problems and helps prioritize issues that require attention",
        ],
      },
      image: "/projects/AI E-commerce Review Analyzer/video-poster.jpg",
      video: "/projects/AI E-commerce Review Analyzer/AI E-commerce Review Analyzer.mp4",
      technologies: [
        "OpenAI API",
        "Prompt Engineering",
        "Natural Language Processing",
        "Sentiment Analysis",
        "Text Classification",
      ],
      github: "https://github.com/Purin-Work/AI-E-commerce-Review-Analyzer",
    },
    {
      id: "fall-detection",
      title: "Elderly Fall Monitoring System — IoT",
      category: "IoT",
      description: {
        th: "ระบบ IoT สำหรับเฝ้าระวังการล้ม โดย ESP32 อ่านค่าความเร่งจากเซ็นเซอร์ MPU6050 แล้วมองหารูปแบบของการล้ม คือแรงกระแทกสูงตามด้วยการนอนนิ่งผิดปกติ ระบบจะเตือนผ่านจอ OLED ไฟ LED และ buzzer ก่อน และจะส่งแจ้งเตือนจริงก็ต่อเมื่อไม่มีใครกดยกเลิกภายในสิบวินาที เพื่อไม่ให้แค่สะดุดกลายเป็นการเรียกความช่วยเหลือผิดพลาด",
        en: "An IoT prototype that watches for falls. An ESP32 reads acceleration from an MPU6050 and looks for the pattern of a fall: a hard impact followed by the person lying still. It warns on the OLED, LED and buzzer first, and only sends the alert if nobody cancels within ten seconds — so a stumble doesn't call for help by mistake.",
      },
      highlights: {
        th: [
          "ตรวจจับด้วยกฎจากค่าความเร่งรวม (แรงกระแทกเกิน 2.5g แล้วตามด้วยการอยู่นิ่ง) ควบคุมด้วย state machine 6 สถานะ ตั้งแต่ NORMAL จนถึง ALERT SENT",
          "มีช่วงเวลาให้กดยกเลิกก่อนส่งแจ้งเตือน เพื่อกันการแจ้งเตือนผิดพลาด",
          "แดชบอร์ดเว็บที่คุยกับ ESP32 ผ่าน HTTP API แสดงกราฟความเร่งแบบเรียลไทม์ ปรับค่าตรวจจับได้ และมีปุ่มจำลองสถานการณ์สำหรับสาธิต",
          "รันได้ครบทั้งระบบบนโปรแกรมจำลอง Wokwi ผ่าน PlatformIO จึงสาธิตได้โดยไม่ต้องมีอุปกรณ์จริง",
        ],
        en: [
          "Rule-based detection on total acceleration (impact over 2.5g, then stillness), driven by a six-state machine from NORMAL to ALERT SENT",
          "Cancel window before the alert goes out, to keep false alarms from getting through",
          "Web dashboard over the ESP32's HTTP API: live acceleration graph, adjustable thresholds, and scenario buttons for demos",
          "Runs end to end in the Wokwi simulator via PlatformIO, so the whole system can be demoed without physical hardware",
        ],
      },
      image: "/projects/fall_detection_report/video-poster.jpg",
      video: "/projects/fall_detection_report/Elderly-falls-monitoring-system.mp4",
      technologies: ["ESP32", "C++", "PlatformIO", "Wokwi", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Purin-Work/Elderly-Fall-Monitoring-System",
    },
  ],
  skillGroups: [
    { title: { th: "ภาษาโปรแกรม", en: "Programming Languages" }, skills: [{ name: "C#", level: "Basic / Familiar" }, { name: "Python", level: "Basic / Familiar" }, { name: "JavaScript", level: "Familiar" }, { name: "HTML", level: "Basic" }, { name: "CSS", level: "Basic" }] },
    { title: { th: "เฟรมเวิร์กและไลบรารี", en: "Frameworks & Libraries" }, skills: [{ name: "Next.js", level: "Basic" }, { name: "React", level: "Basic" }, { name: "Tailwind CSS", level: "Basic" }, { name: ".NET MAUI", level: "Basic" }, { name: "ASP.NET Core Razor Pages", level: "Familiar" }] },
    { title: { th: "ฐานข้อมูล", en: "Databases" }, skills: [{ name: "SQLite", level: "Basic" }, { name: "MySQL", level: "Basic" }] },
    { title: { th: "เครื่องมือและเทคโนโลยี", en: "Tools & Technologies" }, skills: [{ name: "Git & GitHub", level: "Basic" }, { name: "Visual Studio", level: "Basic" }, { name: "VS Code", level: "Basic" }, { name: "Figma", level: "Basic" }, { name: "Wokwi", level: "Basic" }, { name: "RapidMiner", level: "Familiar" }, { name: "Cisco Packet Tracer", level: "Familiar" }] },
  ],
  activities: [
    {
      title: {
        th: "IT Empowering Day 2026: In the Era of AI — มหาวิทยาลัยกรุงเทพ",
        en: "IT Empowering Day 2026: In the Era of AI — Bangkok University",
      },
      date: {
        th: "21 พฤษภาคม 2569 · BU Diamond Hall",
        en: "May 21, 2026 · BU Diamond Hall",
      },
      role: {
        th: "ระบบจัดการห้องแล็บอัจฉริยะ — ทีมที่ผ่านเข้ารอบ Pitching",
        en: "Smart Laboratory Management System — Pitching Finalist",
      },
      description: {
        th: "ทีมของผม 65กรัม ได้รับคัดเลือกเป็น 1 ใน 10 ทีมสุดท้าย ประเภท Industry-driven Innovation Project และได้ขึ้นเวทีนำเสนอผลงานต่อหน้าคณะกรรมการจาก AWS, KBTG และ BorntoDev เพื่อชิงรางวัล Best AI Prototype for Real-World Impact และได้รับให้จัดทำบูธเพื่อให้ผู้เข้าร่วมมาสอบถามหรือทดลองใช้งานเว็บไซต์",
        en: "My team, 65 Grams, was selected as one of the Top 10 finalist teams in the Industry-Driven Innovation Project category. We were invited to present our project on stage to a panel of judges from AWS, KBTG, and BorntoDev for the Best AI Prototype for Real-World Impact award.\n\nWe were also given the opportunity to set up a project booth, where attendees could learn more about the system, ask questions, and try the website prototype.",
      },
      highlights: {
        th: [
          "ระบบจดจำใบหน้าสำหรับเข้าใช้ห้องแล็บ พร้อมการตรวจจับใบหน้าปลอม (Anti-Spoofing) ที่แยกใบหน้าจริงออกจากภาพถ่ายหรือหน้าจอที่นำมาสวมรอยได้",
          "นำเสนอต้นแบบและแนวทางการใช้ AI",
        ],
        en: [
          "Developed a facial recognition system for laboratory access control",
          "Implemented anti-spoofing detection to distinguish real faces from photos or screens used for impersonation",
          "Presented the AI prototype and explained its practical application in a real-world environment",
          "Demonstrated the website prototype to event attendees and received feedback from judges and participants",
        ],
      },
      skills: [],
      images: [
        "/Activities/IT Empowering/Activities1.jpg",
        "/Activities/IT Empowering/Activities2.jpg",
        "/Activities/IT Empowering/Activities3.jpg",
        "/Activities/IT Empowering/Activities4.jpg",
        "/Activities/IT Empowering/Activities5.jpg",
        "/Activities/IT Empowering/Activities6.jpg",
      ],
    },
    {
      title: {
        th: "BU Cyber Fortress Challenge & Career Expo",
        en: "BU Cyber Fortress Challenge & Career Expo",
      },
      date: {
        th: "10 กุมภาพันธ์ 2569 · BU Diamond Hall",
        en: "February 10, 2026 · BU Diamond Hall",
      },
      description: {
        th: "ผมได้เข้าร่วมกิจกรรม BU Cyber Fortress Challenge & Career Expo ซึ่งเปิดโอกาสให้นักศึกษาได้เรียนรู้เกี่ยวกับ Cybersecurity พร้อมพูดคุยกับบริษัทด้านเทคโนโลยีเกี่ยวกับตำแหน่งงาน การฝึกงาน และทักษะที่ภาคอุตสาหกรรมต้องการ กิจกรรมนี้ทำให้ผมเห็นความสำคัญของความปลอดภัยไซเบอร์มากขึ้น และสนใจพัฒนาความรู้ด้านนี้เพิ่มเติมในอนาคต",
        en: "I participated in the BU Cyber Fortress Challenge & Career Expo, where students had the opportunity to learn more about cybersecurity and connect with technology companies to explore career paths, internships, and industry expectations. The event helped me recognize the importance of cybersecurity and encouraged me to continue developing my knowledge and skills in this field.",
      },
      skills: [],
      images: [
        "/Activities/BU Cyber Fortress Challenge/1.png",
        "/Activities/BU Cyber Fortress Challenge/2.jpg",
        "/Activities/BU Cyber Fortress Challenge/3.jpg",
      ],
    },
  ],
  certifications: [],
};

export const projectCategories = [
  "All",
  "Web Application",
  "Mobile Application",
  "Artificial Intelligence",
  "IoT",
  "Operating Systems",
] as const;
