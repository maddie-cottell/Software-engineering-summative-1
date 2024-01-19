# Software-engineering-summative-1

## Contents

- [Assignment Aim](#assignment-aim)
- [Planning - Agile method](#planning---agile-method)
- [LTI & LTV calaculator](#lti-and-ltv-calaculator)
- [Figma Prototype](#figma-prototype)
- [Project Files](#project-files)
- [Branches and pull requests](#branches-and-pull-requests)
- [Testing](#testing)
- [Project Management](#project-management)
- [Usage](#usage)
- [Evaluation](#evaluation)
  

## Assignment Aim 
🥅 The goal of this assignemnt is to create a Web App that will be useful to my team and workplace.

I work in the Household team in my workplace. I have decided to create a simple calcualtor which produces the likely loan-to-income or loan-to-value that somebody will be offrered on a mortgage, based on criteria about themselves that they input. 

The web app will interactive and give the user different options of what they want to produce.

I will create documentation and Read-Me files for different parts of the project, recording both how I create my project and how it will be maintained and managed in the future.

## Planning - Agile method

![Image showing agile pipeline](/Images/Agile_image.jpg "Agile image")

Figure 1 - Agile project framework (Adobe images, n.d)
 


🏃‍♀ This project will follow the Agile method, which is an iterative and flexible approach that allows for continuous improvement and adaptation to changing requirements.

While working on it I will break down the project into smaller chunks. I will monitor these using issues on the kanban board, which will allow me to monitor and plan tasks while still being able to easily adapt the plan as there are changes to requirements. Before I begin I will have a sprint planning meeting where the tasks are determined, each of which will have a clear goal which is easy to determine if it has been completed or not.  

As this is a small project it is not necessary to assign large periods of time for each chunk (for eaxmple in a larger project this may be two weeks), but I will have daily meetings with my team to discuss my progress and recieve any feedback which I can apply. The team will have access to my project and kanban board so they are able to see where I am at with the plan and what is left to be completed. 

## LTI and LTV calaculator
🏠 My idea for my app which I pitched to my team was to create a calculator which would be publicaly available on our workplace's website which people could use to understand the Loan-to-Value or Loan-to-Income they are likely to be offered when purchasing a property. My workplace has rules and guidance for Banks and mortgage providers, so this will be useful to help the public understand what rules are in place. 

My idea was to allow the user to have the option to enter their income and be told what what size loan they are likely to be offered (based on the curent average LTI), or enter the value of the house they would like to purchase and be told how much they would likely be offered for the loan. This is a helpful tool to be able to work out what size deposit they would need, or if they need to reconsider their budget for the property. 


## Figma Prototype
🎨 I used the platform Figma to create a prototype that I wanted my calculator to look like.

![Image showing first figma prototype](/Images/Prototype_1.png "Prototype 1")

Figure 2 - Intial Figma prototpye


Firstly, I came up with a general idea of what I wanted my app to look like. I knew that I wanted to have the information at the top, with the interactive buttons and calculations at the bottom. This makes the most sense logically, and ensures the person has read everything they need to before beginning to use the program. 

![Image showing second figma prototype](/Images/Prototype_2.png "Prototype 2")

Figure 3 - Continued Figma prototpye

Next, I decided which buttons I would have, and where they would be placed on the app. In this prototype I highlight what each button is, such as an input button or just a text box. 

![Image showing final figma prototype](/Images/Final_prototype.png "Prototype 2")

Figure 4 - Final Figma prototpye

Finally, I added the details to the prototype and produced the final design. I decided which image I would be using, and matched the colours of the other boxes to it to improve the look. I also added the text and description of what the product would be doing to produce the final workable prototype.

## Project Files
📂 My project and repository is made up of multiple files which work together to produce the final output.

![Image showing split of languages](/Images/Languages_image.png "Languages")

Figure 5 - Split of languages in project

The project uses a combination of HTML, CSS and Java Script

calculator.html - This is a HTML file which creates the structure and content of my web page by creating elemenets such as buttons and headings

calculator.js - This file carries out the "behind the scenes" calculations. It has functions which takes the user's inputs and to create the desired output.

calculator_test.js - This file has functions which does vital testing of the main calculator Javascript file, which I will go into further detail on later

CSS_stlye.css - Defines how the HTML file will look and the syle of the overall webpage by editing things such as fonts and colours.

Images - All images which I use in both this ReadMe and in the HTML file are stored in a folder where they can easily be read in. I chose to do this rather than linking online URLs because it is possible that they could be deleted or changed which could disrupt the flow of the text or possibly even break the code depending on what the image is being used for.

In summary, the HTML file defines the structure of the page, the CSS file styles the elements, the JavaScript file adds dynamic behavior, and the testing file ensures that the JavaScript functions work as intended and that the user won't encounter errors while using it. The image files provide visual content for the program.

## Branches and pull requests
⬇️ In my opinon, one of the main advantages to using GitHub is the ability to track what has changed in a project. For example, 

Using Git's version control it is possible to see with each commit what has changed in a file, and the description or reasoning from the person who did it. If there is a problem with the change they made it is also possible to restore the code to a previous version

![Image showing branch name](/Images/Branch_image.png "Branch")

Figure 6 - Example branch 

While carrying out this project I worked in seperate branches. This allowed me to keep different workflows seperate, and only combine them when I knew that I was happy.

![Image showing branch push](/Images/Push_image.png "Branch push")

Figure 7 - Example of a branch "push"

When I wanted to combine the branches I "pushed" what I had done to the main branch. From there I selected to look at the code, and if I was happy with it I would "pull" to combine it with the rest of the main project.

![Image showing branch pull](/Images/Pull_image.png "Branch pull")

Figure 8 - Example of a branch "pull"

Seperate branches can be very useful when working in a larger team, where it is possible for people to be working on multiple things at once without the risk of a change in their work causing an issue for another programmer.

Using branches is also advantageous when carrying out continous integration, as pipelines are triggered by changes in certain branches and allows the programmer to work in in a controlled way 

## Testing
📚 It is very important when carrying out any project to test that everything works as intended and that the user will not encounter any errors.

I used the JEST testing methods to check that two things in my project worked - if it is successfuly able to calculate the LTI and LTV, and if it is able to determine if a valid number has been entered by the user.

It does this by importing the functions from the main file, and creating individual test cases using an example number. Using the JEST testing method it is also possible to try "mocking" an invalid input and seeing what happens if a user was to make a mistake . It makes assumptions and would expect the validity test to return that there had been an error.

By carrying out these tests I feel more confident . The testing file will remain in the repository so it is possible for other users to see what testing I carried out, and also so they can use it themselves if they make any changes to the code or have any problems. 

## Project Management
👩‍⚖️ I used a Kanban board to make sure I was on track with my tasks and able to work using my agile framework plan. 

![Image showing initial Kanban board](/Images/Initial_board_image.png "Initial board")

Figure 9 - Intial Kanban board

When I first started the project I created this board and linked it to my repository. 

It has 3 columns where tasks sit depending on what stage they are at.

One of the first things on this list, and one of the first things I was able to move to the complete folder, was to create a list of issues that need to be completed. I worked through the plan I had with my team and created a seperate issue for each task that needed to be done, which I then created a branch for. I assigned each of them a priority level, a size and a label. I didn't need to assign who would be completing each issue, but this would be a useful if working as part of a larger team.
 
I displayed this board to my team every day in our daily meetings, and they had access to it at all times so they were able to see where I was with each task. This was helpful with giving them an estimation of how long things were taking, and when they could expect each stage to be complete. 

As I worked through the project and began and completed tasks, I moved the issue to the relavent column. 


![Image showing final Kanban board](/Images/Final_board_image.png "Initial board")

Figure 10 - Final Kanban board

Now that the project is finished everything has been moved to the completed folder! This board will remain as part of the project so that I can add more issues to it if I want to complete further work and improvements on it, and I also have a record of what I did to look back on.

## Usage 

🖥️ Using this program is simple! All you need to do is clone the repository onto your local device on a platform which supports Git, such as Visual Studio Code. All of the files are stored within the same directory and automatically produce outputs which feed into one another, so it is possible to run the calculator and the testing straight away. 

It is likely that this program will require maintenace, such as updating the standard LTI and LTV as the market and trends change. This should be a small to fix to do, changing one number which is marked by a comment in the code. It is important to run the testing after making any changes to ensure that the program is continuing to work as intended. 

## Evaluation

🏁Overall, I enjoyed this assignment and thought it was successful. I was able to build a calculator using which will be beneficial for my workplace and is ready to be implemented.

Using Github enhanced the overall project by allowing me to work incrementally, and track what I had done. As I worked through the project it was very useful to be able to look at the commit history to keep track of what I had done, and by linking branches to issues in my kanban board it was very easy to stay on top of my to do list.

I did face some challenges when completing this assignment. When I began I initially had some trouble getting used to using Github and its different features. There were also some simple things that I just wasn't used to and I got stuck on, such as using a hyphon instead of a space when creating links in the contents bar, which required time and further research to overcome. 

I also had some trouble with the testing when I began because I had never used the JEST method before, but I was happy with the testing methods that I was able to create.

If I was to complete this project again or had the oppurtunity to expand on it in the future I would like to expand what my web page is able to do, such as allowing the user to enter the deposit that they are planning to put down, and other characteristics about themself that would affect the mortgage they would be offered.

### References
Kostiantyn (n.d.). Agile lifecycle development process diagram, software developers sprints infographic. Available at: https://stock.adobe.com/uk/images/agile-lifecycle-development-process-diagram-software-developers-sprints-infographic/347282763.
