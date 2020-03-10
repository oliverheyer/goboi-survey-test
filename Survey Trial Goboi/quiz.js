// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

// create our questions
let questions = [
    {
        question : "",
        imgSrc : "img/img1.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img1.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img2.png",
        
    },
    {
        question : "",
        imgSrc : "img/img3.png",
        
    },
    {
        question : "",
        imgSrc : "img/img4.png",
        
    },
    {
        question : "",
        imgSrc : "img/img5.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img6.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img7.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img8.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img9.png",
        
        
    },
    {
        question : "",
        imgSrc : "img/img10.png",
        
        
    },
    
];

// create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    
}
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}
// check results
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){}
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();

    
        
        
    }else{
        
            return window.location.assign("index1.html");
            
                    
}

    
}




