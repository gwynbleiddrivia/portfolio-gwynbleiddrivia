import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const PublicationShort = () => {
	return (
		<div className="flex flex-col justify-between effect-logo rounded-lg p-2 gap-1 h-fit">
			<div className="flex flex-col justify-between effect-logo rounded-lg p-2 gap-1 text-start text-sm" >
			<div className="text-sm text-emerald-900">
		<TypeAnimation
      					sequence={[     
						"[1] Argument Mining on Clinical Trial Abstracts on Lung Cancer Patients"
]}
      					wrapper="span"
      					speed={50}
      					style={{ fontSize: '', display: 'inline-block' }}/>


			</div>
					<div className="">
				<div className="flex lg:flex-row flex-col justify-between">

				<p className="text-xs font-sm">Publisher Name: Springer, Singapore</p>
				<p className="text-xs font-sm">Publication Date: 28 May 2023

</p>
				</div>
				<div className="flex lg:flex-row flex-col justify-between">
				
				<a className="text-xs font-sm underline" href="https://doi.org/10.1007/978-981-19-9483-8_5" target="_blank" title="Arafat Khondoker, M.Y., Abu Yousuf, M. (2023). Argument Mining on Clinical Trial Abstracts on Lung Cancer Patients. In: Kaiser, M.S., Waheed, S., Bandyopadhyay, A., Mahmud, M., Ray, K. (eds) Proceedings of the Fourth International Conference on Trends in Computational and Cognitive Engineering. Lecture Notes in Networks and Systems">DOI Link</a>
				<a className="text-xs font-sm underline" href="https://github.com/gwynbleiddrivia/arg_min">Github Code Link</a>
				</div>
			</div>
			</div>


			<p className="effect-logo p-1 rounded-lg">Recent Publications</p>
			

		</div>
	);
};

export default PublicationShort;
