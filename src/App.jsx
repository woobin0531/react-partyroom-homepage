// src/App.jsx
import React from "react";
import "./App.css"; // App.css도 곧 정리할 예정입니다.
import Header from "./components/Header";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import ReservationSection from "./sections/ReservationSection";
import ReviewsSection from "./sections/ReviewsSection";
import RulesSection from "./sections/RulesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainSection />
        <AboutSection />
        <ReservationSection />
        <ReviewsSection />
        <RulesSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
