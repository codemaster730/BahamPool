import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import TCCustomInput from './TCCustomInput';

const MakeAChallangeModal = ({ open, setOpen }) => {
    const [formData, setFormData] = useState({
        name: '',
        ticker: 0,
        projectOwner: '',
        chain: '',
        contractAddress: '',
        emailAddress: '',
        telegramGroup: '',
        avatarUrl: '',
        userExperience: '',
    });

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
                                <div className='flex items-center justify-between pb-4'>
                                    <h2 className='mx-auto text-base font-semibold'>
                                        Make a challenge
                                    </h2>

                                    <XIcon
                                        className='h-5 w-5 cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />
                                </div>

                                <div className='flex w-full justify-start'>
                                    <span className='mb-4 text-left text-lg'>
                                        Tokens disployed under scam tokens have
                                        been investigated to determine their
                                        status. We make contrat with communites
                                        and Project Owners as part of our
                                        investgation. Uncooperative owners and
                                        those that block or ignore our
                                        communications could result in a red
                                        flag. All measurs are token before
                                        publishing tokens. Complete and Apply
                                        for a review to remove a token from the
                                        list!
                                    </span>
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Name of Token'
                                            name='name'
                                            placeholder=''
                                            value={formData.name}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='flex w-full flex-col md:flex-row md:items-center md:space-x-4'>
                                        <div className='flex flex-col items-center space-y-3 md:w-1/3'>
                                            <TCCustomInput
                                                label='Ticker'
                                                name='ticker'
                                                placeholder=''
                                                value={formData.ticker}
                                                onChange={e =>
                                                    setFormData({
                                                        ...formData,
                                                        ticker: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className='space-y-3'>
                                            <TCCustomInput
                                                label='Project Owner'
                                                name='projectOwner'
                                                placeholder=''
                                                value={formData.projectOwner}
                                                onChange={e =>
                                                    setFormData({
                                                        ...formData,
                                                        projectOwner:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Chain/Network'
                                            name='chain'
                                            placeholder=''
                                            value={formData.chain}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    chain: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Contract Address'
                                            name='contractAddress'
                                            placeholder=''
                                            value={formData.contractAddress}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    contractAddress:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className='flex w-full items-center justify-start space-x-2 pb-4'>
                                    <span>
                                        Is this a scam tocken or a copycat
                                        Contract address?
                                    </span>
                                </div>

                                <div className='flex flex-col items-center md:flex-row md:space-x-10'>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Email Address'
                                            name='emailAddress'
                                            placeholder=''
                                            value={formData.emailAddress}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    emailAddress:
                                                        e.target.value,
                                                })
                                            }
                                            type='email'
                                        />
                                    </div>
                                    <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                        <TCCustomInput
                                            label='Telegram Group'
                                            name='telegramGroup'
                                            placeholder=''
                                            value={formData.telegramGroup}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    telegramGroup:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <TCCustomInput
                                        label='Avatar URL'
                                        name='avatarUrl'
                                        placeholder='https://'
                                        value={formData.avatarUrl}
                                        onChange={e =>
                                            setFormData({
                                                ...formData,
                                                avatarUrl: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className='flex w-full flex-col items-center justify-start space-y-4'>
                                    <label
                                        htmlFor='userExperience'
                                        className='block w-full text-left font-serif text-base font-medium text-white'
                                    >
                                        Your Experience
                                    </label>
                                    <textarea
                                        name='userExperience'
                                        id='userExperience'
                                        cols='30'
                                        rows='5'
                                        className='h-32 w-full rounded-sm bg-white p-4 text-[#708db7]'
                                    ></textarea>
                                </div>

                                <div className='grid grid-cols-1 items-center gap-y-3 pt-6 md:grid-cols-3'>
                                    <span className='md:ml-auto'>1 BNB</span>
                                    <button className='mx-auto h-11 w-fit self-center rounded-md bg-primary-brand px-12 text-white'>
                                        Report
                                    </button>
                                    <span className='text-left leading-5'>
                                        Your case will be reviewed. Check your
                                        emails for further instructions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default MakeAChallangeModal;
