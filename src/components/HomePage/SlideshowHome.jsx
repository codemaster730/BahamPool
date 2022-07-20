import { useState } from 'react';
import { Transition } from '@headlessui/react';
import gif1 from '../../assets/images/gifs/Tally-ho_Home 2.gif';
import gif2 from '../../assets/images/gifs/tally-ho_MOD.gif';
import gif3 from '../../assets/images/gifs/Tally-ho_Home Page 3.gif';

const SlideshowHome = () => {
    const slides = [
        {
            src: gif1,
            alt: 'Tally-ho_Home 2',
            timeout: 9000,
        },
        {
            src: gif2,
            alt: 'tally-ho_MOD',
            timeout: 7000,
        },
        {
            src: gif3,
            alt: 'Tally-ho_Home Page 3',
            timeout: 10000,
        },
    ];

    const [interval, setInterval] = useState(slides[0].timeout);
    const [showing, setShowing] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Transition
            show={showing}
            appear={true}
            beforeEnter={() => {
                setShowing(true);
                setInterval(slides[currentSlide].timeout);
            }}
            afterEnter={() => {
                setTimeout(() => {
                    setShowing(false);
                }, interval);
            }}
            afterLeave={() => {
                currentSlide === slides.length - 1
                    ? setCurrentSlide(0)
                    : setCurrentSlide(currentSlide + 1);
                setShowing(true);
                clearTimeout();
            }}
            unmount={true}
            className='aspect-square w-full max-w-md overflow-hidden'
        >
            <Transition.Child
                enter='transition ease duration-500'
                enterFrom='-translate-x-full scale-95 opacity-0'
                enterTo='translate-x-0 scale-100 opacity-100'
                leave='transition ease duration-500'
                leaveFrom='translate-x-0 scale-100 opacity-100'
                leaveTo='translate-x-full scale-95 opacity-0'
            >
                <img
                    src={slides[currentSlide].src}
                    alt='gif3'
                    className='w-full'
                    loading='lazy'
                />
            </Transition.Child>
        </Transition>
    );
};

export default SlideshowHome;
