import CountUp from 'react-countup';
import Marquee from "react-marquee-slider";


const LeetcodeCounter = () => {
	const items= ['Hashtable, ','Window Sliding Method, ']
	return (
	<div className="flex flex-col lg:flex-row justify-between gap-2">

			<div className="effect-logo rounded-lg flex flex-col justify-center m-auto w-fit gap-1 p-2">
				<div className="rounded-lg flex flex-col justify-center m-auto w-full gap-1">
					<div className="effect-logo rounded-lg flex justify-between gap-2 mx-auto w-full p-2">
						<small className ="w-fit text-start m-auto">Leetcode <br/>Solved</small>
					
						<a href="https://leetcode.com/md_yasin_arafat/" target="_blank" className="w-fit m-auto effect-logo rounded p-1">
						<CountUp duration={1} end={5} suffix=""/>
						</a>  


					</div>
					<div className="effect-logo rounded-lg flex flex-col justify-center m-auto w-fit p-1" style={{ width: '100px', height: '30px' }}>
					
						<Marquee velocity={10}>
							{items.map(item=>{
								return <div className="text-xs w-fit">
									{item}
								</div>
							})}
						</Marquee>


					</div>
			
				</div>
			


			</div>


			<div className="effect-logo rounded-lg flex flex-col justify-center m-auto w-fit gap-1 p-2">
				<div className="rounded-lg flex flex-col justify-center m-auto w-full gap-1">
					<div className="effect-logo rounded-lg flex justify-between gap-2 mx-auto w-full p-2">
						<small className ="w-fit text-start m-auto">HackerRank <br/>Solved</small>
					
						<a href="https://www.hackerrank.com/yasinzme2?hr_r=1" target="_blank" className="w-fit m-auto effect-logo rounded p-1">
						<CountUp duration={1} end={7} suffix=""/>
						</a>  


					</div>
					<div className="effect-logo rounded-lg flex flex-col justify-center m-auto w-fit p-1" style={{ width: '100px', height: '30px' }}>
					
						<Marquee velocity={10}>
							{items.map(item=>{
								return <div className="text-xs w-fit">
									{item}
								</div>
							})}
						</Marquee>


					</div>
			
				</div>
			


			</div>



			<div className="effect-logo rounded-lg flex flex-col justify-center mx-auto w-fit gap-2 p-2">
					<div className="effect-logo rounded-lg flex justify-between gap-2 mx-auto w-fit p-2">
					
						<div className="w-fit m-auto effect-logo rounded p-1">
						<CountUp duration={1} end={3} suffix="+"/>
						</div>  
						<small className ="w-fit text-start m-auto">years</small>


					</div>
				<div className="effect-logo rounded-lg w-fit m-auto p-1 text-xs">Research Experience</div>
			


			</div>
	
	</div>
	);
};

export default LeetcodeCounter;
