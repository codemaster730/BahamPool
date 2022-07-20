import { PencilIcon } from '@heroicons/react/solid';
import { debounce } from 'lodash';

const TPInput = ({
    label,
    type = 'text',
    placeholder = ' ',
    required,
    name,
    rightIcon,
    dispatch,
    actionType = 'updateFormData',
    index,
}) => {
    const handleChange = debounce(e => {
        dispatch({
            type: actionType,
            field: name,
            value: e.target.value,
            // if the index is not null or undefined, then we need to add the index as well
            index: index ?? null,
        });
    }, 500);

    return (
        <div className='group relative z-0 w-full'>
            <input
                type={type}
                name={name}
                className='peer block w-full appearance-none border-0 border-b-[1.5px] border-tallyPay-gray-lighter bg-transparent py-2.5 px-0 text-sm text-white focus:border-tallyPay-primaryText focus:outline-none focus:ring-0'
                placeholder={placeholder}
                required={Boolean(required)}
                onChange={handleChange}
            />
            <label
                htmlFor={name}
                className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-tallyPay-primaryText'
            >
                {label}
            </label>

            <div className='pointer-events-none absolute inset-y-0 right-2 flex items-center'>
                {rightIcon ? (
                    <span className='uppercase text-white'>{rightIcon}</span>
                ) : (
                    <PencilIcon className='h-4 w-4 text-gray-500 peer-focus:text-tallyPay-primaryText' />
                )}
            </div>
        </div>
    );
};

export default TPInput;
