import React from 'react'
import imageFile from '../image/printivo 2.png'
import secondImage from '../image/mide.png'
import thirdImage from '../image/flier.png'
import fourthImage from '../image/cup.png'
import fifthImage from '../image/printivo3.jpg'
import sixthImage from '../image/printivo4.png'
import seventhImage from '../image/woman.png'
import eighthImage from '../image/bookcover.png'
import ninthImage from '../image/printivo5.png'
import tenthImage from '../image/printinvo6.png'
import eleventhImage from '../image/stensile.png'
import twelvethImage from '../image/grass.jpeg'
import thirtheenImage from '../image/prinitivo7.png'
import fourteenImage from '../image/printivo8.png'
import fiftheenthImage from '../image/printivo9.png'

const Contentbody = () => {
  return (
    <>
    <section id='generalTag'>
    <div className='d-flex justify-content-around'>
      <h3>Popular Product</h3>
      <a className='text-danger' href="#">See All Products</a>
    </div>

  <section className='container-fluid'>
    <div className='row'>
    <div className="card col-sm-2-mg-2-lg-4" style={{width: 250}}>
  <img src={imageFile} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Two-sided Business Cards</h6>
    <p className="card-text">STARTING AT</p>
    <p ><h5 id='para'>₦8,855</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Two-sided Bus... ></button>
  </div>
</div> 

<div className="card col-sm-2-mg-2-lg-4" style={{width: 250}} >
  <img src={secondImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">A5 flyers(Single Sided)</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦15,000</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse A5 flayers (S... ></button>
  </div>
</div>

<div className="card col-sm-2-mg-2-lg-4" style={{width: 250}} >
  <img src={thirdImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Rounded Stickers (3.5" Diameter)</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦9,900</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Rounded Sticke.. ></button>
  </div>
</div>

<div className="card col-sm-2-mg-2-lg-4" style={{width: 250}} >
  <img src={fourthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Simple Mugs</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦2,750</h5><span> per 1</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Simple Mugs ></button>
  </div>
</div>

<div className="card col-sm-2-mg-2-lg-4" style={{width: 250}} >
  <img src={fifthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Post Cards (A6)</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦12,903</h5><span> per 50</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Post Cards (A... ></button>
  </div>
</div>

<div className="card col-sm-2-mg-2-lg-4" style={{width: 250}} >
  <img src={sixthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Roll Up Banners (Big Base)</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦32,000</h5><span> per 1</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Roll Up Ban... ></button>
  </div>
</div>

<div className="card col-sm-2-mg-2-lg-4" style={{width: 300}} >
  <img src={seventhImage} className="card-img-top" alt="..." width={350}></img>
  <div className="card-body">
    <h6 className="card-title">A2 Posters</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦41,400</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>A2 Posters ></button>
  </div>
</div>

<div className="card" style={{width: 250}} >
  <img src={eighthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Trifold Brochures</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦27,600</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Trifold Broc... ></button>
  </div>
</div>

<div className="card" style={{width: 250}} >
  <img src={ninthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Landscape ID Cards</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦1,800</h5><span> per 1</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Landscape ID... ></button>
  </div>
</div>

<div className="card" style={{width: 250}} >
  <img src={tenthImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Off White T-Shirts</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦3,499</h5><span> per 1</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Off White T... ></button>
  </div>
</div>

<div className="card" style={{width: 250}} >
  <img src={eleventhImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">A4 Branded Paper Bags</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦60,950</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse A4 Branded P... ></button>
  </div>
</div>

<div className="card" style={{width: 250}} >
  <img src={twelvethImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">A4 Courier Bags</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦16,000</h5><span> per 100</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse A4 Courier B... ></button>
  </div>
</div>
</div>
    </section>
    <section>
    <div className='d-flex justify-content-around'>
      <h3>Popular Categories</h3>
      <a className='text-danger' href="#">See All Products</a>
    </div>
    <div className='container-fluid'>
      <div className='row'>
      <div className="card" style={{width: 250}} >
  <img src={thirtheenImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Greeting Cards</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦17,250</h5><span> per 50</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Greeting Car... ></button>
  </div>
</div>
<div className="card" style={{width: 250}} >
  <img src={fourteenImage} className="card-img-top" alt="..." width={300}></img>
  <div className="card-body">
    <h6 className="card-title">Stickers</h6>
    <p className="card-text">STARTING AT</p>
    <p><h5 id='para'>₦4,949</h5><span> per 75</span></p>
  </div>
  <div className="card-body">
    <button href="#"  className='btn btn-danger'>Browse Stickers ></button>
  </div>
</div>
      </div>
    </div>
    </section>
    </section>
  
    <section>
    <h5>Nigeria's N0.1 Online print Shop 👑</h5>
    <div>Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.</div>
    <div>
      <img src={fiftheenthImage} alt=""  width={700} height={150}/>
    </div>
  </section>
 
    
    </>
  )
}

export default Contentbody