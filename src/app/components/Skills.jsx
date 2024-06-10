"use client";
function Skills() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center dark:bg-gray-800">
        <div className="max-w-xl mx-auto w-full">
          <h4 className="text-3xl md:text-5xl dark:text-white font-bold mb-6">
            Skills
          </h4>

          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                Javascript
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                80%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#FF6464"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "80px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                HTML&CSS
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                90%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#03fcfc"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "90.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                REACT
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                85%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#fc03f0"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "85.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                PYTHON
              </span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                70%
              </span>
            </div>
            <svg
              className="rc-progress-line"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <path
                className="rc-progress-line-trail"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#D9D9D9"
                strokeWidth="1"
                fillOpacity="0"
              ></path>
              <path
                className="rc-progress-line-path"
                d="M 0.5,0.5 L 99.5,0.5"
                strokeLinecap="round"
                stroke="#03fc6f"
                strokeWidth="1"
                fillOpacity="0"
                style={{
                  strokeDasharray: "70.2px, 100px",
                  strokeDashoffset: "0px",
                  transition:
                    "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s",
                }}
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
