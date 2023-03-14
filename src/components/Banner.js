import { useEffect, useState } from 'react';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["MEETING THE MOMENT, TOGETHER", "MEET AND GREET"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [delta, text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <>
            <div className="container mt-3" style={{ background: '#01274B' }}>
                <div className="row">
                    <div className="col-md-8 position-relative bg-black">
                        <div className="img">
                            <img className='opacity-50 w-100' style={{ height: '600px' }} src='https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/47683273_1982241185225182_8533580485022973952_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeGkNN8flCpW6sX6zDD4YL4HryQExeWN9KevJATF5Y30py6T43i3GZRlqjVP75YbN4G3Wh8QE_MSr9jQLuDh3Mjo&_nc_ohc=6_yTP90iGuYAX9AvsCe&_nc_ht=scontent.fdac31-1.fna&oh=00_AfAK0UBWp8mmj78vNXwhf-MFWDMIJm5QBSnjqT1B0PJpIQ&oe=641727CB' alt="" />
                        </div>
                        <div className="bannerTxt position-absolute top-50 start-50 translate-middle">
                            <p className='fw-bold text-center' style={{ fontSize: '50px', letterSpacing: '5px' }}><span className='text-light' dataPeriod="1000" data-rotate='[ "MEETING THE MOMENT, TOGETHER!", MEET AND GREET]'><span>{text}</span></span></p>
                        </div>
                    </div>
                    <div className='col-md-4 my-auto'>
                        <h2 className='text-light fw-bold'>Something of a title</h2>
                        <div style={{ background: 'yellow', height: '5px', width: '30%' }}></div>
                        <br />
                        <p className='text-warning fw-bold fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repudiandae maxime dolor optio laboriosam dolores asperiores vel autem laudantium quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner; 