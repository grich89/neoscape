# neoscape
https://grich89.github.io/neoscape/

## i. design
Simple layout based off properties grid mockup and a grayscale color scheme. Utilizes a full width navigation bar with hamburger menu. The project is responsive on all devices and screen sizes.

## ii. development
The structure of the project is based off of rdwatters' gulp starter kit: https://github.com/rdwatters/gulp-starter. I removed all files and folders that were unnecessary to the project, and removed the minification and compression tasks from the gulpfile.

Wherever possible, I used css for animation and display of hidden content. For the main navigation and search menu, I added a small amount of vanilla js to trigger the aria expanded and hidden states along with active classes (refer to js/nav.js for code).

The page content is served through handlebars.js. I created an object of the navigation links and properties and then use handlebars' forEach syntax to loop through each one (refer to js/template.js for the object and index.html for the handlebars template). This was a much more practical and expandable way to structure the content than static html.

Project runs on localhost. To run it, download this repo, cd to the directory and run the "gulp" command.

# iii. future improvement
- seo optimization
- use twig rather than handlebars for scalability
- navigation menu does not support a 2nd or 3rd level
- use svgs rather than fontawesome icons
- add loading animation before content renders
- add animation for expanded search and main nav
- more accessibility testing

# #iv. other important things
I tried to highlight my ability to write DRY, reusable and organized code in this project. I didn't want to spend too much of the alotted time on the design or the project setup, so the design is based almost 100% off the pdf attachment and I elected to use a gulp starter kit.