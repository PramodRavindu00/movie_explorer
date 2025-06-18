# 🎬 Movie Explorer App

A **frontend movie explorer app** developed using **React (Vite)** and **Tailwind CSS**, powered by the **OMDB API**. Authentication is handled using **Auth0** with **Multi-Factor Authentication (MFA)** and protected routing for secure access.

---

## 🛠️ Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **TypeScript**
- **OMDB API**
- **Auth0** (Authentication with MFA)
- **React Router DOM**

---

## ✨ Key Features

- 🔍 Search and explore movies using the OMDB API
- 🔐 Auth0-based login with Multi-Factor Authentication (MFA)
- 🔒 Protected routes (only accessible to logged-in users)
- 📜 Infinite scrolling for movie results
- 📱 Fully responsive and mobile-friendly design

---

## 🚀 Getting Started

Follow the steps below to run this project on your local machine.

---

### 1. Clone the Repository

```bash
git clone https://github.com/PramodRavindu00/movie_explorer.git
cd movie-explorer
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create an OMDB API Key

1. Visit the OMDB API website: [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Sign up for a free account
3. Select the **Free plan**
4. After verification, you'll receive an **API Key** via email
5. Copy and save the API key — you will use this in the `.env` file

---

### 4. Set Up Auth0 for Authentication

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new **Single Page Application (SPA)**
3. Under **Settings**, add `http://localhost:5173` to the following:
   - **Allowed Callback URLs**
   - **Allowed Logout URLs**
   - **Allowed Web Origins**
4. Under User Management Create a new Test User bu giving a valid email and a strong password
5. Scroll down and copy the **Domain** and **Client ID**
6. Go to **Security > Multi-factor Auth** and:
   - Enable **MFA** (choose an option like SMS or Authenticator App)
   - Set the policy to **"Always"**
7. Go to **Authentication > Database > Settings**:
   - Disable **Sign Ups** to prevent new users from registering (optional)

---

### 5. Create a `.env` File

In the root of your project, create a `.env` file and add the following variables:

```env
VITE_API_KEY=your_omdb_api_key
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT=your_auth0_client_id
```

> Replace `your_omdb_api_key`, `your_auth0_domain`, and `your_auth0_client_id` with your actual values.

---

### 6. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to use the app.
