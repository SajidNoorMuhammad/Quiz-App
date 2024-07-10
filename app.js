function htmlquiz() {
    var html = document.getElementById("container");
    var quiz = document.getElementById("quiz-container");
    html.style.display = "none"
    quiz.style.display = "block";

    var questions = [
        {
            question: "Q. What does HTML stand for?",
            options: [
                { text: "Hyper Text Markup Language", value: 0 },
                { text: "Home Tool Markup Language", value: 1 },
                { text: "Hyperlinks and Text Markup Language", value: 2 },
                { text: "Hyperlinking Text Marking Language", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What does CSS stand for?",
            options: [
                { text: "Colorful Style Sheets", value: 0 },
                { text: "Cascading Style Sheets", value: 1 },
                { text: "Computer Style Sheets", value: 2 },
                { text: "Creative Style Sheets", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. Which of the following tags is used to define an unordered list in HTML?",
            options: [
                { text: "<ul>", value: 0 },
                { text: "<ol>", value: 1 },
                { text: "<li>", value: 2 },
                { text: "<div>", value: 3 }
            ],
            answer: 0 // Index of correct option in options array
        },
        {
            question: "Q. Which attribute specifies an alternate text for an image, if the image cannot be displayed?",
            options: [
                { text: "alt", value: 0 },
                { text: "title", value: 1 },
                { text: "src", value: 2 },
                { text: "href", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. In HTML, which tag is used to define a hyperlink?",
            options: [
                { text: "<a>", value: 0 },
                { text: "<link>", value: 1 },
                { text: "<href>", value: 2 },
                { text: "<url>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML tag is used to define a paragraph?",
            options: [
                { text: "<p>", value: 0 },
                { text: "<div>", value: 1 },
                { text: "<paragraph>", value: 2 },
                { text: "<para>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML for creating a hyperlink to another webpage?",
            options: [
                { text: '<a url="http://example.com">Example</a>', value: 0 },
                { text: '<a href="http://example.com">Example</a>', value: 1 },
                { text: '<link src="http://example.com">Example</link>', value: 2 },
                { text: '<href="http://example.com">Example</href>', value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. Which HTML attribute is used to define inline styles?",
            options: [
                { text: "style", value: 0 },
                { text: "class", value: 1 },
                { text: "font", value: 2 },
                { text: "css", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What does the <br> tag do in HTML?",
            options: [
                { text: "Defines a bold text", value: 0 },
                { text: "Adds a line break", value: 1 },
                { text: "Defines an image", value: 2 },
                { text: "Adds a bullet point", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. Which HTML attribute is used to define the width of a table cell?",
            options: [
                { text: "size", value: 0 },
                { text: "cellwidth", value: 1 },
                { text: "width", value: 2 },
                { text: "cellsize", value: 3 }
            ],
            answer: 2
        },
        {
            question: "Q. In HTML, which tag is used to define a header for a document or section?",
            options: [
                { text: "<header>", value: 0 },
                { text: "<heading>", value: 1 },
                { text: "<h1>", value: 2 },
                { text: "<head>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element for the largest heading?",
            options: [
                { text: "<h1>", value: 0 },
                { text: "<h6>", value: 1 },
                { text: "<heading>", value: 2 },
                { text: "<h2>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used for creating a dropdown list?",
            options: [
                { text: "<select>", value: 0 },
                { text: "<list>", value: 1 },
                { text: "<dropdown>", value: 2 },
                { text: "<option>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How can you make a numbered list in HTML?",
            options: [
                { text: "<ol>", value: 0 },
                { text: "<ul>", value: 1 },
                { text: "<list>", value: 2 },
                { text: "<dl>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element defines navigation links?",
            options: [
                { text: "<nav>", value: 0 },
                { text: "<navigate>", value: 1 },
                { text: "<navigation>", value: 2 },
                { text: "<link>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to specify a footer for a document or section?",
            options: [
                { text: "<footer>", value: 0 },
                { text: "<foot>", value: 1 },
                { text: "<bottom>", value: 2 },
                { text: "<section>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element to define important text?",
            options: [
                { text: "<strong>", value: 0 },
                { text: "<important>", value: 1 },
                { text: "<b>", value: 2 },
                { text: "<i>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to specify a section of content that is tangentially related to the content around it?",
            options: [
                { text: "<aside>", value: 0 },
                { text: "<aside-content>", value: 1 },
                { text: "<related>", value: 2 },
                { text: "<section>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q Which HTML attribute is used to define the URL of an image?",
            options: [
                { text: "src", value: 0 },
                { text: "href", value: 1 },
                { text: "url", value: 2 },
                { text: "link", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q Which HTML element is used to define a section in a document?",
            options: [
                { text: "<section>", value: 0 },
                { text: "<div>", value: 1 },
                { text: "<article>", value: 2 },
                { text: "<aside>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q Which HTML element is used to define a block of text that has been quoted from another source?",
            options: [
                { text: "<blockquote>", value: 0 },
                { text: "<quote>", value: 1 },
                { text: "<citation>", value: 2 },
                { text: "<q>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q What is the correct HTML element for playing video files?",
            options: [
                { text: "<video>", value: 0 },
                { text: "<movie>", value: 1 },
                { text: "<play>", value: 2 },
                { text: "<media>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q What does the <iframe> tag do in HTML?",
            options: [
                { text: "Embeds another document within the current HTML document", value: 0 },
                { text: "Defines an inline frame", value: 1 },
                { text: "Defines a hyperlink", value: 2 },
                { text: "Defines an image", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q Which HTML element is used to embed an image?",
            options: [
                { text: "<img>", value: 0 },
                { text: "<picture>", value: 1 },
                { text: "<image>", value: 2 },
                { text: "<media>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to embed a multimedia element?",
            options: [
                { text: "<embed>", value: 0 },
                { text: "<multimedia>", value: 1 },
                { text: "<media>", value: 2 },
                { text: "<object>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element for inserting a line break?",
            options: [
                { text: "<br>", value: 0 },
                { text: "<break>", value: 1 },
                { text: "<lb>", value: 2 },
                { text: "<newline>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element for inserting a horizontal rule?",
            options: [
                { text: "<hr>", value: 0 },
                { text: "<line>", value: 1 },
                { text: "<break>", value: 2 },
                { text: "<horizontal>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to specify a term in a description list?",
            options: [
                { text: "<dt>", value: 0 },
                { text: "<dl>", value: 1 },
                { text: "<dd>", value: 2 },
                { text: "<dfn>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element for inserting an emphasized text?",
            options: [
                { text: "<em>", value: 0 },
                { text: "<i>", value: 1 },
                { text: "<italic>", value: 2 },
                { text: "<emphasis>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct HTML element for inserting a superscripted text?",
            options: [
                { text: "<sup>", value: 0 },
                { text: "<sub>", value: 1 },
                { text: "<super>", value: 2 },
                { text: "<top>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML attribute is used to define inline styles?",
            options: [
                { text: "style", value: 0 },
                { text: "class", value: 1 },
                { text: "font", value: 2 },
                { text: "css", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to define a block of text that has been quoted from another source?",
            options: [
                { text: "<blockquote>", value: 0 },
                { text: "<quote>", value: 1 },
                { text: "<citation>", value: 2 },
                { text: "<q>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML attribute is used to specify a unique identifier for an HTML element?",
            options: [
                { text: "id", value: 0 },
                { text: "class", value: 1 },
                { text: "name", value: 2 },
                { text: "key", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to define a section of content that can be toggled open and closed?",
            options: [
                { text: "<details>", value: 0 },
                { text: "<summary>", value: 1 },
                { text: "<section>", value: 2 },
                { text: "<toggle>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to specify the header of a table?",
            options: [
                { text: "<thead>", value: 0 },
                { text: "<header>", value: 1 },
                { text: "<head>", value: 2 },
                { text: "<th>", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which HTML element is used to specify the body of a table?",
            options: [
                { text: "<tbody>", value: 0 },
                { text: "<body>", value: 1 },
                { text: "<tr>", value: 2 },
                { text: "<td>", value: 3 }
            ],
            answer: 0
        }
    ];

    var currentQuestionIndex = 0;
    var score = 0;
    var quizPassword = "htmlquiz"; // Change to your desired quiz password

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function shuffleQuestionsAndOptions() {
        shuffleArray(questions);
        questions.forEach(question => {
            shuffleArray(question.options);
        });
    }

    function showQuestion() {
        var questionElement = document.getElementById('question');
        var optionsElement = document.getElementById('options');
        var question = questions[currentQuestionIndex];

        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach(function (option) {
            var optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option.text;
            optionElement.dataset.value = option.value;
            optionElement.addEventListener('click', selectOption);
            optionsElement.appendChild(optionElement);
        });
    }

    function selectOption() {
        var selectedValue = parseInt(this.dataset.value);
        var question = questions[currentQuestionIndex];

        if (selectedValue === question.answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        var correctans = document.getElementById('correct-answers');
        var passingratio = document.getElementById('passing-ratio');
        var remarks = document.getElementById("remarks");

        var scoreElement = document.getElementById('score');
        var percentage = Math.floor((score / questions.length) * 100);
        scoreElement.textContent = `Total Questions: ${questions.length}`;
        correctans.innerHTML += `Correct Answers: ${score}`;
        passingratio.innerHTML += `Percentage: ${percentage}%`;

        if (percentage >= 70) {
            remarks.innerHTML += `Congrualation! You're Passed`
            remarks.style.color = "green";
            remarks.syle.fontWeight = "bold";

        } else if (percentage < 70) {
            remarks.innerHTML += `Sorry! You're Failed`
            remarks.style.color = "red";
            remarks.style.fontWeight = "bold";
        }

    }

    document.getElementById('start-btn').addEventListener('click', function () {
        var password = document.getElementById('password-2').value;
        if (password === quizPassword) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            shuffleQuestionsAndOptions();
            showQuestion();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        showQuestion();
    });
}


function getusers() {
    var users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users)
    } else {
        users = [];
    }
    return users;
}

function signup() {
    var fullName = document.getElementById("fullName");
    var userName = document.getElementById("username");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var users = getusers()

    var userdetails = {
        fullName: fullName.value,
        userName: userName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        repassword: repassword.value,
        address: address.value,
        city: city.value
    }

    users.push(userdetails)
    localStorage.setItem("users", JSON.stringify(users))

    fullName.value = "";
    userName.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    repassword.value = "";
    address.value = "";
    city.value = "";
}

function login() {
    document.getElementById("box").style.display = "none";
    document.getElementById("loginbox").style.display = "block";
}

function register() {
    document.getElementById("box").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
}

function loginPage() {
    var email = document.getElementById("l-email");
    var username = document.getElementById("l-username");
    var password = document.getElementById("l-password");
    var users = getusers();
    var saveuser = {};

    for (var i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            saveuser = users[i]
            break;
        }
    }

    if (saveuser.email) {
        if (saveuser.password === password.value) {
            var container= document.getElementById("container");
            var loginbox= document.getElementById("loginbox");
            loginbox.style.display = "none";
            container.style.display= "block";
        } else {
            alert("Invalid Password")
        }
    } else {
        alert("User Not Found")
    }

    email.value = "";
    password.value = "";
    username.value = "";
}

var username= document.getElementById("username");
var loginn= document.getElementById("l-username");

username.innerHTML += loginn.value;



function cssquiz() {
    var html = document.getElementById("container");
    var quiz = document.getElementById("quiz-container");
    html.style.display = "none"
    quiz.style.display = "block";

    var questions = [
            {
                question: "Q. Which property is used to change the background color of an element?",
                options: [
                    { text: "background-color", value: 0 },
                    { text: "color", value: 1 },
                    { text: "bgcolor", value: 2 },
                    { text: "background", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. Which CSS property controls the text size?",
                options: [
                    { text: "font-size", value: 0 },
                    { text: "text-style", value: 1 },
                    { text: "font-style", value: 2 },
                    { text: "text-size", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. Which property is used to change the left margin of an element?",
                options: [
                    { text: "padding-left", value: 0 },
                    { text: "margin-left", value: 1 },
                    { text: "indent", value: 2 },
                    { text: "margin", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. Which CSS property controls the text color of an element?",
                options: [
                    { text: "fgcolor", value: 0 },
                    { text: "text-color", value: 1 },
                    { text: "color", value: 2 },
                    { text: "font-color", value: 3 }
                ],
                answer: 2
            },
            {
                question: "Q. Which CSS property is used to change the font of an element?",
                options: [
                    { text: "font-family", value: 0 },
                    { text: "font-style", value: 1 },
                    { text: "font-weight", value: 2 },
                    { text: "font-variant", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make each word in a text start with a capital letter?",
                options: [
                    { text: "text-transform:capitalize", value: 0 },
                    { text: "text-transform:uppercase", value: 1 },
                    { text: "text-transform:lowercase", value: 2 },
                    { text: "text-transform:capitalize-words", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you select an element with id 'demo'?",
                options: [
                    { text: "#demo", value: 0 },
                    { text: ".demo", value: 1 },
                    { text: "demo", value: 2 },
                    { text: "*demo", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you select elements with class name 'demo'?",
                options: [
                    { text: "#demo", value: 0 },
                    { text: ".demo", value: 1 },
                    { text: "demo", value: 2 },
                    { text: "*demo", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. Which property is used to set the space between the border and the content of an element?",
                options: [
                    { text: "margin", value: 0 },
                    { text: "padding", value: 1 },
                    { text: "spacing", value: 2 },
                    { text: "border-spacing", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. Which property is used to change the font size of an element?",
                options: [
                    { text: "font-style", value: 0 },
                    { text: "text-size", value: 1 },
                    { text: "font-size", value: 2 },
                    { text: "text-style", value: 3 }
                ],
                answer: 2
            },
            {
                question: "Q. Which property is used to change the background image of an element?",
                options: [
                    { text: "background-image", value: 0 },
                    { text: "bg-image", value: 1 },
                    { text: "background", value: 2 },
                    { text: "image", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. Which property is used to change the width of an element?",
                options: [
                    { text: "element-width", value: 0 },
                    { text: "width", value: 1 },
                    { text: "size", value: 2 },
                    { text: "length", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. Which property is used to change the height of an element?",
                options: [
                    { text: "element-height", value: 0 },
                    { text: "height", value: 1 },
                    { text: "size", value: 2 },
                    { text: "length", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. How do you make a list that lists its items with squares?",
                options: [
                    { text: "list-type: square", value: 0 },
                    { text: "list-style-type: square", value: 1 },
                    { text: "list-style: square", value: 2 },
                    { text: "list: square", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. How do you display hyperlinks without an underline?",
                options: [
                    { text: "a {text-decoration:none;}", value: 0 },
                    { text: "a {decoration:no-underline;}", value: 1 },
                    { text: "a {underline:none;}", value: 2 },
                    { text: "a {text-decoration:no-underline;}", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make a list that lists its items with numbers?",
                options: [
                    { text: "list-type: decimal", value: 0 },
                    { text: "list-style-type: decimal", value: 1 },
                    { text: "list-style: decimal", value: 2 },
                    { text: "list: decimal", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. How do you select an element with a specific attribute value?",
                options: [
                    { text: "element[attribute='value']", value: 0 },
                    { text: "element{attribute='value'}", value: 1 },
                    { text: "element.attribute('value')", value: 2 },
                    { text: "element:attribute('value')", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you change the text color of an element?",
                options: [
                    { text: "text-color", value: 0 },
                    { text: "color", value: 1 },
                    { text: "font-color", value: 2 },
                    { text: "foreground-color", value: 3 }
                ],
                answer: 1
            },
            {
                question: "Q. How do you make the text bold?",
                options: [
                    { text: "font-weight:bold;", value: 0 },
                    { text: "font:bold;", value: 1 },
                    { text: "font-style:bold;", value: 2 },
                    { text: "font-size:bold;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you add a shadow to a text?",
                options: [
                    { text: "text-shadow: 2px 2px #ff0000;", value: 0 },
                    { text: "font-shadow: 2px 2px #ff0000;", value: 1 },
                    { text: "shadow: 2px 2px #ff0000;", value: 2 },
                    { text: "font-shadow-style: 2px 2px #ff0000;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you increase the space between characters?",
                options: [
                    { text: "letter-spacing", value: 0 },
                    { text: "word-spacing", value: 1 },
                    { text: "text-spacing", value: 2 },
                    { text: "character-spacing", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you change the text alignment?",
                options: [
                    { text: "text-align", value: 0 },
                    { text: "align", value: 1 },
                    { text: "text-alignment", value: 2 },
                    { text: "alignment", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make the text italic?",
                options: [
                    { text: "font-style:italic;", value: 0 },
                    { text: "font:italic;", value: 1 },
                    { text: "text-style:italic;", value: 2 },
                    { text: "text:italic;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you control the space between lines of text?",
                options: [
                    { text: "line-height", value: 0 },
                    { text: "line-spacing", value: 1 },
                    { text: "text-spacing", value: 2 },
                    { text: "text-height", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you create a rounded border?",
                options: [
                    { text: "border-radius: 15px;", value: 0 },
                    { text: "border-round: 15px;", value: 1 },
                    { text: "border-corner: 15px;", value: 2 },
                    { text: "border-curve: 15px;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make an element invisible?",
                options: [
                    { text: "display:none;", value: 0 },
                    { text: "visibility:hidden;", value: 1 },
                    { text: "opacity:0;", value: 2 },
                    { text: "All of the above", value: 3 }
                ],
                answer: 3
            },
            {
                question: "Q. How do you change the cursor type?",
                options: [
                    { text: "cursor", value: 0 },
                    { text: "mouse-cursor", value: 1 },
                    { text: "pointer", value: 2 },
                    { text: "mouse-pointer", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you create a flex container?",
                options: [
                    { text: "display:flex;", value: 0 },
                    { text: "flex:container;", value: 1 },
                    { text: "flexbox;", value: 2 },
                    { text: "container:flex;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make the text underline?",
                options: [
                    { text: "text-decoration:underline;", value: 0 },
                    { text: "text-style:underline;", value: 1 },
                    { text: "font-decoration:underline;", value: 2 },
                    { text: "underline", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you change the size of an element's font?",
                options: [
                    { text: "font-size", value: 0 },
                    { text: "text-size", value: 1 },
                    { text: "element-size", value: 2 },
                    { text: "font-style", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you create a border with rounded corners?",
                options: [
                    { text: "border-radius", value: 0 },
                    { text: "border-round", value: 1 },
                    { text: "corner-radius", value: 2 },
                    { text: "border-corner", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make a list display its items with bullets?",
                options: [
                    { text: "list-style-type: disc", value: 0 },
                    { text: "list-type: disc", value: 1 },
                    { text: "list-disc", value: 2 },
                    { text: "list: disc", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you change the transparency of an element?",
                options: [
                    { text: "opacity", value: 0 },
                    { text: "transparency", value: 1 },
                    { text: "visibility", value: 2 },
                    { text: "display", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you make the text uppercase?",
                options: [
                    { text: "text-transform: uppercase;", value: 0 },
                    { text: "text-style: uppercase;", value: 1 },
                    { text: "font-transform: uppercase;", value: 2 },
                    { text: "font-style: uppercase;", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you change the horizontal alignment of a block element?",
                options: [
                    { text: "text-align", value: 0 },
                    { text: "horizontal-align", value: 1 },
                    { text: "align", value: 2 },
                    { text: "block-align", value: 3 }
                ],
                answer: 0
            },
            {
                question: "Q. How do you control the horizontal space between words?",
                options: [
                    { text: "word-spacing", value: 0 },
                    { text: "letter-spacing", value: 1 },
                    { text: "text-spacing", value: 2 },
                    { text: "character-spacing", value: 3 }
                ],
                answer: 0
            }
        ];

    var currentQuestionIndex = 0;
    var score = 0;
    var quizPassword = "cssquiz"; // Change to your desired quiz password

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function shuffleQuestionsAndOptions() {
        shuffleArray(questions);
        questions.forEach(question => {
            shuffleArray(question.options);
        });
    }

    function showQuestion() {
        var questionElement = document.getElementById('question');
        var optionsElement = document.getElementById('options');
        var question = questions[currentQuestionIndex];

        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach(function (option) {
            var optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option.text;
            optionElement.dataset.value = option.value;
            optionElement.addEventListener('click', selectOption);
            optionsElement.appendChild(optionElement);
        });
    }

    function selectOption() {
        var selectedValue = parseInt(this.dataset.value);
        var question = questions[currentQuestionIndex];

        if (selectedValue === question.answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        var correctans = document.getElementById('correct-answers');
        var passingratio = document.getElementById('passing-ratio');
        var remarks = document.getElementById("remarks");

        var scoreElement = document.getElementById('score');
        var percentage = Math.floor((score / questions.length) * 100);
        scoreElement.textContent = `Total Questions: ${questions.length}`;
        correctans.innerHTML += `Correct Answers: ${score}`;
        passingratio.innerHTML += `Percentage: ${percentage}%`;

        if (percentage >= 70) {
            remarks.innerHTML += `Congrualation! You're Passed`
            remarks.style.color = "green";
            remarks.syle.fontWeight = "bold";

        } else if (percentage < 70) {
            remarks.innerHTML += `Sorry! You're Failed`
            remarks.style.color = "red";
            remarks.style.fontWeight = "bold";
        }

    }

    document.getElementById('start-btn').addEventListener('click', function () {
        var password = document.getElementById('password-2').value;
        if (password === quizPassword) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            shuffleQuestionsAndOptions();
            showQuestion();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        showQuestion();
    });
}


function jsquiz() {
    var html = document.getElementById("container");
    var quiz = document.getElementById("quiz-container");
    html.style.display = "none"
    quiz.style.display = "block";

    const questions = [
        {
            question: "Q. Which company developed JavaScript?",
            options: [
                { text: "Netscape", value: 0 },
                { text: "Microsoft", value: 1 },
                { text: "Sun Microsystems", value: 2 },
                { text: "IBM", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which symbol is used for comments in JavaScript?",
            options: [
                { text: "//", value: 0 },
                { text: "/*", value: 1 },
                { text: "<!--", value: 2 },
                { text: "#", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you create a function in JavaScript?",
            options: [
                { text: "function myFunction()", value: 0 },
                { text: "function:myFunction()", value: 1 },
                { text: "create function myFunction()", value: 2 },
                { text: "function = myFunction()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you call a function named 'myFunction'?",
            options: [
                { text: "myFunction()", value: 0 },
                { text: "call myFunction()", value: 1 },
                { text: "call function myFunction()", value: 2 },
                { text: "Call.myFunction()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you write an 'if' statement in JavaScript?",
            options: [
                { text: "if i == 5 then", value: 0 },
                { text: "if (i == 5)", value: 1 },
                { text: "if i = 5 then", value: 2 },
                { text: "if i = 5", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. How do you write an 'if' statement for executing some code if 'i' is NOT equal to 5?",
            options: [
                { text: "if (i != 5)", value: 0 },
                { text: "if i <> 5", value: 1 },
                { text: "if (i <> 5)", value: 2 },
                { text: "if i =! 5 then", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How does a 'while' loop start?",
            options: [
                { text: "while (i <= 10)", value: 0 },
                { text: "while i = 1 to 10", value: 1 },
                { text: "while (i <= 10; i++)", value: 2 },
                { text: "while (i < 10)", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How does a 'for' loop start?",
            options: [
                { text: "for (i = 0; i <= 5)", value: 0 },
                { text: "for (i = 0; i <= 5; i++)", value: 1 },
                { text: "for i = 1 to 5", value: 2 },
                { text: "for (i <= 5; i++)", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. How can you add a comment in JavaScript?",
            options: [
                { text: "//This is a comment", value: 0 },
                { text: "'This is a comment'", value: 1 },
                { text: "<!--This is a comment-->", value: 2 },
                { text: "#This is a comment", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct way to write a JavaScript array?",
            options: [
                { text: "var colors = [\"red\", \"green\", \"blue\"]", value: 0 },
                { text: "var colors = \"red\", \"green\", \"blue\"", value: 1 },
                { text: "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", value: 2 },
                { text: "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you round the number 7.25, to the nearest integer?",
            options: [
                { text: "Math.rnd(7.25)", value: 0 },
                { text: "Math.round(7.25)", value: 1 },
                { text: "rnd(7.25)", value: 2 },
                { text: "round(7.25)", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. How do you find the number with the highest value of x and y?",
            options: [
                { text: "Math.max(x, y)", value: 0 },
                { text: "Math.ceil(x, y)", value: 1 },
                { text: "Math.floor(x, y)", value: 2 },
                { text: "ceil(x, y)", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct JavaScript syntax for opening a new window called 'w2'?",
            options: [
                { text: "w2 = window.new(\"http://www.w3schools.com\");", value: 0 },
                { text: "w2 = window.open(\"http://www.w3schools.com\");", value: 1 },
                { text: "w2 = new window(\"http://www.w3schools.com\");", value: 2 },
                { text: "w2 = new window.open(\"http://www.w3schools.com\");", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. How do you declare a JavaScript variable?",
            options: [
                { text: "var carName;", value: 0 },
                { text: "variable carName;", value: 1 },
                { text: "v carName;", value: 2 },
                { text: "var = carName;", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which event occurs when the user clicks on an HTML element?",
            options: [
                { text: "onchange", value: 0 },
                { text: "onclick", value: 1 },
                { text: "onmouseclick", value: 2 },
                { text: "onmouseover", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. Which operator is used to assign a value to a variable?",
            options: [
                { text: "*", value: 0 },
                { text: "=", value: 1 },
                { text: "-", value: 2 },
                { text: "x", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. What will the following code return: Boolean(10 > 9)?",
            options: [
                { text: "true", value: 0 },
                { text: "false", value: 1 },
                { text: "NaN", value: 2 },
                { text: "undefined", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which JavaScript method is used to access an HTML element by id?",
            options: [
                { text: "getElementById()", value: 0 },
                { text: "getElement(id)", value: 1 },
                { text: "getElementByIdName()", value: 2 },
                { text: "getElementsById()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which JavaScript method is used to write into an HTML document?",
            options: [
                { text: "document.write()", value: 0 },
                { text: "document.print()", value: 1 },
                { text: "document.println()", value: 2 },
                { text: "document.writeln()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct syntax for referring to an external script called 'xxx.js'?",
            options: [
                { text: "<script name=\"xxx.js\">", value: 0 },
                { text: "<script href=\"xxx.js\">", value: 1 },
                { text: "<script src=\"xxx.js\">", value: 2 },
                { text: "<script file=\"xxx.js\">", value: 3 }
            ],
            answer: 2
        },
        {
            question: "Q. How do you create an object in JavaScript?",
            options: [
                { text: "var obj = {};", value: 0 },
                { text: "var obj = ();", value: 1 },
                { text: "var obj = [];", value: 2 },
                { text: "var obj = new Object[];", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you check if a variable 'a' is not equal to '10'?",
            options: [
                { text: "if (a <> 10)", value: 0 },
                { text: "if (a != 10)", value: 1 },
                { text: "if (a > 10)", value: 2 },
                { text: "if (a not 10)", value: 3 }
            ],
            answer: 1
        },
        {
            question: "Q. Which method converts a JSON string to a JavaScript object?",
            options: [
                { text: "JSON.parse()", value: 0 },
                { text: "JSON.stringify()", value: 1 },
                { text: "JSON.toObject()", value: 2 },
                { text: "JSON.convert()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you create a new array in JavaScript?",
            options: [
                { text: "var arr = new Array();", value: 0 },
                { text: "var arr = Array();", value: 1 },
                { text: "var arr = [];", value: 2 },
                { text: "All of the above", value: 3 }
            ],
            answer: 3
        },
        {
            question: "Q. Which method is used to remove the last element from an array?",
            options: [
                { text: "pop()", value: 0 },
                { text: "remove()", value: 1 },
                { text: "delete()", value: 2 },
                { text: "shift()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you write an arrow function in JavaScript?",
            options: [
                { text: "let func = () => {}", value: 0 },
                { text: "let func = function => {}", value: 1 },
                { text: "let func = => {}", value: 2 },
                { text: "let func() => {}", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What does 'this' keyword refer to in JavaScript?",
            options: [
                { text: "The current object", value: 0 },
                { text: "The previous object", value: 1 },
                { text: "The parent object", value: 2 },
                { text: "None of the above", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is a promise in JavaScript?",
            options: [
                { text: "An object representing the eventual completion or failure of an asynchronous operation", value: 0 },
                { text: "An object representing a successful synchronous operation", value: 1 },
                { text: "A function that always executes successfully", value: 2 },
                { text: "A special type of function", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which method is used to add elements to the beginning of an array?",
            options: [
                { text: "unshift()", value: 0 },
                { text: "push()", value: 1 },
                { text: "shift()", value: 2 },
                { text: "prepend()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the purpose of the 'async' keyword in JavaScript?",
            options: [
                { text: "To declare an asynchronous function", value: 0 },
                { text: "To make a function run immediately", value: 1 },
                { text: "To pause the execution of a function", value: 2 },
                { text: "None of the above", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which method is used to merge two or more arrays?",
            options: [
                { text: "concat()", value: 0 },
                { text: "merge()", value: 1 },
                { text: "append()", value: 2 },
                { text: "combine()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the output of 'typeof null' in JavaScript?",
            options: [
                { text: "object", value: 0 },
                { text: "null", value: 1 },
                { text: "undefined", value: 2 },
                { text: "string", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. Which method is used to convert an array to a string?",
            options: [
                { text: "toString()", value: 0 },
                { text: "join()", value: 1 },
                { text: "concat()", value: 2 },
                { text: "stringify()", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you create a new object using a constructor function?",
            options: [
                { text: "var obj = new MyConstructor();", value: 0 },
                { text: "var obj = MyConstructor();", value: 1 },
                { text: "var obj = create MyConstructor();", value: 2 },
                { text: "var obj = construct MyConstructor();", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. What is the correct syntax for adding a key/value pair to an object?",
            options: [
                { text: "obj[key] = value;", value: 0 },
                { text: "obj(key) = value;", value: 1 },
                { text: "obj.key = value;", value: 2 },
                { text: "obj[key, value];", value: 3 }
            ],
            answer: 0
        },
        {
            question: "Q. How do you remove a property from an object?",
            options: [
                { text: "delete obj.property;", value: 0 },
                { text: "remove obj.property;", value: 1 },
                { text: "unset obj.property;", value: 2 },
                { text: "None of the above", value: 3 }
            ],
            answer: 0
        }
    ];
    

    var currentQuestionIndex = 0;
    var score = 0;
    var quizPassword = "js@quiz"; // Change to your desired quiz password

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function shuffleQuestionsAndOptions() {
        shuffleArray(questions);
        questions.forEach(question => {
            shuffleArray(question.options);
        });
    }

    function showQuestion() {
        var questionElement = document.getElementById('question');
        var optionsElement = document.getElementById('options');
        var question = questions[currentQuestionIndex];

        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach(function (option) {
            var optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option.text;
            optionElement.dataset.value = option.value;
            optionElement.addEventListener('click', selectOption);
            optionsElement.appendChild(optionElement);
        });
    }

    function selectOption() {
        var selectedValue = parseInt(this.dataset.value);
        var question = questions[currentQuestionIndex];

        if (selectedValue === question.answer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
        var correctans = document.getElementById('correct-answers');
        var passingratio = document.getElementById('passing-ratio');
        var remarks = document.getElementById("remarks");

        var scoreElement = document.getElementById('score');
        var percentage = Math.floor((score / questions.length) * 100);
        scoreElement.textContent = `Total Questions: ${questions.length}`;
        correctans.innerHTML += `Correct Answers: ${score}`;
        passingratio.innerHTML += `Percentage: ${percentage}%`;

        if (percentage >= 70) {
            remarks.innerHTML += `Congrualation! You're Passed`
            remarks.style.color = "green";
            remarks.syle.fontWeight = "bold";

        } else if (percentage < 70) {
            remarks.innerHTML += `Sorry! You're Failed`
            remarks.style.color = "red";
            remarks.style.fontWeight = "bold";
        }

    }

    document.getElementById('start-btn').addEventListener('click', function () {
        var password = document.getElementById('password-2').value;
        if (password === quizPassword) {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('question-container').style.display = 'block';
            shuffleQuestionsAndOptions();
            showQuestion();
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        showQuestion();
    });
}
