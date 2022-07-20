import noticeImg from '../../assets/images/notfoundpage.png';

const NotFoundRoute = () => {
    return (
        <main className='h-screen bg-primary-sidebar pt-24'>
            <div className='flex justify-center'>
                <img
                    src={noticeImg}
                    alt='notice'
                    className='object-contain md:max-w-4xl'
                />
            </div>
        </main>
    );
};

export default NotFoundRoute;
