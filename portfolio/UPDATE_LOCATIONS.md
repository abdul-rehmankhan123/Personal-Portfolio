# 📍 Complete List of All UPDATE Markers

This file lists every location in the code where you need to make customizations.

## Quick Navigation

Jump to the section you need:
- [Profile Images](#profile-images)
- [Social Media Links](#social-media-links)
- [Contact Information](#contact-information)
- [Hero Section](#hero-section)
- [About Section](#about-section)
- [Skills Section](#skills-section)
- [Services Section](#services-section)
- [Projects Section](#projects-section)
- [CV File](#cv-file-download)
- [General Customization](#general-customization)

---

## Profile Images

### Location 1: Hero Section Profile Image
**File:** `index.html`
**Line:** ~132
**Code:**
```html
<img src="assets/images/profile.jpg" alt="Abdulrehman Khan" class="profile-img">
```
**Action:** Replace `assets/images/profile.jpg` with your profile image path

### Location 2: About Section Profile Image
**File:** `index.html`
**Line:** ~164
**Code:**
```html
<img src="assets/images/profile.jpg" alt="Abdulrehman Khan">
```
**Action:** Same image as above (should match hero section)

---

## Social Media Links

### Location 1: Hero Section Social Links (Vertical)
**File:** `index.html`
**Lines:** ~145-160
**Code:**
```html
<div class="social-links-vertical">
    <a href="https://www.linkedin.com/in/abdulrehman-khan-49168b316" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/abdul-rehmankhan123" target="_blank">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://twitter.com" target="_blank">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

**Action:** Replace URLs with your profiles:
- LinkedIn: `https://www.linkedin.com/in/YOUR-PROFILE`
- GitHub: `https://github.com/YOUR-USERNAME`
- Twitter: `https://twitter.com/YOUR-USERNAME`
- Instagram: `https://instagram.com/YOUR-USERNAME`

### Location 2: Contact Section Social Links (Horizontal)
**File:** `index.html`
**Lines:** ~301-315
**Code:**
```html
<div class="social-links-horizontal">
    <a href="https://www.linkedin.com/in/abdulrehman-khan-49168b316" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- ... other social links ... -->
</div>
```

**Action:** Same URLs as above (should match social links in hero section)

---

## Contact Information

### Location 1: Contact Email
**File:** `index.html`
**Line:** ~291
**Code:**
```html
<a href="mailto:ak9082491@gmail.com">ak9082491@gmail.com</a>
```
**Action:** Replace with your email address (in both `href` and displayed text)

### Location 2: Contact Phone
**File:** `index.html`
**Line:** ~296
**Code:**
```html
<a href="tel:+923168664647">+92 316 8664647</a>
```
**Action:** Replace with your phone number (in both `href` and displayed text)

### Location 3: Contact Location
**File:** `index.html`
**Line:** ~301
**Code:**
```html
<span>Multan, Pakistan</span>
```
**Action:** Replace with your city and country

---

## Hero Section

### Hero Greeting Text
**File:** `index.html`
**Line:** ~111
**Code:**
```html
<h2 class="hero-greeting">Hi, I'm</h2>
```
**Action:** Change if you want different greeting (optional)

### Hero Name
**File:** `index.html`
**Line:** ~112
**Code:**
```html
<h1 class="hero-name">Abdulrehman Khan</h1>
```
**Action:** Replace with your full name

### Hero Subtitle
**File:** `index.html`
**Line:** ~113
**Code:**
```html
<p class="hero-subtitle">AI | ML Engineer</p>
```
**Action:** Replace with your professional title (e.g., "Full Stack Developer", "Product Designer")

### Hero Description
**File:** `index.html`
**Lines:** ~114-117
**Code:**
```html
<p class="hero-description">
    Passionate about building intelligent solutions with cutting-edge AI/ML technologies. 
    Specialized in Generative AI, LLMs, and Full Stack Development.
</p>
```
**Action:** Replace with your professional summary (2-3 lines)

---

## About Section

### About Description
**File:** `index.html`
**Lines:** ~178-183
**Code:**
```html
<p class="about-description">
    I'm a passionate AI and ML engineer with a deep interest in Generative AI and LLMs. 
    With expertise in prompt engineering, fine-tuning models, and building production-ready AI applications, 
    I combine technical excellence with creative problem-solving...
</p>
```
**Action:** Replace entire paragraph with about you (3-4 sentences)

### Stats - Years Experience
**File:** `index.html`
**Line:** ~186
**Code:**
```html
<h3 class="stat-number">3+</h3>
<p class="stat-label">Years Experience</p>
```
**Action:** Change "3+" to your years of experience

### Stats - Projects Completed
**File:** `index.html`
**Line:** ~190
**Code:**
```html
<h3 class="stat-number">50+</h3>
<p class="stat-label">Projects Completed</p>
```
**Action:** Change "50+" to your number of projects

### Stats - Learning & Growing
**File:** `index.html`
**Line:** ~194
**Code:**
```html
<h3 class="stat-number">20+</h3>
<p class="stat-label">Learning & Growing</p>
```
**Action:** Can keep as-is or customize as needed

---

## Skills Section

### All Skill Cards
**File:** `index.html`
**Lines:** ~209-238
**Code template:**
```html
<div class="skill-card glass-card">
    <i class="fas fa-brain"></i>
    <h3>Generative AI</h3>
</div>
```

**Current skills:**
- Generative AI
- Prompt Engineering
- Ollama
- LLMs
- FastAPI
- Flask
- Gradio
- Streamlit
- Python
- LangChain
- Hugging Face
- React

**Action:** Replace with your actual skills. For each skill:
1. Change the icon (see FontAwesome guide in CSS_CUSTOMIZATION.md)
2. Change the skill name

**Example customization:**
```html
<!-- Change from -->
<i class="fas fa-brain"></i>
<h3>Generative AI</h3>

<!-- Change to -->
<i class="fab fa-java"></i>
<h3>Java</h3>
```

---

## Services Section

### Service Card 1
**File:** `index.html`
**Lines:** ~250-256
**Code:**
```html
<div class="service-card glass-card">
    <div class="service-icon">
        <i class="fas fa-robot"></i>
    </div>
    <h3>Generative AI Solutions</h3>
    <p>Build intelligent AI applications using cutting-edge generative models and LLMs...</p>
</div>
```

### Service Card 2
**File:** `index.html`
**Lines:** ~257-263
**Code:**
```html
<h3>Prompt Engineering & Optimization</h3>
<p>Expert prompt engineering and optimization...</p>
```

### Service Card 3
**File:** `index.html`
**Lines:** ~264-270
**Code:**
```html
<h3>Full Stack Development</h3>
<p>Professional web applications using FastAPI, Flask, React...</p>
```

**Action:** For each service:
1. Change icon to match service (see FontAwesome icons)
2. Change title
3. Change description (1-2 sentences)

---

## Projects Section

### Project Card 1 (AI Chat Application)
**File:** `index.html`
**Lines:** ~285-300
**Code template:**
```html
<div class="project-card glass-card">
    <div class="project-image">
        <img src="assets/images/project1.jpg" alt="PROJECT TITLE">
    </div>
    <div class="project-content">
        <h3 class="project-title">AI Chat Application</h3>
        <div class="project-tags">
            <span class="tag">LLMs</span>
            <span class="tag">FastAPI</span>
            <span class="tag">React</span>
        </div>
        <p class="project-description">An intelligent chatbot powered by advanced LLMs...</p>
        <a href="#">View Details</a>
    </div>
</div>
```

### Project Card 2 (Content Generator)
**File:** `index.html`
**Lines:** ~302-317

### Project Card 3 (Data Analysis Dashboard)
**File:** `index.html`
**Lines:** ~319-334

### Project Card 4 (ML Model API)
**File:** `index.html`
**Lines:** ~336-351

**Action for each project:**
1. Replace `project#.jpg` with your project image
2. Change the project title
3. Change the technology tags (2-3 tags per project)
4. Change the description (1 sentence)
5. Change link href to your project URL (optional)

---

## CV File Download

### Download CV Button
**File:** `index.html`
**Line:** ~48
**Code:**
```html
<a href="your-cv.pdf" class="btn-cv" download>Download CV</a>
```

**Action:**
1. Place your CV PDF in folder `assets/resume/`
2. Replace `your-cv.pdf` with your actual filename
3. Example: `assets/resume/abdulrehman-khan-cv.pdf`

---

## Contact Form

### Form Name Field (Pre-filled)
**File:** `index.html`
**Lines:** ~314-320
**Code:**
```html
<input 
    type="text" 
    placeholder="Your Name" 
    value="Abdulrehman Khan"
    class="form-input" 
    readonly
>
```
**Action:** Replace "Abdulrehman Khan" with your name

---

## General Customization

### Navbar Logo Text
**File:** `index.html`
**Line:** ~41
**Code:**
```html
<span class="logo-text">Abdulrehman Khan</span>
```
**Action:** Can change to your name or company name

### Page Title (Browser Tab)
**File:** `index.html`
**Line:** ~5
**Code:**
```html
<title>Abdulrehman Khan - AI ML Engineer | Full Stack Developer</title>
```
**Action:** Change to include your name and title

### Colors (Optional)
**File:** `style.css`
**Lines:** ~13-25
**Code:**
```css
:root {
    --primary-color: #7C3AED;       /* Purple */
    --secondary-color: #22D3EE;     /* Cyan */
    --glow-purple: #7C3AED;
    --glow-cyan: #22D3EE;
    /* ... more colors ... */
}
```
**Action:** See CSS_CUSTOMIZATION.md for color options

### Font (Optional)
**File:** `index.html`
**Lines:** ~8-9
**Code:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```
**Action:** See CSS_CUSTOMIZATION.md for font options

---

## Summary Table

| Item | File | Line | What to Change |
|------|------|------|----------------|
| Profile Image | index.html | 132 | Your photo path |
| Hero Name | index.html | 112 | Your full name |
| Subtitle | index.html | 113 | Your professional title |
| Description | index.html | 114-117 | Your professional summary |
| LinkedIn URL | index.html | 145 | Your LinkedIn profile |
| GitHub URL | index.html | 150 | Your GitHub profile |
| Email | index.html | 291 | Your email address |
| Phone | index.html | 296 | Your phone number |
| Location | index.html | 301 | Your city/country |
| About Text | index.html | 178-183 | About you description |
| Years Experience | index.html | 186 | Your experience years |
| Projects Completed | index.html | 190 | Your project count |
| Skills (12 items) | index.html | 209-238 | Your actual skills |
| Services (3 items) | index.html | 250-270 | Your services/offerings |
| Projects (4 items) | index.html | 285-351 | Your project details |
| CV Link | index.html | 48 | Your CV file path |
| Page Title | index.html | 5 | Your name & title |

---

## Color-Coded Priority

### 🔴 Critical (Must Change)
- [ ] Profile image
- [ ] Name
- [ ] Professional title
- [ ] Email address
- [ ] Phone number
- [ ] Social media links

### 🟡 Important (Should Change)
- [ ] Hero description
- [ ] About text
- [ ] Skills
- [ ] Projects
- [ ] Services

### 🟢 Optional (Nice to Have)
- [ ] Colors
- [ ] Fonts
- [ ] CV link
- [ ] Additional details

---

## Validation Checklist

Before deploying, verify:

- [ ] All image paths updated to your images
- [ ] All text is about YOU (not placeholder)
- [ ] All links work (test each one)
- [ ] Name appears consistently everywhere
- [ ] Contact info is current and correct
- [ ] Social links point to YOUR profiles
- [ ] Projects realistic and accurate
- [ ] No broken images or links
- [ ] Mobile responsive looks good
- [ ] No spelling or grammatical errors

---

**Pro Tip:** Open this file next to your code editor for easy reference while customizing!

Good luck with your portfolio! 🚀
