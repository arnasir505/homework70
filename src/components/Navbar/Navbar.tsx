import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar bg-info-subtle'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          Contacts
        </Link>
        <Link className='btn btn-outline-dark' to='/contacts/new-contact'>
          Add new contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
