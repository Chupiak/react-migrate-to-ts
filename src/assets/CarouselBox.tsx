import {useState} from "react";
import "./Carousel.css";
// @ts-ignore
import foto1 from '../images/1property.jpg'
// @ts-ignore
import foto2 from '../images/2propertry.jpg'
// @ts-ignore
import foto3 from '../images/3property.jpg'
// @ts-ignore
import foto4 from '../images/4property.jpg'



export default function CarouselBox() {
    const photos = [
        {id: 'p1', path: foto1,},
        {id: 'p2', path: foto2,},
        {id: 'p3', path: foto3,},
        {id: 'p4', path: foto4,},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {setCurrentIndex((currentIndex + 1) % photos.length);};
    const prev = () => {setCurrentIndex((currentIndex - 1 + photos.length) % photos.length)};

    return (
        <>
            <div className='slider-container'>
                {photos.map((photo) => (
                    <div key={photo.id} className={photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'}>
                        <a target="_blank" href={`description`} rel="noreferrer"><img className='photo' src={photo.path} alt="PropertyPhoto"/></a>
                        <div className='caption'></div>
                    </div>
                ))}

                <button onClick={prev} className='prev'>
                    &lt;
                </button>

                <button onClick={next} className='next'>
                    &gt;
                </button>
            </div>

            <div className='dots'>
                {photos.map((photo) => (
                    <span
                        key={photo.id}
                        className={photos[currentIndex].id === photo.id ? 'dot active' : 'dot'}
                        onClick={() => setCurrentIndex(photos.indexOf(photo))}
                    ></span>
                ))}
            </div>
        </>
    );
}

