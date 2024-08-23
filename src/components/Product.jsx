import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import cartIcon from "../assets/icon-cart-white.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
import { Button } from 'primereact/button';
import { data } from "../constants/images";
import { Badge } from 'primereact/badge';
import { Card } from 'primereact/card';
import { Image } from "primereact/image";

const Product = ({ price, qty, setQty }) => {
  const products = [...data];
  const [value, setValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const largeImage = products[value].largeImg;

  const fixedPrice = price.toFixed(2);
  const totalPriceFixed = (fixedPrice * qty).toFixed(2);

  const decrease = () => {
    if (qty > 0) {
      setQty((prev) => prev - 1);
    }
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  const goBack = () => {
    setValue((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goForward = () => {
    setValue((prev) =>
      prev === products.length - 1 ? products.length - 1 : prev + 1
    );
  };

  return (
    <main>
      <div className="main-wrapper flex flex-col md:flex-row md:px-[200px] md:py-[100px] relative">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="hidden md:block large-image">
            <img
              onClick={toggleModal}
              className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]"
              src={largeImage}
              alt="sneakers-photo"
            />
          </div>
          <div className="md:hidden large-image">
            <img
              onClick={goBack}
              className="bg-white rounded-full p-4 absolute top-[15%] left-6 cursor-pointer"
              src={prevIcon}
              alt="go-back"
            />
            <img
              className="w-[100%] h-[300px] object-cover"
              src={largeImage}
              alt="sneakers-photo"
            />
            <img
              onClick={goForward}
              className="bg-white rounded-full p-4 absolute top-[15%] left-[82%] cursor-pointer"
              src={nextIcon}
              alt="go-forward"
            />
          </div>
          <div className="small-images hidden md:flex mt-7 justify-between w-[400px]">
            {data.map((img, idx) => (
              <div key={img.id} className="single-image">
                <img
                  onClick={() => setValue(idx)}
                  className={`w-[80px] h-[80px] cursor-pointer rounded-xl transition-all ${
                    idx === value
                      ? "opacity-50 border-2 border-orange"
                      : "hover:opacity-50"
                  }`}
                  src={img.smallImg}
                  alt="product-thumbnail"
                />
              </div>
            ))}
          </div>
        </div>

        <Dialog
       headerClassName="bg-transparent  	; "
       contentClassName="bg-transparent 	;"
          visible={modalVisible}
          onHide={toggleModal}
          className="w-[400px] md:w-[600px] h-auto p-0 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] box-shadow-none border-none outline-none"
          breakpoints={{ "960px": "75vw", "640px": "95vw" }}
          style={{
            boxShadow: 'none',
            border: 'none',
          }}
        >
          <div className="relative flex flex-col items-center ">
            <img
              className="w-[400px] h-[400px] object-cover rounded-xl"
              src={largeImage}
              alt="sneakers-photo"
            />
      
      <Button
  icon="pi pi-chevron-left"
  onClick={goBack}
  className="absolute top-1/2 left-0.5 bg-white p-3 rounded-full transform -translate-y-1/2"
  style={{ borderRadius: '50%' }}
/>

<Button
  icon="pi pi-chevron-right"
  onClick={goForward}
  className="absolute top-1/2 right-0.5 bg-white p-3 rounded-full transform -translate-y-1/2"
  style={{ borderRadius: '50%' }}
/>
            <div className="small-images flex mt-7 justify-around w-[100%]">
              {data.map((img, idx) => (
                <div key={img.id} className="single-image">
                  <img
                    onClick={() => setValue(idx)}
                    className={`w-[60px] h-[60px] cursor-pointer rounded-xl transition-all ${
                      idx === value
                        ? "border-2 border-orange"
                        : "hover:border-2 hover:border-orange"
                    }`}
                    src={img.smallImg}
                    alt="product-thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </Dialog>

        <Card className="description p-6 md:basis-1/2 md:py-[40px] box-shadow-none border-none outline-none"
         style={{
          boxShadow: 'none',
          border: 'none',
        }}
        >
        
            <p className="text-orange text-[14px] tracking-widest uppercase font-bold mb-6">
                Sneaker Company
            </p>
            <h1 className="text-3xl md:text-4xl capitalize font-bold">
                Fall Limited Edition Sneakers
            </h1>
            <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
                These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
                These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

            <div className="price flex items-center">
                <span className="text-3xl font-bold mr-4">${fixedPrice}</span>
                <Badge value="50%" severity="success" className="bg-paleOrange text-orange font-bold py-1 px-2 rounded-lg" />
                <p className="md:hidden line-through text-grayishBlue font-bold translate-x-[100px] mb-2">
                    $250.00
                </p>
            </div>
            <p className="hidden md:block line-through text-grayishBlue font-bold mt-2">
                $250.00
            </p>

            <div className="buttons-container flex flex-col md:flex-row mt-8">
                <div className="state w-full flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
                    <Button 
                        icon="pi pi-minus" 
                        className="minus text-2xl md:text-xl font-bold text-orange transition-all hover:opacity-50" 
                        onClick={decrease} 
                        rounded 
                    />
                    <p className="md:text-[14px] font-bold">{qty}</p>
                    <Button 
                        icon="pi pi-plus" 
                        className="plus text-2xl md:text-xl font-bold text-orange transition-all hover:opacity-50" 
                        onClick={() => setQty(prev => prev + 1)} 
                        rounded 
                    />
                </div>
                <Button 
                    className="add-btn border-none bg-orange rounded-lg text-black font-bold px-12 py-4 mt-4 md:mt-0 md:py-2 md:text-sm transition-all btn-shadow hover:opacity-50" 
                    label="Add to cart" 
                    icon={<img src={cartIcon} alt="cart-icon" className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]" />} 
                />
            </div>
        </Card>
        </div>
    </main>
  );
};

export default Product;
