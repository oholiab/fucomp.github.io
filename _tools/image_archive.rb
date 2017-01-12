#!/usr/bin/env ruby

require 'kramdown'
require 'pp'

post_dir = "../_posts/"
img_assets_dir = "../assets/img/"
post_files = Dir.entries(post_dir).reject { |x| [".", ".."].include?(x) }

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

def canonicalise(post_file, src)
  post_basename = post_file.gsub(/\.md$/, '')
  [post_basename, src.split("/").last].join("-")
end


post_files.each do |post_file|
  post = Kramdown::Document.new(File.read(post_dir + post_file)).root
  flatten(post).each do |element|
    if element.type.to_s == "img"
      src = element.attr["src"]
      puts src
      puts img_assets_dir + canonicalise(post_file, src)
    end
  end
end
