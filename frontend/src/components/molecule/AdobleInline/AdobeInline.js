import React, { useEffect } from 'react';
import './AdobeInline.scss';
import useAdobeSDK from '../../../hooks/useAdobeSDK';

const AdobeInline = (props) => {
  const { data } = props;
  useEffect(() => {
    const viewSDKClient = new useAdobeSDK();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        'pdf-div',
        {
          content: {
            location: {
              url: `http://localhost:1337${data.url}`,
            },
          },
          metaData: { fileName: `${data.name}`, id: `${data.hash}` },
        },
        {
          embedMode: props.mode,
        }
      );
    });
  }, []);

  return <div id="pdf-div" className="in-line-div" />;
};
//
export default AdobeInline;
