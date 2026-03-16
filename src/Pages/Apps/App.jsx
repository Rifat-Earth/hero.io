import React from 'react';
import rating from "../../assets/icon-ratings.png"
import download from "../../assets/icon-downloads.png"
import { Link } from 'react-router';

const App = ({ app }) => {
    const { image, title, ratingAvg, downloads,id } = app
    return (
        <Link to ={`/appDetails/${id}`}>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img className='w-96 rounded-3xl p-4 object-cover'
                        src={image}
                        alt="App image" />
                </figure>
                <div className="card-body py-2">
                    <h2 className=""><span className='font-bold '></span> {title}</h2>
                    <div className="card-actions items-center flex justify-between">
                        <button className='btn gap-2 text-green-500'><img className='w-5 h-5' src={download} alt="" />{downloads}M</button>
                        <button className='btn gap-2 bg-amber-50 text-amber-600 '><img className='w-5 h-5' src={rating} alt="" />{ratingAvg}</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;