export const weatherLogos: { [key: string]: string } = {
	'Rain': '/weather-rainy.svg',
	'Few clouds': '/weather-partly_cloudy_day.svg',
	'Scattered clouds': '/weather-cloud.svg',
	'Thunderstorm': '/weather-thunderstorm.svg',
};

interface Props {
	className?: string | undefined;
	weather: string;
	location: string;
	temperature: string;
	maxTemperature: string;
	minTemperature: string;
	feelsLike: string;
};

export default function WeatherCard({ className, weather, location, temperature, maxTemperature, minTemperature, feelsLike }: Props) {

	return (
		<div className={`flex-col items-start gap-5 inline-flex flex-wrap md:gap-8 md:flex-row ${className}`}>
			<div className="self-stretch justify-start items-center gap-2 inline-flex md:flex-col">
				<img src={weatherLogos[weather]} alt="Weather Logo" className="w-16 h-16 md:w-32 md:h-32 xl:w-[162px] xl:h-[162px]" />
				<div className="grow shrink basis-0 text-zinc-800 text-lg font-bold font-['Inter'] leading-tight xl:text-xl xl:leading-normal">{weather}</div>
			</div>
			<div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
				<div className="self-stretch text-zinc-800 text-[56px] font-bold font-['Inter'] leading-[56px] xl:text-7xl xl:leading-[72px]">{location}</div>
				<div className="justify-start items-center gap-6 inline-flex">
					<div className="text-zinc-800 text-[56px] font-bold font-['Inter'] leading-[56px] xl:text-7xl xl:leading-[72px]">{temperature}</div>
					<div className="flex-col justify-center items-start gap-3 inline-flex">
						<div className="justify-start items-start gap-4 inline-flex">
							<div className="text-zinc-800 text-xl font-bold font-['Inter'] leading-normal xl:text-2xl xl:leading-7">H: {maxTemperature}</div>
							<div className="text-zinc-800 text-xl font-bold font-['Inter'] leading-normal xl:text-2xl xl:leading-7">L: {minTemperature}</div>
						</div>
						<div className="justify-start items-start gap-2 inline-flex">
							<div className="text-zinc-800 text-base font-bold font-['Inter'] leading-[18px] xl:text-lg xl:leading-tight">Feels like:</div>
							<div className="text-zinc-800 text-base font-bold font-['Inter'] leading-[18px] xl:text-lg xl:leading-tight">{feelsLike}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
