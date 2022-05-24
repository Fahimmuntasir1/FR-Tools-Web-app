import React, { useEffect, useState } from 'react';
import MyReviewCard from './MyReviewCard';
import './MyRevieMap.css'

const MyReviewMap = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="mt-24">
            <h1 className='text-center text-red-500 mb-11 font-bold text-2xl' >Review section </h1>
        <div className="cartss">
            

            {
                users?.map(user => <MyReviewCard
                    key={user._id}
                    user={user}

                ></MyReviewCard>)
            }
        </div>
        
        </div>
    );
};


export default MyReviewMap;