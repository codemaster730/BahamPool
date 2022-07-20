import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import millify from 'millify';
import { memo, useCallback } from 'react';
import { throttle } from 'lodash';
import RingLoader from 'react-spinners/RingLoader';

const AreaChartComp = ({ data, setDate, setValue }) => {
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
                <RingLoader size={160} color={'#1dc872'} />
                <h2 className='mt-4 text-xl text-white'>
                    Loading Chart Data...
                </h2>
            </div>
        );
    }

    return (
        <ResponsiveContainer
            width={'100%'}
            height={'100%'}
            className='m-0 h-full w-full'
        >
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#0349b1' stopOpacity={1} />
                        <stop
                            offset='100%'
                            stopColor='#001c38'
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>

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
                    wrapperClassName='invisible'
                    content={getFormattedValue}
                />
                <Area
                    type='monotone'
                    dataKey='value'
                    stroke='#89c438'
                    fill='url(#gradient)'
                    strokeWidth={2}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default memo(AreaChartComp, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data;
});
