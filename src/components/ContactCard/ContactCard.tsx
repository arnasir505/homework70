import React from 'react';

const ContactCard: React.FC = () => {
  return (
    <div className='card mb-3'>
      <div className='card-body p-2 d-flex align-items-center'>
        <div className='photo-wrap'>
          <img
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
            alt='profile photo'
            className='photo'
          />
        </div>
        <h4 className='card-title ms-4'>John Doe</h4>
      </div>
    </div>
  );
};

export default ContactCard;
