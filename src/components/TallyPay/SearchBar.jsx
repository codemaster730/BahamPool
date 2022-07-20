import { Combobox } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { debounce } from 'lodash';

const SearchBar = ({ setSearchString }) => {
    const changeHandler = debounce(event => {
        setSearchString(event.target.value);
    }, 500);

    return (
        <div className='relative mt-1 rounded-md py-4 shadow-sm'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <span className='text-white sm:text-sm'>
                    <SearchIcon className='mr-4 h-5 w-5' />
                </span>
            </div>
            <Combobox.Input
                type='text'
                name='price'
                id='price'
                className='block w-full rounded-t-md border-gray-300 bg-[#565656] py-3 px-12 text-white focus:outline-none sm:text-sm'
                placeholder='Search Token Here'
                onChange={changeHandler}
            />
        </div>
    );
};

export default SearchBar;
