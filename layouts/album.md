---
layout: page
---

<article>
	<h1 class="post-title">
		{{ .Title }}
		<section class="tags">
			{% range .Params.tags %}
				<a href="/tag/{{ . | urlize }}" rel="tag">{{ . }}</a>
			{% end %}
		</section>
	</h1>
	<p class="post-meta">
		<i class="fa fa-calendar"></i> Last updated: {{ .Lastmod.Format "2006-01-02 15:04" }}
		//
		<a href="https://github.com/k5342/mc.ksswre.net/blob/master/{{ .File.Path }}"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</a>
	</p>
	<section class="album">
{{ .Content }}
	</section>
</article>
