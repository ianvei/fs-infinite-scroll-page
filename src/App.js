
import './App.css';
import SoundCard from './components/SoundCard';
import React, { useEffect, useState } from 'react';


const App = () => {
  const [soundResponse, setSoundResponse] = useState([]);
  // const [individualSound, setIndividualSound] = useState([]);

  useEffect(() => {
    fetchSounds();
  }, [])
  
  const fetchSounds = async () => {
    
    const response = await fetch(
      'https://freesound.org/apiv2/search/text/?query=foley&fields=name,previews&token=vRRn3ZQLLXupLLdLHet54ZixwLEJM2didFmnFY0k'
    )
    const results = await response.json();
    
    setSoundResponse(results)
  }

  const chooseSound = (allResults) => {
    // console.log(results.results.length)
    const randomIndex = Math.floor(Math.random() * allResults.results.length);
    console.log(randomIndex)
    const item = allResults.results[randomIndex];
    console.log(item)
  }
  
  return (
    <div className="App">
      {/* <button onClick={fetchSounds}>result</button> */}
      <SoundCard chooseSound={chooseSound} queryResult={soundResponse}></SoundCard>
    </div>
  );
}

export default App;
