const LaunchpadContainer = () => {
    return (
        <div className='container mx-auto max-w-6xl px-3 py-20 md:px-6'>
            <div className='flex max-w-xl flex-col space-y-4 text-white'>
                <h1 className='pb-4 font-comfortaa text-4xl font-semibold'>
                    IBT Launchpad
                </h1>
                <p className='font-normal leading-7 text-[#d3d3d3]'>
                    Looking to sell an asset as a NFT?
                    <br />
                    Are you looking for funding for a project (Film, media or a
                    business)?
                    <br />
                    <br />
                    <span>
                        Apply to launch on IBT NFT Launchpad and reach
                        investors
                    </span>
                </p>

                {/* <a
                    href='https://forms.gle/z1LRTLbesKuC7RYv8'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex h-12 max-w-fit items-center rounded-lg bg-primary-brand px-6 text-white'
                >
                    Apply to Launch
                </a> */}
            </div>
        </div>
    );
};

export default LaunchpadContainer;
