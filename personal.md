---
title: personal
layout: default

---
<h1>personal</h1>

<ul>
  
   {% for personal in site.category.personal %}
    <li>
  <a href=''>{{personal.title}}</a>
    </li>
   {% endfor %}
  
  
 </ul>
 
 
