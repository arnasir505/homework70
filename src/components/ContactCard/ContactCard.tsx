import React from 'react';

interface Props {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

const ContactCard: React.FC<Props> = ({id, name, phone, email, photo}) => {
  return (
    <div className='card mb-3'>
      <div className='card-body p-2 d-flex align-items-center'>
        <div className='photo-wrap'>
          <img
            src={photo}
            alt='profile photo'
            className='photo'
          />
        </div>
        <h4 className='card-title ms-4'>{name}</h4>
        <p>{phone}, {email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
