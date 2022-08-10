import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FORM from './pages/form';
import Nheading from './components/navbar';
import FormList from './pages/form_list';
import NewFormatLetter from './pages/newformatletter';
import EditForm from './pages/editform';
import EditOffer from './pages/editofferform'
import Example from './pages/PDF';



function App() {
  return (
    <BrowserRouter>
      <Nheading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FORM />} />
        <Route path="/formList" element={<FormList />} />
        <Route path="/NewFormatLetter" element={<NewFormatLetter/>} />
        <Route path="/EditForm" element={<EditForm/>} />
        <Route path="/EditOffer" element={<EditOffer/>} />
        <Route path="/Example" element={<Example/>} />
       
       
       
      </Routes>
    </BrowserRouter>
    // <Example/>

    // <NewFormatLetter/>
   
    // <FormatLetter />

  );
}

export default App;
