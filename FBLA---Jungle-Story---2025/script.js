// All images used from "Pixabay" and have usage rights

/*Ensures that the javascript loads only after the HTML has been loaded
and parsed. Does not wait for images or stylistic aspects such as CSS.*/

document.addEventListener('DOMContentLoaded', function() {
    const storyContainer = document.getElementById('story-container');
    const choiceContainer = document.getElementById('choices-container');
    const textInputBox = document.getElementById('textInput');
    const dropdownInputBox = document.getElementById('dropdownInput');
    const beginButton = document.getElementById('beginButton');
    const beginButton2 = document.getElementById('beginButton2');
    heading = document.querySelector('.container h1');
    label = document.querySelector('label[for="textInput"]');
    label2 = document.querySelector('label[for="dropdownInput"]');
    creators = document.querySelector('label[for="beginButton2"]');
    pressSpace = document.querySelector('label[for="beginButton"]');
    const infoButton = document.getElementById('infoButton');
    const backInfoButton = document.getElementById('backInfo');

    //Continue Story Line
    //Story line created from an array of text and choices that appear on buttons

    /*Each scene index has text which appears in a certain container, and then choices
    that appear below the text*/

    const storyLine = [
        {
            //scene 0://
            text: 'Echoes of the Jungle'
        },
        {
            //scene 1://
            text: 'Information:',
        },
        {
            //scene 2://
            text: 'This story begins in the South African Jungle... Where you find yourself in a forest...'
            + '\n' + 
            'You have two options:' + 
            '\n' + 
            'Look for civilization or Look for food...',
            choices: [
                { text: 'Look for Civilization', next: 3},
                { text: 'Look for Food', next: 4}, 
            ]
        }, 
        {
            //scene 3://
            text: 'You find yourself walking down an eerie path... Do you continue or walk back?',
            choices: [
                { text: 'Continue', next: 5},
                { text: 'Back', next: 2},
            ]
        },
        {
            //scene 4://
            text: 'You wander through the forest, but hear thundering stomps coming from your left...' + 
            '\n' + 
            'Do you invesigate or keep running?',
            choices: [
                { text: 'Investigate', next: 6},
                { text: 'Run', next: 7},
                { text: 'Back', next: 2},
            ]
        },
        {
            //scene 5://
            text: 'You see an empty village abandoned and cobwebbed all over...' + 
            '\n' + 
            'Will you explore the interior, or continue on your path for populated civilization?',
            choices: [
                { text: 'Explore', next: 9},
                { text: 'Keep Moving', next: 8},
                { text: 'Back', next: 3},
            ] 
        },
        {
            //scene 6://
            text: 'Through some brush you see beautiful elephants playing by a watering hole.' + 
            '\n' + 
            'Do you approach their sanctuary, or look for food?',
            choices: [
                { text: 'Approach', next: 10},
                { text: 'Look for Food', next: 11},
                { text: 'Back', next: 4},
            ] 
        },
        {
            //scene 7://
            text: 'You put your arm on a "tree" to your left. The "tree" begins to lift into the sky!' + 
            '\n' +
             'It is a giraffe! Do you try and tame the beast?',
            choices: [
                { text: 'Try to Back Away', next: 12},
                { text: 'Tame', next: 13},
                { text: 'Back', next: 4},
            ]
            
        },
        {
            //scene 8://
            text: 'You find yourself in front of an ominous cave. ' + 
            '\n' +
            'Bats and insects crawl from the ceiling... seemingly away from something. ' +
            '\n' +
            'What is your decision?',
            choices: [
                { text: 'Enter Cautiously', next: 14},
                { text: 'Leave & Continue', next: 4},
                { text: 'Back', next: 5},
            ]
        },
        {
            //scene 9://
            text: 'A villager jumps out with his bow and arrow and shoots you directly in the chest!' + 
            '\n'
            + 'You are dead! ' +
            '\n' +
            'Perhaps try another path? (BAD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
        {
            //scene 10://
            text: 'You slowly sneak near one of the babies who is away from his mother. He is not afraid.' + 
            '\n' + 
            'You rub his stomach tenderly, and steal him!' + 
            '\n' + 
            'You live out your dreams on the African Safari with your new pet elephant (GOOD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
        {
            //scene 11://
            text: 'You see some bananas perched on a tall tree' + '\n'
            + 'You hear a fast repeating sound near-by. Do you continue your quest for food or simply try and eat?',
            choices: [
                { text: 'Grab the Bananas', next: 15},
                { text: 'Continue the trek', next: 8},
                { text: 'Back', next: 6},
            ]
        },
        {
            //scene 12://
            text: 'The giraffe gets afraid and runs towards you!' + 
            '\n' + 
            'You get trampled and die from loss of blood. Better luck next time? (BAD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
        {
            //scene 13://
            text: 'You slowly walk towards the animal... You calm your breath and place your hand on its leg to calm it.' + 
            '\n' + 
            'It seems to like you and allows you ride on its back. After a few excruciating hours, you are seen by a helicopter and rescued!' +
            '\n' + 
            'Do you want to try again? (GOOD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
        {
            //scene 14://
            text: 'The cave is narrow and pitch black, but you use your sense of touch to navigate. ' + 
            '\n' + 
            'All of a sudden, the narrow walls spread into some type of opening and you touch something cold and metallic in front of you...' +
            '\n' + 
            'It turns out to be a chest of gold coins and you find a way out of this forest! (GOOD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
        {
            //scene 15://
            text: 'You rip the most beautiful and golden banana you have ever seen from the tree. You peel it open,' + 
            '\n' + 
            'but to your dismay, thousands of miniscule spiders begin crawling out and onto your skin!' +
            '\n' + 
            'They bite and bite until you die of their venom. Will you try again? (BAD ENDING)',
            choices: [
                { text: 'Restart', next: 0},
            ]
        },
    ];

    /*One line if-else conditional statement: If the program finds a value in the computer's local storage under the key 'storyPartIndex',
    it will set that value for the variable storyPartIndex. If the program doesn't find a previously stored value, then it just sets
    the variable storyPartIndex to 0.*/

    var storyPartIndex = localStorage.getItem('storyPartIndex') ? parseInt(localStorage.getItem('storyPartIndex')) : 0;

    function renderScene() {

        //Sets a constant scene to a certain scene in the storyLine array based on whatever value is stored in the variable storyPartIndex.
        //Then takes the text from that scene and puts that inside of the storyContainer where the story text is stored.
        //Next utilizes the backgroundImage function and the current sceneIndex to check what background needs to be set.

        const scene = storyLine[storyPartIndex];
        storyContainer.innerHTML = `<p>${scene.text}</p>`;
        choiceContainer.innerHTML = '';

        //Checks if the scene from storyList has any choices and goes through every choice in storyList
        //Then creates a new button for each choice in the scene and sets texts based on what they are in storyList
        /*Next adds an EventListener to move to the next corresponding scene index identified the storyLine,
         save the next corresponding sceneIndex to the local storage, and render the scene all over*/
        //Finally it actually adds the button to the screen in choiceContainer

        if(scene.choices) {
            scene.choices.forEach(choice => {
                const choiceButton = document.createElement('button');
                choiceButton.textContent=choice.text;
                choiceButton.addEventListener('click', function() {
                    storyPartIndex = choice.next;
                    localStorage.setItem('storyPartIndex', storyPartIndex);
                    renderScene();
                });
                choiceContainer.appendChild(choiceButton);
            });
        }

        backgroundImage(storyPartIndex);

        /*Based on whatever integer storyPartIndex is equal to, certain elements of the UI 
        will be omitted and added to the screen*/

        if (storyPartIndex === 0) {
            textInputBox.style.display = 'none';
            dropdownInputBox.style.display ='none';
            heading.style.display = 'none';
            label.style.display = 'none';
            label2.style.display = 'none';
            beginButton.style.display = 'block';
            infoButton.style.display = 'block';
            beginButton2.style.display = 'none';
            creators.style.display = 'none';
            backInfoButton.style.display = 'none';
            pressSpace.style.display = 'block';

        } else if (storyPartIndex === 1) {
            textInputBox.style.display = 'none';
            dropdownInputBox.style.display ='none';
            heading.style.display = 'none';
            label.style.display = 'none';
            label2.style.display = 'none';
            beginButton.style.display = 'none';
            infoButton.style.display = 'none';
            beginButton2.style.display = 'block';
            creators.style.display = 'block';
            backInfoButton.style.display = 'block';
            pressSpace.style.display = 'block';

        } else {
            textInputBox.style.display = 'block'; 
            dropdownInputBox.style.display ='block';
            heading.style.display = 'block';
            label.style.display = 'block';
            label2.style.display = 'block';
            beginButton.style.display = 'none';
            infoButton.style.display = 'none';
            beginButton2.style.display = 'none';
            creators.style.display = 'none';
            backInfoButton.style.display = 'none';
            pressSpace.style.display = 'none';
        }
    }

    /*As mentioned above, the backgroundImage function makes use of the parameter sceneIndex.
    When the function is called, storyPartIndex index is used as an argument to set
    the background image to an image corresponding with the scene that is being described.*/

    function backgroundImage(sceneIndex) {
        const body = document.body;
        //Every time that the sceneIndex changes, the background image changes and fades in and out.
        //This happens every 5 milliseconds to ensure a speedy background transition.
        //The transition only occurs because the opacity is being increased and decreased at steady rates.

        body.classList.add('fadeOut');

        setTimeout(function() {
            if (sceneIndex == 0 || sceneIndex == 1 || sceneIndex == 2) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/10/31/18/18/forest-8355748_960_720.jpg')";
            }
            else if (sceneIndex == 3) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_960_720.jpg')";
            }
            else if (sceneIndex == 4) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/11/11/17/14/landscape-3809181_960_720.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 5) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/07/23/12/47/bulambika-4357650_960_720.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 6) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_960_720.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 7) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/05/21/12/35/giraffe-6271050_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 8) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/18/17/02/cave-1835823_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 9) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/05/26/05/36/archer-2345211_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 10) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/08/06/58/elephant-5015980_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 11) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 12) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2023/12/07/10/59/giraffe-8435321_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 13) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/09/13/19/07/helicopter-6622214_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 14) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/02/01/16/14/treasure-chest-619762_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }
            else if (sceneIndex == 15) {
                body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/07/25/08/31/yellow-garden-spider-6491273_1280.jpg')";
                heading.style.color = "white";
                label.style.color = "white";
            }

            body.classList.remove('fadeOut');
            body.classList.add('fadeIn');
        }, 5);
    }

    /*The beginStory function uses an if statement to check if the storyPartIndex equals 0,
    and if so, it will set the storyPartIndex to 2, save that value to the local storage under
    the key 'storyPartIndex', and will call the renderScene() function to create a certain scene.*/

    function beginStory() {
        if (storyPartIndex == 0) {
            storyPartIndex = 2;
            localStorage.setItem('storyPartIndex', storyPartIndex);
            renderScene();
        }
    }

    /*The backInfo function uses an if statement to check if the storyPartIndex equals 1,
    and if so, it will set the storyPartIndex to 0, save that value to the local storage under
    the key 'storyPartIndex', and will call the renderScene() function to create a certain scene.*/

    function backInfo() {
        if (storyPartIndex == 1) {
            storyPartIndex = 0;
            localStorage.setItem('storyPartIndex', storyPartIndex);
            renderScene();
        }
    }

    /*The beginStory2 function uses an if statement to check if the storyPartIndex equals 1,
    and if so, it will set the storyPartIndex to 2, save that value to the local storage under
    the key 'storyPartIndex', and will call the renderScene() function to create a certain scene.*/
    
    function beginStory2() {
        if (storyPartIndex == 1) {
            storyPartIndex = 2;
            localStorage.setItem('storyPartIndex', storyPartIndex);
            renderScene();
        }
    }

    /*The infoPage function uses an if statement to check if the storyPartIndex equals 0,
    and if so, it will set the storyPartIndex to 1, save that value to the local storage under
    the key 'storyPartIndex', and will call the renderScene() function to create a certain scene.*/

    function infoPage() {
        if (storyPartIndex == 0) {
            storyPartIndex = 1;
            localStorage.setItem('storyPartIndex', storyPartIndex);
            renderScene();
        }
    }

    /*Sets a variable called userInput equal to user input recieved from an input box, but with punctuation
    and spaces trimmed off, and all capitalized.*/
    /*Then if the value stored in userInput is equal to STOP, the storypartIndex is set to 0,
    the local storage is cleared of the 'storyPartIndex' key, an alert is shown on the user's screen to the indicate the restart,
    and the renderScene function is called to create the scene.*/ 

    function displayInput() {
        var userInput = document.getElementById('textInput').value.trim().toUpperCase();
        if (userInput == "STOP") {
           storyPartIndex = 0;
           localStorage.removeItem('storyPartIndex');
           alert("Resetting");
           textInputBox.value = '';
           renderScene();
        } else if (userInput != "") {
            alert("Please enter the word 'stop' to go back to scene 1.");
            textInputBox.value = '';
        }
    }

    /*Sets a variable called userInput2 equal to user input recieved from an input box all capitalized.*/
    /*Then if the value stored in userInput2 is numeric, and between the values of 2 and 15, the storypartIndex is set
    to whatever the user input, an alert is shown on the user's screen to the indicate the change,
    and the renderScene function is called to create the new scene.*/ 

    function displaydropdownInput() {
        storyPartIndex = dropdownInputBox.value;
        localStorage.setItem('storyPartIndex', storyPartIndex);
        alert("Changing scenes")
        renderScene();
    }

    /*Uses an EventListener to check if the Space key is pressed, and if storyPartIndex is 
    equal to 0, or 1, it will call a corresponding function, whether that be beginStory, or beginStory2.*/ 

    document.addEventListener('keydown', function(event) {
       if (event.code == 'Space' && storyPartIndex == 0) {
            beginStory();
       }
       else if ((event.code == 'Space' && storyPartIndex == 1)) {
            beginStory2();
       }
    });

    /*Uses an EventListener to check if the Enter key is pressed, and if those
    inputs are not equal to nothing, it will call a corresponding function, 
    whether that be displayInput, or displayInput2.*/ 

    document.addEventListener('keydown', function(event) {
        var userInput = document.getElementById('textInput').value.trim().toUpperCase();
        var userInput2 = dropdownInputBox.value;
        if (event.key == 'Enter' && userInput != "" || event.key == 'Enter' && userInput2) {
             displayInput();
             displaydropdownInput();
        }
     });

    /*Uses different EventListeners to check if different buttons created in the HTML are
    being clicked, and calls different functions based on whether the listeners are triggered.*/
    /*Finally at the end one final renderScene call is used to make sure that a scene is rendered
    after the listeners are triggered (precautionary)*/

    beginButton.addEventListener('click', beginStory);
    beginButton2.addEventListener('click', beginStory2);
    infoButton.addEventListener('click', infoPage);
    backInfoButton.addEventListener('click', backInfo);

    renderScene();
});