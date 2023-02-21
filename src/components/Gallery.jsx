import React from 'react';

const Gallery = () => {
    return (
        <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className='grid sm:grid-cols-5 gap-4'>
                <div className='sm:col-span-3 col-span-2 row-span-2'>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/"/>
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/"/>
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1581859814481-bfd944e3122f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/"/>
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1512100254544-47340ba56b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="/"/>
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1605538108568-7f0d77a214c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="/"/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
