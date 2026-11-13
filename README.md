# 🦁 Révision

### Learn. Memorize. Succeed.

**Révision** is a learning and memorization app designed to help students study, memorize, and confidently recite their school lessons.

Inspired by traditional learning methods in Niger and across Francophone Africa, Révision brings familiar memorization practices into a modern, interactive, and accessible mobile experience.

Our goal is to make studying more effective, engaging, and affordable for students while giving parents a simple way to support and follow their children's learning progress.

---

## 📖 Table of Contents

- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [Who Is Révision For?](#-who-is-révision-for)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Technology Stack](#️-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Roadmap](#️-development-roadmap)
- [Vision](#-vision)
- [Project Status](#-project-status)

---

## 🎯 The Problem

In many schools across Niger and other parts of Francophone Africa, students are expected to memorize lessons and reproduce them accurately during classroom recitations and examinations.

Students often study by repeatedly reading their notebooks, memorizing long paragraphs, and trying to recall the information without having a structured way to practice.

This can make studying difficult, especially when:

- Lessons are long and contain a lot of information.
- Students struggle to remember entire paragraphs.
- They do not know which parts of a lesson they have forgotten.
- They have limited access to personalized learning support.
- Parents want to help but cannot always identify where their children need support.

Traditional memorization remains an important part of the educational experience. Révision aims to make that process easier and more effective.

## 💡 Our Solution

Révision transforms traditional lesson memorization into a guided digital learning experience.

Students can add their school lessons, practice memorizing them in smaller sections, and test their ability to recite what they have learned.

With the help of AI-powered learning tools, Révision aims to identify mistakes, recognize areas where students struggle, and help them improve over time.

Parents will also be able to create and manage child profiles, monitor learning progress, and understand which subjects need more attention.

**Révision is not just another homework app. It is built around the specific way many students learn: reading, memorizing, recalling, and reciting.**

## 👨‍👩‍👧 Who Is Révision For?

Révision is initially designed for:

- **Students (ages 8–18):** Students who want to memorize lessons, practice recitation, and improve their learning habits.
- **Parents and guardians:** Parents who want to support their children's education and follow their progress.

### Initial Target Market

The first version will focus on students in Niger, where French is widely used as the language of instruction.

The long-term vision is to expand Révision to other African countries and educational communities.

### Language Support

- 🇫🇷 French — Initial language
- 🇬🇧 English — Planned
- العربية Arabic — Planned

---

## ✨ Key Features

The following features represent the product vision. Some are planned for future development.

### 📚 Lesson Management

- Add school lessons manually.
- Organize lessons by subject.
- Save and revisit lessons.
- Support longer lessons and paragraphs.

### 🧠 Smart Memorization

- Break long lessons into smaller, manageable sections.
- Practice memorization step by step.
- Test recall without constantly looking at the original lesson.
- Build confidence through repetition.

### 🎙️ Recitation Practice

- Practice reciting lessons aloud.
- Use speech recognition to capture spoken responses.
- Identify missing words and mistakes.
- Help students improve their recitation accuracy.

### 🤖 AI-Powered Learning Assistance

- Analyze student practice results.
- Identify recurring mistakes and difficult sections.
- Recognize subjects or topics where a student needs more practice.
- Provide personalized learning guidance.

### 👨‍👩‍👧 Parent Dashboard

- Create and manage multiple child profiles.
- Follow each child's learning progress.
- Review completed lessons and practice activity.
- Identify strengths and areas that need improvement.

### 📸 Lesson Import

- Import lessons from photographs.
- Explore handwriting and printed-text recognition.
- Convert lesson images into editable study material.

### 📊 Learning Progress

- Track completed lessons.
- Monitor memorization and recitation performance.
- Visualize learning progress over time.

---

## 🔄 How It Works

The intended student learning experience follows a simple process:

1. **Add a lesson:** Enter a lesson manually or import it from a photograph.
2. **Prepare:** Révision organizes the lesson into smaller sections.
3. **Memorize:** Study each section at a comfortable pace.
4. **Practice:** Try recalling the lesson without looking at the original text.
5. **Recite:** Read or recite the lesson aloud.
6. **Improve:** Review mistakes and practice difficult sections again.
7. **Track progress:** Monitor improvement over time.

The objective is to help students move beyond simply rereading lessons toward actively remembering and reproducing what they have learned.

---

## 🛠️ Technology Stack

Révision is being developed as a cross-platform mobile application.

| Technology         | Purpose                                           |
| ------------------ | ------------------------------------------------- |
| React Native       | Cross-platform mobile development                 |
| Expo               | Development and build tooling                     |
| Expo Router        | Application navigation                            |
| TypeScript         | Type safety and maintainability                   |
| Supabase           | Planned backend, database, and authentication     |
| AI services        | Planned lesson analysis and personalized learning |
| Speech recognition | Planned spoken recitation analysis                |

The technology stack may evolve as the application develops.

---

## 📁 Project Structure

The current project uses Expo Router and a feature-oriented application structure.

```text
revision-mobile/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   │
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   │
│   ├── components/
│   ├── constants/
│   └── global.css
│
├── assets/
├── package.json
├── tsconfig.json
└── README.md
```

This structure will grow as authentication, student profiles, parent dashboards, lessons, and other features are implemented.

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Expo Go](https://expo.dev/go) on your mobile device
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd revision-mobile
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npx expo start
```

### 5. Open the application

Scan the QR code using Expo Go on your mobile device.

You can also use an Android emulator or iOS simulator if configured.

---

## 🗺️ Development Roadmap

Révision is being developed incrementally, starting with its core mobile experience.

- [x] Initialize Expo project
- [x] Configure Expo Router
- [x] Create welcome screen
- [x] Create registration screen UI
- [x] Create login screen UI
- [x] Test basic navigation between screens
- [ ] Implement parent and student onboarding
- [ ] Set up secure authentication
- [ ] Design the database and user profiles
- [ ] Build the student dashboard
- [ ] Build the parent dashboard
- [ ] Implement lesson creation and management
- [ ] Develop the memorization experience
- [ ] Integrate speech recognition
- [ ] Introduce AI-powered learning assistance
- [ ] Implement learning progress tracking
- [ ] Add lesson photo import
- [ ] Prepare for initial release

_Roadmap items are subject to change as development progresses._

---

## 🌍 Our Vision

We believe every student deserves access to tools that make learning easier, regardless of where they live or their family's financial situation.

Révision begins with a simple idea inspired by the educational experiences of students in Niger: make memorization and recitation easier to practice.

Our long-term vision is to build an affordable, accessible learning platform that supports students across Africa and beyond.

**Learn. Memorize. Succeed.**

---

## 📌 Project Status

<details>
<summary>Current development status</summary>

Révision is currently in its early development stage.

The initial mobile application has been created using Expo, React Native, and TypeScript. The welcome, login, and registration interfaces are implemented, and basic navigation has been tested.

Backend integration, authentication, student and parent profiles, lesson management, AI features, and speech recognition are still under development.

</details>

---

## 🤝 Contributing

Révision is currently under active development.

As the project grows, contribution guidelines and opportunities for collaboration may be introduced.

## 📄 License

A license has not yet been selected. All rights are currently reserved by the project owner unless otherwise stated.

---

**Built with ❤️ for students, families, and the future of learning.**
