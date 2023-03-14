import React, { useEffect, useState } from 'react';
import Header from './Header';
import '../App.css';
import IndividualAlumni from './IndividualAlumni';

const Gallery = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/allPhotos`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <Header />
            <div class=" galleryContainer">
                {
                    data.map(data => <IndividualAlumni key={data._id} data={data} />)
                }
                {/* <div class="box">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    </div>
                    <div class="content">
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                    </div>
                    <div class="content">
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                    </div>
                    <div class="content">
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div class="row w-100 mx-auto container-fluid mt-3">
                <h1 className='text-center mb-3 fw-bold'>Wall Of Love</h1>
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Gallery;