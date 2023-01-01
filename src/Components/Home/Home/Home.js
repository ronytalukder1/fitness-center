import React from 'react';
import Exercise from '../Exercise/Exercise';
import Blog from '../Blog/Blog'
import useTitle from '../../../Hooks/useTitle';
import tickImage from '../../../assets/images/tickIcon.png'
import bookImage from '../../../assets/images/bookIcon.png'
import bannerImage from '../../../assets/images/banner.png'

const Home = () => {
    useTitle("Home");
    return (
        <div className='flex  px-16 mt-16 mb-20 mx-auto ' style={{
            width: "1320px"
        }}>
            <div className='w-1/2'>
                <h2 className='flex items-center mb-5'><img className='w-[30px] mr-5' src={tickImage} alt="" /> দেশ সেরা আইটি ট্রেনিং ইনস্টিটিউটে</h2>
                <h1 className='font-bold mb-7'><span className='text-4xl text-black mb-5'>ক্যারিয়ার শুরু হোক</span> <br />
                    <span className='text-5xl text-error'>দক্ষতার আত্মবিশ্বাসে</span></h1>

                <p className='mb-5'>অভিজ্ঞ মেন্টর আর আপডেটেড কারিকুলাম নিয়ে ক্রিয়েটিভ আইটি ইনস্টিটিউট প্রস্তুত আপনার ক্যারিয়ার গড়ার অগ্রযাত্রায়। আমাদের ৩০টিরও বেশি ট্রেন্ডি কোর্স থেকে আজই বেছে নিন আপনার পছন্দের কোর্স।</p>
                <button className="btn btn-error text-white mr-5"><img className='mr-2' src={bookImage} alt="" /> ব্রাউজ কোর্স</button>
                <button className="btn btn-error text-white"><img className='mr-2' src={bookImage} alt="" /> জয়েন ফ্রি সেমিনার</button>
            </div>
            <div className='w-1/2'>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Home;