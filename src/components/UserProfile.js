import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { FiShoppingBag, FiEdit, FiPieChart, FiCreditCard } from 'react-icons/fi';
import {BsFillPersonFill} from 'react-icons/bs'

const UserProfile = () => {
  const { currentColor,initialState,setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          onClick={() => setIsClicked(initialState)}
        ><MdOutlineCancel /></button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Anshu </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> Patient 
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> ID- 836468 </p>
        </div>
      </div>
      <div>

       
          
          <div  className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
           
            <Button
              color="white"
              bgColor="#01379B"
              text="Profile"
              borderRadius="10px"
              width="full"
              
            >
  
            </Button>
            <Button
              color="white"
              bgColor="#01379B"
              text="Consultations"
              borderRadius="10px"
              width="full"
            >
            <FiCreditCard />
            </Button>
           
          
      
          </div>
         
          
   
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor="#01379B"
          text="Logout"
          borderRadius="10px"
          width="full"

        />
      </div>
    </div >

      );
};

export default UserProfile
