import React from 'react';
import BackgroundImage from '../../images/nic-chi-guvnhd3hbxw-unsplash.jpg';
import Footer from './Footer';
import UserNav from '../Components/UserNav';

const Events = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '150vh', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
            <UserNav />
            <div style={{ display: 'flex', justifyContent: 'center', flex: 1, padding: '50px', marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <iframe width="600" height="154" src="https://w2.countingdownto.com/4942075" title="Countdown"></iframe>
                </div>
                <div style={{ flex: 1, marginLeft: '50px' }}>
                    <img className="animated-image" src="src/images/blahom-scenes-02.png" alt="Image" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Events;
