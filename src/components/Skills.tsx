import { Skillcomp } from "./Skillcomp";

export const Skills = () => {
    return (
        <div className="py-[60px] flex justify-center bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-500">
            <div>
                <p className="my-8 text-white font-extrabold text-4xl text-center">Skills</p>
                <div className="grid md:grid-cols-3 gap-8 grid-cols-2 px-6">
                    <Skillcomp lang="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <Skillcomp lang="TypeScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <Skillcomp lang="C++" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    <Skillcomp lang="Node.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
                    <Skillcomp lang="Express.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                    <Skillcomp lang="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    <Skillcomp lang="Tailwind CSS" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <Skillcomp lang="Next.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" />
                    <Skillcomp lang="Prisma" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg" />
                    <Skillcomp lang="MongoDB" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
                    <Skillcomp lang="PostgreSQL" img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                    <Skillcomp lang="& More" img="" />
                </div>
            </div>
        </div>
    );
};
