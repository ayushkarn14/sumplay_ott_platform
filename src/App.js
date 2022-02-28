import './css/App.css';
import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Home from "./component/Home";
import Player from "./component/player";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/player" element={<Player/>}>
        </Route>
      </Routes>
  );
}

export default App;
