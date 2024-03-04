import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  closeModal,
  selectModalContact,
  selectModalShow,
} from '../../store/modalSlice/modalSlice';

const CustomModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectModalShow);
  const contact = useAppSelector(selectModalContact);

  return (
    <Modal show={show} onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <div className='row'>
          <div className='col-4'>
            <div className='photo-wrap'>
              <img src={contact.photo} alt='profile photo' className='photo' />
            </div>
          </div>
          <div className='col-8'>
            <h2>{contact.name}</h2>
            <Link to={'/'}>{contact.phone}</Link>
            <br />
            <Link to={'/'}>{contact.email}</Link>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn btn-outline-dark'>Edit</button>
        <button className='btn btn-outline-dark'>Delete</button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
