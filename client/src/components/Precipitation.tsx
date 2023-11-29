interface Props {
	className?: string | undefined;
	precipitationLastHour: string;
	precipitationLastThreeHours: string;
};

export default function Precipitation({ className, precipitationLastHour, precipitationLastThreeHours }: Props) {

	return (
		<div className={`px-4 xl:px-5 py-5 xl:py-6 bg-neutral-50 bg-opacity-20 rounded-xl flex-col justify-start items-start gap-4 xl:gap-5 inline-flex ${className}`}>
			<div className="self-stretch justify-start items-center gap-2 inline-flex">
				<img src="/card-rainy_light.svg" alt="Precipitation Logo" className="w-6 md:w-7 xl:w-9 h-6 md:h-7 xl:h-9" />
				<div className="grow shrink basis-0 text-zinc-800 text-2xl xl:text-[32px] font-bold font-['Inter'] leading-7 xl:leading-9">Precipitation</div>
			</div>
			<div className="self-stretch justify-start items-start gap-4 inline-flex flex-wrap">
				<div className="flex-col justify-start items-start gap-2 inline-flex grow">
					<div className="text-neutral-600 text-lg xl:text-xl font-bold font-['Inter'] leading-tight xl:leading-normal">Last hour</div>
					<div className="text-zinc-800 text-[32px] xl:text-4xl font-normal xl:font-bold font-['Inter'] leading-9 xl:leading-10">{precipitationLastHour}</div>
				</div>
				<div className="flex-col justify-start items-start gap-2 inline-flex grow">
					<div className="text-neutral-600 text-lg xl:text-xl font-bold font-['Inter'] leading-tight xl:leading-normal">Last 3 hours</div>
					<div className="text-zinc-800 text-[32px] xl:text-4xl font-normal xl:font-bold font-['Inter'] leading-9 xl:leading-10">{precipitationLastThreeHours}</div>
				</div>
			</div>
		</div>
	)
}
