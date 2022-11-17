import React from 'react';
import avatar from '../../assets/jungkook.jpg'

const ExerciseActivity = () => {
    return (
        <div className='mt-10 bg-slate-300 p-4'>
            <div className="avatar flex justify-start items-start">
                <div className="w-24 rounded-full mr-5">
                    <img src={avatar} alt='' />
                </div>
                <div className='pt-5'>
                    <h3 className='text-xl font-bold'>Jeon Jungkook</h3>
                    <address>Seoul, South Korea</address>
                </div>
            </div>
            <div className='flex justify-between bg-white px-3 py-2 rounded-2xl mb-5'>
                <div>
                    <p className='text-2xl font-bold'>5.11</p>
                    <p>Height</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>72kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='text-2xl font-bold'>25yrs</p>
                    <p>Age</p>
                </div>
            </div>
            <p className='mb-5 font-bold'>Add A Break</p>
            <div className='bg-white px-3 py-2 rounded-2xl flex justify-between mb-8'>
                <button className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">10s</button>
                <button className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">20s</button>
                <button className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">30s</button>
                <button className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">40s</button>
                <button className="btn btn-sm rounded-full border-none bg-slate-300 focus:bg-accent focus:text-white text-black">50s</button>
            </div>
            <p className='mb-5 font-bold'>Exercise Details</p>
        </div>
    );
};

export default ExerciseActivity;