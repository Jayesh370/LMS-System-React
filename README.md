<div align="center">
  <img src="https://raw.githubusercontent.com/Jayesh370/LMS-System-React/main/public/assets/Final_Logo.png" alt="Coding Savvy Logo" width="200"/>

  
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
</div>

## 📖 About

**Coding Savvy** is a comprehensive educational platform designed to guide users through their entire coding journey—from writing their first line of code to landing a dream job in the tech industry. This project was built using React to create a modern, fast, and interactive single-page application.


## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 19.1.1 |
| **Vite** | Build Tool & Dev Server | 7.1.2 |
| **React Router** | Client-side Routing | 7.8.2 |
| **Bootstrap** | CSS Framework | 5.3.8 |
| **AOS** | Scroll Animations | 2.3.4 |
| **React Icons** | Icon Library | 5.5.0 |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jayesh370/LMS-System-React.git
   cd LMS-System-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |


## 🔧 Development

### Code Style
- ESLint configuration for code quality
- Modern ES6+ JavaScript features
- Component-based architecture
- Responsive design patterns

### Performance
- Vite for fast development and building
- Code splitting and lazy loading ready
- Optimized asset handling
- Modern browser support

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository (No need if you're one of the collaborators)
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🗄️ Backend (Node.js + Express)

### Tech Stack (Backend)
- **Node.js**: Runtime
- **Express**: Web framework
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Morgan**: HTTP request logger
- **Dotenv**: Environment variables
- **Nodemon**: Dev auto-reload

### Getting Started (Backend)
1. Navigate to the backend folder
   ```bash
   cd backend
   ```
2. Copy env example and adjust if needed
   ```bash
   cp .env.example .env
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the backend (dev)
   ```bash
   npm run dev
   ```
5. Server will run on `http://localhost:5000`

### Available Scripts (Backend)
| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with nodemon |
| `npm start` | Start production server |

### API Endpoints (Initial)
- `GET /health` → Simple health-check
- `GET /api/health` → Health-check via router

### Backend Directory Structure
```
backend/
  package.json
  .env.example
  nodemon.json
  src/
    app.js
    server.js
    config/
      index.js
    routes/
      index.js
    controllers/
      health.controller.js
    middlewares/
      asyncHandler.js
      errorHandler.js
      notFound.js
    utils/
      logger.js
    services/
    models/
```

### Running Frontend and Backend Together
- Start frontend from repo root:
  ```bash
  npm run dev
  ```
- Start backend from `backend/`:
  ```bash
  cd backend && npm run dev
  ```


