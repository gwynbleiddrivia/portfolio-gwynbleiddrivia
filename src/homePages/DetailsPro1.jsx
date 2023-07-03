import SkillUsed from './SkillUsed'

const DetailsPro1 = () => {
	return (
		<div>
			<h1 className="effect-logo rounded-lg w-fit p-2 mx-auto text-2xl">Labyrinth Gaming</h1>
			<div className="effect-logo rounded-lg flex lg:flex-row flex-col p-2 w-10/12 mx-auto gap-2">
			<div className="flex flex-col gap-2">
				<div className="effect-after rounded-lg p-2">

					<div className="carousel w-full">
					  <div id="item1" className="carousel-item w-full">
					    <img src="https://i.ibb.co/stsqsjq/lab1.png" className="w-full" />
					  </div> 
					  <div id="item2" className="carousel-item w-full">
					    <img src="https://i.ibb.co/r4wxKk2/lab2.png" className="w-full" />
					  </div> 
					  <div id="item3" className="carousel-item w-full">
					    <img src="https://i.ibb.co/F3Ryc8w/lab3.png" className="w-full" />
					  </div> 
					  <div id="item4" className="carousel-item w-full">
					    <img src="https://i.ibb.co/m9HMN1m/lab4.png" className="w-full" />
					  </div>
					  <div id="item5" className="carousel-item w-full">
					    <img src="https://i.ibb.co/QfBrYww/lab5.png" className="w-full" />
					  </div>
					</div> 
					<div className="flex justify-center w-full py-2 gap-2">
					  <a href="#item1" className="btn btn-xs">1</a> 
					  <a href="#item2" className="btn btn-xs">2</a> 
					  <a href="#item3" className="btn btn-xs">3</a> 
					  <a href="#item4" className="btn btn-xs">4</a>
					  <a href="#item5" className="btn btn-xs">5</a>
					</div>


{/*
https://i.ibb.co/stsqsjq/lab1.png
https://i.ibb.co/r4wxKk2/lab2.png
https://i.ibb.co/F3Ryc8w/lab3.png
https://i.ibb.co/m9HMN1m/lab4.png
https://i.ibb.co/QfBrYww/lab5.png

*/}







				</div>
				<div className="effect-logo w-full text-start text-xs rounded-lg p-2">
					<h1 className="text-xs">
						Key Features
						<ul className="list-disc marker:text-blue-500 list-inside">
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Captivating banner, stunning carousel, categorizing tabs, dynamic sliding texts to enhance aesthetics</li>
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Intuitive navbar and footer across all pages and secure private page routes for to manage products</li>
							<li className="effect-logo w-full p-2 rounded-lg">Dynamic page routes for comprehensive product details as well as a user-friendly 404 error page</li>
						</ul>
					</h1>

				</div>
			</div>

		<div className="flex flex-col gap-2">


			<div className="effect-logo rounded-lg">
				<SkillUsed></SkillUsed>
			</div>
			<div className="effect-logo rounded-lg">
                        	<a target="_blank" href="https://github.com/gwynbleiddrivia/labyrinth-gaming-    public-     client/tree/main/labyrinth-gaming-client" className="px-4 py-2 text-black underline rounded  font-sm text-xs">Client Side</a>
                       	 	<a href="https://github.com/gwynbleiddrivia/labyrinth-gaming-public-server/      "             target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Server  Side</a>
                        	<a href="https://labyrinth-gaming.web.app/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Live Site</a>
                	</div>

	
		</div>
		
			</div>
		</div>
	);
};

export default DetailsPro1;
