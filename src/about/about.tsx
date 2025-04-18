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
        <p>We followed Agile practices, sprints and released the product 3 or 4 times a year.</p>
      </div>

      <div className='section'>
        <div className='heading'>
          Games Developer -&gt; Lead Developer, InTouch Games Ltd
          <span className='light'>Jun 2018 - Mar 2020 • Birmingham, UK</span>
        </div>
        <p>
          InTouch is a gambling games company, making games for the web and mobile devices. We used
          TypeScript and a custom in-house framework built on top of PixiJs to create the games.
        </p>
        <p>
          There were rigorous safety precautions; each game had to be individually audited by an
          independent 3rd party, so each developer had to take them through the code before signing
          off on the project.
        </p>
        <p>
          InTouch used more of a waterfall approach than an Agile one; designs were worked on
          up-front, with little change once development was underway. After building, it was sent
          through rounds of testing and fixing issues until it came back all clear.
        </p>
        <p>
          After about 6 months at the company I was promoted to a line-management position, where I
          was responsible for between 5 and 10 devs at any time. I held regular 1-1s, made
          development plans, delivered performance reviews. I was less hands-on codewise at this
          point, though I did end up getting deep into Jira add-on coding using Groovy.
        </p>
      </div>

      <div className='section'>
        <div className='heading'>
          BSc Games Development (Hons) - 1st Class, Edinburgh Napier University
          <span className='light'>Sep 2014 - May 2018 • Edinburgh, UK</span>
        </div>
        <p>
          Solid grounding in C, C++ and C#, design patterns, multi-threading, 3d maths and physics,
          algorithms and data structures. Wrote large scale game engines and physics simulations
          using spatial partitioning, collision detection & resolution, graphics pipelines and
          shaders as well as various gameplay features.
        </p>
        <p>
          For my honours project I focused on the theme 'gamification of exercise'. I had been
          getting into embedded programming for some time and decided to use that experience, so I
          bought an exercise bike and built a game controller on top of it. I used magnets to track
          pedal rotations, and built custom controllers on the handlebars. This was all done in a
          low-level C-like language. It broadcast signals via bluetooth, which was picked up by the
          Unity game I had made written in C#.
        </p>
      </div>

      <div className='section'>
        <div className='heading'>
          In Another Life
          <span className='light'>The before times • Various, UK</span>
        </div>
        <p>
          While studying at Napier, I worked for a company called Yavi for around 2 years. I started
          off in a data entry role and later took part in hiring new staff, providing onboarding
          training and documentation for the data entry team. I then moved to become the first and
          only QA tester; building, documenting and executing test cases and regression test suites
          for the product. It was a great insight into how startups function, and a nice intro to
          Agile practices.
        </p>
        <p>
          Before studying Games Development, I worked as a Duty Manager at the Go Ape site in
          Crathes for 2 years. Go Ape is a treetop climbing adventure park. It was my role to ensure
          strict health and safety measures were adhered to whilst cultivating an exciting
          atmosphere for customers. In doing so I learnt to develop a strong rapport with those
          around me. I was first-aid trained on a 3 day course, and rescue trained at height by the
          Mountain Rescue leader. I managed the daily running of the site; organising the
          instructors and scheduling climbing sessions, fielding calls and questions, handling cash
          and opening/closing the site, performing regular site maintenance and customer rescue.
          This job was my first real example of managing a team, and it taught me so much! Ensuring
          the site runs smoothly, nobody gets hurt and the team of instructors are kept happy at
          work was incredibly rewarding. I learnt how to keep cool in difficult circumstances, most
          notably when customers were hurt, scared and screaming.
        </p>
        <p>
          I studied music at Aberdeen University for 3 years before deciding it wasn't the career
          for me and running off to play in the trees at GoApe. During my music studies I earned a
          living as a lounge pianist. I would approach venues with either a demo CD or my stage
          piano in hand, negotiate playing times and prices with managers and usually play regular
          sessions each week. Having to haggle with managers who always try to get away with paying
          me in chips taught me how to hold my ground in those conversations and never undersell
          myself.
        </p>
        <p>
          I have held a few retail positions with Menkind, Tiso and souvenir shops on the Royal Mile
          in Edinburgh. Typical sales assistant stuff; cash handling, stock taking, fielding calls
          and questions from customers. In these roles I learnt how to build a rapport with others
          quickly, and a great deal of patience!
        </p>
      </div>
    </div>
  );
}
