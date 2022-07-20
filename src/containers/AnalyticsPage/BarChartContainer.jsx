import { DateTime } from 'luxon';
import { useState } from 'react';
import { barChartData } from '../../assets/data/chartData';
import { BarChartComp } from '../../components';

const BarChartContainer = () => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format;

    const textFormatter = value => {
        if (value) {
            const formattedValue = value.toString().replace(/,/g, ' ');
            return formattedValue;
        }
        return null;
    };

    const dateFormatter = value => {
        if (value) {
            return DateTime.fromFormat(value, 'MM/dd/yyyy').toFormat(
                'MMM dd, yyyy'
            );
        }
        return null;
    };

    const [date, setDate] = useState(
        barChartData[Math.floor(barChartData?.length / 2)]?.date
    );
    const [value, setValue] = useState(
        barChartData[Math.floor(barChartData?.length / 2)]?.value
    );
    return (
        <div className='h-full w-full bg-gradient-to-b from-primary-brand/5 to-primary-brand/70 p-4 md:p-6'>
            <span className='block text-base font-semibold text-primary-dark'>
                24H Volume
            </span>
            <span className='block align-middle text-2xl font-semibold text-white'>
                {textFormatter(formatter(value))}
            </span>
            <span className='block align-middle font-normal text-primary-dark'>
                {dateFormatter(date)}
            </span>
            <div className='mt-4 h-64'>
                <BarChartComp
                    data={barChartData}
                    setDate={setDate}
                    setValue={setValue}
                />
            </div>
        </div>
    );
};

export default BarChartContainer;
