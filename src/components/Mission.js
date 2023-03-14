import React from 'react';

const Mission = () => {
    return (
        <div style={{ background: '#01274B' }}>
            <div className='d-flex container justify-content-between align-items-center py-5 my-4'>
                <div>
                    <h2 className='text-light fw-bold'>Our Mission</h2>
                    <div style={{ background: 'yellow', height: '5px', width: '10%' }}></div>
                    <br />
                    <p className='fs-5 text-warning ' style={{ width: '90%', textAlign: 'justify' }}>
                        We enrich the University of Michigan’s impact by serving as an independent gateway for alums of all identities, backgrounds, and experiences – across the globe and in our neighborhoods – in order to create and deepen belonging to the Michigan Family, the Leaders and Best.
                    </p>
                </div>
                <div>
                    <img style={{ width: '450px', borderRadius: '10px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lkzRsASu_2iz4NrFtFuImiiEoS-HtXVbvw&usqp=CAU' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mission;