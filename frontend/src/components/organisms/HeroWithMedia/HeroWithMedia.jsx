import React from 'react';
import './HeroWithMedia.scss';
import { Gradient } from '../../atoms';
import { Link } from 'react-router-dom';
import { DarkBtn } from '../../atoms/Buttons/Buttons';
import Dare from '../../../assets/dare.png';
import Email from '../../../assets/icons/email.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';

const HeroWithMedia = (props) => {
  const { heroDescription } = props;
  return (
    <div className="HeroWithMedia">
      <Gradient>
        <div className="HeroWithMedia_wrapper">
          <div className="HeroWithMedia_wrapper--col1">
            <h1>Oluwadare Abiodun Badejo</h1>
            <p>
              {heroDescription} <Link to="about"> Learn more</Link>.
            </p>
            <div className="buttons">
              <DarkBtn title="Contact Me" />
              <div className="socials">
                <Link to="#">
                  <img src={Linkedin} alt="Linkedin" />
                </Link>
                <Link to="#">
                  <img src={Email} alt="Email" />
                </Link>
              </div>
            </div>
          </div>
          <div className="HeroWithMedia_wrapper--col2">
            <img src={Dare} alt="Oluwadare Abioudun Badejo" />
          </div>
        </div>
      </Gradient>
    </div>
  );
};

export default HeroWithMedia;
