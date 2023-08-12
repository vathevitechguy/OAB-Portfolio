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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
