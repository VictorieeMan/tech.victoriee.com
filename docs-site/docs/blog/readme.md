---
draft: true
---

# Blog Readme
This folder contains the mk-docs code and files for constructing the tech. Journal & blog page.

Journal entry 2024-01-01
I have just made some updates to the blog, that are of the kind life quality upgrades. The page is now more easy to navigate for a user. I want to continue the blogging here, and continue structuring the site. Some things at the top of my head that I would like to take a look at restructuring:
 - File structure of posts, so that images are easier and more clean to include. At the moment it's a bit confusing how the files are used handled on a mk-docs build. The GitHub page build-and-deploy.yml file is doing some magic that is difficult for the intuition to grasp while writing. This is a clear example of a; leaky-abstraction! :)

- As for images, I'm considering adding a double. Both a local file and an image hosting link alternative in a html comment? So that it's easier to access and do the multishare to other sites.

- Evaluate if the Mashable widget is additive or not.

- Update info on the contact page.

- Maybe look into re-merging the journal site and the docs site again? I separated them because I wanted some auto features that wasn't possible to combine with manual settings; these features concern updating the nav bars. This might help unify search cross the whole domain, if I want it.

Docs for the blog settings: https://squidfunk.github.io/mkdocs-material/plugins/search/#config.lang-set-language