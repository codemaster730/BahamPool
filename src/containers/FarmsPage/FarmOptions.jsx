import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CustomSelect, StackedSwitch } from '../../components';
import { debounce } from 'lodash';

const options1 = [
    { id: 1, name: 'All', value: 'all' },
    { id: 2, name: 'APR', value: 'apr' },
    { id: 3, name: 'Liquidity', value: 'liquidity' },
    { id: 4, name: 'Stable', value: 'stable' },
];

const FarmOptions = ({
    data,
    setCurrentItems,
    itemsPerPage,
    setFilteredData,
}) => {
    const [option1, setOption1] = useState(options1[0].value);
    const [searchValue, setSearchValue] = useState('');

    const filterBy = debounce(() => {
        const filteredData = data.filter(item => {
            return (
                item.firstToken
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                item.secondToken
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            );
        });

        setFilteredData(filteredData);
        setCurrentItems(filteredData.slice(0, itemsPerPage));
    }, 500);

    useEffect(() => {
        filterBy();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    const [status, setStatus] = useState('live');
    return (
        <div className='flex flex-col justify-between md:flex-row'>
            <div className='flex items-center justify-between md:space-x-5'>
                <div className='flex space-x-1 rounded-lg bg-white font-semibold'>
                    <button
                        className={classNames('px-4 py-2 font-semibold ', {
                            'rounded-lg bg-primary-brand text-white':
                                status === 'live',
                        })}
                        onClick={() => setStatus('live')}
                    >
                        Live
                    </button>
                    <button
                        className={classNames('px-4 py-2 font-semibold ', {
                            'rounded-lg bg-primary-brand text-white':
                                status === 'archive',
                        })}
                        onClick={() => setStatus('archive')}
                    >
                        Archive
                    </button>
                </div>
                <div className='flex items-center space-x-4'>
                    <StackedSwitch />
                    <span className='leading-6 text-white'>Active Farms</span>
                </div>
            </div>

            <div className='flex flex-col items-center space-x-2 md:flex-row'>
                <div className=' order-2 mt-4 flex w-full items-center md:order-1 md:mt-0 md:w-40'>
                    <input
                        type='text'
                        placeholder='Search Farms'
                        className='h-10 w-full rounded-lg border border-primary-dark bg-primary-brand p-0 px-4 text-sm text-white outline-none  placeholder:text-white'
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
                <div className='order-1 mt-4 flex w-full items-center justify-between md:mt-0 md:w-fit'>
                    <div className=' w-full md:w-36'>
                        <CustomSelect
                            options={options1}
                            selected={option1}
                            onChange={setOption1}
                        />
                    </div>
                    <div className='flex w-full items-center justify-end md:ml-0 md:w-40 md:justify-center'>
                        <button
                            className='flex h-10 items-center justify-center rounded-lg bg-[#1dc872] px-4 font-semibold text-white disabled:cursor-not-allowed disabled:border disabled:border-primary-brand/80 disabled:bg-primary-brand/80'
                            disabled
                        >
                            Harvest All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmOptions;
