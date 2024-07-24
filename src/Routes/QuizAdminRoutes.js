import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddQuizQues from "../Component/AddQuizQues";
import LandingPage from "../Display/LandingPage";

export default function QuizAdminRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AddQuiz" element={<AddQuizQues />} />
        </Routes>
      </Router>
    </div>
  );
}
