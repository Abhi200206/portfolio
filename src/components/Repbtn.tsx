import { repbtn } from "../types/type"
export const Repbtn = ({ value, link }: repbtn) => {
    return (
        <div className="rounded p-1  border-black border-[1px] hover:bg-black flex gap-2 hover:text-white bg-white text-black cursor-pointer" >
            <div>
                <a target="_blank" href={link}>
                    <p>{value}</p>
                </a>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>

            </div>
        </div>
    )
}