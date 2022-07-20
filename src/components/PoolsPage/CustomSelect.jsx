import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

// Prop Options will be an array like this,

// const people = [
//     { id: 1, name: 'All', value: 'all' },
//     { id: 2, name: 'APR', value: 'apr' },
//     { id: 3, name: 'Staked', value: 'staked' },
// ];

export default function CustomSelect({ options, selected, onChange }) {
    return (
        <Listbox value={selected} onChange={onChange}>
            {({ open }) => (
                <>
                    <div className='relative mt-1'>
                        <Listbox.Button
                            className={classNames(
                                'relative w-full cursor-default rounded-md bg-primary-brand py-2 pl-3 pr-10 text-left font-semibold text-white shadow-sm',
                                { 'rounded-b-none': open }
                            )}
                        >
                            <span className='block truncate'>
                                {
                                    options?.find(
                                        opt => opt?.value === selected
                                    )?.name
                                }
                            </span>
                            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                <ChevronDownIcon
                                    className='h-5 w-5 text-white'
                                    aria-hidden='true'
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='-translate-y-4 opacity-0 scale-95'
                            enterTo='translate-y-0 opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='translate-y-0 opacity-100 scale-100'
                            leaveTo='-translate-y-4 opacity-0 scale-95'
                        >
                            <Listbox.Options className='absolute z-50 max-h-60 w-full overflow-auto rounded-md rounded-t-none bg-primary-brand py-2 text-base text-white shadow-lg focus:outline-none sm:text-sm'>
                                {options.map(option => (
                                    <Listbox.Option
                                        key={option.id}
                                        className={({ active }) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 pl-3 pr-9 text-white transition',
                                                {
                                                    'text-primary-darkText':
                                                        active,
                                                }
                                            )
                                        }
                                        value={option.value}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        'block cursor-pointer truncate',
                                                        {
                                                            'font-semibold':
                                                                selected,
                                                        }
                                                    )}
                                                >
                                                    {option.name}
                                                </span>
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
