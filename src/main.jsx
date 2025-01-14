import {createRoot} from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App"
import Search from "./Pages/search"

const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/search" element={<Search />} />
            <Route path="/contact" element={<App />} />
        </Routes>
  </BrowserRouter>
)