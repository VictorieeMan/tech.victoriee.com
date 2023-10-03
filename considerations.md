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