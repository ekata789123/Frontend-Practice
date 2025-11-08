import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './component/SearchComponent/Search';
import {StopCounter} from './component/StopCounter/StopCounter';
import { ProgressBar } from './component/ProgressBar/ProgressBar';
import { TodoList } from './component/TodoList/TodoList';
import { StepperComponent } from './component/StepperComponent/StepperComponent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/stopCounter" element={<StopCounter />} />
        <Route path="/progressBar" element={<ProgressBar />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/stepper" element={<StepperComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
