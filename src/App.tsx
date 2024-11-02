import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Error404Page } from "./pages/404";
import { Layout } from "./components/Layout";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
export default function App() {
  return (
    <div className="m-2 p-4 h-screen w-screen">
      <h1>DADAI's Home</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </div>
  );
}



