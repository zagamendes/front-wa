import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./telas/home";
import BancoProvider from "./contextos/Banco";
import AlertProvider from "./contextos/AlertContext";
import ModalProvider from "./contextos/Modal";

function App() {
  return (
    <Router>
      <Header />
      <BancoProvider>
        <AlertProvider>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ModalProvider>
        </AlertProvider>
      </BancoProvider>
      <Footer />
    </Router>
  );
}

export default App;
