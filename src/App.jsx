import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import CoreApi from './classes/coreApi';
import Header from './components/Header';
import PreviousPage from './components/PreviousPage';
import NextPage from './components/NextPage';
import Locations from './components/Locations';
import logo from './logo.png';

function App() {

  const [locations, setLocation] = useState([]);
  const [page, setPage] = useState({});
  const [newPage, setNewPage] = useState('');


  useEffect(() => {

    const getData = () => {
      const coreApi = new CoreApi();
      coreApi.getLocations(newPage)
        .then(({data}) => {
          const [...results] = data.results;
          const pages = data.info; 
          setLocation(results);
          setPage(pages);
        });
    }
    getData();

  }, [newPage]);


  return (
    <div className='main'>
      <div className="App">
        <Header logo={logo} dataSearch={setLocation} />
        <div className='container-fluid content'>
          <div className="row">
            <div className="col-2 col-xs-1 previousPage">
              <PreviousPage page={page} newPage={setNewPage}/> 
            </div>
            <div className="col-8 col-xs-10 locations">
              <Locations locations={locations}/>
            </div>
            <div className="col-2 col-xs-1 nextPage">
              <NextPage page={page} newPage={setNewPage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
