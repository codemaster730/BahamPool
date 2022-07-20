import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';

import {
    GetDoxxedModal,
    WatchlistTokenModal,
    ReportScamModal,
    AdvertiseModal,
} from '..';

const TokenCheckerNav = ({ onTokenCheckPage }) => {
    const [advertiseOpen, setAdvertiseOpen] = useState(false);
    const [reportScamOpen, setReportScamOpen] = useState(false);
    const [watchlistTokenOpen, setWatchlistTokenOpen] = useState(false);
    const [doxxedOpen, setDoxxedOpen] = useState(false);

    return (
        <>
            <div
                className={classNames(
                    'mx-auto hidden items-center space-x-2 md:flex',
                    {
                        'md:hidden': !onTokenCheckPage,
                    }
                )}
            >
                <Link
                    to='contest'
                    className='flex items-center space-x-1 rounded-lg px-2 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black'
                >
                    <FaTrophy />
                    <span>Rifa</span>
                </Link>

                <button
                    className='flex items-center space-x-1 rounded-lg px-2 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black'
                    onClick={() => setAdvertiseOpen(true)}
                >
                    <span>Anunciar</span>
                    <BsStarFill />
                </button>

                <button
                    className='flex items-center space-x-1 rounded-lg px-2 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black'
                    onClick={() => setReportScamOpen(true)}
                >
                    <span>Reportar token de estafa</span>
                </button>

                <button
                    className='flex items-center space-x-1 rounded-lg px-2 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black'
                    onClick={() => setWatchlistTokenOpen(true)}
                >
                    <span>Fichas de lista de vigilancia</span>
                </button>

                <button
                    className='flex items-center space-x-1 rounded-lg px-2 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black'
                    onClick={() => setDoxxedOpen(true)}
                >
                    <span>Obtener Doxxed</span>
                </button>
            </div>

            <AdvertiseModal open={advertiseOpen} setOpen={setAdvertiseOpen} />
            <ReportScamModal
                open={reportScamOpen}
                setOpen={setReportScamOpen}
            />
            <WatchlistTokenModal
                open={watchlistTokenOpen}
                setOpen={setWatchlistTokenOpen}
            />

            <GetDoxxedModal open={doxxedOpen} setOpen={setDoxxedOpen} />
        </>
    );
};

export default TokenCheckerNav;
