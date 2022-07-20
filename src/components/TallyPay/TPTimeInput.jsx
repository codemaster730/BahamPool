import TimePicker from 'react-time-picker';

const TPTimeInput = ({
    dispatch,
    name,
    actionType = 'updateFormData',
    index,
}) => {
    return (
        <div className='flex items-center space-x-4'>
            <TimePicker
                value='12:00'
                className='se block w-full rounded-full border border-transparent bg-[#2F3538] p-2 text-center text-sm text-white focus:border-tallyPay-primaryText focus:bg-transparent focus:outline-none'
                amPmAriaLabel='Select AM/PM'
                clearIcon={null}
                clockIcon={null}
                disableClock
                name={name}
                onChange={e =>
                    dispatch({
                        type: actionType,
                        field: name,
                        value: e,
                        index: index ?? null,
                    })
                }
            />
        </div>
    );
};

export default TPTimeInput;
