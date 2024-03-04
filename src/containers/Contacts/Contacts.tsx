import React, { useCallback, useEffect } from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectContacts,
  selectLoading,
} from '../../store/contactsSlice/contactsSlice';
import { fetchContacts } from '../../store/contactsSlice/contactsThunks';
import Spinner from '../../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import CustomModal from '../../components/CustomModal/CustomModal';

const Contacts: React.FC = () => {
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  const getContacts = useCallback(async () => {
    await dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  let content = <Spinner />;

  if (contacts.length > 0 && !isLoading) {
    content = (
      <>
        {contacts.map((contact) => (
          <ContactCard
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            photo={contact.photo}
            key={contact.id}
          />
        ))}
      </>
    );
  } else if (contacts.length === 0 && !isLoading) {
    content = (
      <h1 className='text-center pt-5'>
        You don't have any contacts.
        <br />
        <Link to={'/contacts/new-contact'}>Click here</Link> to add one!
      </h1>
    );
  }

  return (
    <div className='container pt-5'>
      <CustomModal/>
      <div className='row'>
        <div className='col-md-8 col-lg-6'>{content}</div>
      </div>
    </div>
  );
};

export default Contacts;
