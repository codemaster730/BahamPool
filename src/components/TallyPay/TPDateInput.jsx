import { debounce } from 'lodash';

const TPDateInput = ({ dispatch, index }) => {
    const changeHandler = debounce(e => {
        dispatch({
            type: 'updateReleaseDate',
            field: e.target.name,
            value: e.target.value,
            index: index ?? null,
        });
    }, 1000);

    return (
        <div className='flex items-center space-x-4'>
            <input
                className='block w-full rounded-full border border-transparent bg-[#2F3538] p-2 text-center text-sm text-white focus:border-tallyPay-primaryText focus:bg-transparent focus:outline-none '
                placeholder='Day'
                required
                name='day'
                min={1}
                max={31}
                type='number'
                inputMode='numeric'
                onChange={changeHandler}
            />
            <input
                className='block w-full rounded-full border border-transparent bg-[#2F3538] p-2 text-center text-sm text-white focus:border-tallyPay-primaryText focus:bg-transparent focus:outline-none '
                placeholder='Month'
                required
                name='month'
                min={1}
                max={12}
                type='number'
                inputMode='numeric'
                onChange={changeHandler}
            />
            <input
                className='block w-full rounded-full border border-transparent bg-[#2F3538] p-2 text-center text-sm text-white focus:border-tallyPay-primaryText focus:bg-transparent focus:outline-none'
                placeholder='Year'
                required
                name='year'
                inputMode='numeric'
                type='number'
                onChange={changeHandler}
            />
        </div>
    );
};

export default TPDateInput;
