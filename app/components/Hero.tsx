import { SpotlightButton } from "./spotlight-button/SpotlightButton";

export function Hero() {
    return (
        <div className="flex flex-col items-center justify-center w-100 min-h-[300px] pb-[25px]">
            <div className="p-[100px]">
                <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Hi, I'm{' '}
                    <span className="text-primary-color-500 dark:text-primary-color-dark-500">Timothy Tracy</span>
                </h1>
            </div>
            

            <div className='flex-row space-x-10'>
                <SpotlightButton>Projects</SpotlightButton>
                <SpotlightButton>Blog</SpotlightButton>
                <SpotlightButton>Contact</SpotlightButton>
            </div>
            

        </div>
    )


}