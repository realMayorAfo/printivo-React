import React from 'react'
import twitterLogo from '../image/Twitter.svg'

const Customer = () => {
  return (
    <>
    <section id='card'>
<h4 id='cardHead'>What Customers Say About Us🙌</h4>
    <div className='d-flex flex-row' >
    <div className="row">
  <div className="card " style={{width: 350, height:250}}>
  <img src={twitterLogo} className="card-img-top" alt="..." width={30} height={30} style={{backgroundColor:'blue'}}></img>
    <div className="card-body text-center">
        <h6>Amina Ebele <span id='spancolor'>@DeliciousAmina</span> </h6>
      <p className="card-text">I am now the unofficial <span id='spancolor'>@printivo</span> ambassador. What this guys just did to ensurei got mymenu today is stunning.</p>
    </div>
  </div>
  <div className="card " style={{width: 350, height:250}}>
    <div className="card-body text-center">
    <h4>Oluwatosin <span id='spancolor'>@tosingirlfx</span> </h4>
      <p className="card-text"><span id='spancolor'>@printivo</span> delivered my mug cupin 24hrs. Thank you so much! it's nice doing business with you. More to come.</p>
    </div>
  </div>
  <div className="card " style={{width: 350, height:250}}>
    <div className="card-body text-center">
    <h4>Oluwatosin<span id='spancolor'>@olagablark</span> </h4>
      <p className="card-text">Those guys<span id='spancolor'>@printivo</span> are really awesome and afforable. Excellent customer service and delivery too. Thank you.</p>
    </div>
  </div>
</div>
    </div>
    </section>
    
    </>
  )
}

export default Customer