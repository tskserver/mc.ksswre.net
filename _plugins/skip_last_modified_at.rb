require 'jekyll-last-modified-at/determinator'

module SkipLastModifiedAt
  def last_modified_at_time
    return if %r!\Atag/! =~ page_path # jekyll-tagging
    super
  end
end
class Jekyll::LastModifiedAt::Determinator
  prepend SkipLastModifiedAt
end

# thanks to https://blog.n-z.jp/blog/2018-03-20-jekyll-last-modified-at.html
