import React, { useCallback, useEffect } from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectContacts,
  selectLoading,
} from '../../store/contactsSlice/contactsSlice';
import { fetchContacts } from '../../store/contactsSlice/contactsThunks';
import Spinner from '../../components/Spinner/Spinner';

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

  return (
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-md-8 col-lg-6'>
          {isLoading ? (
            <Spinner />
          ) : (
            contacts.map((contact) => (
              <ContactCard
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                photo={contact.photo}
                key={contact.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
