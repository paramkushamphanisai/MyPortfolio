import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

              <p className="text-xl mt-20">
                  I currently working in ChangeFinder as a Freelance Full stack developer.
                  I have hands-on experience working with React, FireBase, and REST-API. 
                  I have worked extensively in the UI/UX designing and Sourece code development of the ChangeFinde web side. In addition to that,
                  I also work as an  OSU IT Service desk Student technician.I help OSU students and staff with Duo Support, Software installation, and more.
                  I have completed more than 300+ tickets and got many applications from my supervisors. 
        </p>

        <br />

        <p className="text-xl">
                  As a master's student at OSU, I have been part of a "Gesture-based moving AI bot project" where I have developed a bot that runs based on human gestures.

                  Before my Master's, I worked in TATA Consultancy Services (TCS) for two years.
                  As a result, I had excellent hands-on experience using C++, Python, and Shell Script languages to create and implement software applications in ErricssonRnD in 5G technology.
                  As a Systems Engineer, I have worked in a DevOps environment where I was responsible for developing, testing, and packaging the source code.
                  In Jan 2021, I received the "on-sport award" for excellent source code development. 

        </p>
      </div>
    </div>
  );
};

export default About;
