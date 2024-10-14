export const Skillcomp = ({ img, lang }: { img: string, lang: string }) => {
    return (
        <div className="p-6 flex flex-col items-center text-center cursor-pointer gap-4 bg-slate-100 rounded-lg shadow-md hover:bg-slate-200 transition-all duration-300 transform hover:scale-105">
            {img && <img className="h-12 w-12" src={img} alt="404" />}
            <div className="text-gray-800 font-semibold text-xl">{lang}</div>
        </div>
    );
};
