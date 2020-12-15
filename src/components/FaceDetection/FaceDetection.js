import React from 'react';
import 'tachyons';
import './Face.css'


const FaceDetection = ({Url,box}) =>
{


 return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={Url} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceDetection;