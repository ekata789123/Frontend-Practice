import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './component/SearchComponent/Search';
import {StopCounter} from './component/StopCounter/StopCounter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/stopCounter" element={<StopCounter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
