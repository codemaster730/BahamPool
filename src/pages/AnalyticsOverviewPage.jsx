import {
    AreaChartContainer,
    BarChartContainer,
    TopPoolsContainer,
} from '../containers';

const AnalyticsOverviewPage = () => {
    return (
        <div className='space-y-4'>
            <div className='flex flex-col justify-between md:flex-row md:items-center'>
                <h2 className='text-2xl font-semibold text-white'>
                    IBT Info & Analytics
                </h2>

                <div className='mt-6 flex w-full flex-col font-medium md:mt-0 md:w-fit md:flex-row md:items-center md:justify-between md:space-x-4'>
                    <div className='flex items-center justify-between space-x-1 text-sm text-white'>
                        <span className='text-primary-brand'>IBT Price:</span>
                        <span>$444.31</span>
                    </div>
                    <div className='flex items-center justify-between space-x-1 text-sm text-white'>
                        <span className='text-primary-brand'>
                            Transactions (24H):
                        </span>
                        <span>119 811</span>
                    </div>
                    <div className='flex items-center justify-between space-x-1 text-sm text-white'>
                        <span className='text-primary-brand'>Pairs:</span>
                        <span>1 261</span>
                    </div>
                    <div className='flex items-center justify-between space-x-1 text-sm text-white'>
                        <span className='text-primary-brand'>Fees (24H):</span>
                        <span>$320 028.124</span>
                    </div>
                </div>
            </div>

            <div className='flex w-full flex-col justify-between gap-4 pb-6 md:flex-row'>
                <div className='relative flex-1 overflow-hidden rounded-2xl bg-primary-brand/40 shadow-lg'>
                    <AreaChartContainer />
                </div>
                <div className='relative flex-1 overflow-hidden rounded-2xl bg-primary-brand/40 shadow-lg'>
                    <BarChartContainer />
                </div>
            </div>

            <div className='flex w-full flex-col'>
                <TopPoolsContainer />
            </div>
        </div>
    );
};

export default AnalyticsOverviewPage;
