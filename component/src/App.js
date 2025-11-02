import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './component/SearchComponent/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
