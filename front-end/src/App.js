


import "./css/global.css"
import "./css/table/table.css"
import 'react-responsive-pagination/themes/classic.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import MainPage from "./pages/main-page/HomePage"
import Header from "./components/primary/Header";
import Footer from "./components/primary/Footer";
import Auth from "./pages/auth/Auth";
import AdminPanel from "./pages/admin-panel/AdminPanel"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="*" element={<h1>صفحه پیدا نشد.</h1>} />
        </Routes>
        <Footer />

      </BrowserRouter>


    </div>
  );
}

export default App;
