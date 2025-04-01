import React from 'react';
import Feature from '../../components/feature/Feature';
import './services.css';

const services = () => (
  <div className="gym__services section__margin" id="home">
    <div className="gym__services-feature">
      <Feature 
        title="Why Choose Our Gym?" 
        text="Experience the best-in-class training, world-class equipment, and personalized coaching to help you achieve your fitness goals. Whether you're a beginner or an advanced athlete, we have the perfect program for you." 
      />
    </div>
    <div className="gym__services-heading">
      <h1 className="gradient__text">Transform Your Body, Elevate Your Mind</h1>
      <p>Explore Our Services</p>
    </div>
    <div className="gym__services-container">
      <Feature 
        title="Personal Training" 
        text="Get one-on-one coaching from certified trainers who will tailor a workout and nutrition plan specifically for you." 
      />
      <Feature 
        title="Group Fitness Classes" 
        text="Join exciting group classes like HIIT, Yoga, Zumba, and Strength Training to stay motivated and push your limits." 
      />
      <Feature 
        title="Strength & Conditioning" 
        text="Build muscle, improve endurance, and enhance performance with our state-of-the-art strength and conditioning programs." 
      />
    </div>
  </div>
);
export default services;