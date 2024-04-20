import css from './Contact.module.css';
import { CiUser } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../../redux/operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.information}>
        <CiUser />
        <p>{name}</p>
      </div>
      <div className={css.information}>
        <CiPhone />
        <p>{number}</p>
      </div>

      <button
        className={css.delBtn}
        id={id}
        onClick={e => {
          dispatch(deleteContacts(e.target.id));
        }}
      >
        Delete
      </button>
    </>
  );
}