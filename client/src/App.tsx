// Must install pkgs to keep red line from yelling at us 
//npm install react-router-dom
//npm install @types/react-router-dom
//npm install @types/react
// this renders the matched child route's element
import { Outlet } from "react-router-dom";
//imported from the components directory
import Navbar from "./components/Navbar";

// pulls from main.tsx
// this is the main component that renders the Navbar and the Outlet
// the outlet renders the matched child route's element
// This allows for nested routing; the app component can serve as a layout for different pages
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
