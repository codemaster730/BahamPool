import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
const TPChangeInheritorRadio = ({
    options,
    value,
    onChange,
    title = 'Change Inheritor wallet Address',
}) => {
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-sm font-medium text-tallyPay-primaryText'>
                    {title}
                </h2>
            </div>

            <RadioGroup value={value} onChange={onChange} className='mt-2'>
                <RadioGroup.Label className='sr-only'>
                    Choose a wallet
                </RadioGroup.Label>
                <div className='grid grid-cols-3 gap-3 sm:grid-cols-5 '>
                    {options?.map((option, index) => (
                        <div className='flex flex-col space-y-3' key={index}>
                            <p
                                className={classNames(
                                    'text-center ',
                                    option.name === value.name
                                        ? 'text-tallyPay-primaryText'
                                        : 'text-white/50'
                                )}
                            >
                                Wallet {index + 1}
                            </p>
                            <RadioGroup.Option
                                key={option.name}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked
                                            ? 'border-tallyPay-primaryText text-tallyPay-primaryText hover:bg-tallyPay-primaryText/50'
                                            : 'border-white/50 text-white/50 hover:bg-tallyPay-primaryText/30',
                                        'flex cursor-pointer items-center justify-center rounded-full border bg-transparent py-2 px-3 text-sm font-light sm:flex-1'
                                    )
                                }
                            >
                                <RadioGroup.Label as='p'>
                                    {option.value}
                                </RadioGroup.Label>
                            </RadioGroup.Option>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
};

export default TPChangeInheritorRadio;
