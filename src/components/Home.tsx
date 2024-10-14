import { useEffect, useState } from "react";

export const Home = () => {
  const arr = ['H','e','l','l','o',' ','t','h','e','r','e',' ','👋'];
  const [name, setName] = useState("");
  let k = 0;

  function mask() {
    setName("");
    k = 0;
    setTimeout(use, 300);
  }

  async function call(clr: any) {
    if (k == arr.length) {
      clearTimeout(clr);
      mask();
    }
    setName((x) => {
      return x + arr[k++];
    });
  }

  function use() {
    let clr = setInterval(() => {
      call(clr);
    }, 200); // Slightly faster speed (200ms)
    return clr;
  }

  useEffect(() => {
    let clr = use();
    return () => clearInterval(clr);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="flex justify-evenly pt-[50px] p-[20px] font-serif">
        <div>
          <div className="flex items-center">
            <p className="my-6 text-white font-extrabold text-5xl drop-shadow-lg">{name}</p>
            <p className="text-[#FFFFFF80] text-5xl">|</p>
          </div>
          <p className="my-4 text-white font-extrabold text-5xl drop-shadow-lg">I'm Abhinav Rao {"( Full Stack Developer )"}</p>
          <p className="mt-8 mb-4 text-white text-2xl leading-relaxed">
            A passionate Full Stack Developer with a talent for creating seamless digital experiences. With hands-on
            expertise in a diverse array of technologies such as JavaScript, Node.js, Express, React, Next.js, MongoDB,
            PostgreSQL, Recoil, and Prisma, I thrive in the dynamic world of web development.
          </p>
          <p className="mb-10 text-white text-2xl leading-relaxed">
            A constant learner and explorer, I am dedicated to mastering new technologies and methodologies in the
            ever-evolving landscape of web development.
          </p>
        </div>
      </div>
    </div>
  );
};
