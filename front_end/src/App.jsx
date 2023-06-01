import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/pin/:id" element={<DetailPage/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
