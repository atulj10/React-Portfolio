import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer,Popup } from "react-leaflet";


const Contact = () => {

    const refForm = useRef()

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gamil',
                'template_caqobvh',
                refForm.current,
                'SihI_aBIs_yxf6FLj'
            )
            .then(
                () => {
                    alert("Message successfully send")
                    window.location.reload(false)
                },
                () => {
                    alert("failed to send the message, please try again")
                    window.location.reload(false)
                }
            )
    }

    return (<>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        className={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <p>
                    Hey, there how are you?
                </p>
                <p>
                    You want to contact me!
                </p>
                <p>
                    Please fill up the below form and we'll get in touch.
                </p>
                <div className="input-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li >
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                >
                                </textarea>
                            </li>
                            <li>
                                <input type="submit"
                                    className="flat-button"
                                    value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                IIIT Ranchi,
                <br />
                Ranchi
                <br />
                 Jharkhand
                <br />
                <span>atulanandj10@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[3.317259, 85.375021]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[3.317259, 85.375021]}>
                       <Popup>Hey, there</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>)
}

export default Contact;
