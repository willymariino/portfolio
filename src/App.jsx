import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Projects from "./pages/Projects"



function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route Component={defaultLayout}>

          <Route index Component={Home} />
          <Route path="About" Component={About} />
          <Route path="Contacts" Component={Contacts} />
          <Route path="Projects" Component={Projects} />


        </Route>

      </Routes>

    </BrowserRouter>
  )
}
import defaultLayout from "./layouts/DefaultLayout"

export default App
