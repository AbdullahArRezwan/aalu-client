import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

const AddEvent = () => {
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
            type: property.type,
            title: property.title,
            location: property.location,
            date: property.date,
            description: property.description,
            imageURL: imageURL,
        };
        fetch(`http://localhost:4000/addEvent`, {
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
        <div className="row w-100">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className='mt-2' style={{ minHeight: '450px' }}>
                    <h2 className='mb-2 text-center'>Add an event</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <input type="text" name='type' class="form-control" aria-describedby="emailHelp" onBlur={handleBlur} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input type="text" name='title' class="form-control" aria-describedby="emailHelp" onBlur={handleBlur} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Location</label>
                            <input type="text" name='location' class="form-control" onBlur={handleBlur} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Scheduled Date</label>
                            <input type="text" name='date' class="form-control" onBlur={handleBlur} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Add an image</label>
                            <input type="file" class="form-control" onChange={handleImageUpload} />
                        </div>
                        <div className="mb-3">
                            {/* <textarea name="description" type='text' class="form-control" cols="30" rows="5" ></textarea> */}
                            <textarea class="form-control" type="text" name="description" onBlur={handleBlur} rows="4" placeholder='Description'></textarea>

                        </div>
                        <button type="submit" class="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;