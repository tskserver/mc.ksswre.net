---
layout: page
---

<article>
	<h1 class="post-title">
		{{ page.title }}
		<section class="tags">
			{% for tag in page.tags %}
				<a href="/tag/{{ tag | slugize }}" rel="tag">{{ tag }}</a>
			{% endfor %}
		</section>
	</h1>
	<p class="post-meta">
		{% if page.date %}
		<i class="fa fa-calendar"></i> Last updated: {{ page.date | date: "%Y-%m-%d %H:%M" }}
		//
		{% endif %}
		<a href="https://github.com/k5342/mc.ksswre.net/blob/master/{{ page.path }}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</a>
	</p>
	<section class="album">
{{ content | toc_generate }}
	</section>
</article>
