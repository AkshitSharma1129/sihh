import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import courses from './onlinecourse.jpeg';
import books from './books.jpeg';
import Mentorship from './mentor.jpeg';
import Discussion from './discuss.jpeg';
import './testi.css'

export default function IndexPage() {
  // CSS for adjusting image size
  const imageStyle = {
    maxWidth: '350px', // Adjust the maximum width as per your requirements
    maxHeight: '1000px', // Adjust the maximum height as per your requirements
    margin: '0 auto',   // Center the image horizontally
    borderRadius: '50%', 
  };

const testimonialCardStyles = {
  cardUp: {
    height: '120px',
    overflow: 'hidden',
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
  },
  avatar: {
    width: '110px',
    marginTop: '-60px',
    overflow: 'hidden',
    border: '3px solid #fff',
    borderRadius: '50%',
  },
};

  return (
    <>
     <h1 className="blogg" style={{ marginBottom: '1px' }}>EduConnect!</h1>
     <h3 style={{ textAlign: 'center', marginTop: '-30px', marginBottom: '10px', fontSize: '20px', textDecoration: 'underline' }}>
  Where Every Student Deserves to Learn and Thrive
</h3>

      <section id="testimonials" className="py-10 bg-gray-200">
        <div className="container mx-auto text-center">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Carousel>
            <div>
              <img src={courses} alt="" style={imageStyle} />
              <p>"Browse our Online Courses"</p>
              <p className="font-semibold">Courses</p>
            </div>
            <div>
              <img src={books} alt="" style={imageStyle} />
              <p>"Explore Awesome Books"</p>
              <p className="font-semibold">Books</p>
            </div>
            <div>
              <img src={Mentorship} alt="" style={imageStyle} />
              <p>"Unlock your potential with personalized guidance  get mentorship today."</p>
              <p className="font-semibold">Personalized Mentorship</p>
            </div>
            <div>
              <img src={Discussion} alt="" style={imageStyle} />
              <p>"Connect, Learn, and Thrive with Student Discussions"</p>
              <p className="font-semibold">Student Discussion</p>
            </div>
          </Carousel>
</div>

          
        </div>
      </section>

      <section className="your-carousel-container">
      <div className="figure-container">
      <figure class="snip1192">
  <blockquote>EduConnect has been a game-changer in my educational journey. The platform's digital library is a treasure trove of resources. It is very helpful.</blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Akshit <span> UNA</span></h5>
  </div>
</figure>
<figure class="snip1192 hover">
  <blockquote>. The online mentorship was invaluable, and the Support and Helpline were a lifeline during challenging times.</blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
    <h5>Abhinav<span> Ludhiana</span></h5>
  </div>
</figure>
<figure class="snip1192">
  <blockquote>EduConnect not only equipped me with knowledge but also provided job opportunities and guidance on educational loans. It's a holistic platform that has truly empowered my education and my future</blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
    <h5>Rhoit<span>Varanasi</span></h5>
  </div>
</figure>
</div>
      </section>
    
    </>
  );
}
