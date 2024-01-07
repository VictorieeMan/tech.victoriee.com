Here I list some things for later consideration. It's better to clean them out from the code and add them here, rather than using comments and leaving them cluttering the code base.

#1, 2023-10-03
Having a look at the mkdocs-git-revision-date-localized-plugin, or alternate solutions. The idea of showing both a created date and a last edited date is very appealing. But this solution doesn't seem to work with my current setup of the workflow. The Creation date gets updated to the last edited date, implying that it reads the git data from the new branch (regularly purged on each deploy) and not from main.
```
Needed in workflow:
- run: pip install mkdocs-git-revision-date-localized-plugin

plugins:
  - blog
  - mermaid2
  # The following doesn't seem to work with the workdlow I've set up.
  # Look into this later.
  # - git-revision-date-localized:
  #         enable_creation_date: true
  #         type: iso_date
```

Found a solution in the docs:
```
Note when using build environments

This plugin needs access to the last commit that touched a specific file to be able to retrieve the date. By default many build environments only retrieve the last commit, which means you might need to:
Change your CI settings

    github actions: set fetch-depth to 0 (docs)
```
It's now implemented and running perfectly. Note that this was a solution that ChatGPT-4 with WebbSearch couldn't find. The docs are still a valuable resource to check out personally.

#2, 2024-01-01
Need to have a look at how to handle images in the site, even outside of the blog. Ideally something that works well in my preview in vscode as well as being presented correctly online when served. It might be that external image hosting sites is most optimal for this, but! I want to have backup copies of all images stored here in the repo. So I'm considering the following: Having a good file structure wqithin the repo to stre the files in and links in the markdown files that make relative pointers to the images; and then some kind of script that uploads the image to a site maybe imgur and then comments the original image input and pastes the online image source link instead.

#3, 2024-01-02
Look into using custom colors: #003399 for blue primary for instance. Docs ref: https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/#custom-colors-docsstylesheetsextracss Doesn't seem like it's possibly to just add in the yaml file.

#4, 2024-01-02
Use this https://henrywhitaker3.github.io/mkdocs-material-dark-theme/plugins/awesome-pages/ for arranging sub projects etc in the future!

#5, 2024-01-07
using the nostr comment field? Well maybe if it's possible to have some sort of spam filter or pay to comment thing? I'm not sure I want to have comments on this site, I'm kind of comfy just outsorcing that to posts on medium etc. We will see but I leave this consideration, here.
<script src="https://nocomment.fiatjaf.com/embed.js" id="nocomment"></script>
https://github.com/fiatjaf/nocomment
https://github.com/fiatjaf/nocomment/issues/33