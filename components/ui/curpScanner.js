'use client'

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const CurpScanner = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '10%' }}
      />
      <p>{data}</p>
    </>
  );
};

export default CurpScanner;