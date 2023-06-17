import { Route,Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import Error from "./pages/404"

function App(){
  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo/s/:name" element={<Catalogo />}/> 
        <Route path="/catalogo/:categoria" element={<Catalogo />}/>   
        <Route path="*" element={<Error/>} />
      </Routes>
    </>    
  )
}

export default App;