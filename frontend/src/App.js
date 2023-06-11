import TopNavigation from "./components/TopNavigationBar";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Exam from "./pages/exam";
import Dashboard from "./pages/dashboard";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/exam" exact element={<Exam />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;