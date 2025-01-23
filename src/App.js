
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PrivacyPolicy from "./page/PrivacyPolicy";
import DeleteRequest from "./page/DeleteRequest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/delete-account-request" element={<DeleteRequest/>}/>
      </Routes>
    </Router>
  );
}

export default App;
