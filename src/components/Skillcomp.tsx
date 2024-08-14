export const Skillcomp = ({ img, lang }: { img: string, lang: string }) => {
    return (
        <div className="p-2 flex cursor-pointer gap-2 flex-col-center text-white rounded bg-slate-200">
            <div> {img ? <img className="h-8 w-8" src={img} alt="404" /> : ""}</div>
            <div className="text-slate-500">{lang}</div>
        </div>
    )
}