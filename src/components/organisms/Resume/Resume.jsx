import React from 'react';
import './Resume.scss';
import AdobeInline from '../../../hooks/AdobeInline';

const Resume = () => {
  return (
    <div className="Resume">
      <h4>Resume/CV</h4>
      <p>Learn more about my education history and experiences.</p>
      <div className="Resume_wrapper">
        {/* <iframe
          src="https://drive.google.com/file/d/1Yu1ZEXd6I6ogPiB2JSIfjWxaLG326Ehd/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe> */}
        <AdobeInline />
      </div>
    </div>
  );
};

export default Resume;
