import { Suspense } from 'react';
import Loading from './Loading';

const LazyLoad = ({ loadingMessage, children }) => {
    return (
        <Suspense
            fallback={
                <Loading message={loadingMessage ?? 'Loading Greatness...'} />
            }
        >
            {children}
        </Suspense>
    );
};

export default LazyLoad;
