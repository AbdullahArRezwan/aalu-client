import React from 'react';

const IndividualAlumni = ({ data }) => {
    return (
        <div class="box">
            <div class="imgBx">
                <img src={data.imageURL} alt='' />
            </div>
            <div class="content">
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.designation} <br />at <strong><em>{data.company}</em></strong></p>
                </div>
            </div>
        </div>
    );
};

export default IndividualAlumni;