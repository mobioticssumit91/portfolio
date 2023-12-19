'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import { userStore } from '../../../zustand/user'


export default function Card(props: any) {
    const updateUser = userStore((state: any) => state.updateUser)

    let  flim  = props.film;
    console.log(props)
    const [checked, setChecked] = useState(false);
    const handleChange = (e: any) => {
        console.log(e.target.value)
        setChecked(!checked);
        updateUser({title: e.target.value})
    };
    return (
    
            <div className='w-30' key={flim.title}> <img src={'https://image.tmdb.org/t/p/w500' + flim.poster_path} />
                <div className='text-blue-200'>
                    <div className="w-full">
                        <div className="flex items-center ps-3">
                            <input id="angular-checkbox" type="checkbox" checked={checked}
                                onChange={handleChange} value={flim.title} className="w-4 h-4 text-blue-600 bg-gray-100  rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 " />
                            <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 font-sans">{flim.title} </label>
                        </div>
                    </div>
                </div>
            </div>

    )

}
