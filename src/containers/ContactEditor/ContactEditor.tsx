import React from 'react';
import './ContactEditor.css';
import { Link } from 'react-router-dom';

const ContactEditor: React.FC = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='my-3'>Add new contact</h1>
          <form>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name:
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                placeholder='John Doe'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='phone' className='form-label'>
                Phone:
              </label>
              <input
                type='tel'
                className='form-control'
                id='phone'
                name='phone'
                placeholder='996-555-555-555'
                pattern='[0-9]{3} [0-9]{3} [0-9]{3} [0-9]{3}'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email:
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                placeholder='johndoe@example.com'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='photo' className='form-label'>
                Photo:
              </label>
              <input
                type='url'
                className='form-control'
                id='photo'
                name='photo'
                placeholder='https://images.com/photos/123456/example.jpeg'
                required
              />
            </div>
            <div className='mb-3'>
              <p>Photo preview:</p>
              <div className='photo-wrap border-1 border-black'>
                <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
                  alt='preview'
                  className='photo'
                />
              </div>
            </div>
            <div className='d-flex'>
              <button className='btn btn-outline-dark me-3' type='submit'>
                Save
              </button>
              <Link className='btn btn-outline-dark' to='/'>
                Back to contacts
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEditor;
