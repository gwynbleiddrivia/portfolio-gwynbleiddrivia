import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProjects = () => {
	return (
<div className="flex flex-col justify-between effect-logo rounded-lg p-2 gap-1">
	<div className="flex lg:flex-row flex-col justify-between effect-logo rounded-lg p-2 gap-1">
<div className="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div className="h-full animation-scroll">
    <img className="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
  </div>
  <div className="opacity-0 transition-opacity duration-300 absolute backdrop-blur bg-[#d3d3d3]/20 inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Labyrinth Gaming</p>
    <div className="flex">
	 
	 	<a target="_blank" href="https://github.com/gwynbleiddrivia/labyrinth-gaming-public-client/tree/main/labyrinth-gaming-client" className="px-4 py-2 text-black underline rounded font-sm text-xs">Client Side</a>   

 		<a href="https://github.com/gwynbleiddrivia/labyrinth-gaming-public-server/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Server Side</a>
    </div>
    <div className="flex">

		<Link to="/detpro1">

		<small className="px-4 py-2 text-black underline rounded font-sm">See Details</small>

		</Link>
    		

		<a href="https://labyrinth-gaming.web.app/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Go to Live Site</a>
    </div>
     </div>
</div>




<div className="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div className="h-full animation-scroll">
    <img className="rounded-lg" src="https://i.ibb.co/ncBkzMb/Nindo-Fusion-Camp.jpg" alt=""/>
  </div>
  <div className="opacity-0 transition-opacity duration-300 absolute backdrop-blur bg-[#d3d3d3]/20 inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Nindo Fusion Camp</p>
    <div className="flex">
	 <a href="https://github.com/gwynbleiddrivia/nindo-fusion-public-client" target="_blank" className="text-xs px-4 py-2 text-black underline rounded font-sm">Client Side</a>   
 	<a href="https://github.com/gwynbleiddrivia/nindo-fusion-public-server" target="_blank" className="text-xs px-4 py-2 text-black underline rounded font-sm">Server Side</a>
    </div>
    <div className="flex">
    	<Link to="/detpro3">
	 	<small className="px-4 py-2 text-black underline rounded font-sm">See Details</small>

	</Link>
  	<a href="https://nindo-fusion-camp.web.app/" target="_blank" className="text-xs px-4 py-2 text-black underline rounded font-sm">Go to Live Site</a>
    </div>
     </div>
</div>













<div className="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div className="h-full animation-scroll">
    <img className="rounded-lg" src="https://i.ibb.co/0mxQCY5/Afghan-Cuisine.jpg" alt=""/>
  </div>
  <div className="opacity-0 transition-opacity duration-300 absolute backdrop-blur bg-[#d3d3d3]/20 inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Afghan Cuisine Corner</p>
    <div className="flex">
	 <a href="https://github.com/gwynbleiddrivia/afghan-cuisine-public-client/tree/main/afghan-cuisine-corner" target="_blank" className="text-xs px-4 py-2 text-black underline rounded font-sm">Client Side</a>  

 	<a href="https://github.com/gwynbleiddrivia/afghan-cusine-public-server/tree/main/afghan-cuisine-corner-server" target="_blank" className="text-xs px-4 py-2 text-black underline rounded font-sm text-xs">Server Side</a>
    </div>
    <div className="flex">
    <Link to="/detpro2">
	 <small className="px-4 py-2 text-black underline rounded font-sm">See Details</small>

    </Link>
    		<a href="https://afghan-cuisine-corner.web.app/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Go to Live Site</a>
    </div>
     </div>
</div>













		</div>
	<p className="effect-logo rounded-lg mx-auto w-fit p-1">Best Projects</p>
	</div>
	);
};

export default DisplayProjects;
