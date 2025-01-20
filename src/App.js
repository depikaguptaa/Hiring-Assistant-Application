import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmailForm from "./components/EmailForm";
import QuizPage from "./pages/QuizPage";
import ReportPage from "./pages/ReportPage";
import Layout from "./components/Layout";
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  const [email, setEmail] = React.useState(null);

  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<EmailForm setEmail={setEmail} />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
};

export default App;