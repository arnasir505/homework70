import React from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';

const Contacts: React.FC = () => {
  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-md-8 col-lg-6'>
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
