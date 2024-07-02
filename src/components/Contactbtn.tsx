import { contacttype } from "../types/type"
export const Contactbtn = ({ link, name, redirect, download }: contacttype) => {
    return (
        <div className="w-full hover:bg-slate-400 rounded  m-1 max-w-[120px] ">
            {download ? <a download={'resume.pdf'} target="blank" href={redirect}>
                <div className="flex gap-2 items-center cursor-pointer p-2 ">


                    <img className="h-6 w-6" src={link} alt="" />

                    <div>
                        <p className="text-white">{name}</p>
                    </div>

                </div>
            </a> : <a target="blank" href={redirect}>
                <div className="flex gap-2 items-center cursor-pointer p-2 ">


                    <img className="h-6 w-6" src={link} alt="" />

                    <div>
                        <p className="text-white">{name}</p>
                    </div>

                </div>
            </a>
            }
        </div>
    )
}