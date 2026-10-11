import React from 'react';

const markup = "<section class=\"home\" id=\"home\">\n<div class=\"container\">\n<h1> I'm Morgan Freeman</h1>\n<h2> <span id=\"type\"></span></h2>\n</div>\n</section>";

export default function Home() {
  return <div className="react-markup" dangerouslySetInnerHTML={{ __html: markup }} />;
}
