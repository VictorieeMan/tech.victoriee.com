---
date: 2023-10-02
---
# Building this site

During my research of possible solutions, I've iterated through Wordpress, Jekyll, pure html-css-js, and a few more. But now finally landed on mkdocs, which I feel pretty comfortable with. Easy to use, and I can keep it in a git repository.

<!-- more -->

## Mkdocs

This specific setup uses Mkdocs as its base, then I've added the material theme, and a few plugins. For the time being, I've got a more than average complex setup, that splits the site in to two separate mkdocs project. One project for the blog and one for the rest of the site. It's put together into one site using the github action workflow, triggered on each push on the main branch. The benefits as I see them is that now I can use different plugins / themes for the blog and the rest of the site. And the best part is that merging these into a single mkdocs site is pretty easy to do in the future. But that will wait until the blog functionality is part of the stable branch, when I will reevaluate the setup.

## Useful resources
I've come across some useful resources for managing mkdocs sites and I will list them here for future reference:

- [Mkdocs](https://www.mkdocs.org/user-guide/)
- [Material theme](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Code Inside Out: MKdocs walkthrough](https://www.codeinsideout.com/blog/site-setup/create-site-project/)
  - [Its github repo](https://github.com/vuquangtrong/mkdocs-material-blog)