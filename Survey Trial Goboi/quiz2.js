// select all elements
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

// create our questions
let questions = [
    {
        question : "question 1",
        imgSrc : "img/img1.png",
        choiceA : "happy face",
        choiceB : "sad face",
        choiceC : "mad face",
        
    },
    {
        question : "question 2",
        imgSrc : "img/img2.png",
        choiceA : "happy face",
        choiceB : "sad face",
        choiceC : "mad face",
    },
    {
        question : "question 3",
        imgSrc : "img/emoji1.png",
        cchoiceA : "happy face",
        choiceB : "sad face",
        choiceC : "mad face",
    },
    {
        question : "question 4",
        imgSrc : "img/img1.png",
        choiceA : "happy face",
        choiceB : "sad face",
        choiceC : "mad face",
    },
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;





// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start survey
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    
    
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
// check results
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){}
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();

    
        
        
    }else{
        
            return window.location.assign("/home.html");
                    
            
    }

    

    
    
    

}




