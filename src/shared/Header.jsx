import { NavLink, Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString1 = `<Md Yasin Arafat`
const codeString2 = `Khondoker's portfolio/>`


const Header = () => {
  	return (
		<div className="flex justify-between mb-3">
			<Link to="/">
			
				<div className="effect-logo rounded-br-3xl rounded-tl-3xl px-3 py-2">
	
					<pre>
					<code>

						{codeString1}<br/>
						{codeString2}
					</code>

					</pre>  
				</div>
			</Link>
			{/*<div className="border-double border-4 border-black rounded-lg py-3 px-2 flex gap-10">*/}
			<div className="effect-logo rounded-lg py-4 px-6 flex gap-10">
				<NavLink className={({isActive})=>isActive?"effect-after text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg"} to="/">Home</NavLink>
				<NavLink className={({isActive})=>isActive?"effect-after text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg"} to="/resume">Resume</NavLink>
				<NavLink className={({isActive})=>isActive?"effect-after text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg"} to="/projects">See All Projects</NavLink>
				<NavLink className={({isActive})=>isActive?"effect-after text-emerald-900 rounded-lg text-xl p-2":"effect-before text-xl p-2 rounded-lg"} to="/contact">Contact Me</NavLink>
			</div>
			<div>
				<NavLink className={({isActive})=>isActive?"effect-after text-xl p-2 rounded":"effect-logo text-xl p-2 rounded-lg"} to="/resume">Download Resume</NavLink>
			</div>


		</div>
	);
};

export default Header;
