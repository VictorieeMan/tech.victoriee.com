---
date: 2023-10-02
---
# Testing mermaid in mkdocs markdown

Found a mermaid plugin for mkdocs, and I'm testing it out.

<!-- more -->

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

Credit to: [https://www.codeinsideout.com/blog/site-setup/mkdocs-plugins/#mermaid](https://www.codeinsideout.com/blog/site-setup/mkdocs-plugins/#mermaid)