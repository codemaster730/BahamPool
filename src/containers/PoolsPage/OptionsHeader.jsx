import classNames from 'classnames';
import { useState } from 'react';
import { CustomSelect, StackedSwitch } from '../../components';

const options1 = [
    { id: 1, name: 'All', value: 'all' },
    { id: 2, name: 'APR', value: 'apr' },
    { id: 3, name: 'Total Staked', value: 'total' },
];

const options2 = [
    { id: 1, name: 'Max Stake IBT', value: 'max' },
    { id: 2, name: '500 IBT', value: '500' },
    { id: 3, name: 'Unlimited', value: 'unlimited' },
];

const OptionsHeader = () => {
    const [option1, setOption1] = useState(options1[0].value);
    const [option2, setOption2] = useState(options2[0].value);

    const [status, setStatus] = useState('active');
    return (
        <nav className='flex flex-col justify-between md:flex-row md:flex-wrap'>
            <div className='flex  items-center space-x-5'>
                <div className='flex justify-between space-x-1 rounded-lg bg-white  font-semibold'>
                    <button
                        className={classNames('px-4 py-2 ', {
                            'rounded-lg bg-primary-brand text-white':
                                status === 'active',
                        })}
                        onClick={() => setStatus('active')}
                    >
                        Active
                    </button>
                    <button
                        className={classNames('px-4 py-2 ', {
                            'rounded-lg bg-primary-brand text-white':
                                status === 'inactive',
                        })}
                        onClick={() => setStatus('inactive')}
                    >
                        Inactive
                    </button>
                </div>
                <div className='ml-auto flex items-center space-x-4 md:ml-0'>
                    <StackedSwitch />
                    <span className='leading-6 text-white'>Staked Only</span>
                </div>
            </div>

            <div className='mt-4 flex flex-col items-center space-x-2 md:mt-0 md:flex-row'>
                <div className='order-2 mt-4 flex w-full items-center justify-between gap-x-3 md:mt-0 md:w-fit'>
                    <div className=' w-1/2 md:w-36'>
                        <CustomSelect
                            options={options1}
                            selected={option1}
                            onChange={setOption1}
                        />
                    </div>
                    <div className=' w-1/2 md:w-40'>
                        <CustomSelect
                            options={options2}
                            selected={option2}
                            onChange={setOption2}
                        />
                    </div>
                </div>

                <div className='order-1 flex w-full items-center md:order-3 md:w-40'>
                    <input
                        type='text'
                        placeholder='Search Launchpool'
                        className='h-10 w-full rounded-lg border border-primary-dark bg-primary-brand p-0 px-4 text-sm text-white outline-none  placeholder:text-white'
                    />
                </div>
            </div>
        </nav>
    );
};

export default OptionsHeader;
