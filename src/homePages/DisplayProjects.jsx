
const DisplayProjects = () => {
	return (
		<div className="flex justify-between effect-logo rounded-lg p-2 gap-1">
<div class="w-52 h-28 overflow-hidden shadow-md relative group rounded-lg effect-logo">
  <div class="h-full animation-scroll">
    <img class="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
  </div>
  <div class="opacity-0 transition-opacity duration-300 absolute bg-[#d3d3d3] inset-0 flex justify-center items-center group-hover:opacity-100">
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Test</button>
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Test</button>
  </div>
</div>



			<div className="relative w-52 h-28 overflow-hidden rounded-lg">
			  <div className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform hover:scale-105 hover:overflow-y-scroll">
			    <img className="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
			  </div>
			</div>
			<div className="relative w-52 h-28 overflow-hidden rounded-lg">
			  <div className="absolute top-0 left-0 w-full h-full transition-transform duration-300 transform hover:scale-105 hover:overflow-y-scroll">
			    <img className="rounded-lg" src="https://i.ibb.co/j48xSfg/Labyrinth-Gaming.jpg" alt=""/>
			  </div>
			</div>

		</div>
	);
};

export default DisplayProjects;
