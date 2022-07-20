import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { HeaderSection, SliderBanner } from '../containers';

const PoolsPage = () => {
    const { stakeType } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!stakeType) {
            navigate('stake_IBT');
        }
    }, [stakeType, navigate]);

    return (
        <main className='bg-primary-sidebar'>
            <HeaderSection />
            <Outlet />
            <SliderBanner />
        </main>
    );
};

export default PoolsPage;
