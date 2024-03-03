import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ContactEditor from './containers/ContactEditor/ContactEditor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/contacts/new-contact' element={<ContactEditor />} />
      </Routes>
    </>
  );
}

export default App;
