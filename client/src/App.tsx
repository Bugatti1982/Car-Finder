// Must install pkgs to keep red line from yelling at us 
//npm install react-router-dom
//npm install @types/react-router-dom
//npm install @types/react
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

// pulls from main.tsx?
function App() {
  return (
    <>
      <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  )
}

export default App
