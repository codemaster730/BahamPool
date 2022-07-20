import { BsFillInboxFill } from 'react-icons/bs';

export default function EmptyState({ message }) {
    return (
        <div className='py-4 text-center'>
            <BsFillInboxFill className='mx-auto h-12 w-12 text-center text-gray-500' />
            <h3 className='mt-2 font-comfortaa text-xl font-medium text-gray-900 md:text-3xl'>
                Nothing Found :({' '}
            </h3>
            <p className='mt-1 font-comfortaa text-sm text-gray-500'>
                {message}
            </p>
        </div>
    );
}
