import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

const AddPhoto = () => {

    const [property, setProperty] = useState({});
    const [imageURL, setImageURL] = useState(null);

    const handleBlur = (e) => {
        const newData = { ...property };
        newData[e.target.name] = e.target.value;
        setProperty(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: property.name,
            designation: property.designation,
            company: property.company,
            imageURL: imageURL,
        };
        fetch(`http://localhost:4000/addPhoto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => !data ? alert('Property Added Successfully') : alert('Oops! Something went wrong'))

        e.target.reset()
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "b86c0ab7beeb42c384775d3b62a113c0");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className=' mt-3' style={{ marginRight: '30px' }}>
                    <h2 className='mb-3 text-center'>Add Alumni Photo</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                            <input name='name' type="text" onBlur={handleBlur} class="form-control" placeholder='Name' />
                        </div>

                        <div class="form-outline mb-4">
                            <input name='designation' type="text" onBlur={handleBlur} class="form-control" placeholder='Designation' />
                        </div>

                        <div class="form-outline mb-4">
                            <input name='company' type="text" onBlur={handleBlur} class="form-control" placeholder='Workplace' />
                        </div>

                        <div class="form-outline mb-4">
                            <input type="file" name="" onChange={handleImageUpload} class="form-control" />
                        </div>

                        <button type="submit" class="btn btn-primary btn-block mb-4">Add Photo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPhoto;