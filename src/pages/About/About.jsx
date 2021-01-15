import React from 'react'

const About = () =>  {
  return (
    <main className="about">
      <div className="container aboutWrapper">
        <h3>Hi there, welcome to my den. My name is John and I like to build stuffs on the internet.</h3>
        <p>I am a front-end developer based in Manila, producing mobile-responsive, interactive and neat looking websites. I have been teaching myself web development and found it to be a fascinating way to create and bring my ideas to life. I very much enjoy playing with APIs, UI effects and animations. <a href="mailto:thecodingjohn@outlook.com">Let's build something great.</a></p>
        <p>Here are some of the technologies I have been working with recently:</p>
        <ul>
          <li>Javascript (ES6)</li>
          <li>React</li>
          <li>HTML & SCSS</li>
          <li>GSAP</li>
        </ul>
      </div>
    </main>
  )
}

export default About
