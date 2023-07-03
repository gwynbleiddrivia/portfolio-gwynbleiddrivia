import SkillUsed from './SkillUsed'

const DetailsPro2 = () => {
	return (
		<div>
		<h1 className="effect-logo rounded-lg w-fit p-2 mx-auto text-2xl">Afghan Cuisine Corner</h1> 
			<div className="effect-logo rounded-lg flex flex-col lg:flex-row p-2 w-10/12 mx-auto gap-2">
			<div className="flex flex-col gap-2">
				<div className="effect-after rounded-lg p-2">

					<div className="carousel w-full">
					  <div id="item6" className="carousel-item w-full">
					    <img src="https://i.ibb.co/gMsXvj0/afg1.png" className="w-full" />
					  </div> 
					  <div id="item7" className="carousel-item w-full">
					    <img src="https://i.ibb.co/bz9gf5V/afg2.png" className="w-full" />
					  </div> 
					  <div id="item8" className="carousel-item w-full">
					    <img src="https://i.ibb.co/jRZ7ysm/afg3.png" className="w-full" />
					  </div> 
					  <div id="item9" className="carousel-item w-full">
					    <img src="https://i.ibb.co/6y2Y33n/afg4.png" className="w-full" />
					  </div>
					</div> 
					<div className="flex justify-center w-full py-2 gap-2">
					  <a href="#item6" className="btn btn-xs">1</a> 
					  <a href="#item7" className="btn btn-xs">2</a> 
					  <a href="#item8" className="btn btn-xs">3</a> 
					  <a href="#item9" className="btn btn-xs">4</a>
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
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Food gallery swiper, cards with button for chef information</li>
							<li className="effect-logo w-full p-2 rounded-lg mb-1">Header and footer across all pages for navigation, blog with pdf system implementation</li>
							<li className="effect-logo w-full p-2 rounded-lg">User friendly login and registration system with social login, 404 error page in case of wrong link</li>
						</ul>
					</h1>

				</div>
			</div>

		<div className="flex flex-col gap-2">


			<div className="effect-logo rounded-lg">
				<SkillUsed></SkillUsed>
			</div>
			<div className="effect-logo rounded-lg">
                        	<a target="_blank" href="https://github.com/gwynbleiddrivia/afghan-cuisine-public-client" className="px-4 py-2 text-black underline rounded  font-sm text-xs">Client Side</a>
                       	 	<a href="https://github.com/gwynbleiddrivia/afghan-cusine-public-server" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Server  Side</a>
                        	<a href="https://afghan-cuisine-corner.web.app/" target="_blank" className="px-4 py-2 text-black underline rounded font-sm text-xs">Live Site</a>
                	</div>

	
		</div>
		
			</div>
		</div>
	);
};

export default DetailsPro2;
