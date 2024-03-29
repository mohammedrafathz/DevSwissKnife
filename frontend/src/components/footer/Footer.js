import React from 'react';
import {Github, Twitter} from 'react-bootstrap-icons';

import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.footer}>
    <footer className='text-center text-lg-start bg-light text-muted'>
      <section className="p-4 py-2 border-bottom">
        <a
          href='https://github.com/mohammedrafathz/DevSwissKnife/'
          className='btn  btn-outline-secondary pl-2'
          target='_blank'
          rel="noreferrer">
          <Github size={20} /> Contribute
        </a>
        <div className='float-end'>
          Follow us:
          <a
            href='https://twitter.com/mohammedrafathz'
            target='_blank'
            rel="noreferrer">
            <Twitter className='ml-3' size={24} />
          </a>
        </div>
      </section>
    </footer>
  </div>
);

export default Footer;