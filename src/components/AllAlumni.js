import React, { useEffect, useState } from 'react';
import Alumni from './Alumni';
import Header from './Header';

const AllAlumni = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4000/allUsers`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    let filteredData = data;
    if (search !== '') {
        filteredData = data.filter(d => d?.name.toLowerCase().includes(search.toLowerCase()))
    }

    const handleSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <div class="form-group w-25 mx-auto mt-4">
                    <input type="email" class="form-control" placeholder='search alumni by name' onChange={handleSearch} />
                </div>
                {
                    filteredData.length < 1 && <p className='text-center mt-2'>No aumni found!</p>
                }
                <div className='row w-100'>
                    {
                        filteredData.map(data => <Alumni data={data} key={data._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAlumni;