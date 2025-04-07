import React from 'react';
import Buttons from '../Buttons/Buttons.jsx';
import './Section.scss';
import image from '../../assets/hero-image.png';
import FeatureCard from '../FeatureCard/FeatureCard.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHeartPulse, faObjectGroup, faCalendarDays } from '@fortawesome/free-solid-svg-icons'; 

function Section() {
  return (
    <div className="section">
      <div className="section-hero">  
        <div className="section-content">
          <h1 className="section-title">Elegant and creative solutions</h1>
          <p className="section-desc">We are team of talented designers making websites with Bootstrap.</p>
          <Buttons />
        </div>
        <div className="section-image">
          <img src={image} className="max-w-full" alt="Hero" />
        </div>
      </div>

      <div className="section-features"> 
        <FeatureCard
          icon={<FontAwesomeIcon icon={faHeartPulse} />}
          title="Lorem Ipsum"
          description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faObjectGroup} />}
          title="Sed ut perspici"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        />
        <FeatureCard
          icon={<FontAwesomeIcon icon={faCalendarDays} />}
          title="Magni Dolores"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
        />
      </div>
    </div>
  );
}

export default Section;