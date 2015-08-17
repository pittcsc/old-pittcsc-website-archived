[PittCSC.org](http://pittcsc.org)
=================================

Website for the Pitt CSC.

Project Structure
----------------

| Directory   | Purpose |
| :--------   | :------ |
| `_drafts`   | Draft blog posts that are not publicly available yet |
| `_includes` | Sections of reuseable HTML that can be includes on other pages |
| `_layouts`  | HTML templates that can be used by other HTML files to share structure |
| `_posts`    | Published blog posts |
| `assets`    | The home for the HTML/CSS/Fonts/Images that this site uses |
| `pages`     | Contains all of the "static" pages for the site |

Development
-----------

1.  Install [Ruby](https://ruby-lang.org).

2.  Install dependencies:

    ```
    bundle install
    ```

3.  Run the development server:

    ```
    bundle exec jekyll serve --watch
    ```

Deployment
----------

Push to `master` at [pitt-csc/pitt-csc.github.io on GitHub](https://github.com/Pitt-CSC/pitt-csc.github.io).  The site is hosted on GitHub Pages, and will be automatically built and deployed.
