# Notes

## Github - 9/8/24
- The primary uses of Github are as follows:
  1. Keeping project version up to date across a team
  2. Having an online copy of your project accessible by any machine from which you can access your github account
- The most important concepts in github are cloning, commiting, pushing and pulling, amond a few others
  * Cloning makes a copy of the repository on the respective machine, allowing it to synch with other devices
  * Commiting compiles your changes and prepares them to be pushed to the repository
  * Pushing merges your changes into the main repo, or gives merge conflicts if it is the case
  * Pulling synchronizes your project with the main version
- When a merge conflict appears, you must go through using an editor and resolved the conflict, keeping necessary parts of both conflicting push requests
- The style guide for githubs md files is available here: [Style Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## HTTPS - 9/21/24
- Registering a domain name with caddy will allow you to use secure connection as opposed to http
- To link a domain name to an ip-address, you must first buy a domain name, and then register that address so any time the domain name is input, it will redirect to the ip-address provided
-  Using https, communication will be encrypted and decrypted automatically by caddy(?) to ensure safe requests and responses

## HTML - 9/21/24
### HTML Structure
- HTML structure is split into body, headers, footers, main, sections, and many more options
- Dividing the page up into its respective sections is as important for design as it is for code readability
- Theres two types of elements, block elements and inline elements. Block elements will split into their own sections, inline elements will maintain the flow of the block they are in
- All elements must have a starting and ending cone thing
### HTML Input
- HTML has always had tons of input elements such as form, fieldset, labels, textareas, and more
- Form is used for submitting data, the others are more for inputting data
- input elements share the attributes name, disabled, value, and required
### HTML Media Elements
- Media elements include img, audiio, video, svg, and canvas
- All media elements require a src or source which is a path to the URL of the media, be it relative or full path
- audio should not autoplay typically
### HTML in startup
- simon.mydomain will show the example file when input, i just uploaded that by downloading the simon repository, and then running the following line to put it on the server
```
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
```
- I have to create my html files, including holders for the database and other stuff, to give a basic layout of my startup
- Index.html is the main html file that is ran by the server, so that is the front page
## HTML Elements
1. <html>
- Represents the root of an HTML document. All other elements are nested inside it.
2. <head>
- Contains meta-information about the document, such as the title, character set, and linked stylesheets or scripts.
3. <body>
- Contains the content of the webpage that users see, including text, images, and interactive elements.
4. <h1> to <h6>
- Headings, ranging from <h1> (largest) to <h6> (smallest). Used for titles and section headings.
5. <p>
- Represents a paragraph of text.
6. <br>
- Inserts a line break. Unlike paragraphs, it doesn’t add extra spacing.
7. <strong>
- Makes text bold, used to emphasize important content.
8. <em>
- Italicizes text, used for emphasis.
9. <a>
- Creates a hyperlink. Requires an href attribute to specify the URL.
- Example: <a href="https://example.com">Link</a>
10. <ul> and <ol>
- <ul>: Unordered list (bulleted).
- <ol>: Ordered list (numbered).
- Both use <li> elements to define each list item.
11. <li>
- Represents a list item within <ul> or <ol> elements.
12. <img>
- Embeds an image. Requires a src attribute for the image URL and an alt attribute for alternative text.
- Example: <img src="image.jpg" alt="Description">
13. <div>
- A generic container element used to group content. Useful for styling and layout.
14. <span>
- An inline container, often used to style or manipulate parts of text.
15. <header> and <footer>
- <header>: Contains introductory content or navigation links at the top of a section or page.
- <footer>: Contains footer information, like copyrights or contact details, usually at the bottom.
16. <nav>
- Represents a section of the page with navigation links.
17. <section> and <article>
- <section>: Groups related content, often for organizational purposes.
- <article>: Represents a self-contained piece of content that could be distributed or reused independently.
18. <form>
- Used to collect user input. Often includes input fields, buttons, checkboxes, and other elements.
19. <input>
- Represents a field for user input. Can be of various types, such as text, password, checkbox, radio button, etc.
20. <button>
- Creates a clickable button for user interaction.
## CSS 9/28/24
- Css is a method of controling the boarders and placement of different elements within an html document
- you define the standard conventions for each different element, and it will apply whenever that element is used in an html document
- it works with a cascading effect, so the effects of parents can be overwritten by children
![image](https://github.com/Psloan4/startup/blob/main/CSS%20meme.jpg)
- Bootstrap is commonly used like a library almost that has classes you can use which automaticly apply created css styles, such as cards, accordions, etc
