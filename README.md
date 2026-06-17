# L'Étoile Noire - Premium Restaurant Website

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-ff69b4)

A highly interactive, beautifully animated premium frontend-only restaurant website built with React and Vite. It is designed to simulate the elegant, luxurious experience of a high-end fine dining restaurant.

## ✨ Features

- **Immersive Design:** A dark, luxury aesthetic with gold accents and cinematic imagery.
- **Glassmorphism:** A dynamic sticky navigation bar that blurs the background on scroll.
- **Smooth Animations:** Powered by `framer-motion` for text reveals, parallax scrolling, image zoom, and card lifting effects.
- **Interactive Custom Cursor:** A sleek, glowing golden cursor that seamlessly expands on hover.
- **Dynamic Menu Filtering:** An interactive 'A la Carte' menu section categorized by cuisines, allowing users to seamlessly filter dishes.
- **Responsive Layout:** fully functional and flawlessly displayed across mobile, tablet, and desktop viewports.
- **Testimonial Carousel:** An elegant, auto-playing Swiper.js slider.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables) & Bootstrap 5
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Carousels:** Swiper.js

## 📂 Project Structure

```
├── public/                  # Static assets
│   ├── images/              # Images used in the UI
│   └── favicon.svg          # Favicon
├── src/
│   ├── components/          # Reusable React components
│   │   ├── About.jsx        # Story section
│   │   ├── CustomCursor.jsx # Interactive cursor
│   │   ├── FeaturedDishes.jsx # Quick dish highlights
│   │   ├── Footer.jsx       # Footer with contacts
│   │   ├── FullMenu.jsx     # Filterable complete menu
│   │   ├── Gallery.jsx      # Image masonry grid
│   │   ├── Hero.jsx         # Landing parallax section
│   │   ├── LoadingScreen.jsx# Initial cinematic loader
│   │   ├── MeetTheChef.jsx  # Chef biography
│   │   ├── Navbar.jsx       # Glassmorphism navigation
│   │   ├── Reservation.jsx  # Booking form
│   │   ├── SignatureExperience.jsx # Storytelling & stats
│   │   └── Testimonials.jsx # Swiper carousel
│   ├── App.jsx              # Main assembly file
│   ├── index.css            # Global CSS variables & styles
│   └── main.jsx             # React entry point
├── index.html               # Main HTML template
├── package.json             # Dependencies and scripts
└── vite.config.js           # Vite configuration
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Restaurent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open your browser and navigate to `http://localhost:5173/`

### Build for Production

To create a production-ready build, run:
```bash
npm run build
```
This will compile and bundle the files into the `dist/` directory.

## 🎨 Design System

- **Primary Background:** `#0B0B0B`
- **Secondary Background:** `#161616`
- **Accent Gold:** `#D4AF37`
- **Primary Text:** `#F5F5F5`
- **Secondary Text:** `#B7B7B7`
- **Typography:** Playfair Display (Headings) & Poppins (Body)

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
