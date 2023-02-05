import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader } from 'mdb-react-ui-kit';
import Graph from './graphs.js';
import graph1 from "../imgs/chart 1.png";
import graph2 from "../imgs/chart 2.png";
import music from "../imgs/IMG_7622.jpg";
import map from "../imgs/map.png";
function Header() {
  return (
    <div className='pt-6'>
      <span className='px-8 mt-8 text-6xl text-slate-50'>Welcome Farmer Aidan!</span>
      <div className='ml-16 mr-16 grid grid-cols-3 gap-2'>

        <div className="flex sm:flex-row sm:text-left px-8">
          <div className='flex-col'>
            <Graph src={graph1} />
            <Graph src={graph2} />
          </div>
        </div>
        <div>
          <img className="rounded-md mt-8 h-[69vh]" src={music} alt="music player"></img>
        </div>
        <div>
          <img className="rounded-md mt-8 h-[69vh]" src={map} alt="music player"></img>
        </div>
      </div >
    </div>
  );
}

export default Header;