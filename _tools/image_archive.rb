#!/usr/bin/env ruby

require 'kramdown'
require 'pp'

post_dir = "../_posts/"
post_files = Dir.entries(post_dir).reject { |x| [".", ".."].include?(x) }
posts = []
post_files.each do |post_file|
  posts << Kramdown::Document.new(File.read(post_dir + post_file)).root
end

def flatten(post, elements=[])
  post.children.each do |child|
    if (child.children == [])
      elements << child
    else
      elements = flatten(child, elements)
    end
  end
  elements
end

posts.each do |post|
  flatten(post).each do |element|
    if element.type.to_s == "img"
      src = element.attr["src"]
      puts src
      puts src.split("/").last
    end
  end
end
