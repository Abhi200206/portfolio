export interface Btn {
    value: string,
    onClick: () => void
}
export interface Reftypes {
    scrollToHome: () => void,
    scrollToExperience: () => void,
    scrollToProjects: () => void,
    scrollToSkills: () => void,
    scrollToContact: () => void
}
export interface project{
    link:string,
    title:string,
    desc:string,
    gitlink:string,
    livelink?:string,
    tech:string []
}
export interface repbtn
{
    value:string,
    link:string
}
export interface contacttype{
    name:string,
    link:string,
    redirect:string,
    download?:boolean
}