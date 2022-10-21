// Import data
import react from 'react';
import { postings } from './postings';
// Import components
import './App.css';
import Searchbar from './components/search'
import Directory from './components/directory';
import Gallery from './components/gallery';
import Sidebar from './components/sidebar';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar/>
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
