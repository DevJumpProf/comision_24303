import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Show} from "./components/Show"


export const App = () =>{
return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<Show/>}  />
        <Route path= "/create" element = "aca se crear los registros"/>
        <Route path= "/edit/:id" element = "aca se editan los registros"/>
      </Routes>
    </BrowserRouter>
  </div>
)
}