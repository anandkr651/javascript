const question = [
    {
     question:"which is largest animal in the world ?",
       answer:[
        {text:"shark",correct:false},
        {text:"blue whale",correct:true},
        {text:"elephant",correct:false},
        {text:"giraffe",correct:false},
        ]
    },
    {
        question:"which is smallest continent in the world ?",
          answer:[
              {text:"australia",correct:true},
              {text:"asia",correct:false},
              {text:"africa",correct:false},
              {text:"arctic",correct:false},
           ]
       },
       {
        question:"which is largest desert in the world ?",
          answer:[
              {text:"kalahari",correct:false},
              {text:"gobi",correct:false},
              {text:"sahara",correct:false},
              {text:"antarctica",correct:true},
           ]
       },
       {
        question:"which is smallest country in the world ?",
          answer:[
              {text:"vatican city",correct:true},
              {text:"bhutan",correct:false},
              {text:"nepal",correct:false},
              {text:"shri lanka",correct:false},
           ]
       }
];
const questionelement = document.getElementById("question");
const answerbutton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
   currentquestionindex=0;
   score=0;
   nextbutton.innerHTML="next";
   showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion = question[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML= questionno + ". "+currentquestion.question;


    currentquestion.answer.forEach(answer =>{
       const button = document.createElement("button")
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerbutton.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct
       }
       button.addEventListener("click",selectanswer)
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)
    }
}
function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct ==="true";
    if(iscorrect){
        selectbtn.classList.add ("correct");
        score++;
    }else{
        selectbtn.classList.add ("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `you scored ${score} out of ${question.length}`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block";
}

function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex < question.length){
        showquestion();
    }else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex < question.length){
        handlenextbutton();
    }else{
        startquiz();
    }
})
startquiz();