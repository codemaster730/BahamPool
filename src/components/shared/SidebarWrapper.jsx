import { useState } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import { MdMore } from 'react-icons/md';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { FaTelegramPlane, FaTwitter, FaInstagram } from 'react-icons/fa';

import { moreNavigation, navigation, aboutUs } from '../../assets/data/sidebarData';
import { SidebarMobile, Navbar, Footer } from '..';

import logo1 from '../../assets/images/btally.png';
import logo3 from '../../assets/images/logo3.png';

const SidebarWrapper = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [simpleAppbarOpen, setSimpleAppbarOpen] = useState(false);

    return (
        <>
            <SidebarMobile
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className='relative hidden md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col'>
                <div className='sidebarScroll flex flex-grow flex-col overflow-y-auto border-r border-primary-sidebar bg-primary-sidebar pt-5 text-white'>
                    <div className='sticky mb-4 px-6 transition-all duration-200'>
                        <Link to='/' className='flex items-center'>
                            <img
                                src={logo1}
                                alt='mobile logo'
                                className='h-10 w-10'
                            />
                            <img
                                src={logo3}
                                alt='tally ho logo'
                                className='ml-2 hidden w-32 md:block'
                            />
                        </Link>
                    </div>
                    <div className='mt-5 flex flex-grow flex-col'>
                        <nav className='flex-1 space-y-2 overflow-y-auto px-4 pb-4'>
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className='group flex h-12 w-full items-center justify-between rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'>
                                            <span className='flex items-center font-semibold'>
                                                <MdMore className='mr-3 h-5 w-5 rotate-180 text-white' />
                                                <span>Sobre nosotras</span>
                                            </span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open
                                                        ? 'rotate-180 transform'
                                                        : ''
                                                } h-5 w-5`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            show={open}
                                            enter='transition ease-out duration-300'
                                            enterFrom='opacity-0 transform scale-95'
                                            enterTo='opacity-100 transform scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='opacity-100 transform scale-100'
                                            leaveTo='opacity-0 transform scale-95'
                                        >
                                            <Disclosure.Panel className='flex flex-col items-center border-t border-gray-200/10 px-4 pt-4 pb-2 text-sm text-gray-500'>
                                                {aboutUs.map(
                                                    (item, index) => (
                                                        <Link
                                                            to={item.href}
                                                            key={index}
                                                            className='group flex w-full items-center rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )
                                                )}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            {navigation.map(item => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        classNames(
                                            isActive
                                                ? 'bg-[#444444] text-white'
                                                : 'text-white hover:bg-[#444444] hover:text-[#646464]',
                                            'group flex h-12 items-center rounded-lg py-2 px-3 text-sm font-medium transition-colors duration-300'
                                        )
                                    }
                                    end
                                >
                                    <>
                                        {item.icon && (
                                            <item.icon
                                                className='mr-3 h-5 w-5 flex-shrink-0 fill-white text-white'
                                                aria-hidden='true'
                                            />
                                        )}

                                        {item.image && (
                                            <img
                                                src={item.image}
                                                alt='icon'
                                                className='mr-2 h-6 w-6 object-cover'
                                            />
                                        )}
                                        <span>{item.name}</span>

                                        {item.badge && (
                                            <span className=' ml-auto inline-flex items-center justify-center rounded-2xl bg-primary-brand px-2 py-[2px] text-[8px] font-semibold leading-3 text-primary-dark'>
                                                {item.badge}
                                            </span>
                                        )}
                                    </>
                                </NavLink>
                            ))}

                            {/* <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className='group flex h-12 w-full items-center justify-between rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'>
                                            <span className='flex items-center font-semibold'>
                                                <MdMore className='mr-3 h-5 w-5 rotate-180 text-white' />
                                                <span>More</span>
                                            </span>
                                            <ChevronDownIcon
                                                className={`${
                                                    open
                                                        ? 'rotate-180 transform'
                                                        : ''
                                                } h-5 w-5`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            show={open}
                                            enter='transition ease-out duration-300'
                                            enterFrom='opacity-0 transform scale-95'
                                            enterTo='opacity-100 transform scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='opacity-100 transform scale-100'
                                            leaveTo='opacity-0 transform scale-95'
                                        >
                                            <Disclosure.Panel className='flex flex-col items-center border-t border-gray-200/10 px-4 pt-4 pb-2 text-sm text-gray-500'>
                                                {moreNavigation.map(
                                                    (item, index) => (
                                                        <Link
                                                            to={item.href}
                                                            key={index}
                                                            className='group flex w-full items-center rounded-lg py-2 px-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#444444] hover:text-[#646464]'
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )
                                                )}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure> */}
                        </nav>
                    </div>
                </div>
            </div>
            <div className='md:pl-56'>
                <div className='flex flex-col'>
                    <Navbar setSidebarOpen={setSidebarOpen} />

                    {children}

                    <Footer />
                </div>
            </div>

            {/* Simple Sidebar on Right side */}
            <div
                className={classNames(
                    'fixed right-0 top-20 z-50 h-14 w-6 overflow-hidden rounded-l-xl bg-[#1a1818] transition-all duration-300',
                    { 'h-40 w-64': simpleAppbarOpen }
                )}
            >
                <div className='mb-1 grid h-6 w-6 cursor-pointer place-items-center rounded-sm bg-[#e7cd86]'>
                    {simpleAppbarOpen ? (
                        <MinusIcon
                            className='h-5 w-5 text-black'
                            aria-hidden='true'
                            onClick={() => setSimpleAppbarOpen(false)}
                        />
                    ) : (
                        <PlusIcon
                            className='h-5 w-5 text-black'
                            aria-hidden='true'
                            onClick={() => setSimpleAppbarOpen(true)}
                        />
                    )}
                </div>

                <div
                    className={classNames(
                        'mb-3 w-full bg-[#e7cd86] px-2  text-center text-white',
                        {
                            hidden: !simpleAppbarOpen,
                        }
                    )}
                >
                    <span>Join us!</span>
                </div>

                <div
                    className={classNames(
                        'mt-4 flex w-full items-center justify-center space-x-3',
                        {
                            hidden: !simpleAppbarOpen,
                        }
                    )}
                >
                    
                    
                    
                </div>
            </div>
        </>
    );
};

export default SidebarWrapper;
