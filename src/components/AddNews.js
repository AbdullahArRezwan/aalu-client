import axios from 'axios';
import React, { useState } from 'react';

const AddNews = () => {

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
            title: property.title,
            description: property.description,
            imageURL: imageURL,
        };
        fetch(`http://localhost:4000/addNews`, {
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
        <div className=' mt-3' style={{ marginRight: '30px' }}>
            <h2 className='mb-3 text-center'>Add Alumni News</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                    <input name='title' type="text" onBlur={handleBlur} class="form-control" placeholder='Title' />
                </div>

                <div class="form-outline mb-4">
                    <textarea class="form-control" type="text" name="description" onBlur={handleBlur} rows="4" placeholder='Description'></textarea>
                </div>

                <div class="form-outline mb-4">
                    <input type="file" name="" onChange={handleImageUpload} class="form-control" />
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Add News</button>
            </form>
        </div>
    );
};

export default AddNews;