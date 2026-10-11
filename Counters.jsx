import React from 'react';

const markup = "<section class=\"counter-section\" id=\"services\">\n<div class=\"overlay-bg\"></div>\n<div class=\"container relative-z\">\n<div class=\"counter-grid\">\n<div class=\"counter-box\">\n<div class=\"counter-ico\">\n<i class=\"fa-solid fa-check\"></i>\n</div>\n<div class=\"counter-num\" data-target=\"450\">0</div>\n<p class=\"counter-text\">WORKS COMPLETED</p>\n</div>\n<div class=\"counter-box\">\n<div class=\"counter-ico\">\n<i class=\"fa-regular fa-newspaper\"></i>\n</div>\n<div class=\"counter-num\" data-target=\"25\">0</div>\n<p class=\"counter-text\">YEARS OF EXPERIENCE</p>\n</div>\n<div class=\"counter-box\">\n<div class=\"counter-ico\">\n<i class=\"fa-solid fa-user-group\"></i>\n</div>\n<div class=\"counter-num\" data-target=\"550\">0</div>\n<p class=\"counter-text\">TOTAL CLIENTS</p>\n</div>\n<div class=\"counter-box\">\n<div class=\"counter-ico\">\n<i class=\"fa-solid fa-award\"></i>\n</div>\n<div class=\"counter-num\" data-target=\"48\">0</div>\n<p class=\"counter-text\">AWARD WON</p>\n</div>\n</div>\n</div>\n</section>";

export default function Counters() {
  return <div className="react-markup" dangerouslySetInnerHTML={{ __html: markup }} />;
}
