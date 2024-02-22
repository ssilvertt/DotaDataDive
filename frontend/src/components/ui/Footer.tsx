const Footer = () => {
	return (
		<footer className='bg-black text-neutral-600  p-4 text-center leading-3'>
			<div className='flex flex-row justify-center mb-5 mt-2 space-x-20'>
				<a href="#">
					<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png" alt="" className='h-[30px]'/>
				</a>
				
				<a href="#">
					<img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/dota_footer_logo.png" alt="" className='h-[30px]'/>
				</a>
			</div>
			<small className='text-s font-radiance tracking-tighter'>
				Dota and the Dota logo are trademarks and/or registered trademarks of
				Valve <br /> Corporation. 2023 Valve Corporation, all rights reserved.
			</small>
		</footer>
	);
};

export default Footer;
