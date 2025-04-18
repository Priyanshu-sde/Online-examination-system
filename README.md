# 📝 Online Examination System

An online platform designed to facilitate the creation, management, and participation in examinations.  
Built using Node.js and Express.js, it offers a seamless experience for administrators, educators, and students.

---

## 🚀 Features

- **User Authentication** – Secure login and registration for administrators, educators, and students.
- **Exam Management** – Create, update, and delete exams with ease.
- **Question Bank** – Maintain a repository of questions categorized by subjects and topics.
- **Real-time Examination** – Students can take exams within a specified time frame.
- **Automated Grading** – Immediate evaluation of objective questions.
- **Results Dashboard** – View and analyze performance metrics post-examination.

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT (JSON Web Tokens)  

---

## 📁 Project Structure

```bash
├── Controllers/        # Handles the logic for routes
├── config/             # Configuration files (e.g., database connection)
├── middlewares/        # Custom middleware functions
├── models/             # Mongoose schemas
├── routes/             # Route definitions
├── .gitignore
├── index.js            # Entry point of the application
├── package.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Priyanshu-sde/Online-examination-system.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Online-examination-system
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the server**:

   ```bash
   npm start
   ```

6. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`

---

## 📡 API Endpoints

### Authentication:
- `POST /api/auth/register`: Register a new user  
- `POST /api/auth/login`: Login and receive a JWT  

### Exams:
- `POST /api/exams`: Create a new exam (Admin only)  
- `GET /api/exams`: Retrieve all exams  
- `GET /api/exams/:id`: Retrieve a specific exam  
- `PUT /api/exams/:id`: Update an exam (Admin only)  
- `DELETE /api/exams/:id`: Delete an exam (Admin only)  

### Questions:
- `POST /api/exams/:examId/questions`: Add a question to an exam (Admin only)  
- `GET /api/exams/:examId/questions`: Retrieve questions for an exam  

### Submissions:
- `POST /api/exams/:examId/submit`: Submit answers for evaluation  

---

## 🧪 Testing

To run tests (if available), use:

```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For any inquiries or feedback, please contact [Priyanshu Chaurasia](mailto:Priyanshu.sde@gmail.com).

---

```
