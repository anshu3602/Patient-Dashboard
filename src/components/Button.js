import React from 'react';
import {Link} from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({  bgColor, color, bgHoverColor, size, text, borderRadius, width}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <Link to = {`/${text}`} >
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    
    >
     {text}
    </button>
    </Link>
  );
};

export default Button;
