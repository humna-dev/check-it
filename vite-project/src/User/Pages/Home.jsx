import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../images/nic-chi-guvnhd3hbxw-unsplash.jpg';
import Footer from './Footer';
import UserNav from '../Components/UserNav';
import BackgroundImageHome from '../../images/HomeB.png';



// const newReviews = [

//   {
//     image: 'src/images/R2.avif',
//     name: 'Liam',
//     review: 'A captivating and beautifully written story that kept me hooked from the first page. The characters felt so real and relatable, and the plot twists were unexpected and exciting. I couldn\'t put it down!',
 
  
//   },
//   {
//     image: 'src/images/r4.jpg',
//     name: 'Ava',
//     review: 'I enjoyed the book, but I wish there had been more depth to the secondary characters. The main storyline was intriguing, and the author\'s exploration of human emotions was truly touching.',
//   },
//   {
//     image: 'src/images/R3.jpg',
//     name: 'Ethan',
//     review: 'A thought-provoking and heartwarming novel that touched my soul. The themes explored in this book are so relevant and important. I laughed, I cried, and I was left contemplating life\'s complexities.',
//   },
  
//   // Add more reviews as needed
// ];



  const reviews = [
    {
      image: 'src/images/Mother+Hutra.jpg',
      name: 'MOTHER HUTRA',
      review: '“Once I revealed the truth, I immediately felt the fire within me extinguish and the weight of the secret rise from the pit of my stomach.”',
    },
    {
      image: 'src/images/BLAHOM+GODDESS.jpg',
      name: 'BLAHOM',
      review: '“Get that out of your head. You’re more likely to get hurt if you think like that…let your body feel the movement. Let your mind connect with the music and remember why we are performing.”',
    },
    {
      image: 'src/images/Daniella.jpg',
      name: 'DANIELLA',
      review: '“SAVE,SERVE, SURVIVE!”',
    },
    {
      image: 'src/images/Man+Cohalith.jpg',
      name: 'MAN COHALTH',
      review: '“We will prepare you for war so that your future is full of love..”',
    },
  ];
  export default function Home() {
    // const [isOpen, setIsOpen] = useState(false);
  
    // useEffect(() => {
    //   setIsOpen(true); // Trigger the animation on component mount
    // }, []);


  return (

    
    <div className='.button-with-lightning-cursor' style={{ backgroundImage: `url(${BackgroundImage})`, height: '140vh', backgroundSize: 'cover' }}>
      <UserNav />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
          <img src="src/images/Untitled_Project__6_-removebg-preview (1).png" alt="ebook" style={{ maxWidth: '100%', height: 'auto', marginRight: '2rem', marginLeft:'3rem' }} />
          <div>
            <h2 className='text-white' style={{ fontSize: '2.5rem', textAlign: 'center', fontFamily: 'Pacifico', marginTop:'-12rem' }}>
              A WARRIOR GODDESS
            </h2>
            <hr />
            <p className='text-light' style={{ fontSize: '1.2rem', textAlign: 'start', paddingLeft: '150px', paddingRight: '150px', marginTop: '0rem' }}>
              “Well then, help her understand that happiness is finding joy in her journey. Happiness is knowing who she is and excelling in that.”
              <br />   <br />
              <hr />
              — LADY MOTHER CLARA
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '140vh', backgroundSize: 'cover' }}>
        <h2 className="text-center" style={{ marginBottom: '150px', fontFamily: 'Pacifico', fontSize: '4rem', color: "#ff9800" }}>
          OUR FAVORITE QUOTES
        </h2>

        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="book-box">
              <div className="book-cover">
                <img src={review.image} alt={review.name} />
              </div>
              <div className="book-content">
                <h3>{review.name}</h3>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div style={{ backgroundImage: `url(${BackgroundImage})`, height: '140vh', backgroundSize: 'cover' }}>
        <h2 className="text-center" style={{ marginBottom: '150px', fontFamily: 'Pacifico', fontSize: '4rem', color: "#ff9800" }}>
          NEW REVIEWS
        </h2> */}

       
  
      {/* <div className="new-reviews-container">
        {newReviews.map((review, index) => (
          <div key={index} className={`review-box ${isOpen ? 'show' : ''}`}>
            <div className="review-image">
              <img src={review.image} alt={review.name} />
            </div>
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
 
</div> */}

      
      {/* </div> */}
      <div style={{ backgroundImage: `url(${BackgroundImageHome})`, height: '90vh', backgroundSize: 'cover' }}>
       
        </div>
      <Footer />
    </div>
  );
}
