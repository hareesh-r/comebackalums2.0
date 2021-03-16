import React from 'react'
import "./Contact.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact() {
    return (
        <div className="contact">
            <h1>Get in Touch</h1>
            <div className="contact__adress">
                <LocationOnIcon /> <strong>Address : </strong><p>RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Tiruvallur District, Tamil Nadu, India. Pin code: 601 206.</p>
            </div>
            <div className="contact__phone">
                <PhoneIcon /> <strong>Phone : </strong> <p> +91 917-6969-473</p>
            </div>
            <div className="contact__mail">
                <MailIcon /> <strong>Email : </strong>
                <code>hareeshprogrammer@gmail.com</code>
            </div>
            <div className="contact__follow">
                <strong>Follow Me : </strong>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <GitHubIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <WhatsAppIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <InstagramIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <FacebookIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <YouTubeIcon />
                </a>
                <a href="https://github.com/hareesh-r" target="__blank" >
                    <TwitterIcon />
                </a>
            </div>
        </div>
    )
}

export default Contact
