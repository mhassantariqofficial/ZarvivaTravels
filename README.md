# ZarvivaTravels

A modern, responsive, single-page travel agency website built with React and Vite. Visitors can explore destinations, browse tour packages, search for trips, read reviews, and submit booking and contact requests.

> **Note:** This is a frontend-only project. Prices, reviews, contact details and the agency profile are sample values for demonstration and are not verified travel rates or real customer feedback.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Customization](#customization)
7. [Images](#images)
8. [Author](#author)
9. [License](#license)

---

## Features

- **Responsive navigation bar** with smooth scrolling to each section and a mobile menu that opens and closes.
- **Hero section** with a large travel background, headline, and call-to-action buttons.
- **Trip search** with destination, departure date, return date and number of travelers. The return date cannot be earlier than the departure date, and matching packages (or a helpful message) are shown.
- **Popular destinations**: six destination cards with image, country, description and starting price. A View Details button opens a modal with more information and available packages.
- **Tour packages**: three packages rendered from a JavaScript array using `.map()`. The Book Package button selects the package and scrolls to the booking form.
- **About Us** with mission, vision, travel experience and customer service information.
- **Why Choose Us** section with four reasons, each with an icon, title and description.
- **Customer reviews** slider with next and previous buttons, built with React state.
- **Booking form** with validation for required fields, email format and phone format, followed by a confirmation message and automatic form reset.
- **Contact section** with email, phone, address, WhatsApp button, social links and a validated contact form.
- **Footer** with quick links, contact details, social icons and copyright notice.
- Clean blue, white and light-green theme with rounded cards, subtle shadows and hover effects.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Reusable components and UI state |
| Vite | Development server and production build |
| JavaScript (ES6+) | Application logic |
| CSS | Styling and responsive layout |
| React Hooks | State and side-effect management |
| Lucide React | Icons |

## Project Structure

```text
ZarvivaTravels/
├── public/
│   └── images/              # Destination, package and hero images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TripSearch.jsx
│   │   ├── Destinations.jsx
│   │   ├── TourPackages.jsx
│   │   ├── About.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Reviews.jsx
│   │   ├── BookingForm.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── XIcon.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── data.js              # Destinations, packages and reviews
│   ├── utils.js             # Shared helpers (smooth scrolling)
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version recommended)
- npm (included with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mhassantariqofficial/ZarvivaTravels.git

# 2. Move into the project folder
cd ZarvivaTravels

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |

## Customization

- **Content:** Edit destinations, packages and reviews in `src/data.js`.
- **Agency name and contact details:** Update the logo in `Navbar.jsx` and `Footer.jsx`, and the email, phone, address and social links in `Contact.jsx` and `Footer.jsx`.
- **Colors and layout:** Change the CSS variables at the top of `src/App.css` (`--blue`, `--green`, and others).
- **Reviews:** Replace the sample reviews in `src/data.js` with real customer feedback when available, and remove the sample notice in `Reviews.jsx`.

## Images

Place the following files in `public/images/`. If a file is missing, a colour gradient is shown instead.

| File | Used in |
| --- | --- |
| `hero.jpg` | Hero background (16:9) |
| `about.jpg` | About Us section |
| `hunza.jpg`, `skardu.jpg`, `dubai.jpg`, `istanbul.jpg`, `bali.jpg`, `switzerland.jpg` | Destination cards |
| `pkg-hunza.jpg`, `pkg-dubai.jpg`, `pkg-bali.jpg` | Tour package cards |

## Author

**Muhammad Hassan Tariq**

## License

This project is created for learning and portfolio purposes. Add a license of your choice before using it commercially.

---

© 2026 ZarvivaTravels. All rights reserved.
