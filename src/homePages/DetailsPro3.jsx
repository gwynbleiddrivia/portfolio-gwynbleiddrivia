import SkillUsed from './SkillUsed'

const DetailsPro3 = () => {
	return (
		<div>
		<h1 className="effect-logo rounded-lg w-fit p-2 mx-auto text-2xl">Nindo Fusion Camp</h1> 
			<div className="effect-logo rounded-lg flex lg:flex-row flex-col p-2 w-10/12 mx-auto gap-2">
			<div className="flex flex-col gap-2">
				<div className="effect-after rounded-lg p-2">

					<div className="carousel w-full">
					  <div id="item10" className="carousel-item w-full">
					    <img src="https://i.ibb.co/6n9bFjn/nin1.png" className="w-full" />
					  </div> 
					  <div id="item11" className="carousel-item w-full">
					    <img src="https://i.ibb.co/LkhwsZq/nin2.png" className="w-full" />
					  </div> 
					  <div id="item12" className="carousel-item w-full">
					    <img src="https://i.ibb.co/XxG9GdV/nin3.png" className="w-full" />
					  </div> 
					  <div id="item13" className="carousel-item w-full">
					    <img src="https://i.ibb.co/PwqYZnb/nin4.png" className="w-full" />
					  </div>
					</div> 
					<div className="flex justify-center w-full py-2 gap-2">
					  <a href="#item10" className="btn btn-xs">1</a> 
					  <a href="#item11" className="btn btn-xs">2</a> 
					  <a href="#item12" className="btn btn-xs">3</a> 
					  <a href="#item13" className="btn btn-xs">4</a>
					</div>


{/*
https://i.ibb.co/6n9bFjn/nin1.png
https://i.ibb.co/LkhwsZq/nin2.png
https://i.ibb.co/XxG9GdV/nin3.png
https://i.ibb.co/PwqYZnb/nin4.png
*/}







				</div>
				<div className="effect-logo w-full text-start text-xs rounded-lg p-2">
					<h1 className="text-xs">
						Key Features
						<ul className="list-disc marker:text-blue-500 list-inside">
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Home page contains slider, animation. Header and footer with essential links embellishing every page</li>
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Conditional private dashboards for admins, instructors and students to manage users and classes</li>
							<li className="effect-logo w-full p-2 rounded-lg">Dynamic class information, social login and registration implemented, database design facilitates users</li>
						</ul>
					</h1>

				</div>
			</div>

		<div className="flex flex-col gap-2">


			<div className="effect-logo rounded-lg">
				<SkillUsed></SkillUsed>
			</div>
			<div className="effect-logo rounded-lg">
                        	<a target="_blank" href="https://github.com/gwynbleiddrivia/nindo-fusion-public-client" className="px-4 py-2 text-black underline rounded  font-sm text-xs">Client Side</a>
                       	 	<a href="https://github.com/gwynbleiddrivia/nindo-fusion-public-server" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Server  Side</a>
                        	<a href="https://nindo-fusion-camp.web.app/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Live Site</a>
                	</div>

	
		</div>
		
			</div>
		</div>
	);
};

export default DetailsPro3;
