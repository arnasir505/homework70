import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearForm,
  selectContact,
  selectContactLoading,
  updateContact,
} from '../../store/contactSlice/contactSlice';
import {
  addContact,
  fetchContactForm,
  updateContactForm,
} from '../../store/contactSlice/contactThunks';
import { closeModal } from '../../store/modalSlice/modalSlice';

const ContactEditor: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const contact = useAppSelector(selectContact);
  const isLoading = useAppSelector(selectContactLoading);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (params.id) {
      await dispatch(updateContactForm(params.id));
    } else {
      await dispatch(addContact(contact));
    }
    dispatch(clearForm());
    dispatch(closeModal());
    navigate('/');
  };

  const getContactForm = useCallback(async () => {
    try {
      if (params.id) {
        await dispatch(fetchContactForm(params.id)).unwrap();
      } else {
        dispatch(clearForm());
      }
    } catch (e) {
      navigate('/404', { replace: true });
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    void getContactForm();
  }, [getContactForm]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='my-3'>
            {params.id ? 'Edit contact' : 'Add new contact'}
          </h1>
          <form onSubmit={onFormSubmit}>
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
                autoComplete='on'
                value={contact.name}
                onChange={(e) => dispatch(updateContact(e))}
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
                placeholder='996555555555'
                pattern='[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{3}'
                required
                autoComplete='on'
                value={contact.phone}
                onChange={(e) => dispatch(updateContact(e))}
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
                autoComplete='on'
                value={contact.email}
                onChange={(e) => dispatch(updateContact(e))}
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
                autoComplete='on'
                value={contact.photo}
                onChange={(e) => dispatch(updateContact(e))}
              />
            </div>
            <div className='mb-3'>
              <p>Photo preview:</p>
              <div className='photo-wrap border-1 border-black'>
                <img
                  src={contact.photo || 'https://fakeimg.pl/120x120?font=bebas'}
                  alt='preview'
                  className='photo'
                />
              </div>
            </div>
            <div className='d-flex'>
              <button
                className='btn btn-outline-dark me-3'
                type='submit'
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className='spinner-border spinner-border-sm'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden' role='status'>
                      Loading...
                    </span>
                    Save
                  </>
                ) : (
                  'Save'
                )}
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
