import React, { useState } from 'react';
import './Resume.scss';
import AdobeInline from '../../molecule/AdobleInline/AdobeInline';
import FullscreenIcon from '../../../assets/icons/expand.svg';
import DownloadIcon from '../../../assets/icons/download.svg';
import useAdobeSDK from '../../../hooks/useAdobeSDK';
import { Link } from 'react-router-dom';

const Resume = (props) => {
  const { data } = props;
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const fullscreenHandler = () => {
    if (!fullscreenMode) {
      const pdfFullscreenMode = new useAdobeSDK();
      pdfFullscreenMode.ready().then(() => {
        pdfFullscreenMode.previewFile(
          'pdf-full',
          {
            content: {
              location: {
                url: `http://localhost:1337${data.url}`,
              },
            },
            metaData: { fileName: `${data.name}`, id: `${data.hash}` },
          },
          {
            embedMode: 'LIGHT_BOX',
          }
        );
      });
    }
  };

  return (
    <div className="Resume">
      <h4>Resume/CV</h4>
      <p>Learn more about my education history and experiences.</p>
      <div className="Resume_wrapper">
        <div className="resumePdf">
          {!fullscreenMode ? (
            <AdobeInline mode="IN_LINE" data={data} />
          ) : (
            <div id="pdf-full" />
          )}
        </div>
      </div>
      <div className="icons">
        <Link target="_blank" download={`${data.url}`}>
          <img src={DownloadIcon} alt="download Resume" />
        </Link>
        <img
          src={FullscreenIcon}
          onClick={fullscreenHandler}
          alt="fullscreen"
        />
      </div>
    </div>
  );
};

export default Resume;
