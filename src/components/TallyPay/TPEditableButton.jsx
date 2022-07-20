import { useRef, useState } from 'react';
import { PencilIcon } from '@heroicons/react/solid';
import { debounce } from 'lodash';
// import { debounce } from 'lodash';

const TPEditableButton = ({
    type,
    name,
    placeholder,
    required,
    dispatch,
    index,
    showTitle = true,
    actionType = 'updateOtherInheritors',
}) => {
    const [editing, setEditing] = useState(false);
    const ref = useRef(null);

    const handleChange = debounce(e => {
        dispatch({
            type: actionType,
            index,
            value: e.target.value,
        });
    }, 500);

    return (
        <div className='flex flex-col'>
            {showTitle && (
                <p className='my-4 text-sm text-tallyPay-gray-lighter'>
                    Wallet {index + 1}
                </p>
            )}

            <div className='group relative z-0 w-full'>
                <input
                    type={type}
                    name={name}
                    className='block w-full appearance-none rounded-full border border-tallyPay-primaryText bg-transparent py-2.5 px-4 text-sm text-white focus:border-tallyPay-primaryText focus:outline-none focus:ring-0'
                    placeholder={placeholder}
                    required={Boolean(required)}
                    onChange={handleChange}
                    readOnly={!editing}
                    ref={ref}
                    onBlur={() => setEditing(false)}
                    defaultValue={placeholder}
                />

                <button
                    className='absolute inset-y-0 right-4 flex cursor-pointer items-center'
                    onClick={() => {
                        setEditing(!editing);
                        ref.current.focus();
                        ref.current.select();
                    }}
                    type='button'
                >
                    <PencilIcon className='h-4 w-4 text-tallyPay-primaryText hover:text-tallyPay-primaryText_light ' />
                </button>
            </div>
        </div>
    );
};

export default TPEditableButton;
