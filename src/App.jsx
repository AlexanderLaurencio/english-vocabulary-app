import { Outlet } from "react-router-dom"
import SideNav from "./components/SideNav/SideNav.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"

function App() {
  return (
    <>
      <SideNav />
      <Outlet />
    </>
  )
}

export default App
