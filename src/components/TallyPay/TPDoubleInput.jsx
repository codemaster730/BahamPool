import { PencilIcon } from '@heroicons/react/solid';
import { debounce } from 'lodash';
import React from 'react';

const TPDoubleInput = ({
    label,
    type = 'text',
    placeholder = ' ',
    required,
    fee,
    name,
    rightIcon,
    bottomLabel,
    bottomRightIcon,
    bottomName,
    bottomPlaceholder = ' ',
    bottomType = 'text',
    dispatch,
    index,
    actionType = 'updateInheritor',
}) => {
    const topChangeHandler = debounce(e => {
        if (index === undefined || index === null) {
            return dispatch({
                type: 'updateFormData',
                field: name,
                value: e.target.value,
            });
        } else {
            return dispatch({
                type: actionType,
                index,
                field: name,
                value: e.target.value,
            });
        }
    }, 500);

    const bottomChangeHandler = debounce(e => {
        if (index === undefined || index === null) {
            return dispatch({
                type: 'updateFormData',
                field: bottomName,
                value: e.target.value,
            });
        } else {
            return dispatch({
                type: actionType,
                index,
                field: bottomName,
                value: e.target.value,
            });
        }
    }, 500);

    return (
        <>
            <div className='group relative z-0 w-full'>
                <input
                    type={type}
                    name={name}
                    className='peer block w-full appearance-none border-0 border-b-[1.5px] border-tallyPay-gray-lighter bg-transparent py-2.5 px-0 text-sm text-white focus:border-tallyPay-primaryText focus:outline-none focus:ring-0'
                    placeholder={placeholder}
                    required={Boolean(required)}
                    onChange={topChangeHandler}
                />
                <label
                    htmlFor={name}
                    className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-tallyPay-primaryText'
                >
                    {label}
                </label>

                {fee && (
                    <div className='absolute inset-y-0 right-20 z-20 flex items-center'>
                        <span className=' mr-2 rounded-full bg-[#83BD33]/30 px-2.5 py-0.5 text-xs font-semibold text-white'>
                            {fee}%
                        </span>
                    </div>
                )}

                <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center'>
                    {rightIcon ? (
                        <span className='uppercase text-white'>
                            {rightIcon}
                        </span>
                    ) : (
                        <PencilIcon className='h-4 w-4 text-gray-500 peer-focus:text-tallyPay-primaryText' />
                    )}
                </div>
            </div>
            <div className='group relative z-0 mb-4 w-full'>
                <input
                    type={bottomType}
                    name={bottomName}
                    className='peer block w-full appearance-none  bg-transparent py-2.5 px-0 text-sm text-white focus:border-tallyPay-primaryText focus:outline-none focus:ring-0'
                    placeholder={bottomPlaceholder}
                    required={Boolean(required)}
                    onChange={bottomChangeHandler}
                />
                <label
                    htmlFor={bottomName}
                    className='absolute top-3 -z-10 origin-[0] translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-tallyPay-primaryText'
                >
                    {bottomLabel}
                </label>

                <div className='pointer-events-none absolute inset-y-0 right-2 z-10 flex items-center'>
                    {bottomRightIcon ? (
                        <span className='uppercase text-white'>
                            {bottomRightIcon}
                        </span>
                    ) : (
                        <PencilIcon className='h-4 w-4 text-gray-500 peer-focus:text-tallyPay-primaryText' />
                    )}
                </div>
            </div>
        </>
    );
};

export default TPDoubleInput;
