import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import {WatchList} from './components/WatchList';
import Add from './components/Add';
import Watched from './components/Watched';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
      <Header />
          <Routes>
              <Route exact path="/" element={<WatchList />} />
              <Route path="/add" element={<Add />} />
              <Route path="/WatchedLIst" element={<Watched />} />
          </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
