#!/bin/env python

if __name__ == "__main__":
    import os
    import argparse
    from datetime import datetime
    from titlecase import titlecase

    parser = argparse.ArgumentParser(description="Creating a new post")
    parser.add_argument("--title",
                        metavar='t',
                        type=str,
                        help="Space seperated title")
    args = parser.parse_args()

    title = titlecase(args.title)

    no_spaces = '-'.join(title.split(' '))
    dir_path = "public/posts/" + no_spaces
    file_path = "posts/" + no_spaces + ".mdx"

    date = datetime.today().strftime('%Y-%m-%d')

    if os.getcwd().endswith("util"):
        print("error: run this script from the root directoy.")
        exit(1)

    if os.path.exists(file_path):
        print("error: this post already exists.")
        exit(1)

    os.mkdir(dir_path)
    print("created dir: " + dir_path)

    with open(dir_path + "/.gitignore", 'a') as f:
        f.write("# this file enables it's parent directory")
        f.write(" to be tracked even when it's empty\n")

    with open(file_path, 'a') as f:
        f.write("---\n")
        f.write("title: " + title + "\n")
        f.write("tags:\n")
        f.write("  - [tag]\n")
        f.write("date: " + date + "\n")
        f.write("excerpt: [excerpt]\n")
        f.write("---\n")
        f.write("\n")
    
    print("file written: " + file_path)
