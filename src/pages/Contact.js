import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Logo from '../components/Logo';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
const Contact = () => {
    const variants ={
        in : {
            opacity:1,
            x:0,
        }, out:{
            opacity:0,
            x: 300,
        }
    }
    const transition={
        ease: [.03,.87,.73,.9],
        duration: .6,
    }
    return (
        <main>
            <Mouse />
            <motion.div 
            className="contact"
            exit="out"
            animate="in"
            initial="out"
            variants={variants}
            transition={transition}>
                <Navigation />
                <Logo />
                <ContactForm/>
                <div className="contact-infos">
                    <div className="adress">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Rue de François</p>
                            <p>17000 La Rochelle</p>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0626564565" className="hover">
                                <p style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert('Téléphone Copié !')
                                    }}>06 50 60 50 50</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="dodoxgugus@gmail.com" className="hover">
                                <p style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert('Email Copié !')
                                    }}>dodoxgugus@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div className="credits">
                        <p>FromGiustina - 2020</p>
                    </div>
                </div>
               <ButtonsBottom left={'/project-4'}/> 
            </motion.div>
        </main>
    );
};

export default Contact;