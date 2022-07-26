import React from 'react';
import {Github} from 'react-bootstrap-icons';

import styles from './Home.module.css';

const Home = () => (
  <div className="mt-4 text-center">
    <img className={'img-fluid w-25'} src='/images/logo.png' alt="logo" />
    <div className="mt-4 p-5 py-2 ">
      <p>
        Dev Swiss Knife is a web app with essential development tools
        that boost developer productivity and ease many daily tasks.
        We’re trying to bring different features like image compressing, HTML, CSS & JS
        minification, beatification, XML and JSON formatting, PDF manipulation, colour selection,
        text recognition, manipulation tools and a few other unified features into one web app.
        Developers can scroll through or search tools and use any device according to their needs
        in one place instead of jumping across multiple tools or platforms to
        do simple or specific tasks.
      </p>
      <a href='https://github.com/mohammedrafathz/DevSwissKnife' rel='noreferrer' target='_blank'>
        <Github size={32} />
      </a>
    </div>

    <div className='mt-3'>
      <h4 className='pb-2'>Contributors</h4>
      <a className='p-2' href="https://github.com/AnirudhAllani115" rel='noreferrer' target='_blank'>
        <img
          className={`img-fluid rounded-circle ${styles.contributors}`}
          src='https://github.com/AnirudhAllani115.png'
          alt='Anirudh Allani Avatar' />
      </a>
      <a className='p-2' href="https://github.com/Manish260798" rel='noreferrer' target='_blank'>
        <img
          className={`img-fluid rounded-circle ${styles.contributors}`}
          src='https://github.com/Manish260798.png'
          alt='Manish Avatar' />
      </a>
      <a className='p-2' href="https://github.com/ravi958" rel='noreferrer' target='_blank'>
        <img
          className={`img-fluid rounded-circle ${styles.contributors}`}
          src='https://github.com/ravi958.png'
          alt='Ravi Avatar' />
      </a>
      <a className='p-2' href="https://github.com/sandelavenkat" rel='noreferrer' target='_blank'>
        <img
          className={`img-fluid rounded-circle ${styles.contributors}`}
          src='https://github.com/sandelavenkat.png'
          alt='Venkat Avatar' />
      </a>
      <a className='p-2' href="https://github.com/mohammedrafathz" rel='noreferrer' target='_blank'>
        <img
          className={`img-fluid rounded-circle ${styles.contributors}`}
          src='https://github.com/mohammedrafathz.png'
          alt='Mohammed Rafath Avatar' />
      </a>
    </div>
  </div>
);

export default Home;