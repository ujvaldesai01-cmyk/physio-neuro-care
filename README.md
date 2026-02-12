# Physio Neuro Care

This is a MERN stack application for a neuro-rehabilitation physiotherapist.

## Project Structure

- `client`: React frontend application (Vite)
- `server`: Node.js/Express backend application

## Setup

1.  **Install Dependencies:**
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

2.  **Environment Variables:**
    -   Create a `.env` file in `server` with:
        ```
        PORT=5000
        MONGODB_URI=your_mongodb_connection_string
        ```

3.  **Run Locally:**
    -   Server: `cd server && npm run dev` (or `npm start`)
    -   Client: `cd client && npm run dev`

## Deployment

### Frontend (Netlify/Vercel)

1.  Push this repository to GitHub.
2.  Import the project into Netlify or Vercel.
3.  Set the **Root Directory** to `client`.
4.  Set the **Build Command** to `npm run build`.
5.  Set the **Output Directory** to `dist`.

### Backend (Render/Railway/Heroku)

1.  Push this repository to GitHub.
2.  Import the project into a backend hosting service.
3.  Set the **Root Directory** to `server`.
4.  Set the **Build Command** to `npm install`.
5.  Set the **Start Command** to `npm start` (ensure `package.json` has this script).
6.  Add environment variables (`MONGODB_URI`, etc.) in the hosting dashboard.
