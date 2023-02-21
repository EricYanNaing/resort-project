import React from 'react';

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80" alt="/" />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi blanditiis cupiditate deserunt, dicta ducimus ea enim error est fuga incidunt maiores minima, natus necessitatibus sapiente tempore vel vero voluptatem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
