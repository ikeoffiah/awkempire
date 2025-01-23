
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PrivacyPolicy from "./page/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      </Routes>
    </Router>
  );
}

export default App;
