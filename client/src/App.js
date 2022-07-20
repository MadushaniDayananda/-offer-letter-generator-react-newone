import Home from './pages/home';
import  { BrowserRouter, Route } from 'react-router-dom';
import FORM from './pages/form';
import Nheading from './components/navbar';
import FormList from './pages/form_list';
import Format_Letter from './pages/format_Letter';


function App() {
  return (
    <>

      <BrowserRouter>
        <div>
          <Nheading />
        </div>
        

        <Route path='/' component={Home} exact/>
        <Route path='/form' component={ FORM}/>
        <Route path='/formlist' component={FormList}/>
        
        {/* <Home />

        <FORM />

        <FormList />
        <Format_Letter /> */}

      </BrowserRouter>





    </>

  );
}

export default App;
