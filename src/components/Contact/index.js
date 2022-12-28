import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_8upt7te',
        'template_dj2jalh',
        form.current,
        '9FaHPjUs1Np4UTPT1'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (err) => {
          console.log(err)
          alert('Failed to send the message, please try again')
        }
      )
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Et incididunt eiusmod elit officia id eu esse. Quis sint aliqua
            commodo incididunt consectetur enim labore aliquip. Sunt ipsum
            veniam nulla id eiusmod labore aliqua non reprehenderit eiusmod elit
            et cupidatat irure. Excepteur eu magna deserunt velit occaecat nulla
            velit id cillum consectetur do. Sit commodo aute sit dolor sint
            proident ex aute sint aliquip est ullamco est.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Rawitch Payakkawan,
          <br />
          Thailand,
          <br />
          <span>rawitch13@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.8435591, 100.5633977, 17]} zoom={16}>
            <TileLayer url="https:///{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.8435591, 100.5633977, 17]}>
              <Popup>Mix is here,come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
