import React from "react";
import imageFile from "../image/prinitivo7.png";
import clock from "../image/clock.svg"
import wallet from "../image/wallet.svg"
import amour from "../image/logo.svg"

const Hero = () => {
  return (
    <>
      <h4>You can count on us for: </h4>
      <section className="container mt-3">
        <div className="d-inline-flex">
        <section className="container mt-3">
        <div  style={{ width: 350, height: 250 } } className="mx-6 d-inline-flex">
        <img src={clock} alt="" className="p-3" width={70} height={70}/>
        <div className="p-3">
          <h5>Fast Turnaround within Days </h5>
          <p>
            Your order gets to you within 3-7 working days via DHL or our very
            own Printivo Direct.
          </p>
        </div>
        </div>
      </section>
      <section className="container mt-3">
        <div  style={{ width: 350, height: 250 }}  className="mx-6 d-inline-flex">
        <img src={amour} alt="" className="p-5" width={70} height={70}/>
        <div className="p-5">
           <h5>100% Top Quality</h5>
          <p>
           Only the finest materials, machines and people will be involved in fulfilling your order.
          </p>
        </div>
        </div>
      </section>
      <section className="d-flex d-flex flex-column mb-3 mt-4">
        <div  style={{ width: 350, height: 250 }} className="mx-5 d-inline-flex">
        <img src={wallet} alt="" className="p-3" width={70} height={70}/>
        <div className="p-4">
          <h5>Affordable Service</h5>
          <p>
           All products are adequately priced to ensure you get value for your money at all times.
          </p>
        </div>
        </div>
      </section>
        </div>
      </section>
      
    </>
  );
};

export default Hero;
