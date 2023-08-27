import React, { useEffect } from 'react';
import './AdobeInline.scss';
import useAdobeSDK from '../../../hooks/useAdobeSDK';

const AdobeInline = (props) => {
  const { data, mode } = props;
  useEffect(() => {
    const viewSDKClient = new useAdobeSDK();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        'pdf-div',
        {
          content: {
            location: {
              url: data.url,
            },
          },
          metaData: { fileName: `${data.name}`, id: `${data.hash}` },
        },
        {
          embedMode: mode,
        }
      );
    });
  }, [data.hash, data.name, data.url, mode]);
  console.log(data.url);
  console.log(data.name);
  return <div id="pdf-div" className="in-line-div" />;
};
//
export default AdobeInline;
