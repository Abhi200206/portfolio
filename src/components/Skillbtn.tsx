export const Skillbtn=({value}:{value:string})=>{
    return (
        <div className="rounded-full cursor-pointer hover:bg-slate-200 p-1 my-2">
            <p className="font-semibold text-sm">{value}</p>
        </div>
    )
}