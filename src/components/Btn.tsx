import { Btn } from "../types/type"
export const Bnt = ({ value, onClick }: Btn) => {


    return (
        <div>
            <div onClick={onClick} className="rounded text-white bg-black hover:text-black hover:bg-white p-2 cursor-pointer text-center">
                <p>{value}</p>
            </div>
        </div>
    )
}