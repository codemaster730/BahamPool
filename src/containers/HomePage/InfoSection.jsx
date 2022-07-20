import { InfoItem } from '../../components';
import cat1 from '../../assets/images/category/1.png';
import cat2 from '../../assets/images/category/2.png';
import cat3 from '../../assets/images/category/3.png';
const InfoSection = () => {
    return (
        <div className='mx-4 mb-14 grid max-w-5xl grid-cols-2 gap-2 rounded-2xl bg-info_gradient p-6 sm:container sm:mx-auto sm:max-w-6xl md:grid-cols-3 md:gap-8'>
            <InfoItem img={cat1} title='Total Volume' value='$0' />
            <InfoItem img={cat2} title='Total Volume' value='$0' />
            <InfoItem img={cat3} title='Active Users' value='0' lastChild />
        </div>
    );
};

export default InfoSection;
