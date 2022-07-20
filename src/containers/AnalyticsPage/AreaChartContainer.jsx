import { useState } from 'react';
import { areaChartData } from '../../assets/data/chartData';
import { AreaChartComp } from '../../components';
import { DateTime } from 'luxon';

const AreaChartContainer = () => {
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
        // value will be on this format , 12/15/2021

        if (value) {
            // return date on this format Nov 10, 2021
            return DateTime.fromFormat(value, 'MM/dd/yyyy').toFormat(
                'MMM dd, yyyy'
            );
        }
        return null;
    };

    const [date, setDate] = useState(
        areaChartData[Math.floor(areaChartData?.length / 2)]?.date
    );
    const [value, setValue] = useState(
        areaChartData[Math.floor(areaChartData?.length / 2)]?.value
    );

    return (
        <div className='w-full bg-gradient-to-b from-primary-brand/5 to-primary-brand/70 p-4 md:p-6'>
            <div className='flex flex-col space-y-2'>
                <span className='block text-base font-semibold text-primary-dark'>
                    Liquidity
                </span>
                <span className='block align-middle text-2xl font-semibold text-white'>
                    {textFormatter(formatter(value))}
                </span>
                <span className='block align-middle font-normal text-primary-dark'>
                    {dateFormatter(date)}
                </span>
            </div>
            <div className='mt-4 h-64'>
                <AreaChartComp
                    data={areaChartData}
                    setDate={setDate}
                    setValue={setValue}
                />
            </div>
        </div>
    );
};

export default AreaChartContainer;
