import React from 'react';

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[38%] trasnlate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>Resorts</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/"/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[38%] trasnlate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>Cruise</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1614690163836-5a20f0bf0ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/"/>
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[38%] trasnlate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white'>Excursion</h3>
                <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="/"/>
            </div>
        </div>
    );
};

export default Activities;
