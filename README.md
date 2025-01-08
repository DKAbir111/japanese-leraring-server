# ~日本~ Learn: Japanese Vocabulary Learning Application

![Project Badge](https://img.shields.io/badge/Status-Completed-brightgreen)
![License Badge](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Live Links
- **🌐 Live Website**: [Mellow Peony](https://mellow-peony-b34e6c.netlify.app/)
- **🚧 Server**: [Vercel Server](https://japanese-learing-server.vercel.app/)

---

## 📂 Repository Links
- **🔧 Client Repository**: [Japanese Learning Client](https://github.com/DKAbir111/japanese-learning-client.git)
- **🔧 Server Repository**: [Japanese Learning Server](https://github.com/DKAbir111/japanese-leraring-server.git)

---

## 🌟 Project Overview
**~日本~ Learn** is a user-friendly and engaging Japanese vocabulary learning platform designed to help learners improve their vocabulary and communication skills in Japanese. It features role-based access and interactive elements to make learning enjoyable and intuitive.

---

## 🎡 Key Features

### 🔑 Frontend Features
1. **Interactive Lessons**: Users can view lessons dynamically rendered from the backend.
2. **Vocabulary Pronunciation**: Play audio for correct pronunciation.
3. **Lesson Completion Animation**: Celebrate achievements with confetti animations.
4. **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
5. **User Authentication**: Role-based access using JWT.
6. **Dynamic Pages**: Lessons and vocabulary pages update in real-time.
7. **Protected Routes**: Secured routes with user role validation.
8. **React Components**: Modular and reusable UI components.
9. **Error Handling**: Custom error messages and visual indicators.
10. **Framer Motion Animations**: Smooth transitions for better UX.

### 🔧 Backend Features
1. **User Management**: CRUD operations for users with role-based controls.
2. **JWT Authentication**: Secure login and token verification.
3. **Data Validation**: Middleware for validating requests.
4. **Mongoose Models**: Schema definitions for Lessons, Vocabulary, and Users.
5. **Password Hashing**: Secure user credentials using bcrypt.
6. **CORS**: Enable cross-origin requests.
7. **Admin Controls**: Manage users, lessons, and vocabulary.
8. **RESTful API**: Well-structured endpoints for easy integration.
9. **Error Handling Middleware**: Centralized error handling.
10. **Secure Data Storage**: Encrypted JWT secrets and hashed passwords.
11. **API Rate Limiting**: Protection against abuse with middleware.
12. **Search Functionality**: Endpoint to search lessons and vocabulary.

---

## 🛠️ Tech Stack
### Frontend:
- ![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white) **React**
- ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white) **Tailwind CSS**
- ![React Router](https://img.shields.io/badge/-ReactRouter-orange?logo=react-router&logoColor=white) **React Router DOM**
- ![Framer Motion](https://img.shields.io/badge/-FramerMotion-purple?logo=framer&logoColor=white) **Framer Motion**
- ![Font Awesome](https://img.shields.io/badge/-FontAwesome-green?logo=font-awesome&logoColor=white) **Font Awesome**

### Backend:
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) **Node.js**
- ![Express.js](https://img.shields.io/badge/-Express-black?logo=express&logoColor=white) **Express.js**
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) **MongoDB**
- ![JWT](https://img.shields.io/badge/-JWT-black?logo=json-web-tokens&logoColor=white) **JWT**
- ![Mongoose](https://img.shields.io/badge/-Mongoose-red?logo=javascript&logoColor=white) **Mongoose**
- ![bcrypt](https://img.shields.io/badge/-bcrypt-yellowgreen?logo=security&logoColor=white) **bcrypt**
- ![CORS](https://img.shields.io/badge/-CORS-lightblue) **CORS**

---

## 📄 Project Requirements Fulfilled
- **GitHub Management**: Over 10 meaningful commits per repository.
- **Responsiveness**: Optimized for multiple devices.
- **Design**: Unique theme with intuitive UI.
- **Error Handling**: User-friendly error messages.
- **Authentication**: Role-based JWT authentication.
- **Code Quality**: Modular, readable, and maintainable.
- **Protected Routes**: Role-specific route access.

---

## 🌈 Layout Structure
### For Users:
- **Navbar**: Logo and navigation.
- **Footer**: Links and additional info.
- **Pages**:
  - Lessons (Protected)
  - Tutorials (Protected)
  - Login
  - Register

### For Admins:
- **Dashboard**: Manage app resources.
- **Pages**:
  - Manage Lessons
  - Add Lessons
  - Add Vocabulary
  - Manage Users
  - Vocabulary Management

---

## 🛠️ Installation
1. Clone the repositories:
```bash
# Clone client repo
git clone https://github.com/DKAbir111/japanese-learning-client.git

# Clone server repo
git clone https://github.com/DKAbir111/japanese-leraring-server.git
```

2. Install dependencies:
```bash
# Client
cd japanese-learning-client
npm install

# Server
cd japanese-leraring-server
npm install
```

3. Start the development servers:
```bash
# Client
npm run dev

# Server
npm start
```

4. Configure `.env` for the server:
```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

---

## 📂 API Endpoints
### Authentication:
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login user.

### Admin Routes:
- `GET /api/admin/users`: View all users.
- `PATCH /api/admin/users/:id`: Update user role.

### Lessons:
- `GET /api/lessons`: Fetch all lessons.
- `POST /api/lessons`: Add a lesson (Admin only).
- `PUT /api/lessons/:id`: Update a lesson (Admin only).
- `DELETE /api/lessons/:id`: Delete a lesson (Admin only).

### Vocabulary:
- `GET /api/vocabulary`: Fetch vocabulary list.
- `POST /api/vocabulary`: Add a vocabulary (Admin only).
- `PUT /api/vocabulary/:id`: Update vocabulary (Admin only).
- `DELETE /api/vocabulary/:id`: Delete vocabulary (Admin only).

---

## 🌐 Deployment
- **Netlify**: Hosted frontend for fast delivery.
- **Vercel**: Hosted backend API for scalable performance.

---

## 📸 Screenshots
### User Interface
![User Lessons Page](https://i.ibb.co.com/vjvWtJD/screenshot-1-1.png)

### Admin Dashboard
![Admin Manage Lessons](https://i.ibb.co.com/x3trZ80/Screenshot-2025-01-08-at-6-55-32-PM.png)


---

## 💻 Developer
**Darun Karas Abir**  
[GitHub Profile](https://github.com/DKAbir111)

