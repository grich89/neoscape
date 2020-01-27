# neoscape
https://grich89.github.io/neoscape/

## i. design
Simple layout based off properties grid mockup with a grayscale color scheme. Utilizes a full width navigation bar with hamburger menu. The project is responsive on all devices and screen sizes.

## ii. development
The structure of the project is based on rdwatters' gulp starter kit: https://github.com/rdwatters/gulp-starter. I removed all files and folders that were unnecessary to the project, and based on the instructions I removed the minification and compression tasks from the gulpfile.

Wherever possible, I used css for animation and display of hidden content (see the /scss folder). For the main navigation and search menu, I added a small amount of vanilla js to trigger the aria expanded and hidden states along with active classes (refer to js/nav.js for code).

The page content is served through handlebars.js. I created an object of the navigation links and properties and then used handlebars' forEach syntax to loop through each one (refer to js/template.js for the object and index.html for the handlebars template).

To run the project locally, download this repo and run the "gulp" command.

## iii. future improvement
- seo optimization
- navigation menu does not support a 2nd or 3rd level
- add loading animation before content renders
- add animation for expanded search and main nav
- more accessibility testing
- lazyload images
- load handlebars as node package
- consider using twig rather than handlebars for scalability

## iv. other important things
Should be pretty straightforward! I spent most of my time trying to keep things organized and readable.