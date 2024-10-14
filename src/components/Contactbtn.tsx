import { contacttype } from "../types/type";

export const Contactbtn = ({ link, name, redirect, download }: contacttype) => {
    return (
        <div className="w-full hover:scale-105 transition-transform duration-300 rounded-lg bg-slate-100 p-4 shadow-md cursor-pointer">
            {download ? (
                <a download={'resume.pdf'} target="_blank" href={redirect}>
                    <div className="flex gap-3 items-center">
                        <img className="h-8 w-8" src={link} alt={`${name} icon`} />
                        <p className="text-black font-semibold text-lg hover:text-indigo-500">{name}</p>
                    </div>
                </a>
            ) : (
                <a target="_blank" href={redirect}>
                    <div className="flex gap-3 items-center">
                        <img className="h-8 w-8" src={link} alt={`${name} icon`} />
                        <p className="text-black font-semibold text-lg hover:text-indigo-500">{name}</p>
                    </div>
                </a>
            )}
        </div>
    );
};
