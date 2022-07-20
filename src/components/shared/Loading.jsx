import { Transition } from '@headlessui/react';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import LoadingBar from 'react-top-loading-bar';
import { useRef, useEffect } from 'react';

const Loading = () => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.continuousStart();
        }

        setTimeout(() => {
            if (ref.current) {
                ref.current.complete();
            }
        }, 1500);
    }, []);

    return (
        <div className='fixed inset-0 z-40 flex h-screen flex-col items-center justify-center bg-black'>
            <LoadingBar
                color='#a2e93f'
                ref={ref}
                height={8}
                className='rounded-lg'
            />
            <Transition
                appear={true}
                show={true}
                enter='transition-all ease-out duration-500'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition-all ease-in duration-500'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                <div className='flex items-center'>
                    <img src={logo2} alt='logo' className='mr-7 w-12' />
                    <img src={logo3} alt='logo' className='w-64' />
                </div>
            </Transition>
        </div>
    );
};

export default Loading;
