import GitHubCalendar from 'react-github-calendar';
import DisplayProjects from '../homePages/DisplayProjects'
import SkillShowcase from '../homePages/SkillShowcase'
import PublicationShort from '../homePages/PublicationShort'


const Home = () => {
	const selectLastHalfYear = contributions => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
        	const shownMonths = 6;
	  	return contributions.filter(activity => {
	    		const date = new Date(activity.date);
	    		const monthOfDay = date.getMonth();

	    		return (
	      			date.getFullYear() === currentYear &&
	      			monthOfDay > currentMonth - shownMonths &&
	      			monthOfDay <= currentMonth
	    			);
	  		});
		};
	return (
		<div>
			<div className="flex justify-between gap-8">
					<div className="flex flex-col">
						<div className="flex justify-between gap-20 mb-3">
							{/*<img src="https://i.ibb.co/2gmD38q/ProPic.jpg" className="w-32 h-32 p-2 effect-logo rounded-lg" alt="Profile Photo"/>*/}
							<div className="p-2 effect-logo rounded-lg h-fit">

								<GitHubCalendar hideTotalCount hideColorLegend username="gwynbleiddrivia" colorScheme='light' blockRadius='3' labels="My Github calendar" transformData={selectLastHalfYear}/>
								<p className="font-sm effect-logo w-fit mx-auto m-1 p-1 rounded-lg">Github Contributions</p>
							</div>
							{/*<img className="flicker-animation w-2/5 mx-auto effect-logo rounded-lg" src="https://i.ibb.co/hFrSbQ6/wordcloud-1.png" alt=""/>*/}
							<SkillShowcase></SkillShowcase>
						</div>
						<div className="flex">
							<div className="flex flex-col">
								<DisplayProjects></DisplayProjects>
							</div>
							<PublicationShort></PublicationShort>
						</div>
							
					</div>
				<div>

				</div>
			</div>

		</div>
	);
};

export default Home;
