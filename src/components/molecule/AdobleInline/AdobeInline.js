import React, { useEffect } from 'react';
import './AdobeInline.scss';
import useAdobeSDK from '../../../hooks/useAdobeSDK';

const AdobeInline = (props) => {
  useEffect(() => {
    const viewSDKClient = new useAdobeSDK();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile('pdf-div', {
        embedMode: props.mode,
      });
    });
  }, []);

  return <div id="pdf-div" className="in-line-div" />;
};
//
export default AdobeInline;
