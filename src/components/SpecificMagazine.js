import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const SpecificMagazine = () => {
    const { magazineId } = useParams();
    const [magazineData, setMagazineData] = useState([]);
    const { author, title, pera, imageURL } = magazineData

    useEffect(() => {
        fetch(`http://localhost:4000/magazine/${magazineId}`)
            .then((res) => res.json())
            .then((data) => {
                setMagazineData(data);
            });
    }, [magazineId]);
    return (
        <div className=''>
            <Header />
            <div className='container'>
                <div className='text-center my-4'>
                    <h2>Meet {author}</h2>
                    <h3>{title}</h3>
                </div>
                <img src={imageURL} style={{ width: '100%', height: '600px' }} alt="" />
                <p style={{ paddingTop: '20px', paddingBottom: '20px', textAlign: 'justify', textJustify: 'inter-word', whiteSpace: 'preWrap', linHeight: '25px' }}>{pera}</p>
            </div>
        </div>
    );
};

export default SpecificMagazine;