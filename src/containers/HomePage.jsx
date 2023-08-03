import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/shop')
    }
  return (
    <div>
        <ButtonComponent
            content={"SHOP"}
            handleClick={handleClick}
        ></ButtonComponent>
    </div>
  )
}

export default HomePage;