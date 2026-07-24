# Purin Amang — Personal Portfolio

เว็บไซต์ Portfolio แบบหน้าเดียวสำหรับแนะนำตัว ทักษะ ผลงาน กิจกรรม ประกาศนียบัตร และประสบการณ์ รองรับภาษาไทย/อังกฤษ รวมถึงหน้าจอมือถือ Tablet และ Desktop

สร้างด้วย Next.js App Router, TypeScript, Tailwind CSS, Framer Motion และ Lucide React

## เริ่มใช้งาน

ต้องมี Node.js 20.9 ขึ้นไป

```bash
npm install
npm run dev
```

เปิด `http://localhost:3000`

หาก PowerShell ไม่อนุญาตให้รัน `npm.ps1` ให้ใช้คำสั่งต่อไปนี้แทน:

```powershell
npm.cmd install
npm.cmd run dev
```

## ตรวจสอบก่อนเผยแพร่

```bash
npm run lint
npm run build
npm audit
```

ทดสอบเว็บไซต์แบบ Production:

```bash
npm run build
npm start
```

## โครงสร้างสำคัญ

```text
app/                       หน้าเว็บ, metadata, sitemap, robots และ global styles
components/                Section และ interactive components
data/portfolio.ts          โปรไฟล์ ผลงาน ทักษะ กิจกรรม และช่องทางติดต่อ
data/certificates.ts       ข้อมูลประกาศนียบัตร
data/experiences.ts        ข้อมูลประสบการณ์
types/portfolio.ts         TypeScript interfaces
public/images/             โลโก้ รูปโปรไฟล์ และภาพ Fishy Game
public/projects/           รูปและวิดีโอผลงาน
public/certificates/       รูปประกาศนียบัตร
public/Activities/         รูปกิจกรรม
```

## แก้ไขข้อมูล

### โปรไฟล์และช่องทางติดต่อ

แก้ไข `portfolio.profile` ใน `data/portfolio.ts` โดยลิงก์รองรับรูปแบบต่อไปนี้:

```ts
{ platform: "GitHub", label: "github.com/username", href: "https://github.com/username" }
{ platform: "Email", label: "name@example.com", href: "mailto:name@example.com" }
{ platform: "Phone", label: "0800000000", href: "tel:0800000000" }
```

ข้อมูลในส่วนนี้จะแสดงต่อสาธารณะเมื่อเว็บไซต์ถูก Deploy

### รูปโปรไฟล์และโลโก้

- รูปโปรไฟล์ปัจจุบันอยู่ที่ `public/images/profile.jpg`
- โลโก้ปัจจุบันอยู่ที่ `public/images/logo-v4.png`
- เมื่อเปลี่ยนชื่อไฟล์ ให้อัปเดต path ใน `data/portfolio.ts`, `components/Navbar.tsx` หรือ `app/layout.tsx` ตามตำแหน่งที่ใช้งาน

### เพิ่มผลงาน

เพิ่ม object ใน `portfolio.projects` ที่ `data/portfolio.ts` โดยกำหนด:

- `id` ที่ไม่ซ้ำ
- `title` และ `category`
- `description.th` และ `description.en`
- `image` และ `technologies`
- `images`, `video` หรือ `highlights` เมื่อต้องการ
- `github` หรือ `demo` เฉพาะเมื่อมี URL จริง

ประเภทผลงานที่รองรับกำหนดไว้ใน `ProjectCategory` ที่ `types/portfolio.ts`

### เพิ่มกิจกรรม ประกาศนียบัตร และประสบการณ์

- กิจกรรม: `portfolio.activities` ใน `data/portfolio.ts`
- ประกาศนียบัตร: `data/certificates.ts`
- ประสบการณ์: `data/experiences.ts`

ไฟล์ใน `public/` ต้องใช้ path ที่ตรงกับชื่อโฟลเดอร์และตัวพิมพ์เล็ก/ใหญ่ เนื่องจากระบบ Deploy บน Linux แยกตัวพิมพ์เล็กและใหญ่

## SEO และ Environment Variable

กำหนด URL จริงของเว็บไซต์ด้วย:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

สำหรับเครื่อง local สามารถคัดลอก `.env.example` เป็น `.env.local` ส่วนบน Vercel ให้ตั้งค่าที่ Project Settings → Environment Variables ระบบจะใช้ค่านี้กับ metadata, sitemap และ robots

## นำขึ้น GitHub

หลังติดตั้ง Git และสร้าง repository บน GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

`.gitignore` ป้องกัน `node_modules`, `.next`, ไฟล์ build และ `.env` ไม่ให้ถูก Push แล้ว

## Deploy บน Vercel

1. Push โปรเจกต์ขึ้น GitHub
2. เข้า Vercel แล้วเลือก **Add New Project**
3. Import repository
4. ตั้งค่า `NEXT_PUBLIC_SITE_URL` หากมีโดเมนจริง
5. กด Deploy

Vercel จะตรวจพบ Next.js และใช้คำสั่ง Build จาก `package.json` โดยอัตโนมัติ

## Accessibility และ Motion

เว็บไซต์มี semantic sections, focus states, skip link, keyboard navigation, project modal, responsive carousel และรองรับ `prefers-reduced-motion`
