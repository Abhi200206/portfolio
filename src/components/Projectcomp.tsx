import { project } from "../types/type"
import { Repbtn } from "./Repbtn"
import { Skillbtn } from "./Skillbtn"
export const Projectcomp = ({ link, title, desc, gitlink, livelink, tech }: project) => {
    return (
        <div className="py-4">
            <div className="md:grid md:grid-cols-12">
                <div className="hidden md:flex  md:col-span-6  md:justify-center"> <img  className="rounded p-6 max-h-[400px] " src={link}  alt="404" /></div>
                <div className="md:col-span-6 p-2">
                    <div>
                        <p className="text-4xl font-bold my-2">{title}</p>
                        <p className="text-slate-600 my-2">{desc} </p>

                    </div>
                    <div className="flex gap-2 my-2">
                        {tech.map((m)=>{
                            return(
                                <Skillbtn value={m}/>
                            )
                        })}
                    </div>
                    <div className="flex my-2  gap-2">
                        <Repbtn value="Github" link={gitlink}/>
                        {livelink?<Repbtn value="live link" link={livelink}/>:""}
                    </div>
                </div>
            </div>
        </div>
    )
}