import { Contactbtn } from "./Contactbtn"
export const Contact = () => {
    return (
        <div className=" bg-gradient-to-b to-purple-500 from-pink-500 py-[60px]">
            <div className="flex justify-center">
                <div>
                    <p className="font-extrabold text-slate-800 md:text-3xl my-1">want to get in touch or connect ?</p>
                    <a href="mailto:annamaneni.abhinav@gmail.com"><p className="hover:text-orange-300 font-bold text-white md:text-3xl my-1">annamaneni.abhinav@gmail.com </p></a>
                </div>
            </div>
            <div className="md:grid md:grid-cols-12 pt-[80px]">
                <div className="md:col-span-6 flex justify-center">
                    <div>
                        <p className="font-semibold text-slate-800 text-3xl my-1">{"<"} Abhinav Rao {">"}</p>
                        <div className="flex gap-2  items-center">
                            <div ><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5">
                                <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                            </svg>
                            </div>
                            <div><p className="font-thin text-white text-3xl my-1">India</p></div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6  pt-[30px] md:pt-0">
                        <div className="grid grid-cols-2  md:grid-cols-2">
                        <Contactbtn redirect="https://github.com/Abhi200206" link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" name="Github"/>
                        <Contactbtn redirect="https://www.linkedin.com/in/abhinavrao77/" name="Linkedin" link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"/>
                        <Contactbtn redirect="https://x.com/Abhinav_1899" name="Twitter" link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"/>
                        <Contactbtn redirect="https://leetcode.com/u/abhinav1306/" name="Leetcode" link="/leetcode.png"/>
                        <Contactbtn redirect="/resume.pdf" name="Resume" download={true} link="/res.png"/>
                        </div>
                </div>
            </div>
        </div>
    )
}