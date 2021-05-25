import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import *as TiIcons from 'react-icons/ti';
import *as MdIcons from 'react-icons/md';
import *as BsIcons from 'react-icons/bs'
import *as FaIcons from "react-icons/fa";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
      title: 'Todo',
        path: '/todo',
        icon: <FaIcons.FaTasks/>,
        cName: 'nav-text'

    },
    {
        title: 'Weather',
        path: '/weather',
        icon: <TiIcons.TiWeatherPartlySunny />,
        cName: 'nav-text'
    },
    {
        title: 'Timer',
        path: '/timer',
        icon: <MdIcons.MdTimer />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <BsIcons.BsCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Memories',
        path: '/memories',
        icon: <BiIcons.BiPhotoAlbum />,
        cName: 'nav-text'
    },

];