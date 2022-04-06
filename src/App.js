import './App.css';
import {BrowserRouter} from "react-router-dom";
import Layout from './Layout/Layout';

// => 1. home => /
// => 2. about us => '/about-us'

function App() {
  return (
   <BrowserRouter>
     <Layout>
          
     </Layout>
   </BrowserRouter>
  );
}


export default App;
