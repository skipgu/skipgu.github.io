# Blogs guide

## How blogs are displayed
Blogs are shown both on the front page, as well as on their dedicated "Blogs" page 

## How to add blogs 
Blog data is stored in markdown files in the `_posts` directory. To add a blog, you have to create a new `.md` file for it. 

### File naming convention 
Blog/post markdown files have to follow the a specific format, as they are enforced by Jekyll and they won't be displayed otherwise
`YYYY-MM-DD-event-name`

### Field format
- After each field there has to be a ":" and a space 
- The fields have to be between the two `---` lines in the first and the last line 

### Required fields
Some fields need to be specified in order to properly display them (they have no fallbacks). Every blog must contain the following fields:
```md
---
title: <Title of the blog> 
sub_title: <Subtitle of the blog> 

tags:
  - <Tag name> 

author:
  name: <Name of the author> 
---

```
Note that some fields are composite, and their nested fields (like author->name) should be indented using **two spaces** in order to properly display them. 

### Optional fields
```md
---
comments: <true / false> 
alt_title: <Alternative title of the blog> 

---
```

### Blog content
To add content to your blog, you have to add them **after the fields** (mentioned above), **outside the seperator hyphens**. To format the content, the general rules of the markdown format apply, however there are some conventions that we use. 

#### Assets
All assets (such as images) should reside in a **new folder that you create** with the title of your blog post under the `assets/posts/` directory. To insert an image, you can insert it in the following way: 
- `![Description of the Image](/assets/posts/activity-report-2025-2026/image-name.PNG)`

#### Sub-sections  
For consistency, sub-sections should use exactly two hashtags, like this:
- `## This is a subsection` 
