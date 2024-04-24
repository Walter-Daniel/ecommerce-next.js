'use client'

import { UserAuth } from '@/app/context/AuthProvider';
import React from 'react'

export const Profile = () => {
  const { user } = UserAuth();

  return (
    <div className="w-full md:w-4/12 md:mx-2">
        <div className="bg-white p-3 border-t-4 md:px-4 border-red-500 md:min-h-[90vh]">
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user?.displayName}</h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">{user?.email}</h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Hey there! I'm a 27-year-old programmer with a knack for turning lines of code into functional wonders. But when I'm not deep in the digital realm, you'll often find me with a paintbrush or pencil in hand, lost in the world of colors and shapes. I'm also a huge fan of binge-watching series, always on the lookout for the next captivating storyline to dive into. Join me on this journey where technology meets art, and let's explore the endless possibilities together!"
            </p>
            <ul
                className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>
                    </span>
                </li>
                <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
