import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const IP_DATA_KEY = 'dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
const GOOGLE_KEY = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk'

function App() {

  const [location, setLocation] = useState({})

  useEffect(() => {
    async function fetchData() {
      const ipData = await axios.get(`https://api.ipdata.co?api-key=${IP_DATA_KEY}`)
      setLocation(ipData.data)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <p>City Name: {location.city}</p>
      <p>Country Name: {location.country_name}</p>
      <iframe title="googleFrame"
        width="600"
        height="450"
        frameBorder="0" 
        src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}
    &q=${location.city}, ${location.country_name}`} allowFullScreen>
      </iframe>
    </div>
  );
}

export default App;
