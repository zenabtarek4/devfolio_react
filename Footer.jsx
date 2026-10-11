import React from 'react';

const markup = "<footer class=\"site-footer\" data-aos=\"fade-in\" data-aos-delay=\"300\">\n<p>© Copyright <strong>DevFolio</strong>. All Rights Reserved</p>\n<p class=\"designer\">Designed by BootstrapMade</p>\n</footer>";

export default function Footer() {
  return <div className="react-markup" dangerouslySetInnerHTML={{ __html: markup }} />;
}
