---
title: personal
layout: page
cover: "/images/posts/17.jpg"
---
<h1>personal</h1>

<ul>
  {% for personal in site.post % }
  <li>
  <a href=''>{{personal.title}}</a>
  </li>
  {% endfor %}
 </ul>
