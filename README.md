# *TheGame*
### The Second Milestone project by Stan Kaczorkiewicz

This is my second project as part of the Software Development Course by **Code Institute**, the first one involving JavaScript.
Main first idea regarding to the Milestone project was totally different. 
I started creating website, thet was meant to present beauty of Tatry Mountains to English-speaking world 
(and to show some of my great pictures, taken there). During the process of creations, however, 
I've noticed that my JavaScript understanding wasn't good enough to perform that task.
After the moment of panic, when I consiedered to abadon tyhe whole course, if I can't learn anything here,
I started new project, which I have a pleasure to present here.

The main purpose of *TheGame*, from my perspective, was to help me to understand how JavaScript works.
I'm still  far away from being perfect at it, but  I'm sure I am in different place, than I was a week ago.
As the date of my submission was coming closer, I worked under strong time pressure.
I'm quite proud of what I was able to do in such a short time, while still doing my full-time job as a key worker.
Also, my first idea for the project, stands behind the third social media link, that lead user to my fiancee Pinterest page.
I decided to leave it here, as it looks much nicer with three links, and I dont use enough social-media to have three links on myself.

The reason behind *TheGame* from the user perspective, wes to have a bit of mental excersize, 
or just some entertainment while sitting home because of the worldwide lockdown.

## UX

While creating *TheGame*, I wanted to make interactive, intuitive, user-friendly website,
that will entertain users in this difficult time.To make it intuitive, I used Bootstrap tools, and 
I choose light-blue colors, as it has positive and calming conotations.

My first idea of the look of *TheGame* can be seen [here](assets/images/firstPage.jpg) and [here](assets/images/secondPage.png).
Then I've decided it will be nicer to keep it all the time in 3-columns order,
also the first page looks better, in my opinion, with three rows instead of two, as it was firstly.

I identified a user as a random person from long list of my Facebook friends.
As an effect of that, I kept all texts on the website to the minimum, 
as it's designed to be useful for people raised in various cultures and speaking various languages.
Also the colors are easy to identify, and most of the game is self-explaining.

# Features

## Existing Features:

### Navigation 
Based on the tools provided by bootstrap, provides user with a chanse to come back 
to the home page at any stage, or to contact page, to be in touch with me if they wish. 
Navigation also provides an access to every other level, if user will "unclick" the "disabled" class in it.
I was using that option while creating the website and found it very useful, so I decided to leave it for future use. 

### Contact from
If any user would like to contact me, to throw their love or dissapointment in my face, without being recognized
(The contact form asks for name and email, but does not check if it's the real one).
Also if at any point *TheGame* will become popular outside of my Facebook friends, thats the occasion for user to stay in touch.

### Footer with social links
Fake quotes are intended to make users day a little bit brighter and to turn their attention away from our current situation on the world.
Social links will allow user to contact me on facebook, see my photos on Instagram,
or to see some beautiful pictures of __*Tatry mountains*__ on my miss Pinterest, as I mentioned above.

### Three levels of the Game
Will provide user with an occasion to kill some time, while self- isolating.
Increasing level of difficulty is making *TheGame* more attractive (at least in my opinion).

### Time counting function
This is the idea that I implemented as the last one, after comments made by my friend.
He said he would like to know how long does it take to make it and I found it as a really good feature, 
that adds an element of competition to it.

### Tiles shifting their position
It makes TheGame a bit more challenging for players on the large screen, but also easier to scroll through 
for mobile players (as I'm assuming most people are using their Facebook on smartphones, 
so this is where they will use *TheGame* as well, if I will make it public).
As a compensation for being more difficult, I allowed the question marks to stay in different position on previously clicked tiles,
so that users can easier identify the tile, even if it has changed its position.


## Features left to implement:

### More levels
As I'm working to the tight schedulde, I was unable to create them by now.
I would love to make *Thegame* 20+ levels long, but I need to work out how to do it using JavaScript first.
I wouldn't like to create more and more HTML pages for every level.
I'm sure it's doable, but to work it out could take me another week or so, and I don't have that much right now.

### Score and Username
Another good idea, dropped by friend of mine, that has played *TheGame* as a first user, 
was that he would like to see his score in a live preview, and be able to compare it to other players.
I belive that both, live score preview(that could somehow calculate the time and the ammount of matches found)
and the automaticly given Username could be nice feature, once there will be more levels, 
so the players could stay more emotionally attached to *TheGame*.


# Technologies used:

- HTML5 to structure the page;
- CSS 3 for adding the style;
- Bootstrap for navigation and layout of the tiles, 
    and to make every page responsive;
- JavaScript to add functionality and logic;
- jQuery for finding elements in the DOM three;
- GitPod provides me an enviroment where I've been working;
- FontAwesome to provide icons;
- Google Fonts for that fancy font I'm using for every bit of text;
- [W3C validator](https://validator.w3.org/) To validate HTML and CSS;
- [This](https://www.freeformatter.com/javascript-beautifier.html) tool to validate and format JavaScript;
- [Jasmine](https://jasmine.github.io/) was intended to provide some tests, although it's worth to mention, 
that as our course barely touch the subject of automated testing, I decided to sacrify that bit, 
when I realized that I spent whole evening trying to figure it out myself, instead of spending my short time in more productive way.
- [EmailJS](https://www.emailjs.com/) to provide me with the functionality of my Contact Form;
- [GitHub](https://github.com/MrColorado35/TheGame) allowed me to store my files and to deploy my page for free;
- Developer Tools (build-in feature of Google Chrome), that allowed me to instantly apply all the changes I intened to make 
and to see their effects (or lack of effect in many cases) immediately.


# Testing 

The process of creation of *TheGame* required me to constantly test every new bit of functionality I was going to add.
To be honest, I think that more that half of the time, that I've spent over this app, was spend on the manual testing,
over and over again.

Most of the tests, was performed in Dev Tools, or in Gitpod itself. While testing, I learned to only test one part of the code at a time,
as my first idea, of testing whole parts of code not only did not work, but also made it more complicated to find the bugs.
The final part of the test, was to send app to few friends of mine and asking them to play and send me some feedback.
As mentioned above, one of the effects of that was a time-measure function, that gives a user an idea of how good they were.

I must confess, that despite my previous attitude, that I will describe them on the end of the project, 
I cannot remember many of them.
That's another thing that I learned thanks to this project-  the importance of README and habit of noting all the tests straight away.
Now I can only look at the history of my git commits and scratch my head, trying to understand "past-me".

I remember that the biggest issue I had while creating *TheGame* was "flipping" the tiles back to the neutral position, 
when the user did not match two of them. After few helpful answers to my call on the Slack, and a lot of googling,
I finally managed to get it done. I belive my commit comment shows a bit of relief I felt that day.

Another bit that I was testing a lot for, was to create a function, that will match two pieces of the same color,
without using IDs. My idea was to only use classes, so I don't have to create more and more HTML files 
and give every single Tile an unique ID.
It took me more than a day, to realise that it is not possible, with my current level of knowledge.
This is a subject of my ambition, that once I'm not under the strict time pressure, I will find the way to do it.

One of the issues I found in the latest phase of testing, was that I forgot to copy one _script_ tag, 
what stopped the contact form from functioning.
Other issue, more aestetical than functioning really, was that after I implemented the Time Check function, 
there was two alerts, one after another, that could be annoying. I decided to keep both, 
score/ motivational message and the time in one alert, to create nicer User Experience.

# Deployment

As I constantly worked in GitPod, the process of deployment my app on GitHub was almost automatic.
All the problems I experienced, while deploying my previous project, tought me where to look for the issues if I can't do it.
That's how I knew what format files to avoid and how to look for the bugs at the first place, if it does not work.
This time all I had to do was to make sure that I selected "master" branch in settings tab on the
[GitHub](https://github.com/MrColorado35/TheGame) website, avoid formats, that GitHub cannot recognise and 
then the program did the rest for me.

I pushed my work to GitHub every day, to make sure that deployed version of my website is identical 
to the code in my browsers GitPod app. 
**[Live version of my website is available here.](https://mrcolorado35.github.io/TheGame/index.html)**
I will not change anything for four weeks, beginning on the day I will submit my project, to make sure that my work has been graded
and I recived feedback for my current knowledge, not anything I will learn after that time.

As for now I'm not planning to deploy the page in any different hosting platform, as it is not intended to bring me any profit,
and I can not afford any unnecessary expenses in this difficult time of global pandemy.

# Credits 
In a part of this project, I was following some materials provided in our course at Code Institute. 



