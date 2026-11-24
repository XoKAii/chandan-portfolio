# Chandan Yadav — Personal Portfolio Website

A modern, high-performance personal portfolio website for **Chandan Yadav**, an undergraduate Computer Science and Engineering student at **Shri Ramswaroop Memorial University (SRMU), Barabanki, Uttar Pradesh, India**, specializing in **Data Analytics and Artificial Intelligence**.

---

## 🧭 Project Architecture

```
chandan-portfolio/
│
├── index.html                   # Semantic HTML5 structure (10 sections + Command Palette & Sandbox)
├── style.css                    # Obsidian Black & Electric Blue styling with Dark/Light & Print support
├── script.js                    # Pure Vanilla JavaScript interaction logic
├── README.md                    # Project documentation and deployment guide
│
├── assets/
│   ├── favicon.svg              # Scalable SVG CY monogram favicon with ambient glow
│   ├── images/                  # Directory for custom project imagery and media
│   ├── icons/                   # Directory for custom SVG / icon assets
│   ├── resume.pdf               # [Target location for your real resume PDF]
│   └── chandan-signature.jpeg   # Preserved asset (excluded from public UI per policy)
│
└── backup_v1/                   # Automatic backup of previous version
```

---

## 🎨 Design System & Theme

- **Theme Palette**:
  - Dark Primary Background: `#05070D`
  - Dark Secondary Background: `#0A0F1C`
  - Dark Card Background: `#101827`
  - Primary Blue: `#2563EB`
  - Electric Blue: `#3B82F6`
  - Cyan Accent: `#38BDF8`
  - Light Theme Support: Soft slate white (`#F8FAFC`) with deep navy text and blue accents.
- **Typography**:
  - Headings: `Space Grotesk`
  - Body: `Inter` / `Plus Jakarta Sans`
  - Code & Metadata: `JetBrains Mono`
- **Visual Features**:
  - Dark / Light mode toggle with persistent state stored in `localStorage`.
  - Ambient radial gradients, fine background grid, and soft card shadows.
  - Reduced-motion accessibility support (`@media (prefers-reduced-motion: reduce)`).
  - Print-optimized stylesheet (`@media print`) for clean, ink-friendly resume printing.

---

## ⚡ Interactive Senior Features Added

1. **Developer Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Press `Ctrl + K` (or tap the `⌘K` button in the navigation bar) to open a Spotlight-style keyboard search modal.
   - Instantly jump to any section, toggle between dark/light themes, copy your email, or download your resume in one keystroke.
2. **Interactive Algorithm Visualizer Sandbox**:
   - Integrated into the Projects section to demonstrate computational thinking.
   - Visitors can enter any numerical target and step through a live **Binary Search** trace across a sorted array, watching the range narrow and midpoints evaluate in real-time.
3. **OpenGraph & Twitter Card Social Sharing**:
   - Rich preview meta tags and an SVG vector favicon (`assets/favicon.svg`) ensure that sharing your link on LinkedIn, Twitter, WhatsApp, or Discord displays a high-resolution card.
4. **Curated Reading & Influences Module**:
   - Displayed in the Learning Journey section, featuring foundational works like *CLRS Algorithms*, *Automate the Boring Stuff with Python*, and *MDN Web Docs*.
5. **Live Focus Indicator**:
   - A glowing pulse indicator in the Hero section reflecting active study in Graph Algorithms, Python, and Content Planning.
6. **Print-to-PDF Resume View (`Ctrl + P`)**:
   - Clean, professional styling that removes dark backgrounds, navigation, and web widgets to print a clean black-and-white 1-2 page executive student profile.

---

## 📑 Website Sections Breakdown

1. **Home / Hero**: Two-column layout with a 5-phrase native JavaScript typing animation on the left and a realistic code editor window (`developer.js`) on the right.
2. **About ("More Than Just Code")**: Authentic overview of B.Tech CSE (Data Analytics & AI) education, engineering mindset, and 4 distinct cards (*Education*, *Technical Development*, *AI & Data Analytics*, *Digital Creativity*).
3. **Technical Skills ("My Technical Toolkit")**: Transparent categorization into Programming, Web Development, Computer Science Fundamentals, AI & Data, and Tools with honest status badges (`Practising`, `Learning`, `Exploring`). No fabricated percentages.
4. **Digital Profile ("Digital Presence & Creative Strategy")**: Deep dive into Social Media Management, Content Planning, Content Strategy, Audience Engagement, Platform Exploration (Instagram, YouTube, LinkedIn, Facebook), Content Analytics, and Creative Video/Color Grading interests.
5. **Where Technology Meets Creativity**: Interconnected visual panels bridging Technical Development (Panel A) and Digital Creativity (Panel B) through 4 concrete relationship dimensions.
6. **Projects & Practical Learning**: Exclusively features 3 verified learning projects (Programming & DSA Practice, Python & Data Analytics, Personal Portfolio Website) with modal dialogs detailing Objectives, Tech, Work Completed, Challenges, and Outcomes, plus the interactive Algorithm Sandbox.
7. **Learning Journey ("Learning. Exploring. Growing.")**: Three-stage roadmap (*Currently Learning*, *Currently Exploring*, *Future Interests*) + Foundational Reading Module.
8. **Education ("My Academic Journey")**: Verified B.Tech Computer Science & Engineering degree details at SRMU Barabanki with specialization in Data Analytics and Artificial Intelligence.
9. **Resume**: Dedicated download section pointing directly to `assets/resume.pdf` with printable view hint.
10. **Contact ("Let's Connect")**: Contact channel cards with a 1-click email copy utility and an accessible form with honest frontend demonstration feedback.
11. **Footer**: Dynamic current year and university credits.

---

## 🔧 Personal Details That Need Your Input

The website has been configured with clearly marked placeholders so you can easily customize them:

1. **Email Address**:
   - Location: In `index.html`, search for `your.email@example.com` (around line 430).
   - Replace with your actual preferred contact email.
2. **LinkedIn Profile URL**:
   - Location: In `index.html`, search for `[Placeholder — Add your LinkedIn URL]` (around line 464).
   - Replace with an active anchor link, for example: `<a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-username</a>`.
3. **GitHub Profile URL**:
   - Location: In `index.html`, search for `[Placeholder — Add your GitHub URL]` (around line 468).
   - Replace with: `<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a>`.

---

## 📄 How to Add Your Resume

1. Compile or export your resume as a standard PDF file named **`resume.pdf`**.
2. Place the file inside the `assets/` folder of this project:
   ```
   chandan-portfolio/assets/resume.pdf
   ```
3. The "Download Resume" button in the Resume section will automatically deliver your real file when clicked.

---

## 🚀 How to Add Future Projects

To add a new project in the future:
1. Open `index.html` and locate the `<div class="projects-grid">` section.
2. Copy an existing `<article class="project-card">` block, increment the project number, update the title, tags, and description.
3. Add a corresponding `<div class="project-modal-backdrop" id="modal-your-id">` at the bottom of `index.html` with your project's Objective, Technologies, Work Completed, Challenges, and Outcomes.
4. Link the button's `data-modal="modal-your-id"` to your modal ID.

---

## 🌐 How to Publish on GitHub Pages (Free)

1. Create a free account on [GitHub](https://github.com) if you haven't already.
2. Create a new repository named `chandan-portfolio` (or `<your-username>.github.io` for a primary root domain).
3. Initialize git and push your project files:
   ```bash
   cd C:\Users\satya\.gemini\antigravity\scratch\chandan-portfolio
   git init
   git add .
   git commit -m "Launch enhanced Chandan Yadav portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/chandan-portfolio.git
   git push -u origin main
   ```
4. On GitHub, go to your repository **Settings** > **Pages**.
5. Under **Build and deployment** > **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Within 1–2 minutes, your website will be live at:
   `https://<your-username>.github.io/chandan-portfolio/`

---

## 💻 Local Testing & Preview

Open `index.html` directly in any web browser, or serve it locally:

```bash
# Using Node.js (npx)
npx serve .

# Using Python
python -m http.server 3000
```
Navigate to `http://localhost:3000`.
