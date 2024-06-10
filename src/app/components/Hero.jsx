"use client";
import Link from "next/link";
function Hero() {
  return (
    <div>
      <section className="bg-custom-color text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Bilel Benhlel
              <span className="sm:block"> Fullstack Developer </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-black">
              Bilel, a 21-year-old full-stack developer, embodies the essence of
              passion and dedication in his craft. With an insatiable curiosity
              and a relentless drive for excellence, he navigates the intricate
              world of coding with finesse and enthusiasm. His journey as a
              developer is not just about mastering languages and technologies;
              it's a testament to his unwavering commitment to pushing the
              boundaries of what's possible. Bilel's vibrant spirit and
              boundless creativity infuse life into every project he undertakes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className ="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/skills"
              >
            Technicall Skills
              </Link >

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
