import { useState } from 'react';
import { farmsData } from '../assets/data/farmsData';
import {
    FarmHeader,
    FarmOptions,
    FarmsContainer,
    LaunchpadContainer,
} from '../containers';

const FarmsPage = () => {
    const ITEMS_PER_PAGE = 10;
    const [currentItems, setCurrentItems] = useState(
        farmsData.slice(0, ITEMS_PER_PAGE)
    );
    const [filteredData, setFilteredData] = useState(farmsData);

    return (
        <main className='bg-intro_bg'>
            <FarmHeader />

            <section className='container mx-auto max-w-6xl py-6 px-4 md:px-8'>
                <FarmOptions
                    data={farmsData}
                    setCurrentItems={setCurrentItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    setFilteredData={setFilteredData}
                />
                <FarmsContainer
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                    itemsPerPage={ITEMS_PER_PAGE}
                    filteredData={filteredData}
                />
                <LaunchpadContainer />
            </section>
        </main>
    );
};

export default FarmsPage;
