import { weatherLogos } from "./WeatherCard";

interface Props {
	className?: string | undefined;
	forecastData: ForecastData[];
};

export interface ForecastData {
	maxTemperature: string;
	minTemperature: string;
	weather: string;
	day: string;
};

export default function Forecast({ className, forecastData }: Props) {

	return (
		<div className={`px-4 xl:px-5 py-5 xl:py-6 bg-neutral-50 bg-opacity-20 rounded-xl flex-col justify-start items-start gap-4 xl:gap-8 inline-flex ${className}`}>
			<div className="self-stretch justify-start items-center gap-2 inline-flex">
				<img src="/card-forecast.svg" alt="Forecast Logo" className="w-6 md:w-7 xl:w-9 h-6 md:h-7 xl:h-9" />
				<div className="grow shrink basis-0 text-zinc-800 text-2xl xl:text-[32px] font-bold font-['Inter'] leading-7 xl:leading-9">5-day forecast</div>
			</div>
			<div className="self-stretch justify-start items-start flex flex-wrap -m-2 md:-m-2.5 xl:-m-3">
				{forecastData.map((item, index) => (
					<WeatherCard
						key={item.day}
						className={index === 0 ? "xl:border-t-0" : ""}
						maxTemperature={item.maxTemperature}
						minTemperature={item.minTemperature}
						weather={item.weather}
						day={item.day}
					/>
				))}
			</div>
		</div>
	)
}

interface PropsWeatherCard {
	className?: string | undefined;
	maxTemperature: string;
	minTemperature: string;
	weather: string;
	day: string;
};

function WeatherCard({ className, maxTemperature, minTemperature, weather, day }: PropsWeatherCard) {
	return (
		<div className={`flex flex-col w-full p-2 md:p-2.5 md:w-1/3 xl:p-3 xl:w-full xl:py-6 xl:border-t-2 xl:border-gray-200 ${className}`}>
			<div className="justify-start items-start gap-3 inline-flex w-full grow">
				<img src={weatherLogos[weather]} alt="Weather Logo" className="w-12 h-12 xl:w-14 xl:h-14" />
				<div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex xl:gap-2">
					<div className="self-stretch text-zinc-800 text-xl font-bold font-['Inter'] leading-normal xl:text-2xl xl:leading-7">{day}</div>
					<div className="self-stretch justify-start items-center gap-4 inline-flex xl:gap-6">
						<div className="grow shrink basis-0 text-zinc-800 text-sm font-normal font-['Inter'] leading-[18px] xl:text-base xl:leading-tight">{weather}</div>
						<div className="justify-start items-start gap-4 flex">
							<div className="text-neutral-600 text-xs font-light font-['Inter'] leading-[14px] xl:text-sm xl:leading-none">H: {maxTemperature}</div>
							<div className="text-neutral-600 text-xs font-light font-['Inter'] leading-[14px] xl:text-sm xl:leading-none">L: {minTemperature}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}