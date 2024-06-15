// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;
//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(
//       h11.current,
//       {
//         x: "-100%",
//         delay: 0.8,
//         opacity: 0,
//         duration: 2,
//         ease: "Power3.easeOut",
//       },
//       "<"
//     )
//       .from(
//         h12.current,
//         {
//           x: "-100%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       )
//       .from(
//         h13.current,
//         {
//           x: "-100%",
//           delay: 0.1,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       )
//       .from(
//         myimageref.current,
//         {
//           x: "200%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 2,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       );
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi,👋<br></br>My Name is<br></br>
//         </h1>
//         <h1
//           ref={h12}
//           className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {name}
//         </h1>
//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//       </div>
//       <div className="mt-5 md:mt-0">
//         <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
//       </div>
//     </main>
//   );
// }

// export default Home;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function Combined() {
  const { name, tagline, img, about } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section">
      <section className="md:flex justify-between items-center">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Profile" />
        </div>
      </section>

      <section className="pt-10 pb-20">
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{about}</p>
      </section>

      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Combined;

