'use client'
function About() {
  return (

    <div id="about" className="relative bg-white overflow-hidden mt-20">
    <div className="max-w-7xl mx-auto m-top" >
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About me
                    </h2>

                    <p>
                    Bilel Benhlel, a 21-year-old full-stack developer, embodies the essence of
              passion and dedication in his craft. With an insatiable curiosity
              and a relentless drive for excellence, he navigates the intricate
              world of coding with finesse and enthusiasm. His journey as a
              developer is not just about mastering languages and technologies;
              it's a testament to his unwavering commitment to pushing the
              boundaries of what's possible. Bilel's vibrant spirit and
              boundless creativity infuse life into every project he undertakes.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full mt-12   " src="/bilel.jpg"  />
    </div>
</div>

  )
}

export default About