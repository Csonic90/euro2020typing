import { useState, useEffect } from 'react';
import dashify from 'dashify';
import axios from 'axios';
import Link from 'next/link'
import db from '../../utils/db';
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

const DodajWynik = (props) => {
    
    const router = useRouter()

    const { meczesData } = props;
    const [imie, setImie] = useState('')
    const [content, setContent] = useState(meczesData)
 
         const onChange = (e) => {
            if (["wynik1","wynik2"].includes(e.target.name)) {
            const temp = [...content]
            temp[e.target.dataset.id][e.target.name] = e.target.value
            setContent(temp)
            }
            if (["imie"].includes(e.target.name)) {
                setImie(e.target.value)
            }
        }

    const onSubmit = async () => {
        await axios.post('/api/wynik',{imie, content:{content} ,slug: dashify(imie)
         });
         router.push({
             pathname:'/',
             query: {name: 'Twoje wyniki zostały dodane'} 
            })
    }
    return (
        
        
        <div className='container '>
             <Head>
        <title>EURO 2020</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='container '>
            <div className='row'> 
                <h1 className='text-center'>Wyniki</h1>

                <label className='col-sm-2 col-form-label text-end' htmlFor="imie"><h2>Imie</h2></label>
                <div className="col-sm-10">
                <input
                    type="text"
                    name="imie"
                    onChange={onChange}
                    className="imie col wynik form-control m-3"
                />
                </div>
                {content.map((mecze, id) => (

                    <div key={`mecz id${mecze.id}`} className='mb-3 row border border-dark '>
                        <label className=' col form-label text-end' htmlFor="druzyna1">{mecze.druzyna1}</label>
                        <input
                            data-id={id}
                            type="number"
                            value={mecze.wynik1}
                            name='wynik1'
                            className="wynik col form-control"
                            onChange={onChange}
                        />
                        :
                        <input
                            data-id={id}
                            type="number"
                            value={mecze.wynik2}
                            name='wynik2'
                            onChange={onChange}
                            className="wynik col form-control"
                            
                        />
                        <label className=' col form-label' htmlFor="druzyna1">{mecze.druzyna2}</label>
                        
                    </div>
                  
                ))}

            </div>
            <button  className='btn btn-primary' onClick={onSubmit}>Dodaj Wyniki</button>

        </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const meczes = await db.collection('meczes').orderBy('created', 'desc').get();
    const meczesData = meczes.docs.map(mecze => ({
        id: mecze.id,
        ...mecze.data(),
        wynik1: "",
        wynik2: ""
    }));
    return {
        props: { meczesData },
    }
}


export default DodajWynik;