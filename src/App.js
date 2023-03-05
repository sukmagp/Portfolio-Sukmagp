import './App.css';
import About from './component/about';
import Banner from './component/banner';
import Contact from './component/contact';
import Header from './component/header';
import Nav from './component/navbar';
import Services from './component/services';
import Work from './component/work';
import Project from './pages/project';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Project/>
      {/* <div className='w-auto'></div> */}
    </div>
  );
}

export default App;
