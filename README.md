# Day 12 – Multi-Step KYC Form Wizard with Context and Final Preview

This project is part of my 150-day developer preparation journey, focused on building production-ready React flows with global state, layered validation, and UI scalability. On Day 12, I engineered a multi-step KYC wizard that guides the user through multiple stages, stores data across components, and previews submissions before final confirmation.

## ✅ What I Practiced:
- Step management using `useState` to navigate forward/back
- Context API for form data persistence across components
- Controlled inputs with real-time validation and error messages
- Regex-based field validation (email, PAN, phone)
- Final review screen with “Edit” and “Submit” options
- Responsive layout using Tailwind CSS with consistent spacing
- Optional localStorage integration to retain progress

## 🧠 Key Concepts Covered:
- Multi-step form architecture with isolated stages
- Stateful navigation logic with validation gates
- Context-driven form data propagation (FormContext)
- Dynamic rendering: input visibility, final summary, transitions
- UX feedback patterns for step indicators and save confirmation

## 🛠 Features:
- Step 1: Name, DOB, Email  
- Step 2: Address (City, State, Pincode)  
- Step 3: KYC fields (PAN, Aadhar, Image Upload)  
- Step 4: Final Preview with editable summary  
- Back/Next controls with form state memory
- Validation alerts before progressing steps
- Mobile-first layout and full responsiveness

## ⚙️ Tech Stack:
- React.js (Hooks + Context API)
- Tailwind CSS (Utility-first styling)
- JavaScript form validation and state handling
- Optional localStorage for session persistence

## 🔥 Why This Matters:
Multi-step forms are used in onboarding flows, checkout pipelines, signup wizards, and compliance modules across real products. Today’s build reflects how user data flows across components with structure, validation, and clarity — the kind of engineering depth expected at top startups and product teams.

> Day 12 complete. Every controlled step brings me closer to flow-driven UI mastery and product-grade architecture.
