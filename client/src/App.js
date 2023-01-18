import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import O_nas from './pages/o_nas'

function App() {
  /*useEffect(()=>{
    axios.get("http://localhost:3001/accounts").then((response) => {
      console.log(response.data);
    });
  })*/

  return (
      <div className="App">
          <Router>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/O_nas" exact element={<O_nas />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
