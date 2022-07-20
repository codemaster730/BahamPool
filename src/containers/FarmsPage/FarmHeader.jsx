import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { Carousel } from 'react-responsive-carousel';
import { bannerData } from '../../assets/data/bannerData';

const FarmHeader = () => {
    return (
        <div className='bg-pools_header'>
            <div className='container mx-auto grid max-w-6xl grid-cols-1 p-6 pt-28 md:grid-cols-2'>
                <div className='space-y-4'>
                    <h1 className='font-comfortaa text-[40px] font-semibold text-white'>
                        Farms
                    </h1>
                    <p className='max-w-sm font-light leading-6 text-[#dddddd]'>
                        Tally Farms give you opportunities to achieve high
                        earnings by simply staking LP tokens. Take advantage of
                        high yields for Tally LPs.
                    </p>
                    <a
                        href='#add_product'
                        className='flex items-center space-x-2 text-sm text-primary-brand '
                    >
                        <span>Add Project</span>
                        <PlusCircleIcon className='h-5 w-5' />
                    </a>
                </div>

                <Carousel
                    infiniteLoop
                    autoPlay
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    swipeable
                    emulateTouch
                    stopOnHover
                    className='mx-auto mt-5 flex justify-center md:mt-0'
                    centerMode
                    centerSlidePercentage={100}
                    width={'90%'}
                >
                    {bannerData.map(item => (
                        <a
                            href={item.url}
                            key={item.id}
                            className='ml-auto flex w-full max-w-sm rounded-lg md:max-w-md'
                        >
                            <img
                                src={item.image}
                                alt={'banner'}
                                className='ml-auto h-full w-full rounded-2xl object-cover'
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default FarmHeader;
