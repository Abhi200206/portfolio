import { Projectcomp } from "./Projectcomp"
export const Projects = () => {
    const insightink=["react.js","tailwind css","typescript"];
    const pullsurge=["react.js","recoil.js","typescript"];
    const hyperwallet=["node.js","react.js","tailwind css"];
    const sitesentry=["Node.js","React.js","Tailwindcss","Express.js"];
    const insightDesc="InsightInk is a blog platform where users can sign up, write blogs to share their interests with the world, and edit or delete their blogs at their convenience. Built with a modern tech stack, InsightInk provides a seamless and secure blogging experience.";
    const pullsurgedesc="PullSurge is a web application similar to Postman, designed for testing REST services and WebSocket-based connections. Built with React.js, TailwindCSS, Recoil.js, and TypeScript, it provides an intuitive interface for developers to interact with and test their backend APIs.";
    const hyperwalletdesc="Hyper Wallet is a web application that allows users to send money to each other securely. Built with React, TailwindCSS, JavaScript, Node.js, and Express.js, it features JWT authentication and input validation using Zod to ensure data integrity and security.";
    const sitesentrydesc=`SiteSentry is a robust and user-friendly application designed to monitor websites. Users can sign up, provide their website frontend or backend URLs, and receive email notifications if their websites go down. This ensures the reliability and uptime of web services, giving users peace of mind.`;

    return (
        <div  className="bg-white">
            <div className="text-black font-extrabold text-3xl flex justify-center pt-[30px] pb-[60px] ">
                <p>Projects:</p>
            </div>
            <div>
            <Projectcomp link="/sitesentry.png" title="SiteSentry" desc={sitesentrydesc} gitlink="https://github.com/Abhi200206/SiteSentry" tech={sitesentry}/>
                <Projectcomp link="/insightink.png" title="InsightInk" desc={insightDesc} gitlink="https://github.com/Abhi200206/InsightInk" livelink="https://insight-ink-mu.vercel.app/" tech={insightink}/>
                <Projectcomp link="/pullsurge.png" title="PullSurge" desc={pullsurgedesc} gitlink="https://github.com/Abhi200206/PullSurge" livelink="https://pull-surge.vercel.app/" tech={pullsurge}/>
                <Projectcomp link="/hyperwallet.png" title="Hyperwallet" desc={hyperwalletdesc} gitlink="https://github.com/Abhi200206/Hyper-wallet" tech={hyperwallet}/>            
            </div>
        </div>
    )
}