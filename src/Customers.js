import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiOutlineMail } from 'react-icons/ai'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsTelephone } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'
import { TfiBag } from 'react-icons/tfi'
import { MdLocationCity } from 'react-icons/md'
const Customers = ({ customers }) => {
  return (
    <section className='customers'>
      {customers.map((item) => {
        const {
          id,
          name,
          username,
          email,
          img,
          address: {
            street,
            suite,
            city,
            zipcode,
            geo: { lat, lng },
          },
          phone,
          website,
          company: { name: title, catchPhrase, bs },
        } = item
        return (
          <div className='card' key={id}>
            <div className='card-header'>
              <div className='content'>
                <h4 className='name'>{name}</h4>
                <p className='username'>@{username}</p>
                <p className='castch-phrase'>{catchPhrase}</p>
              </div>
              <LazyLoadImage src={img} alt={name} />
            </div>
            <div className='underline'>
              <div></div>
            </div>
            <div className='card-body'>
              {/* email */}
              <div className='content'>
                <AiOutlineMail />
                <p className='email'>{email}</p>
              </div>
              {/* location */}
              <div className='content'>
                <TfiLocationPin />

                <p className='location'>
                  {street}, {suite}, {city}, {zipcode}, {lat}, {lng}
                </p>
              </div>
              {/* phone */}
              <div className='content'>
                <BsTelephone />
                <p className='phone'>{phone}</p>
              </div>
              {/* website */}
              <div className='content'>
                <TfiWorld />
                <p className='website'>{website}</p>
              </div>
              {/* company name */}
              <div className='content'>
                <TfiBag />
                <p className='company-name'>{title}</p>
              </div>
              {/* company bs */}
              <div className='content'>
                <MdLocationCity />
                <p className='company-bs'>{bs}</p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Customers
