import React from 'react';
import './HeroStandard.scss';
import ArrowDownCir from '../../../assets/icons/arrow-down-cir.svg';
import { LightBtn } from '../../atoms/Buttons/Buttons';
import { Link } from 'react-router-dom';

const HeroStandard = () => {
  return (
    <div className="HeroStandard">
      <div className="HeroStandard_wrapper">
        <h2>Personal Blog</h2>
        <p>
          Exploring Life's Insights: A Journey of Reflection and Discovery. Join
          me on a thought-provoking exploration through the realms of life,
          philosophy, and personal experiences. Uncover meaningful insights that
          inspire growth and understanding. 🌱✨
        </p>
        <Link to="#weekly-feature">
          <LightBtn
            nameTag="Start Reading"
            iconSrc={ArrowDownCir}
            altText="arrow_down_cir"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroStandard;
