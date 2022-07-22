import React from "react";

function About() {
  return (
    <div className="text-white w-full lg:w-[60vw] text-center bg-gray-800 bg-opacity-70 lg:bg-transparent">
      <img src="./images/coding.svg" alt="coder iamge" className="w-full" />
      <h1 className="text-3xl font-serif italic text-amber-500">
        {"<SUSLU/>"}
      </h1>
      <h2 className=" font-extralight font-serif text-2xl text-green-500">
        The Software Developer
      </h2>
      <p className=" text-justify text-[14px] mx-6 italic text-amber-500">
        Described as curious, determined and professional member to provide his
        team the most effective and practical solutions. Recently, added some
        accomplishments to his 3+ years of background in IT world, and feels
        confident to prove himself in all aspects of front-end division. In the
        nearest past, mainly advancing in user-interface-based projects by using
        his deep knowledge and problem-solving skills with well-armed web design
        tools, such as, HTML, CSS, SASS, Bootstrap, JavaScript, React.js,
        Node.js, etc. Highly focused on providing the best user-interface
        experiences, and also currently improving at event loops,
        object-oriented modelling, algorithms, data structures and design
        principles. By using the most appropriate tools, libraries, frameworks
        and programming languages, really excited to introduce his pragmatic and
        analytical thinking capabilities to your high authority. You may check
        the projects via GitHub account, and review the portfolio via Netlify
        account, linked in personal info section above.
      </p>
    </div>
  );
}

export default About;
