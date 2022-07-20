import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

import TCCustomSelect from './TCCustomSelect';
import TCCustomInput from './TCCustomInput';
import DatePicker from 'react-datepicker';

const pages = [
    { id: 1, name: 'Home Page', value: 'home' },
    { id: 2, name: 'Staking Page', value: 'staking' },
    { id: 3, name: 'Swap Page', value: 'swap' },
    { id: 4, name: 'Farm Page', value: 'farm' },
    { id: 5, name: 'Token Checker Page', value: 'tokenChecker' },
    { id: 6, name: 'Liquidity Page', value: 'liquidity' },
];

const adTypes = [
    { id: 1, name: 'Banner', value: 'banner' },
    { id: 2, name: 'Ad Box', value: 'adBox' },
];

export default function AdvertiseModal({ open, setOpen }) {
    const [page, setPage] = useState(pages[0].value);
    const [adType, setAdType] = useState(adTypes[0].value);
    const [url, setUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                className='fixed inset-0 z-50 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:h-screen sm:align-middle'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='relative inline-block w-full max-w-4xl transform overflow-hidden rounded-2xl border border-white bg-black align-bottom shadow-xl transition-all sm:my-8 sm:align-middle'>
                            <div className='flex flex-col space-y-2 bg-black p-4 text-white md:p-8'>
                                <div className='flex flex-col items-center justify-between pb-4 md:flex-row'>
                                    <div className='flex w-44 flex-col rounded-lg bg-primary-brand py-1 font-semibold'>
                                        <span className='text-red-600'>
                                            Warning Box
                                        </span>
                                        <span> If unavailable space</span>
                                    </div>
                                    <h2 className='text-base font-semibold md:pr-32'>
                                        Advertise on IBT
                                    </h2>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomSelect
                                        options={pages}
                                        selected={page}
                                        onChange={e => setPage(e.target.value)}
                                        label='1. Which page on Exchange?'
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomSelect
                                        options={adTypes}
                                        selected={adType}
                                        onChange={e =>
                                            setAdType(e.target.value)
                                        }
                                        label='2. Which ad Exchange?'
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomInput
                                        label='3. Url Link for your Ad'
                                        name='url'
                                        placeholder='https://'
                                        value={url}
                                        onChange={e => setUrl(e.target.value)}
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomInput
                                        label='4. File Upload Path'
                                        name='imageUrl'
                                        placeholder='https://'
                                        value={imageUrl}
                                        onChange={e =>
                                            setImageUrl(e.target.value)
                                        }
                                    />
                                </div>

                                <div className='flex flex-col items-start justify-start space-y-1'>
                                    <span>
                                        Upload banner dimensions(000x000)
                                    </span>
                                    <span>Upload Ad dimensions(00x00)</span>
                                </div>

                                <div className='flex w-full flex-col items-start justify-start space-y-4'>
                                    <span className='block w-full text-left font-serif text-base font-medium text-white'>
                                        5. How many days?
                                    </span>
                                    <div className='flex w-full items-center space-x-4'>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={setStartDate}
                                            className='mt-1 block w-full rounded-md border border-primary-brand bg-black px-4 py-3 text-base font-semibold text-[#708db7] focus:border-white focus:outline-none'
                                        />

                                        <span className='text-2xl text-[#708db7]'>
                                            ~
                                        </span>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={setEndDate}
                                            minDate={startDate}
                                            className='mt-1 block w-full rounded-md border border-primary-brand bg-black px-4 py-3 text-base font-semibold text-[#708db7] focus:border-white focus:outline-none'
                                        />
                                    </div>
                                </div>

                                <button className='mt-4 h-11 w-fit self-center rounded-md bg-primary-brand px-12 text-white'>
                                    Report
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
