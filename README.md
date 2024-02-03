
## Unhead

This project uses the [Unhead](https://unhead.unjs.io/) framework to help you build a static site. Unhead is a simple and easy to use framework that provides a simple templating system to update your meta tags and other SEO settings for the appropriate pages.

## Github Workflow

There is a GitHub Action within this repository that can be configured using secrets to target any repository and push the static built files to this repo. You will need to create a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and add it as a secret to the repository you want to deploy to. Look at the build.yml file in the .github/workflows folder to see how to configure the secrets.

## GH Pages branch or username.github.io

To deploy your site to GitHub pages you will need to have a repository name `yourusername.github.io` . This repo is already configured to deploy to GitHub pages and does not need a special branch configured.

If you want to deploy to a specific branch or another repo you can do so by going to the settings tab of your repository and scrolling down to the GitHub Pages section. Here you can select the branch you want to deploy from. Be sure to match this branch in the build.yml file.

## CNAME

If you are using a custom domain you will need to update the CNAME file to public folder of this project. This file should contain the domain you want to use. You will also need to configure your DNS settings to point to GitHub pages. [Here is a guide to help you with that](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).


## Example Sites
- [labartisan - bio demo](https://labartisan.net/pixian/bio-demo/#)


