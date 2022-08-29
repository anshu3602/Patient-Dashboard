import React from 'react'
import { chatData } from '../data/dummy';
import { Container } from '@mui/material';
import {container} from "../styles"

const SeeAllNotification = () => {
  return (
    <div>
        <Container maxWidth="md" sx={container}>
        <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        </div>
        </Container>


    </div>
  )
}

export default SeeAllNotification