###REACT with lean Visual Studio 2015 solution

Install Steps

First, if you have VS 2015 installed you can skip the instructions, open the solution and hit F5 and be good to go.

If you don't have VS 2015 installed (not required) follow these steps.

* [Install Node.js](https://nodejs.org/download/) (You may need to restart your command prompt for it to recognize Node)
* Install Gulp and Webpack 'npm install gulp webpack -g'
* [Install DNVM](https://github.com/aspnet/Home/) (if it is TLDR do these steps)
    * Run @powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}" at a command prompt
    * Verify DNVM is installed with 'where dnvm' (if it doesn't show it in your user path you may need to restart your command prompt)
    * Run 'dnvm upgrade' to make sure you have the latest version
* Navigate to your repo where the .sln resides and type 'dnu restore' (it is setup to restore .NET dependencies, Node dependencies and run gulp and webpack tasks)
* If you are pulling commit 2159f5c run gulp clean because the directory structure for the lib folder has changed
* Navigate into the ReactStart folder and type 'dnx . web' (should see 'Started' when it is running)
    * **I updated the solution to use 1.0.0-beta5**
    * **If you get errors that 'No service for type has been registered' then the dnvm is using the wrong runtime. Follow these steps:**
    * Run 'dnvm list'
    * If it does not have 1.0.0-beta5 listed you will need to run 'dnvm install 1.0.0-beta5'
    * If the selected runtime is not 1.0.0-beta5 x86 run 'dnvm use 1.0.0-beta5 -p'. This will change it to beta4 (the runtime the app is using) and make it persistent
    * Run 'dnu restore' again
    * Run 'dnx . web' and you should see 'Started' when it is running
* Navigate to [localhost:12345](http://localhost:12345) in your browser of choice
* You are done :)

#####Notes

You may need to run dnu restore a couple of times to make sure it gets all the necessary libraries since I have made some significant changes.  
If you plan on working strictly in javascript using REACT you are good to go. Make new jsx files and require them correctly and webpack will handle the rest.  
If you are going to be doing some C# you can write it without using Visual Studio. The new .NET compiler (Roslyn) will dynamically compile the C# code for you when you run the website. The major downside is you won't get intellisense or other IDE help.  
To install the snippets in the root follow the instructions[here](https://msdn.microsoft.com/en-us/library/ms165394.aspx) under the section 'To Add a Code Snippet to Visual Studio'.  