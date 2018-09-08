---
title: personal
layout: default

---
<h1>personal</h1>

<ul>
  
   {% for post in site.categories.personal %}
    <li>
  <a href='{{ post.url }}'>{{post.title}}</a>
  <div>
		      <a class = "readmore" href={{site.baseurl}}{{post.url}}>
          <span class="c-excerpt .c-post-card__excerpt ">{{ post.excerpt | strip_html | truncatewords: 35 }}</span>
         
	          Read More</a>  
</div>
    </li>
   {% endfor %}
  
  
 </ul>
 
 
