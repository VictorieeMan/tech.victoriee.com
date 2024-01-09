---
date: 2024-01-04
draft: true
# slug:
# categories:
#   - 
# tags:
#   - 
---
Pyenv a neat way to deal with python environments!
<!-- more -->

When working with python, modules is what makes it all worth it. You just pip install (precisely what i need) and than even so complex things as machine learning can happen in just a few lines of code. These pip installs go straight to your python version install, which is fine until you install two incompatible packages... That's fine you can use pip install and redo things, but this easily gets cluttered. To solve this problem python environments was developed. Python environments let you install a little local python version with an appropriate version directly into yout project and then neatly store all the modules you need in a pip freewze file.

This needs to be done in each project. But what about when the same kind of python environment could fit on multiple places? That would lead to redundancy to do everywhere that's needed... I used to have a special environment install per project. This was how I got used to using it. Then I discovered pyenv! It's ideal! This is how it works:

//How it works text

But, this only works well on unix platforms. So... what do you do If you are on windows? My answer to this question is wsl (windows subsystem linux). So my recommendation is using pyenv it's the best solution; and if you are on windows you can use it via wsl. This also have some benefits when it comes to machine learning because you can have your windows run your GPR drivers and have access to your nvidia stuff easliy. (double check some sources on this last parts and find some backup sources on how to do it.)