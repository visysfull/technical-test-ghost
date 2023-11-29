'use client'

import { useEffect, useState } from 'react'

import WeatherCard from '@/components/WeatherCard'
import Wind from '@/components/Wind'
import Humidity from '@/components/Humidity'
import Precipitation from '@/components/Precipitation'
import UV from '@/components/UV'
import Cloudiness from '@/components/Cloudiness'
import Visibility from '@/components/Visibility'
import Pressure from '@/components/Pressure'
import Forecast, { ForecastData } from '@/components/Forecast'
import ForecastButton from '@/components/ForecastButton'

interface WeatherData {
	forecastData: ForecastData[];
	weather: string;
	location: string;
	temperature: string;
	maxTemperature: string;
	minTemperature: string;
	feelsLike: string;
	windSpeed: string;
	windGust: string;
	windDirection: string;
	humidityPercentage: string;
	precipitationLastHour: string;
	precipitationLastThreeHours: string;
	ultravioletScale: string;
	ultravioletDetails: string;
	cloudiness: string;
	visibilityDistance: string;
	pressure: string;
};

const defaultValues = {
	weather: '',
	location: '',
	temperature: '',
	maxTemperature: '',
	minTemperature: '',
	feelsLike: '',
	windSpeed: '',
	windGust: '',
	windDirection: '',
	humidityPercentage: '',
	precipitationLastHour: '',
	precipitationLastThreeHours: '',
	ultravioletScale: '',
	ultravioletDetails: '',
	cloudiness: '',
	visibilityDistance: '',
	pressure: '',
	forecastData: []
};

export default function Home() {
	const [showForecast, setShowForecast] = useState<boolean>(false);
	const [data, setData] = useState<WeatherData>(defaultValues);

	useEffect(() => {
		getData().then(setData)
	}, []);

	return (
		<main>
			<div className='p-2 md:p-[22px] xl:p-3.5 xl:pl-10 bg-gray-500 flex flex-row flex-wrap'>
				<div className='flex flex-col p-2 w-full'>
					<WeatherCard
						className='grow'
						weather={data.weather}
						location={data.location}
						temperature={data.temperature}
						maxTemperature={data.maxTemperature}
						minTemperature={data.minTemperature}
						feelsLike={data.feelsLike}
					/>
				</div>
				<div className='flex flex-col p-2 w-full md:p-2.5 md:w-2/3 xl:p-3.5 xl:w-[63%]'>
					<Wind className='grow' windSpeed={data.windSpeed} windGust={data.windGust} windDirection={data.windDirection} />
				</div>

				<div className='flex flex-col p-2 w-full md:p-2.5 md:w-1/3 xl:p-3.5 xl:w-[37%]'>
					<Humidity className='grow' humidityPercentage={data.humidityPercentage} />
				</div>

				<div className='flex flex-col p-2 w-full md:p-2.5 md:w-1/2 xl:p-3.5 xl:w-[37%]'>
					<Precipitation className='grow' precipitationLastHour={data.precipitationLastHour} precipitationLastThreeHours={data.precipitationLastThreeHours} />
				</div>

				<div className='flex flex-col p-2 w-full md:p-2.5 md:w-1/2 xl:p-3.5 xl:order-2 xl:w-[26%]'>
					<UV className='grow' ultravioletScale={data.ultravioletScale} ultravioletDetails={data.ultravioletDetails} />
				</div>

				<div className='flex flex-col p-2 w-full md:p-2.5 md:w-1/3 xl:p-3.5 xl:order-1 xl:w-[37%]'>
					<Cloudiness className='grow' cloudiness={data.cloudiness} />
				</div>

				<div className='flex flex-col p-2 w-1/2 md:p-2.5 md:w-1/3 xl:p-3.5 xl:order-4 xl:w-[37%]'>
					<Visibility className='grow' visibilityDistance={data.visibilityDistance} />
				</div>

				<div className='flex flex-col p-2 w-1/2 md:p-2.5 md:w-1/3 xl:p-3.5 xl:order-5 xl:w-[37%]'>
					<Pressure className='grow' pressure={data.pressure} />
				</div>

				<div className={`flex flex-col p-2 w-full md:p-2.5 xl:fixed xl:top-0 xl:left-0 xl:w-1/3 xl:bg-neutral-50 xl:h-full xl:py-10 xl:pr-2 xl:pl-11 xl:z-20 ${showForecast ? '' : 'xl:hidden'}`}>
					<Forecast className='grow' forecastData={data.forecastData} />
				</div>

				<div className={`hidden fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50 z-10 ${showForecast ? 'xl:flex' : ''}`} onClick={() => setShowForecast(false)} />

				<div className='hidden flex-col p-2 order-3 xl:flex xl:p-3.5 xl:w-[26%]'>
					<ForecastButton className='grow' onClick={() => setShowForecast(true)} />
				</div>
			</div>
		</main>
	)
}

function getData(): Promise<WeatherData> {
	return new Promise((resolve, reject) => {
		const data: WeatherData = {
			weather: 'Thunderstorm',
			location: 'Monterrey',
			temperature: '17°',
			maxTemperature: '20°',
			minTemperature: '12°',
			feelsLike: '16°',
			windSpeed: '11 km/h',
			windGust: '22 km/h',
			windDirection: '189°',
			humidityPercentage: '57%',
			precipitationLastHour: '0mm',
			precipitationLastThreeHours: '0mm',
			ultravioletScale: '1.8',
			ultravioletDetails: 'No protection required',
			cloudiness: '45%',
			visibilityDistance: '10 km',
			pressure: '1023hPa',
			forecastData: [
				{
					maxTemperature: '19°',
					minTemperature: '14°',
					weather: 'Rain',
					day: 'Tuesday',
				},
				{
					maxTemperature: '14°',
					minTemperature: '10°',
					weather: 'Rain',
					day: 'Wednesday',
				},
				{
					maxTemperature: '19°',
					minTemperature: '10°',
					weather: 'Rain',
					day: 'Thursday',
				},
				{
					maxTemperature: '21°',
					minTemperature: '12°',
					weather: 'Few clouds',
					day: 'Wednesday',
				},
				{
					maxTemperature: '21°',
					minTemperature: '15°',
					weather: 'Scattered clouds',
					day: 'Saturday',
				},
			]
		};

		resolve(data);
	});
}