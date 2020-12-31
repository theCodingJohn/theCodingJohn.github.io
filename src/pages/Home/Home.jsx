import React, { useEffect, useRef } from 'react';

const Home = () => {
  return (
    <main className="main" >
        <section className='hero'>
        <div className="hero__line">
          <h1><strong>John Cunanan</strong><br /> <span className="hero__role">— front-end developer —</span></h1>
          <a class="button button__double-border" href="mailto:thecodingjohn@outlook.com">
            <span>Work with Me</span>
          </a> 
        </div>
        <div></div>
      </section>
      <section className="section" style={{background: 'cyan'}}>
        <h2>sdasds</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vel. Recusandae nesciunt, maiores, qui, modi vel illum sint repellat ab illo pariatur veniam eaque obcaecati commodi velit nemo fugiat quis.</p>
      </section> 
      <section className="section" style={{background: 'white'}}>
        <h2>sdasds</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vel. Recusandae nesciunt, maiores, qui, modi vel illum sint repellat ab illo pariatur veniam eaque obcaecati commodi velit nemo fugiat quis.</p>
      </section> 
      <section className="section" style={{background: 'pink'}}>
        <h2>sdasds</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vel. Recusandae nesciunt, maiores, qui, modi vel illum sint repellat ab illo pariatur veniam eaque obcaecati commodi velit nemo fugiat quis.</p>
      </section> 
    </main>
  )
}

export default Home
