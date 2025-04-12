import React from 'react';
import './about.scss';

export function About() {
  return (
    <div className='about'>
      <div className='section'>
        <div className='skills'>
          React • Angular • HTML • CSS/Sass • TypeScript • MobX • RxJs Jest • Vite / Webpack •
          Three.js / WebGL • Tween / GSAP
        </div>
      </div>

      <div className='section'>
        7 years of experience Tech lead and line management roles 1st class honours degree in game
        development, transitioned to web development early Experience with frontend frameworks and
        real-time 3d games/apps Main strength in writing complex software architecture with a focus
        on clean, maintainable code
      </div>

      <div className='section'>
        <div className='heading'>
          Staff Senior Frontend Developer, Aize Ltd, April 2022 - Present • Remote, UK
        </div>
        <p>
          Aize offers a web-app digital twin for heavy assets. The core stack is made up of React,
          Angular, RxJs, TypeScript and ThreeJs. As part of the 3d team, I am responsible for the 3d
          viewer and its 2d interfaces. In my first year, I rewrote the team's underling 3d engine
          into something that closely resembles a game engine due to the real-time aspect of the
          viewer. I chose to implement the ECS pattern for the engine, which is often used in game
          engines, as it allows for composable behaviours and is proven to be highly scaleable. I
          made use of finite state machines for the various mutually exclusive modes the viewer can
          be in and relied on the observer pattern via event listeners which transformed raw input
          events into 'nicer' events that the various systems can subscribe to.
        </p>
        <p>
          I have implemented numerous features and systems such as camera controls, tools that allow
          measuring within 3d space, adding and moving around custom models, complex clustering
          algorithms for 2d labels over the canvas, saving & loading of entire viewer state and
          more.
        </p>
        <p>
          I form part of a cross-functional team including front- and back-end developers,
          designers, testers, project owners and managers. My team creates user-facing features as
          well as APIs and tools designed for other internal teams to make use of. The team has at
          various times used scrum and kanban practices, following the fortnightly release of the
          product.
        </p>
      </div>

      <div className='section'>
        <div className='heading'></div>
      </div>
    </div>
  );
}
