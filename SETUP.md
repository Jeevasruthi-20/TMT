# Setup Guide

## Quick Start

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Create .env file (optional, defaults to http://localhost:5000/api)
# VITE_API_URL=http://localhost:5000/api

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:8080`

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# PORT=5000
# NODE_ENV=development

# Start backend server
npm run dev
```

Backend will be available at: `http://localhost:5000`

## Running Both Servers

### Option 1: Separate Terminals
- Terminal 1: `npm run dev` (frontend)
- Terminal 2: `cd backend && npm run dev` (backend)

### Option 2: Using npm-run-all (if installed)
```bash
npm install --save-dev npm-run-all
```

Then add to package.json:
```json
"scripts": {
  "dev:all": "npm-run-all --parallel dev dev:backend",
  "dev:backend": "cd backend && npm run dev"
}
```

Run with: `npm run dev:all`

## Project Structure

```
tailoring/
├── src/                    # Frontend React app
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── StitchingPage.tsx
│   │   ├── ClassesPage.tsx
│   │   └── measurements/   # Measurement pages
│   ├── components/         # React components
│   │   ├── forms/          # Form components
│   │   ├── features/       # Feature components
│   │   └── ui/             # UI components
│   └── lib/                # Utilities & API client
├── backend/                # Backend Express API
│   ├── routes/             # API routes
│   │   ├── measurements.js
│   │   └── classes.js
│   └── server.js           # Main server file
└── public/                 # Static assets
    └── measurement-hip.svg # Measurement guide image
```

## Features

### Frontend Pages
- **Home** (`/`) - Overview of services
- **About** (`/about`) - About the business
- **Stitching** (`/stitching`) - Stitching services overview
  - Chudi (`/stitching/chudi`)
  - Pants (`/stitching/pants`)
  - Blouse (`/stitching/blouse`)
  - Skirts (`/stitching/skirts`)
- **Classes** (`/classes`) - Class enrollment
  - Tailoring Classes
  - Aari Work Classes
  - Embroidery Classes
  - Online (preferred time) / Offline (contact) options

### Backend API
- `POST /api/measurements/submit` - Submit measurement order
- `POST /api/classes/online` - Online class enrollment
- `POST /api/classes/offline` - Offline class contact
- `GET /api/health` - Health check

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (backend/.env)
```env
PORT=5000
NODE_ENV=development
```

## Troubleshooting

### Frontend can't connect to backend
1. Ensure backend is running on port 5000
2. Check `VITE_API_URL` in frontend `.env` file
3. Verify CORS is enabled in backend (already configured)

### Backend errors
1. Check if port 5000 is available
2. Verify all dependencies are installed: `cd backend && npm install`
3. Check console for error messages

### Measurement images not showing
- Ensure `public/measurement-hip.svg` exists
- Check browser console for 404 errors
- Verify image paths in measurement pages

## Next Steps

1. **Database Integration**: Replace in-memory storage with a database (MongoDB, PostgreSQL)
2. **Authentication**: Add user authentication for admin endpoints
3. **Email Notifications**: Send confirmation emails on order submission
4. **File Uploads**: Allow customers to upload measurement photos
5. **Payment Integration**: Add payment processing for orders

