interface Props {
	className?: string | undefined;
	ultravioletScale: string;
	ultravioletDetails: string;
};

export default function UV({ className, ultravioletScale, ultravioletDetails }: Props) {

	return (
		<div className={`px-4 xl:px-5 py-5 xl:py-6 bg-neutral-50 bg-opacity-20 rounded-xl flex-col justify-start items-start gap-4 xl:gap-5 inline-flex ${className}`}>
			<div className="self-stretch justify-start items-center gap-2 inline-flex">
				<img src="/card-brightness_high.svg" alt="UV Logo" className="w-6 md:w-7 xl:w-9 h-6 md:h-7 xl:h-9" />
				<div className="grow shrink basis-0 text-zinc-800 text-2xl xl:text-[32px] font-bold font-['Inter'] leading-7 xl:leading-9">UV</div>
			</div>
			<div className="self-stretch justify-start items-center gap-3 inline-flex xl:flex-col xl:items-start xl:gap-2 xl:flex">
				<div className="text-zinc-800 text-[32px] font-normal font-['Inter'] leading-9 xl:text-4xl xl:font-bold xl:leading-10">{ultravioletScale}</div>
				<div className="grow shrink basis-0 text-neutral-600 text-base font-bold font-['Inter'] leading-[18px] xl:self-stretch xl:text-lg xl:leading-tight">{ultravioletDetails}</div>
			</div>
		</div>
	)
}
