import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import o_nas from './pages/o_nas'

function App() {
  /*useEffect(()=>{
    axios.get("http://localhost:3001/accounts").then((response) => {
      console.log(response.data);
    });
  })*/

  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/o_nas" exact element={<o_nas/>} />
      </Routes>
    </Router>
  </div>
}

export default App;
