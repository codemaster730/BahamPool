import { useState } from 'react';
import { shuffle } from 'lodash';

import tokensData from '../../assets/data/introTokens';
import classNames from 'classnames';
import { Transition } from '@headlessui/react';

const MovingIcons = () => {
    const [shuffledArr, setShuffledArr] = useState(
        shuffle(tokensData).slice(0, 5)
    );
    const [isShuffled, setIsShuffled] = useState(true);

    return (
        <Transition
            show={isShuffled}
            appear={true}
            beforeEnter={() => {
                setShuffledArr(shuffle(tokensData).slice(0, 5));
            }}
            afterEnter={() => {
                setTimeout(() => {
                    setIsShuffled(false);
                }, 2500);
            }}
            afterLeave={() => {
                setIsShuffled(true);
                clearTimeout();
            }}
            className='mb-4 grid grid-cols-2 items-center gap-8 md:grid-cols-3 xl:grid-cols-5'
            unmount={true}
        >
            {shuffledArr.map((item, index) => (
                <Transition.Child
                    key={index}
                    enter='transition ease duration-500'
                    enterFrom='-translate-y-full scale-95 opacity-0'
                    enterTo='translate-y-0 scale-100 opacity-100'
                    leave='transition ease duration-500'
                    leaveFrom='translate-y-0 scale-100 opacity-100'
                    leaveTo='translate-y-full scale-95 opacity-0'
                >
                    <div
                        key={`${item.name} ${index}`}
                        className='flex items-center  rounded-md border-2  border-[#e2c574] bg-[#262626] p-3 text-white transition-all duration-200 hover:bg-[#e2c574]'
                    >
                        <a
                            href={`https://exchange.tally.org/#/swap?outputCurrency=${item.hash}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex flex-row items-center'
                        >
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className='h-7 w-7'
                            />

                            <div className='ml-3 flex flex-col'>
                                <span className='flex items-center justify-between text-xs uppercase text-blue-400'>
                                    <span>{item.name}</span>
                                    <span
                                        className={classNames(
                                            'ml-2 font-semibold',
                                            {
                                                'text-red-500':
                                                    item.percentage < 0,
                                                'text-green-500':
                                                    item.percentage > 0,
                                            }
                                        )}
                                    >
                                        {item.percentage}%
                                    </span>
                                </span>

                                <span className='mt-2 font-semibold'>
                                    ${item.price}
                                </span>
                            </div>
                        </a>
                    </div>
                </Transition.Child>
            ))}
        </Transition>
    );
};

export default MovingIcons;
