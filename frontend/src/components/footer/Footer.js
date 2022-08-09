import React from 'react';
import {Github, Twitter} from 'react-bootstrap-icons';

import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.footer}>
    <footer className='text-center text-lg-start bg-light text-muted'>
      <section className="p-4 border-bottom">
        <a
          href='https://github.com/mohammedrafathz/DevSwissKnife/'
          target='_blank'
          className='btn btn-secondary pl-2'
          rel="noreferrer">
          <Github size={20} /> Contribute
        </a>
        <div className='float-end'>
          Follow us:
          <a href='https://twitter.com/mohammedrafathz' >
            <Twitter className='ml-3' size={24} />
          </a>
        </div>
      </section>
    </footer>
  </div>
);

export default Footer;