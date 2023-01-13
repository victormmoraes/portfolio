import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";


function App() {
  return (
    <>
        <Header />

      <div id="others">
        <Outlet/>
      </div>
      
    </>
  )
}

export default App
