import classNames from 'classnames';
import category1 from '../../assets/images/category/1.png';

const InfoItem = ({ img, title, value, lastChild }) => {
    return (
        <div
            className={classNames(
                'relative flex flex-col items-center justify-center space-y-3 px-4',
                {
                    ' border-r border-[#c8d4e6]': !lastChild,
                }
            )}
        >
            <img src={img || category1} alt={title} className='h-12 w-12' />
            <h4 className='font-serif font-normal'>{title}</h4>
            <p>{value}</p>
        </div>
    );
};

export default InfoItem;
