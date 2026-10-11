import React from 'react';

const markup = "<div id=\"preloader\">\n<div class=\"loader\">\n<span class=\"dot1\"></span>\n<span class=\"dot2\"></span>\n<span class=\"dot3\"></span>\n<span class=\"dot4\"></span>\n<span class=\"dot5\"></span>\n<span class=\"dot6\"></span>\n<span class=\"dot7\"></span>\n</div>\n</div>";

export default function Preloader() {
  return <div className="react-markup" dangerouslySetInnerHTML={{ __html: markup }} />;
}
