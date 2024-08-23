import React, { useState } from "react";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import logo from "../assets/logo.svg";
import cartIcon from "../assets/icon-cart.svg";
import avatarImg from "../assets/image-avatar.png";
import smallImg1 from "../assets/image-product-1-thumbnail.jpg";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Navbar = ({ price, qty, setQty }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const fixedPrice = price.toFixed(2);
  const totalPriceFixed = (fixedPrice * qty).toFixed(2);

  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  const removeItem = () => {
    setQty(0);
  };

  const items = [
    { label: 'Collections' },
    { label: 'Men' },
    { label: 'Women' },
    { label: 'About' },
    { label: 'Contact' }
  ];

  const start = (
    <>
      <img src={logo} alt="sneakers-logo" className="w-24" />
      <PanelMenu  model={items} className={`md:hidden ${isMenuVisible ? 'block' : 'hidden'} absolute top-16 left-0 w-64 bg-white `} />
    </>
  );

  const end = (
    <div className="flex items-center">
      <Button icon="pi pi-shopping-cart" className="p-button-text p-button-plain relative mr-4" onClick={toggleCart}>
        {qty > 0 && (
          <span className="absolute top-0 right-0 p-badge p-badge-danger p-badge-lg">{qty}</span>
        )}
      </Button>
      <img src={avatarImg} alt="avatar" className="w-8 rounded-full" />
    </div>
  );

  return (
    <>
      <Menubar model={items} start={start} end={end} className="bg-white shadow-md p-4" />

      <Dialog
      header="Cart"
      visible={isCartVisible}
      onHide={toggleCart}
      className="bg-white"
      style={{ 
        width: '300px', 
        position: 'absolute', 
        top: '70px', 
        right: '20px' 
      }}
      breakpoints={{ 
        '960px': {
          width: '90%', 
          height: '60vh',
          position: 'absolute', 
          top: '10px',  
          transform: 'translateX(-50%)',
          borderRadius: '0.5rem'
        } 
      }}
      resizable={false}
      draggable={false}
    >
      {qty > 0 ? (
        <div className="flex items-center space-x-4">
          <img src={smallImg1} alt="product-thumbnail" className="w-12 h-12" />
          <div className="flex-1 text-darkGrayishBlue">
            <div>Fall Limited Edition Sneakers</div>
            <div className="flex items-center">
              <div>${fixedPrice} x {qty}</div>
              <Button icon="pi pi-trash" className="p-button-text p-button-danger p-ml-2" onClick={removeItem} />
            </div>
            <div className="font-bold text-veryDarkBlue">${totalPriceFixed}</div>
          </div>
        </div>
      ) : (
        <div className="text-center text-darkGrayishBlue">Your cart is empty.</div>
      )}
      {qty > 0 && (
        <Button label="Checkout" className="p-button-rounded p-button-success w-full mt-4" />
      )}
    </Dialog>
    </>
  );
};

export default Navbar;
