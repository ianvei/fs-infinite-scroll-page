import React, { useEffect, useState } from "react";
import WaveSurfer from "https://unpkg.com/wavesurfer.js"

const SoundCard =( {queryResult} ) => {
    const [individualSound, setIndividualSound] = useState([]);
    const [newAudio, setNewAudio] = useState('');


    // useEffect(() => {
    //     chooseSound(queryResult)
    // })

    // console.log(queryResult)
    

    const getNewSound = () => {
        const newSound = chooseSound(queryResult)
        setIndividualSound(newSound)
        // audio.pause();
        // audio.currentTime = 0;
    }

    const chooseSound = (allResults) => {
        // console.log(results.results.length)
        const randomIndex = Math.floor(Math.random() * allResults.results.length);
        console.log(randomIndex)
        const item = allResults.results[randomIndex];
        return item
      }
    
    const printSound = () => {
        console.log(individualSound)
    }
    
    
   const getAudio = () => {
    
    getNewSound()
    const audio = new Audio(
        individualSound.previews['preview-lq-mp3']
    );
    // setNewAudio(individualSound.previews['preview-lq-mp3'])
    if (newAudio) {
        newAudio.pause()
        newAudio.currentTime = 0;
    }
    
    setNewAudio(audio)
    // audio.pause();
    // audio.currentTime = 0;
    // return audio
   }


   const generateWaveForm = () => {
        const wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'violet',
            progressColor: 'purple'
        });

        wavesurfer.load(individualSound.previews['preview-lq-mp3'])
   }
    const start = () => {
        
        const audio = newAudio
        console.log(audio)
        
        audio.pause()
        audio.currentTime = 0;

        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
            audio.currentTime = 0;
        }

        generateWaveForm()
        
    }
    

    return(
        <div className="sound-card">

            <h4>{individualSound.name}</h4>
            <button onClick={getAudio}>Get new sound</button>
            <button onClick={start}>play sound</button>
            <div id="waveform"></div>
        </div>
    )
}

export default SoundCard