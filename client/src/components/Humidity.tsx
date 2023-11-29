interface Props {
	className?: string | undefined;
	humidityPercentage: string;
};

export default function Humidity({ className, humidityPercentage }: Props) {

	return (
		<div className={`px-4 xl:px-5 py-5 xl:py-6 bg-neutral-50 bg-opacity-20 rounded-xl flex-col justify-start items-start gap-4 xl:gap-5 inline-flex ${className}`}>
			<div className="self-stretch justify-start items-center gap-2 inline-flex">
				<img src="/card-salinity.svg" alt="Humidity Logo" className="w-6 md:w-7 xl:w-9 h-6 md:h-7 xl:h-9" />
				<div className="grow shrink basis-0 text-zinc-800 text-2xl xl:text-[32px] font-bold font-['Inter'] leading-7 xl:leading-9">Humidity</div>
			</div>
			<div className="text-zinc-800 text-[32px] xl:text-4xl font-normal xl:font-bold font-['Inter'] leading-9 xl:leading-10">{humidityPercentage}</div>
		</div>
	)
}
