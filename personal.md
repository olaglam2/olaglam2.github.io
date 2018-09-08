---
title: personal
layout: default

---
<h1>personal</h1>

<ul>
  
   {% for post in site.categories.personal %}
    <li>
  <a href=''>{{post.title}}</a>
    </li>
   {% endfor %}
  
  
 </ul>
 
 
