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
