import { RadioGroup } from '@headlessui/react';
import { classNames } from '../../utils/classNames';

const RadioGroupComp = ({ type, setType, types }) => {
    return (
        <RadioGroup value={type} onChange={setType} className='mt-2'>
            <RadioGroup.Label className='sr-only'>
                Choose a type
            </RadioGroup.Label>
            <div className='flex space-x-6'>
                {types.map(option => (
                    <RadioGroup.Option
                        key={option.name}
                        value={option.value}
                        className={({ checked }) =>
                            classNames(
                                checked
                                    ? ' bg-primary-brand text-white'
                                    : ' text-white ',
                                'flex cursor-pointer items-center justify-center rounded-lg py-1 px-[0.5rem] text-sm font-semibold hover:text-[#646464] focus:text-[#646464] sm:flex-1'
                            )
                        }
                    >
                        <RadioGroup.Label as='p'>
                            {option.name}
                        </RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
};

export default RadioGroupComp;
