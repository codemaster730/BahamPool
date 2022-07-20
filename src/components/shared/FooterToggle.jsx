import { Disclosure, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FooterToggle = ({ title, items }) => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768 ? true : false
    );

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 768);
        });
    }, []);

    return (
        <Disclosure defaultOpen={!isMobile}>
            <Disclosure.Button
                className='cursor-pointer text-base font-semibold text-white'
                as='h4'
                aria-label={`${title} toggle`}
            >
                {title}
            </Disclosure.Button>
            <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform -translate-y-2 opacity-0'
                enterTo='transform translate-y-0 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform translate-y-0 opacity-100'
                leaveTo='transform -translate-y-2 opacity-0'
            >
                <Disclosure.Panel className='mt-2 text-gray-500'>
                    {items &&
                        items.length > 0 &&
                        items.map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center py-1 text-xs font-bold text-[#c3c3c3] hover:text-[#c3c3c3]/60'
                            >
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {item.title}
                                    </a>
                                ) : (
                                    <Link to={item.href}>{item.title}</Link>
                                )}
                            </div>
                        ))}
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    );
};

export default FooterToggle;
