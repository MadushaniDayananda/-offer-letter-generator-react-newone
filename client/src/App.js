import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FORM from './pages/form';
import Nheading from './components/navbar';
import FormList from './pages/form_list';
import Format_Letter from './pages/format_Letter';

function App() {
  return (
    <BrowserRouter>
    <Nheading/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FORM />} />
        <Route path="/formList" element={<FormList />} />
        <Route path="/formatletter" element={<Format_Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
