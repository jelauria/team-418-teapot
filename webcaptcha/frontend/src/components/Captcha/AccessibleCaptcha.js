import React from 'react';
import { data } from './database';
import useSound from 'use-sound';
import soundfile from './bird_chirp.wav';
import './AccessibleCaptchaStyle.css';

function AccessibleCaptcha() {
  const [play] = useSound(soundfile);
  return (
    <React.Fragment>
      <p className="captchaMedia">{data[0].question}</p>
      <div className="captchaMedia flex justify-center center">  
        <button onClick={play} className="br3 bg-mid-gray white shadow-2">Sound</button>
        <img src={data[0].image_file} className="br3 shadow-2"></img>
      </div>
      <form className="captchaForm">
        <label>Answer: </label>
        <input type="text" id="text-box"></input>
        <input type="submit" value="submit" id="submit-btn"></input>
      </form>
    </React.Fragment>
  );
}

export default AccessibleCaptcha;