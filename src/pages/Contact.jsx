import React from 'react'
import ContactSection from '../components/Contact-page/Contact/ContactPage'
import ContactAll from '../components/Contact-section/ContactSection'

const Contact = () => {
  return (
    <div>
      <ContactSection />
      <ContactAll  />
      <div className="google-map-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.6331578029472!2d74.41753506660463!3d31.57174405204873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901232ce62997%3A0xf2b8447d275aff5!2sVertex%20Pro%20Technologies!5e0!3m2!1sen!2s!4v1771407039180!5m2!1sen!2s" style={{width:"100%", height:"500px" ,border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}

export default Contact
