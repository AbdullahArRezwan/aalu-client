import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const AlumniSpecificNews = () => {
    const { newsId } = useParams();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/news/${newsId}`)
            .then((res) => res.json())
            .then((data) => {
                setNewsData(data);
            });
    }, [newsId]);
    return (
        <>
            <div>
                <div className="mx-auto" style={{ width: '98%', marginTop: '1%' }}>
                    <img className='' style={{ height: '600px', width: '100%' }} src={newsData.imageURL} alt="" />
                </div>
                <p className='text-dark fw-bold fs-1 px-3' >{newsData.title}</p>
                <p style={{ padding: '20px', textAlign: 'justify', textJustify: 'inter-word', whiteSpace: 'preWrap', linHeight: '25px' }}>{newsData.description}</p>
                <div style={{ padding: '20px' }}>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}><i class="fas fa-angle-double-left"></i> Back to home</Link>
                </div>
            </div>
        </>
    )
}

export default AlumniSpecificNews;