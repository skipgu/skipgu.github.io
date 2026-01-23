---
title: GitLab to GitHub Migration Guide
sub_title: Import your course projects to GitHub

author:
  name: SKIP
---

![](/assets/posts/gitlab-github.png)

This guide explains two ways to move your projects from Chalmers GitLab to
GitHub while preserving the `git` history.

## Method 1: Move Code with Full Commit History

1. Clone with full history:
```sh
git clone --mirror git@git.chalmers.se:you/your-project.git
```
2. Create an empty GitHub repo.

3. Push mirrored repo:
```sh
cd your-project
git remote set-url git@github.com:yourname/your-project.git
git push --mirror
```

## Method 2: GitHub Import

GitHub has a built-in GitLab Importer, but you will need a GitLab Access Token.

**1. Create a Personal Access Token in GitLab**

* Go to: Chalmers GitLab \> User Settings \> Personal Access Tokens  
* Create token with scopes:  
  * `api`
  * `read_repository`

Copy it.

**2. Use GitHub’s GitLab Import Tool**

Go to: [https://github.com/new/import](https://github.com/new/import)

Enter your GitLab repository URL, username, and token.
