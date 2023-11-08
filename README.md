# HOW KNOWLEDGEABLE ARE YOU?

How Knowledgeable Are You  is an online quiz. This quiz is for anyone that would like to test their general knowledge.
On the website users can take a look at the rules before they start the quiz. Once the quiz is started users will have 10 seconds to answer each of the seven questions that will be asked. The user will have 3 lives, if the timer runs out or the question is answered incorrectly a life will be lost. If all the lives are lost it is gameover and there will be the option to try again. Once you complete the quiz you will be presented with your score and the option to play again (the 7 questions are ramdomly selected from an array of 21 questions so by trying again you get the chance to answer some new questions).

Live project: [HOW KNOWLEDGEABLE ARE YOU?](https://isabellaobrien.github.io/quiz/)

![screenshot of website on different size devices](/assets/images/Screenshot%20(70).png)

## Features:
* Logo
    * The logo is situated at the top of each page.

![screenshot of logo](/assets/images/Screenshot%20(71).png)

* Starting page
    * It is the first page the user comes across.
    * It contains a welcome message and a list of information to get a better understanding of the game before the user starts playing.
    * the start button is situated at the bottom of the page. By clicking this button the user can access the quiz page and start the quiz.

![screenshot of the starting page](/assets/images/Screenshot%20(72).png)

* Quiz page
    * It is the second page the user comes across.
    * In the top left corner there is a timer that starts counting down from 10 as soon as the page appears.
    * In the top right corner there is the life count that starts at 3. It decreases when a question is answered incorrectly or when the timer runs out before the user has answered the question.
    * Then we have the question and four buttons containing the possible answers.
    * Once an answer is selected the timer stops and the next button appears at the bottom of the page which allows the user to move on to the next question. 
    * Once the next button is clicked the timer restarts from the beginning and a new question is presented.

![screenshot of the quiz page before a question is selected](/assets/images/Screenshot%20(73).png)

![screenshot of the quiz page after the question has been selected](/assets/images/Screenshot%20(74).png)

* Gameover page
    * Once your life count reaches zero this page will appear to inform you.
    * This page contains the game over message.
    * At the bottom of the page there is a try again button which allows the user to return to the starting page.

![screenshot of the gameover page](/assets/images/Screenshot%20(75).png)

* Finishing page
    * This page appears once the user has answered 7 questions.
    * There is a message telling the user the score. There is also instructions for the user to follow in order to save the score.
    * At the bottom there is a save button to save the score and  a play again button which allows the user to start the game again from the starting page.

![screenshot of the finishing page](/assets/images/Screenshot%20(76).png)


## Testing:
| Action | Expected behaviour | Pass or Fail |
|---|---|---|
| Enter URL in browser | the landing page of the website should display on the screen | pass |
| Click the start button | quiz page should appear | pass |
| Click an answer button | once an answer is selected the timer should stop and the next button should appear if the answer  is correct it should turn green, If the answer  is incorrect the button should turn red and the correct answer should be highlighted in green | pass |
| Click the next button | the quiz page should display a new question and the timer should restart | pass |
| Click the try again button | the starting page should appear allowing the user to restart the quiz | pass |
| Click the save button | this button should save the score temporarily | pass |
| Click the play again button | the starting page should appear allowing the user to restart the quiz | pass |

### Validator testing
* I tested the HTML with the [W3C markup validation service](https://validator.w3.org/) and no errors or warnings were returned.
![screenshot of W3C markup validator](/assets/images/Screenshot%20(77).png)
* I tested the CSS with the [W3C CSS validation service](https://jigsaw.w3.org/css-validator/) and no errors were found.
![screenshot of W3C CSS validator](/assets/images/Screenshot%20(78).png)
* I used js linter called [JSlint](https://www.jslint.com/) and [JShint](https://jshint.com/) and no major issues were raised.
* I confirmed the website's accessibility and readability by using lighthouse in devtools.
    * on desktop: ![screenshot of lighthouse results on desktop](/assets/images/Screenshot%20(38).png)
    * on mobile: ![screenshot of lighthouse results on mobile](/assets/images/Screenshot%20(39).png)

## Unfixed bug:
Each time you play the quiz you have 7 questions to answer. These questions are randomly chosen from an array of 21 questions. Once a question has been answered it gets removed from the array of questions so that it does not repeat itself.

The problem is that once you have played the game three times and therefore  answered 21 questions there are none left. The initial idea was to restore the questions to the array and ask them again, this was not possible because of time constraints and problems with codeAnywhere. It definitely is something I would like to implement in the future. 

A temporary solution was reloading the page using window.location.reload so the question array would start from 21 again.


## Deployment:
The site was deployed via github pages:
* I navigated to my github repository.
* I clicked settings.
* In the settings I looked for Pages.
* In Pages I changed the branch option from none to main.
* I then saved and my website was deployed.




