import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/cars';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<About />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}
export default App;