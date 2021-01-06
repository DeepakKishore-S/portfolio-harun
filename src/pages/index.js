/* eslint-disable prettier/prettier */
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Harun Rashid - Front End Developer'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || '-harun\'s designes'} />
      </Helmet>
      <App />
    </>
  );
};
