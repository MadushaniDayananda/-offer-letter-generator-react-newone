import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FORM from './pages/form';
import Nheading from './components/navbar';
import FormList from './pages/form_list';
import FormatLetter from './pages/format_Letter';
import NewFormatLetter from './pages/newformatletter';
import EditForm from './pages/editform';
import EditOffer from './pages/editofferform'


function App() {
  return (
    <BrowserRouter>
      <Nheading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FORM />} />
        <Route path="/formList" element={<FormList />} />
        <Route path="/formatletter" element={<FormatLetter />} />
        <Route path="/NewFormatLetter" element={<NewFormatLetter/>} />
        <Route path="/EditForm" element={<EditForm/>} />
        <Route path="/EditOffer" element={<EditOffer/>} />
       
      </Routes>
    </BrowserRouter>

    // <NewFormatLetter/>
   
    // <FormatLetter />

  );
}

export default App;
