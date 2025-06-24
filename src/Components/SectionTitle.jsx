import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto my-8'>
            <h3 className='text-yellow-600 text-center mb-2 '>{subHeading}</h3>
            <h3 className='text-center uppercase text-3xl border-y-4 '>{heading}</h3>
        </div>
    );
};

export default SectionTitle;