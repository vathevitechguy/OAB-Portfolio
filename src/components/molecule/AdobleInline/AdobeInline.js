import React, { useEffect } from 'react';
import './AdobeInline.scss';
import useAdobeSDK from '../../../hooks/useAdobeSDK';

const AdobeInline = () => {
  useEffect(() => {
    const viewSDKClient = new useAdobeSDK();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile('pdf-div', {
        embedMode: 'IN_LINE',
      });
    });
  }, []);

  return (
    <div className="in-line-container">
      <div id="pdf-div" className="in-line-div" />
    </div>
  );
};
//
export default AdobeInline;
