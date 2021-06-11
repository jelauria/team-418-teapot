import React, { useState } from 'react';
import { data } from './database';
import useSound from 'use-sound';
import axios from 'axios';
// import soundfile from './bird_chirp.wav';
import './AccessibleCaptchaStyle.css';

function AccessibleCaptcha() {
  const [question, setQuestion] = useState('');
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');

  function getData() {
    axios.get('http://localhost:8080/', { crossdomain: true }).then(response => {
      setQuestion(response.data.data.question);
      setId(response.data.data.id);
      setImage(response.data.data.image_file);
      setAudio(response.data.data.sound_file);
    });
  }

  // componentDidMount() {

  // }

  const [play] = useSound(audio);
  return (
    <React.Fragment>
      <button onClick={getData} className="captchaMedia">{question}</button>
      <div className="captchaMedia flex justify-center center">  
        <button onClick={play} className="br3 bg-mid-gray white shadow-2">Sound</button>
        <img src={image} className="br3 shadow-2"></img>
      </div>
      <form className="captchaForm" method="POST" action='http://localhost:8080/checkAnswer'>
        <label>Answer: </label>
        <input type="text" name="answer" id="text-box"></input>
        <input type="hidden" name="dataId" value={id} id="text-box"></input>
        <input type="submit" value="submit" id="submit-btn"></input>
      </form>
    </React.Fragment>
  );
}

export default AccessibleCaptcha;