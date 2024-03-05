import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { openModal } from '../../store/modalSlice/modalSlice';
import './ContactCard.css';

interface Props {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

const ContactCard: React.FC<Props> = ({ id, name, phone, email, photo }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className='card mb-3 cursor-pointer'
      onClick={() => dispatch(openModal({id, name, phone, email, photo}))}
    >
      <div className='card-body p-2 d-flex align-items-center'>
        <div className='photo-wrap'>
          <img src={photo} alt='profile photo' className='photo' />
        </div>
        <h4 className='card-title ms-4'>{name}</h4>
      </div>
    </div>
  );
};

export default ContactCard;
