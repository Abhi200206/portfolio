import { Skillcomp } from "./Skillcomp"
export const Skills = () => {
    return (
        <div className="py-[50px] flex justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
            <div>
                <p className="my-6 text-black font-extrabold text-3xl">Skills:</p>
                <div className="grid md:grid-cols-3 gap-10 grid-cols-2">
                    <Skillcomp lang={"javascript"} img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                    <Skillcomp lang="Typescript" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"} />
                    <Skillcomp lang="c++" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    <Skillcomp lang="Node.js" img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"} />
                    <Skillcomp lang="Express.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                    <Skillcomp lang="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    <Skillcomp lang="Tailwind css" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <Skillcomp lang="Next.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
                    <Skillcomp lang="prisma" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" />
                    <Skillcomp lang="Mongo DB" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                    <Skillcomp lang="Postgresql" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                    <Skillcomp lang="& More" img="" />


                </div>
            </div>
        </div>
    )
}