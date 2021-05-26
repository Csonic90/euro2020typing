import { useState } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import styles from '../../styles/Home.module.css'

const DodajMecz = () => {
  const [content, setContent] = useState({
    druzyna1: '',
    druzyna2: '',
    grupa: ''

  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { druzyna1, druzyna2 , grupa} = content;
    await axios.post('/api/mecze', { druzyna1, druzyna2 , grupa, slug: dashify(druzyna1+druzyna2) });
  }
  return (
    <div className={styles.container}>
    <div>
      <label htmlFor="druzyna1">Drużyna 1</label>
      <input
        type="text"
        name="druzyna1"
        value={content.druzyna1}
        onChange={onChange}
      />
      <label htmlFor="body">Drużyna 2</label>
      <input
        name="druzyna2"
        value={content.druzyna2}
        onChange={onChange}
      />
       <label htmlFor="grupa">grupa</label>
      <input
        name="grupa"
        value={content.grupa}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Dodaj mecz</button>
    </div>
    </div>
  );
};



export default DodajMecz;