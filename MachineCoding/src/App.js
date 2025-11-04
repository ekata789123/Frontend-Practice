import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './component/SearchComponent/Search';
import {StopCounter} from './component/StopCounter/StopCounter';
import { ProgressBar } from './component/ProgressBar/ProgressBar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/stopCounter" element={<StopCounter />} />
        <Route path="/progressBar" element={<ProgressBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
