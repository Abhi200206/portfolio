import { Bnt } from "./Btn"
import { Reftypes } from "../types/type"
export const Headrer = ({ scrollToHome, scrollToExperience, scrollToProjects, scrollToSkills, scrollToContact }: Reftypes) => {
    return (
        <div className="flex gap-2 bg-black p-2 rounded font-serif ">
            <Bnt value="home" onClick={scrollToHome} />
            <Bnt value="experience" onClick={scrollToExperience} />
            <Bnt value="skills" onClick={scrollToSkills} />
            <Bnt value="projects" onClick={scrollToProjects} />
            <Bnt value="contact" onClick={scrollToContact} />
        </div>
    )
}
