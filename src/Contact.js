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
import Footer from './Footer';

function Contact() {
    return (
        <div>
            {/* <div className="ad__here">
                <h1>Ads will be displayed here</h1>
            </div> */}
            <div className="contact">
                <div className="contact__touch">
                    <h1>Get in Touch</h1>
                </div>
                <div className="contact__adress">
                    <div className="contact__adress__heading">
                        <LocationOnIcon /> <strong>Address </strong> </div><p>RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Tiruvallur District,<br /> Tamil Nadu, India. Pin code: 601 206.</p>
                </div>
                <div className="contact__phone">
                    <div className="contact__phone__heading">
                        <PhoneIcon /> <strong>Phone</strong></div> <p>+91 917-6969-473</p>
                </div>
                <div className="contact__mail">
                    <div className="contact__mail__heading">
                        <MailIcon /> <strong>Email</strong></div>
                    <p>hareeshprogrammer@gmail.com</p>
                </div>
                <div className="contact__follow">
                    <strong>Follow Me<br /></strong> <div className="contact__icon">
                        <a className="icon_git" href="https://github.com/hareesh-r" target="__blank" >
                            <GitHubIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_linked" href="https://www.linkedin.com/in/hareesh-rajendran-277b13112/" target="__blank" >
                            <LinkedInIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_whats" href="https://wa.me/+919176969473?text=Hi%20Hareesh%20this%20message%20is%20from%20your%20website" target="__blank" >
                            <WhatsAppIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_insta" href="https://www.instagram.com/hareesh_._r/" target="__blank" >
                            <InstagramIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_fb" href="https://www.facebook.com/hareeshprogrammer/" target="__blank" >
                            <FacebookIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_yt" href="https://www.youtube.com/channel/UCdFmcrrlvC6rSYEL9mZQ_4g" target="__blank" >
                            <YouTubeIcon />
                        </a></div> <div className="contact__icon">
                        <a className="icon_tweet" href="https://twitter.com/hareesh_dev" target="__blank" >
                            <TwitterIcon />
                        </a></div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
