import Image from "next/image";

export default function Home() {
	return (
		<div className="h-screen w-screen bg-slate-900 flex justify-center items-center">
			<div className="h-[600px] w-[800px] flex flex-col justify-around text-white font-mono">
				<div className="w-full h-[10%] flex justify-between items-center">
					<h1 className="font-black text-3xl">devfinder</h1>
					<a href="https://github.com/armeetjatyani" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
				</div>
				<div className="w-full h-[10%] flex justify-center items-center text-gray-300">
					<div className="w-full h-full bg-slate-800 rounded-2xl flex justify-between items-center overflow-hidden">
						<svg className="mx-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
						<input className="outline-none border-none w-[75%] h-[70%] bg-transparent text-lg font-semibold" type="text" name="search" placeholder="Search GitHub @username..."></input>
						<button className="px-6 h-[80%] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg font-bold text-lg mr-4">Search</button>
					</div>
				</div>
        <div className="w-full h-[70%] flex justify-center items-center">
          <div className="bg-slate-800 w-full h-full rounded-2xl flex">

          </div>
        </div>
			</div>
		</div>
	);
}
