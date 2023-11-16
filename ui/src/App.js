import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/weatherforecast`).then(res => {
      setData(res.data);
    })
  }, []);
  return (
    <div className="App" style={{width: '90vw', margin: 'auto'}}>
      <br/>
      Weather App <sub>by nodaddy</sub>
      <p>Hosted with Kubernetes on GCP</p>
      <br/>
      <br/>
      <p align="left" style={{textDecoration: 'underline'}}>
      {
        data ? "The following data was fetched from the weather api hosted inside the same Kubernetes cluster as this UI app" : "fething data from the api"
      }
      </p>
      <div align="left" style={{ margin: 'auto'}}>
      {
        data?.map(i => {
          return <>
                    <div style={{backgroundColor: 'antiquewhite', padding: '5px 10px'}}>
                    <ul>
                      <li>{i.date}</li>
                      <li>{i.summary}</li>
                    </ul>
                    </div>
                    <hr/>
                </>
        })
      }
    </div>
    </div>
  );
}

export default App;
