[PittCSC.org](http://pittcsc.org)
=================================

Website for the Pitt CSC.

Project Structure
----------------

| Directory   | Purpose |
| :--------   | :------ |
| `_includes` | Sections of reuseable HTML that can be includes on other pages |
| `_layouts`  | HTML templates that can be used by other HTML files to share structure |
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

Push to `dev` at [pitt-csc/pittcsc.org on GitHub](https://github.com/Pitt-CSC/pittcsc.org) and make pull request into 'master'.  The site is hosted on GitHub Pages, and will be automatically built and deployed.
