import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../../Pages/Home/Home';
import Apps from '../../Pages/Apps/Apps';
import Installation from '../../Pages/Installation/Installation';
import axios from 'axios';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("/app.json")
                    const data = await res.json()
                    const sliceData = data.slice(0, 8)
                    return sliceData
                },
                Component: Home
            },
            {
                path: 'apps',
                loader: async () => {
                const res  = await axios.get("/app.json")
                return res.data          
                },
                Component: Apps
            },
            {
                path: "installation",
                Component: Installation
            }
        ]
    },
]);