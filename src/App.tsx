import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contacts from './containers/Contacts/Contacts';
import ContactEditor from './containers/ContactEditor/ContactEditor';
import NotFound from './containers/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/contacts/new-contact' element={<ContactEditor />} />
        <Route path='/contacts/edit/:id' element={<ContactEditor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
