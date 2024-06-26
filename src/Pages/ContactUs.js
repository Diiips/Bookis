import React,{ useRef , useEffect} from 'react';
import './ContactUs.css'
import emailjs from '@emailjs/browser';

export default function ContactUs() {

    const form = useRef();
    const sendEmail = async (e) => { // Make the function asynchronous
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_6e6vryl',
                'template_9yld017',
                form.current,
                'IipUkRCxdKZxK9Kyc' // Use 'YOUR_USER_ID' instead of 'YOUR_PUBLIC_KEY'
            ).then(alert("Message Sent Sucessfully"));
            form.current.reset();
            console.log(result.text);
        } catch (error) {
            console.log(error.text);
        }
    };

    return (
        <div className='ContactUs-Page'>
            <div className='ContactUs-background'>
                <h1>Get In Touch</h1>
            </div>
            <div className='ContactUs-content'>
                <form ref={form} onSubmit={sendEmail} method="post">
                    {/* <label htmlFor="name">Name</label> */}
                    <input type="text" id="contact-name" placeholder='Name' name="name" required />

                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" id="email" placeholder='Email' name="email" required />

                    {/* <label htmlFor="message">Message</label> */}
                    <textarea id="message" name="message" placeholder='Message Us' rows="5" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}
