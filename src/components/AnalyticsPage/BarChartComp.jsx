import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import millify from 'millify';
import { memo, useCallback } from 'react';
import { throttle } from 'lodash';
import ScaleLoader from 'react-spinners/ScaleLoader';

const BarChartComp = ({ data, setDate, setValue }) => {
    const getFormattedValue = throttle(
        useCallback(
            ({ payload, label, active }) => {
                if (active) {
                    setDate(label);
                    const data = payload[0].payload;
                    setValue(data.value);
                }
                return null;
            },
            [setDate, setValue]
        ),
        200
    );

    if (!data || !data.length) {
        return (
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-500/20'>
                <ScaleLoader
                    height={140}
                    margin={10}
                    width={15}
                    radius={5}
                    color={'#1dc872'}
                />
                <h2 className='mt-4 text-xl text-white'>
                    Loading Chart Data...
                </h2>
            </div>
        );
    }

    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <BarChart width={500} height={300} data={data}>
                <XAxis
                    dataKey='date'
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#fff' }}
                    tickFormatter={unixTime => {
                        const date = new Date(unixTime);
                        return date.getDate();
                    }}
                    tickCount={15}
                />
                <YAxis
                    dataKey='value'
                    axisLine={false}
                    tickLine={false}
                    orientation='right'
                    tick={{ fill: '#fff', fontSize: '12px' }}
                    tickFormatter={tick =>
                        `$${millify(tick, { precision: 2 })}`
                    }
                    type='number'
                    tickCount={6}
                />
                <Tooltip
                    wrapperClassName='invisible hidden'
                    content={getFormattedValue}
                />
                <Bar dataKey='value' fill='#1dc872' />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default memo(BarChartComp, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
});
