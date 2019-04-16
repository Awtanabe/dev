# https://github.com/WilHall/gretel
# 手順
# 1 applicationに>を定義する 
# 2 breadcrumbsファイルを定義する
# 3 viewにかく　<% breadcrumb :book, @book %> 変数をここで渡す
# ポイント parent root books bookと上から繋がっている

crumb :root do
  link "Home", root_path
end

crumb :books do
  link "All issues", books_path
  parent :root
end

crumb :book do |book|
  link book&.id, book
  parent :books
end
