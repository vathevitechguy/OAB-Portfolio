// import React, { useEffect } from 'react';
// import useAdobeViewer from './useAdobeViewer';

// const AdobeInline = () => {
//   useEffect(() => {
//     const viewSDKClient = new useAdobeViewer();
//     viewSDKClient.ready().then(() => {
//       /* Invoke file preview */
//       viewSDKClient.previewFile('pdf-div', {
//         /* Pass the embed mode option here */
//         embedMode: 'IN_LINE',
//       });
//     });
//   }, []);

//   return (
//     <div className="in-line-container">
//       <div id="pdf-div" className="in-line-div" />
//     </div>
//   );
// };
// //
// export default AdobeInline;

/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { Component } from 'react';
import useAdobeViewer from './useAdobeViewer';
import './AdobeInline.scss';

class AdobeInline extends Component {
  componentDidMount() {
    const viewSDKClient = new useAdobeViewer();
    viewSDKClient.ready().then(() => {
      /* Invoke file preview */
      viewSDKClient.previewFile('pdf-div', {
        /* Pass the embed mode option here */
        embedMode: 'IN_LINE',
      });
    });
  }

  render() {
    return (
      <div className="in-line-container">
        <div id="pdf-div" className="in-line-div" />
      </div>
    );
  }
}

export default AdobeInline;
