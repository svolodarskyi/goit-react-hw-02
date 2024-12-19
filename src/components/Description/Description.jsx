import s from './Description.module.css';
import { MdCoffee } from 'react-icons/md';

const Description = () => {
  return (
    <>
      <h1 className={s.title}>Sip Happens Café</h1>
      <MdCoffee className={s.iconSip} />
      <p className={s.subtitle}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
