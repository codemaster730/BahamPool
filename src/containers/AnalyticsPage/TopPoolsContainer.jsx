import { useState } from 'react';
import { topPools } from '../../assets/data/analyticsData';
import { TopPoolCard, PaginateComponent } from '../../components';

const TopPoolsContainer = () => {
    const ITEMS_PER_PAGE = 10;

    // first 10 items of topPools
    const [currentItems, setCurrentItems] = useState(
        topPools.slice(0, ITEMS_PER_PAGE)
    );

    return (
        <>
            <h1 className='text-2xl font-semibold text-white'>Top Pools</h1>

            <div className='grid grid-cols-[1fr_80px] items-center gap-4 p-6 text-xs font-semibold text-[#708db7] md:grid-cols-analytics'>
                <span className='hidden text-white md:block'>#</span>
                <span className='text-white'>Pool</span>
                <span>Volume 24H</span>
                <span className='hidden md:block'>Volume 7D</span>
                <span className='hidden md:block'>LP reward fees 24H</span>
                <span className='hidden md:block'>LP reward APR</span>
                <span className='hidden md:block'>Liquidity</span>
            </div>

            <div className='overflow-hidden rounded-2xl bg-white'>
                {currentItems.map(item => (
                    <TopPoolCard key={item.id} item={item} />
                ))}
            </div>

            <PaginateComponent
                itemsPerPage={ITEMS_PER_PAGE}
                setCurrentItems={setCurrentItems}
                dataSets={topPools}
            />
        </>
    );
};

export default TopPoolsContainer;
