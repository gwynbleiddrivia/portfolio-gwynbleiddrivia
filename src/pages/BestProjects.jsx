import DetailsPro1 from '../homePages/DetailsPro1'
import DetailsPro2 from '../homePages/DetailsPro2'
import DetailsPro3 from '../homePages/DetailsPro3'
import ScrollToTopButton from '../ScrollToTopButton'


const BestProjects = () => {

	return (
		
		<div className="flex flex-col justify-between gap-10 mt-10">
		<h1 className="effect-logo rounded-lg w-fit p-2 mx-auto text-5xl">Best Projects</h1> 

			<DetailsPro1></DetailsPro1>
			<DetailsPro3></DetailsPro3>
			<DetailsPro2></DetailsPro2>

		<ScrollToTopButton/>
		</div>
	);
};

export default BestProjects;
