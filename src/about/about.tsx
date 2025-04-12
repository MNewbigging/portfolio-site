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
        <div className='heading'>About me</div>
        <p>Hi, I'm Matt. I write code for a living. And I love it.</p>
        <p>
          I have a head for large, complex software and enjoy creating the software architecture
          that makes it all run. While I can dive into the details of a self-contained feature, I
          excel at seeing the bigger picture and working out how everything fits together neatly.
        </p>
        <p>
          My experience leading juniors and later working in a team comprised entirely of seniors
          has taught me the importance of clean, maintainable code. My experience in creating large
          interlocking realtime systems has taught me the importance of efficent code. Often, the
          two angles are at odds; to be efficient we sometimes sacrifice readability, to be readable
          we avoid complexity and so incur performance loss. I try to walk this tightrope as best I
          can, and pride myself in being able write code that is not only performant, but is
          understandable by everyone and does so without being expensive. If the code works, but it
          is so convoluted only a senior with a decade of experience can read, what use is it? My
          general approach to coding follows the Agile methodology; iterate. I like to measure once,
          execute and then refactor, bearing the above in mind.
        </p>
        <p></p>
        <p>
          In my first two roles since graduating, I was promoted to leadership positions within a
          year for a number of reasons. Chief among them: I want my team to grow and succeed
          together. I give praise, and take responsibility. I have a light, friendly touch and
          excellent communications skills. I've had management training at each company I've worked
          for, and each has taught me something new. In my third and current role, I decided to
          avoid a leadership role in order to focus on improving my core coding skills. In the
          future I wish to return to hands-on management, armed with new skills and experience.
        </p>
      </div>

      <div className='section'>
        <div className='heading'>
          Staff Senior Frontend Developer, Aize Ltd
          <span className='light'>April 2022 - Present • Remote, UK</span>
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
          more. I also developed drag-and-drop dialogs, with tabs one can drag into other dialogs,
          as well as various UI controls that impact the 3d scene.
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
        <div className='heading'>
          Frontend Developer -&gt; Dev Team Lead, Opus 2
          <span className='light'>May 2020 - May 2022 • Remote, UK</span>
        </div>
        <p>
          Opus makes software for the legal industry. It was a vast web-app with many complex
          features spanning document upload, management and annotation, a fully fledged CMS where
          clients create their own portals within the app, task-tracking boards, dashboards with
          numerous widgets, user/roles/permissions management and more. The stack comprised React,
          TypeScript and MobX for state management.
        </p>
        <p>
          I started as a developer and was quickly promoted to lead a team of juniors. I oversaw the
          completion of lengthy complex projects and played a key part in managing the state of the
          app as a whole with regards to the software architecture. Alongside normal code duties I
          would actively mentor the team, and try to play to their strengths and improve their
          weaknesses where I could.
        </p>
      </div>
    </div>
  );
}
