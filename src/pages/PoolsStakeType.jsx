import { useParams } from 'react-router-dom';
import { CardsSection, LaunchpadContainer, OptionsHeader } from '../containers';

const PoolsStakeType = () => {
    const { stakeType } = useParams();

    return (
        <section className='container mx-auto max-w-5xl bg-primary-sidebar py-8 px-4 md:px-8'>
            <OptionsHeader />

            <CardsSection stakeType={stakeType} />

            <LaunchpadContainer />
        </section>
    );
};

export default PoolsStakeType;
