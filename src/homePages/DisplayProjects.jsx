import { Link } from 'react-router-dom'

const DisplayProjects = () => {
	return (
<div className="flex flex-col justify-between effect-logo rounded-lg p-2 gap-1">
	<div className="flex justify-between effect-logo rounded-lg p-2 gap-1">
<div class="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div class="h-full animation-scroll">
    <img class="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
  </div>
  <div class="opacity-0 transition-opacity duration-300 absolute backdrop-blur bg-[#d3d3d3]/50 inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Labyrinth Gaming</p>
    <div className="flex">
	 <Link to="https://github.com/gwynbleiddrivia/labyrinth-gaming-public-client/tree/main/labyrinth-gaming-client">  <small class="px-4 py-2 text-black underline rounded font-sm">Client Side</small> </Link>   
	<small class="px-4 py-2 text-black underline rounded font-sm">Server Side</small>
    </div>
    <div className="flex">
	 <small class="px-4 py-2 text-black underline rounded font-sm">See Details</small>
    	<small class="px-4 py-2 text-black underline rounded font-sm">Go to Live Site</small>
    </div>
     </div>
</div>

<div class="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div class="h-full animation-scroll">
    <img class="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
  </div>
  <div class="opacity-0 transition-opacity duration-300 absolute bg-[#d3d3d3] inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Labyrinth Gaming</p>
    <div className="flex">
	 <small class="px-4 py-2 text-blue-500 rounded font-sm">Client Side Code</small>
    	<small class="px-4 py-2 text-blue-500 rounded font-sm">Server Side Code</small>
    </div>
    <div className="flex">
	 <small class="px-4 py-2 text-blue-500 rounded font-sm">See Details</small>
    	<small class="px-4 py-2 text-blue-500 rounded font-sm">Go to Live Site</small>
    </div>
     </div>
</div>

<div class="w-48 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div class="h-full animation-scroll">
    <img class="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
  </div>
  <div class="opacity-0 transition-opacity duration-300 absolute bg-[#d3d3d3] inset-0 flex gap-1 justify-center items-center group-hover:opacity-100 flex flex-col">
    <p>Labyrinth Gaming</p>
    <div className="flex">
	 <small class="px-4 py-2 text-blue-500 rounded font-sm">Client Side Code</small>
    	<small class="px-4 py-2 text-blue-500 rounded font-sm">Server Side Code</small>
    </div>
    <div className="flex">
	 <small class="px-4 py-2 text-blue-500 rounded font-sm">See Details</small>
    	<small class="px-4 py-2 text-blue-500 rounded font-sm">Go to Live Site</small>
    </div>
     </div>
</div>


		</div>
	<p className="effect-logo rounded-lg mx-auto w-fit p-1">My 3 best projects</p>
	</div>
	);
};

export default DisplayProjects;
