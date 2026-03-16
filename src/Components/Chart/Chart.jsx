import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ ratings }) => {
    const data = [...ratings].reverse()
    return (
        <div className='py-5 bg-base-200 border-t-2 border-b-2 border-gray-200 mb-5 rounded-xl p-2'>
            <h1 className='text-2xl font-bold text-gray-700 py-6 px-4'>Ratings</h1>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} layout="vertical">
                    <XAxis type='number' axisLine={false} tickLine={false}></XAxis>
                    <YAxis dataKey='name' axisLine={false} tickLine={false} type="category" ></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="count" fill="#FF8811"></Bar>
                </BarChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Chart;