import { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './ImageSlider.css';
const ImageSlider = ({ url, limit = 5, page = 1 }) => {


    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(null);


    async function fetchImages(getUrl) {

        try {

            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (error) {

        }


    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url]);

    console.log(images)

    if (loading) {
        return <div>
            Loading data ! Please wait
        </div>
    }

    if (errorMsg !== null) {
        return <div>Error occured! {errorMsg}</div>
    }



    return (
        <div className="container">
            <BsArrowLeftCircleFill
                className='arrow arrow-left'
                onClick={() => { }}
            />

            {
                images && images.length
                    ? images.map(imageItem => (
                        <img
                            key={imageItem.id}
                            src={imageItem.download_url}
                            alt={imageItem.download_url}
                            className='current-image'
                        />
                    ))
                    : null
            }

            <BsArrowRightCircleFill
                className='arrow arrow-right'
                onClick={() => { }}
            />
            <span className='circle-indicators'>
                {
                    images && images.length
                        ? images.map((_, index) => <button
                            key={index}
                            className='current-indicator'
                        ></button>)
                        : null
                }
            </span>
        </div>
    )
}
export default ImageSlider