import { MouseEventHandler } from "react";

interface Props {
	className?: string | undefined;
	onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export default function ForecastButton({ className, onClick }: Props) {

	return (
		<div className={`px-4 xl:px-5 py-5 xl:py-6 bg-neutral-50 bg-opacity-20 rounded-xl flex-col justify-start items-start gap-4 xl:gap-5 inline-flex cursor-pointer ${className}`} onClick={onClick}>
			<div className="self-stretch justify-start gap-2 inline-flex flex-col">
				<img src="/card-calendar_today.svg" alt="Forecast Button Logo" className="w-6 md:w-7 xl:w-9 h-6 md:h-7 xl:h-9" />
				<div className="grow shrink basis-0 text-zinc-800 text-2xl xl:text-[32px] font-bold font-['Inter'] leading-7 xl:leading-9">5-day forecast</div>
			</div>
		</div>
	)
}
