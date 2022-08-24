import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello world!</h1>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;