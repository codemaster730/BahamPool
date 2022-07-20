import { debounce } from 'lodash';

const TPPasswordInputs = ({ dispatch }) => {
    const handleChange = debounce(e => {
        dispatch({
            type: 'updateFormData',
            field: e.target.name,
            value: e.target.value,
        });
    }, 500);

    return (
        <>
            <div className='mb-6'>
                <input
                    type='password'
                    name='password'
                    id='password'
                    className='block w-full rounded-lg border border-tallyPay-gray-lighter bg-transparent p-2.5 text-sm text-white '
                    placeholder='Create password'
                    required
                    onChange={handleChange}
                />
            </div>
            <div className='mb-6'>
                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    className='block w-full rounded-lg border border-tallyPay-gray-lighter bg-transparent p-2.5 text-sm text-white '
                    placeholder='Re-Enter password'
                    required
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default TPPasswordInputs;
