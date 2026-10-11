import React from 'react';

const markup = "<section class=\"slider-container\">\n<div class=\"slide active\">\n<img alt=\"Xavi Alonso\" src=\"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80\"/>\n<h2>XAVI ALONSO</h2>\n<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n</div>\n<div class=\"slide\">\n<img alt=\"Marta Socrate\" src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80\"/>\n<h2>MARTA SOCRATE</h2>\n<p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n</div>\n<div class=\"dots\">\n<span class=\"dot active\"></span>\n<span class=\"dot\"></span>\n</div>\n</section>";

export default function Testimonials() {
  return <div className="react-markup" dangerouslySetInnerHTML={{ __html: markup }} />;
}
