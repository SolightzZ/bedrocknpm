<div align="center">
  <img src="https://solightzz.github.io/bedrocknpm/img/favicon.png" alt="Bedrock JS API Logo" width="120" />
  <h1>Bedrock JavaScript API 📦</h1>
  <p>
    <strong>เครื่องมือสำหรับค้นหาและดูข้อมูลแพ็กเกจ npm ของ Minecraft Bedrock JavaScript API</strong>
  </p>
  <p>
    <a href="https://solightzz.github.io/bedrocknpm/"><b>🚀 เข้าสู่เว็บไซต์ (Live Demo)</b></a>
  </p>

  <!-- Badges -->
  <img src="https://img.shields.io/github/deployments/SolightzZ/bedrocknpm/github-pages?label=Deployment&style=flat-square" alt="Deployment" />
  <img src="https://img.shields.io/github/license/SolightzZ/bedrocknpm?style=flat-square" alt="License" />
  <img src="https://img.shields.io/github/last-commit/SolightzZ/bedrocknpm?style=flat-square" alt="Last Commit" />
</div>

<br>

> [!TIP]
> **ออกแบบมาเพื่อนักพัฒนา Add-on โดยเฉพาะ!** สามารถตรวจสอบเวอร์ชันล่าสุดและประวัติการอัปเดตของโมดูลต่างๆ ได้อย่างสะดวกและรวดเร็วผ่านเว็บบราว์เซอร์ โดยไม่ต้องพึ่งพา Backend

## ✨ ฟีเจอร์หลัก (Features)

* ⚡ **ตรวจสอบเวอร์ชันจาก NPM แบบเรียลไทม์**: ดึงข้อมูลเวอร์ชันล่าสุดของแพ็กเกจ `@minecraft` (เช่น `@minecraft/server`, `@minecraft/server-ui`) จากฐานข้อมูลของ NPM โดยตรง
* 🕰️ **ดูประวัติการอัปเดต**: เช็ครายการเวอร์ชันทั้งหมดที่เคยถูกอัปโหลด พร้อมดูวันที่ที่มีการอัปเดตได้อย่างละเอียด
* 📋 **คัดลอกคำสั่งติดตั้งได้ทันที**: เพียงคลิกที่เวอร์ชันที่ต้องการ ก็คัดลอกคำสั่งติดตั้งไปวางในโปรเจกต์ได้เลย (เช่น `npm i @minecraft/server@1.10.0`)
* 🌐 **ทำงานบนเบราว์เซอร์ 100%**: โค้ดทั้งหมดดึงข้อมูลผ่าน Client-side สามารถโฮสต์ผ่าน GitHub Pages ได้อย่างราบรื่น

---

## 💡 วิธีใช้งานเบื้องต้น (สำหรับมือใหม่)

หากคุณเพิ่งเริ่มเขียนโค้ด Minecraft Bedrock API เว็บนี้จะช่วยประหยัดเวลาให้คุณได้มาก! ทำตามขั้นตอนง่ายๆ ดังนี้:

1. **เข้าเว็บไซต์:** เปิดลิงก์ [solightzz.github.io/bedrocknpm](https://solightzz.github.io/bedrocknpm/)
2. **ดึงข้อมูลล่าสุด:** กดปุ่ม **"Fetch all"** ด้านบนเพื่ออัปเดตข้อมูลทุกโมดูลจากเซิร์ฟเวอร์ (หรือเลือกคลิกเฉพาะโมดูลที่สนใจ)
3. **ค้นหาเวอร์ชัน:** เลื่อนดูเวอร์ชันในโมดูลที่ต้องการใช้ (เวอร์ชันล่าสุดจะอยู่ด้านบนสุดเสมอ)
4. **คลิกเพื่อคัดลอก:** **คลิกซ้าย 1 ครั้ง** ที่แถบตัวเลขเวอร์ชัน (เช่น `1.10.0`) ระบบจะคัดลอกคำสั่ง `npm install` ให้อัตโนมัติ
5. **นำไปใช้งาน:** เปิดโปรแกรมเขียนโค้ด (เช่น VS Code) หรือ Terminal ในโฟลเดอร์โปรเจกต์ของคุณ แล้ว **วาง (Paste)** คำสั่ง กด Enter เพื่อติดตั้งได้เลย!

> [!NOTE]
> คุณจำเป็นต้องติดตั้ง [Node.js](https://nodejs.org/) ไว้ในเครื่องก่อน จึงจะสามารถรันคำสั่ง `npm install` ได้

---

## 🛠️ โครงสร้างและการพัฒนา (Local Development)

หากต้องการนำโปรเจกต์นี้ไปพัฒนาต่อ หรือรันบนเครื่องของคุณเอง:

```bash
# 1. โคลน Repository
git clone https://github.com/SolightzZ/bedrocknpm.git

# 2. เข้าไปในโฟลเดอร์โปรเจกต์
cd bedrocknpm
```

3. **รันเว็บไซต์**: เนื่องจากโปรเจกต์นี้เป็นหน้าเว็บแบบ Static ล้วนๆ คุณสามารถเปิดไฟล์ `index.html` ด้วยเว็บบราว์เซอร์ได้ทันที หรือใช้งานร่วมกับส่วนเสริม **Live Server** บน VS Code เพื่อความสะดวกสบาย

---

## 🙏 เครดิต (Credits & Acknowledgments)

โปรเจกต์นี้ได้รับแรงบันดาลใจและมีต้นแบบมาจาก:
* **[WavePlayz / ScriptApi-NPMs](https://waveplayz.github.io/ScriptApi-NPMs/)** - ขอบคุณสำหรับไอเดียต้นแบบของเว็บไซต์สำหรับการรวบรวมแพ็กเกจ npm ของ Bedrock

<br>

<div align="center">
  <sub>สร้างขึ้นด้วย ❤️ สำหรับชุมชน Minecraft Bedrock</sub>
</div>
