import { RadioGroup } from '@headlessui/react';
import { classNames } from '../../utils/classNames';

const ToleranceRadio = ({ tolerance, setTolerance, toleranceOptions }) => {
    return (
        <RadioGroup value={tolerance} onChange={setTolerance}>
            <RadioGroup.Label className='sr-only'>
                Choose a Slippage tolerance
            </RadioGroup.Label>
            <div className='flex justify-between space-x-4'>
                {toleranceOptions.map(option => (
                    <RadioGroup.Option
                        key={option.name}
                        value={option.value}
                        className={({ checked }) =>
                            classNames(
                                checked
                                    ? ' bg-[#1263f1] text-white '
                                    : ' bg-[#e4efff] text-[#1263f1]',
                                'flex h-10  cursor-pointer items-center rounded-lg px-6 font-semibold'
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

export default ToleranceRadio;
