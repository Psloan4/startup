# Notes
## Terminal
- chmod: Changes file permissions. You can specify who can read, write, or execute a file (e.g., chmod 755 file.txt gives read, write, and execute permissions to the owner, and read and execute permissions to everyone else).
- pwd: Prints the current working directory, showing the full path of the directory you are in.
- cd: Changes the current directory. For example, cd /home/user/Documents will move you to the Documents directory.
- ls: Lists the contents of a directory. Options like -l provide detailed information, and -a shows hidden files.
- vim: Opens the vim text editor. Used to create and edit text files. It is a powerful editor with many features but has a steep learning curve.
- nano: Opens the nano text editor. It's simpler and more user-friendly compared to vim, often used for quick file edits.
- mkdir: Creates a new directory. For example, mkdir new_folder will create a directory named new_folder.
- mv: Moves or renames files and directories. For example, mv file.txt /home/user/Documents moves file.txt to the specified directory, and mv oldname.txt newname.txt renames the file.
- rm: Removes (deletes) files or directories. Be cautious, especially with the -r (recursive) and -f (force) options, as they can delete directories and their contents without confirmation.
- man: Displays the manual page for a command. For example, man ls will show detailed information on how to use ls.
- ssh: Opens a secure shell connection to a remote server. Used for logging in and executing commands on another machine over the network.
- ps: Displays information about currently running processes. Options like -aux provide detailed information about all processes.
- wget: Downloads files from the internet. For example, wget https://example.com/file.zip will download file.zip from the specified URL.
- sudo: Executes a command with superuser (root) privileges. It is often used to run commands that require administrative rights, like installing software or modifying system files.

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

## Domains
For the domain name banana.fruit.bozo.click, here is the breakdown:

Top-Level Domain (TLD): click
The TLD is the last part of the domain, which identifies the domain extension (like .com, .org, .net, etc.). In this case, .click is the TLD.

Root Domain: bozo.click
The root domain is the combination of the TLD and the domain name directly to the left of it. Here, bozo is the root domain's name, and .click is the TLD, making bozo.click the root domain.

Subdomains: fruit and banana
Subdomains are the parts that appear before the root domain. Here, fruit is a subdomain of bozo.click, and banana is a subdomain of fruit.bozo.click.

So, banana is a subdomain of fruit, which itself is a subdomain of bozo.click.

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
1. html>
- Represents the root of an HTML document. All other elements are nested inside it.
2. head>
- Contains meta-information about the document, such as the title, character set, and linked stylesheets or scripts.
3. body>
- Contains the content of the webpage that users see, including text, images, and interactive elements.
4. h1> to h6>
- Headings, ranging from h1> (largest) to h6> (smallest). Used for titles and section headings.
5. p>
- Represents a paragraph of text.
6. br>
- Inserts a line break. Unlike paragraphs, it doesn’t add extra spacing.
7. strong>
- Makes text bold, used to emphasize important content.
8. em>
- Italicizes text, used for emphasis.
9. a>
- Creates a hyperlink. Requires an href attribute to specify the URL.
- Example: <a href="https://example.com">Link</a>
10. ul> and ol>
- ul>: Unordered list (bulleted).
- ol>: Ordered list (numbered).
- Both use li> elements to define each list item.
11. li>
- Represents a list item within ul> or ol> elements.
12. img>
- Embeds an image. Requires a src attribute for the image URL and an alt attribute for alternative text.
- Example: <img src="image.jpg" alt="Description">
13. div>
- A generic container element used to group content. Useful for styling and layout.
14. span>
- An inline container, often used to style or manipulate parts of text.
15. header> and <footer>
- header>: Contains introductory content or navigation links at the top of a section or page.
- footer>: Contains footer information, like copyrights or contact details, usually at the bottom.
16. nav>
- Represents a section of the page with navigation links.
17. section> and <article>
- section>: Groups related content, often for organizational purposes.
- article>: Represents a self-contained piece of content that could be distributed or reused independently.
18. form>
- Used to collect user input. Often includes input fields, buttons, checkboxes, and other elements.
19. input>
- Represents a field for user input. Can be of various types, such as text, password, checkbox, radio button, etc.
20. button>
- Creates a clickable button for user interaction.
## CSS 9/28/24
- Css is a method of controling the boarders and placement of different elements within an html document
- you define the standard conventions for each different element, and it will apply whenever that element is used in an html document
- it works with a cascading effect, so the effects of parents can be overwritten by children
![image](https://github.com/Psloan4/startup/blob/main/CSS%20meme.jpg)
- Bootstrap is commonly used like a library almost that has classes you can use which automaticly apply created css styles, such as cards, accordions, etc

## React
- React is used to create and modify html objects easily
- updateState will update objects properties, but it is asynchronous, so you cannot be sure that it will update by the next line of code
- useState returns a tuple of first a variable that can be dynamically updated (i think), and a function that is called to update that value
- Routers are used to create a custom header object that is easily injected into all html pages, as opposed to just copying it in manually
- You set a router path by using a NavLink element, where to="/yourObject", where yourObeject is a call of a function that returns the object or page you want
