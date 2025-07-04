"""
A short script I run to read the html of the blogposts I write and format things so the website loads them properly.
This makes it a lot easier to write new posts and ensures that none of them get lost in the aether.
"""
import os

def make_title(file):
    if file == "blog/format.html" or file == "blog/titles.txt" or file == "blog/update_blog_posts.py":
        title = "skip"
    else:
        fileread = open(file, "r")
        lines = fileread.readlines()
        post_title_tag = lines[99]
        date_tag = lines[100]
        post_title = post_title_tag[17:-5]
        date = date_tag[16:-5]
        translation_table = {ord(" "): "-"}
        hyphen_post_title = post_title.translate(translation_table)
        title = date + "][" + hyphen_post_title
    return title

def add_title(titles, title):
    if title != "skip":
        split_title = title.split("]")
        translation_table = {ord("-"): " ", ord("["): ": "}
        legible_title = split_title[0] + split_title[1].translate(translation_table)
        if titles == "":
            titles = legible_title
        else:
            titles = titles + "\n" + legible_title
    return titles

def rename_file(file, title):
    if title!= "skip":
        if file != "blog/" + title + ".html":
            os.rename(file, "blog/" + title + ".html")
    return 0

def rewrite_titles(titles):
    filewrite = open("blog/titles.txt", "w")
    filewrite.write(titles)
    filewrite.close()
    return 0

def main():
    files = []
    path = "blog"
    for file in os.listdir(path):
        f = os.path.join(path, file)
        if os.path.isfile(f):
            files.append(f)
    titles = ""
    titles_list = []
    for file in files:
        title = make_title(file)
        rename_file(file, title)
        titles_list.append(title)
    titles_list.sort()
    for title in titles_list:
        titles = add_title(titles, title)
    rewrite_titles(titles)
    return 0

main()