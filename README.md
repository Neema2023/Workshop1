# NovaTech – Responsive Navbar

## Project Overview

NovaTech is a responsive navigation bar project built with Tailwind CSS as part of Week 3 – Workshop 1.

The project demonstrates how to create a responsive navigation bar that works on mobile phones, tablets, and desktop computers.

## Features

- Modern NovaTech logo and brand name.
- Five navigation links: Home, About, Services, Projects, and Contact.
- Responsive desktop navigation with horizontal links.
- Mobile hamburger menu that opens and closes when clicked.
- Mobile menu closes after a navigation link is selected.
- Hover effects on links and buttons.
- Keyboard focus styles for accessibility.
- Responsive page sections and service cards.
- Tailwind CSS utility classes for styling.

## Technologies Used

- HTML5
- Tailwind CSS v4
- JavaScript
- Vite

## Project Structure

```text
Workshop1/
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── src/
│   ├── main.js
│   └── style.css
├── public/
├── screenshots/
└── README.md
```

## Installation and Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### 3. Build for production

```bash
npm run build
```

Vite generates the production files inside the `dist` folder.

## Responsive Design

- **Mobile:** Navigation links are hidden until the hamburger button is clicked.
- **Desktop:** From the Tailwind `md` breakpoint (768px) and above, navigation links appear horizontally and the hamburger button is hidden.

## Styling

The project uses Tailwind CSS utility classes directly in HTML. No custom CSS styling rules are required.

The `src/style.css` file imports Tailwind CSS, while `src/main.js` handles the mobile menu interaction.

## Learning Objectives

- Practice Tailwind CSS utility classes.
- Use responsive breakpoints such as `md:`, `sm:`, and `lg:`.
- Apply hover and focus states.
- Use JavaScript to toggle a mobile navigation menu.
- Build an accessible and responsive user interface.



