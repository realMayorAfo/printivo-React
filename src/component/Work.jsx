import React from 'react'
import techCrunch from '../image/tech.svg'
import forbes from '../image/forbes.svg'
import techpoint from '../image/techpoint.png'
import techcabal from '../image/techcabal.svg'
import cnn from '../image/cnn.svg'

const Work = () => {
  return (
   <>
   <section>
    <div className='mt-4 mb-3'>
        <h5>Our amazing work got noticed by:</h5>
    </div>
    <section className='container d-inline-flex my-1 mx-1'>
        <div>
            <img src={techCrunch} alt="..." width={150}/>
            <div>
            <a href="#" id='worklink' className='text-dark'>Read the article here</a>
            </div>
        </div>
        <div>
            <img src={forbes} alt="..." width={150}/>
            <div>
            <a href="#" id='worklink' className='text-dark'>Read the article here</a>
            </div>
        </div>
        <div>
            <img src={techpoint} alt="..." width={150}/>
            <div>
            <a href="#" id='worklink' className='text-dark'>Read the article here</a>
            </div>
        </div>
        <div>
            <img src={techcabal} alt="..." width={150}/>
            <div>
            <a href="#" id='worklink' className='text-dark'>Read the article here</a>
            </div>
        </div>
        <div>
            <img src={cnn} alt="..." width={150}/>
            <div>
            <a href="#" id='worklink' className='text-dark'>Read the article here</a>
            </div>
        </div>
    </section>
   </section>
   </>
  )
}

export default Work