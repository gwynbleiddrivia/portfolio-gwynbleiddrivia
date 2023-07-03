import { NavLink, Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect } from 'react';


const codeString1 = `<Md Yasin Arafat`
const codeString2 = `Khondoker's portfolio/>`


const Header = () => {
	  useEffect(() => {
	    const handleDownload = () => {
	      const link = document.createElement('a');
	      link.href = `${window.location.origin}/public/resume.pdf`;
	      link.download = 'MdYasinArafat_resume.pdf';
	      link.click();
	    };

	    const downloadButton = document.getElementById('download-button');
	    downloadButton.addEventListener('click', handleDownload);

	    return () => {
	      downloadButton.removeEventListener('click', handleDownload);
	    };
	  }, []);






  	return (
		<div className="flex flex-col lg:flex-row justify-between mb-3">
			<Link to="/">
			
				<div className="effect-logo rounded-br-3xl rounded-tl-3xl px-1 py-1 text-emerald-900 mb-1">
	
					<pre>
					<code>

                                <TypeAnimation
                                        sequence={[
                                                `<Md Yasin Arafat`
]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '', display: 'inline-block' }}/><br/>
                                <TypeAnimation
                                        sequence={[
                                                `Khondoker's portfolio/>`
]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '', display: 'inline-block' }}/>

					</code>

					</pre>  
				</div>
				<div className="text-sm effect-logo rounded-br-xl rounded-tl-xl px-1 py-1 text-emerald-900">
				MERN stack developer | Machine Learning Researcher
				</div>
			</Link>
			{/*<div className="border-double border-4 border-black rounded-lg py-3 px-2 flex gap-10">*/}
			<div className="effect-logo rounded-lg py-4 px-6 flex flex-col lg:flex-row gap-10">
				<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg my-auto"} to="/">At A Glance</NavLink>
				<NavLink className={({isActive})=>isActive?"effect-after my-auto text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg my-auto"} to="/bestprojects">Best Projects</NavLink>
				<NavLink className={({isActive})=>isActive?"effect-after text-emerald-900 rounded-lg text-xl p-2 my-auto":"effect-before text-xl p-2 rounded-lg my-auto"} to="/foo">Contact Me</NavLink>
			</div>
			<div>
				<button id="download-button" className="effect-before text-xl p-2 rounded-lg">Download Resume</button>
			</div>


		</div>
	);
};

export default Header;
