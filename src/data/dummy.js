import React from 'react';
import { AiOutlineCalendar,AiFillHome } from 'react-icons/ai';
import { FiShoppingBag,FiCreditCard } from 'react-icons/fi';
import {  BsCurrencyDollar,BsFillPersonFill } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine} from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';


export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Home',
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Profile',
        icon: <BsFillPersonFill />,
      },
      {
        name: 'Consultations',
        icon: <RiContactsLine />
      },
      {
        name: 'PatientHistory',
        icon: <IoMdContacts />,
      },
      {
        name: 'Prescription',
        icon: <IoMdContacts />
      },
      {
        name: 'HealthReport',
        icon: <RiContactsLine />,
      },
      {
        name: 'Calendar',
        icon: <AiOutlineCalendar />,
      },
      
    ],
  },
  
];




export const chatData = [

  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  
];



 

    


   

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <FiCreditCard />,
    title: '  Consultations',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];




