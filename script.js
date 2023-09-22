const quizData = [
{
        question:'What is the most used programming language in 2022?',
        a:'Javascript',
        b:'Python',
        c:'Java',
        d:'C++',
        correct:'a'}, 
    {
        question:'Which color represents peace?',
        a:'White',
        b:'Blue',
        c:'Red',
        d:'Green',
        correct:'b'
    },
    {
        question:'Which is the most expensive Jevelry?',
        a:'Diamond',
        b:'Gold',
        c:'Ruby',
        d:'Emerald',
        correct:'a'
    },
    {
        question:'Who is the president of USA?',
        a:'Donald Trump',
        b:'Coconut',
        c:'Joe Biden',
        d:'Pineapple',
        correct:'c'
    },
    {
        question:'What does HTML stands for?',
        a:'Something',
        b:'Someone',
        c:'Somebody',
        d:'HyperText Markup Language',
        correct:'d'
}
];
const quizz = document.getElementById('quizz');
const answersElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("button");
const toggle = document.getElementById("");

let dataCycle = 0;
let score = 0;

Loading();
function Loading(){
    deselect();
    const quizGrab = quizData[dataCycle];
    questionElement.innerText = quizGrab.question;
    a_text.innerText = quizGrab.a;
    b_text.innerText = quizGrab.b;
    c_text.innerText = quizGrab.c;
    d_text.innerText = quizGrab.d;
}
function ifSelected(){

    let answer = undefined;

    answersElements.forEach((answersElement) => {
        if(answersElement.checked){
            answer =  answersElement.id;
        }
    });
    return answer;
};

function deselect(){
    answersElements.forEach((answersElement) => {
        answersElement.checked = false;
    })
}

submit.addEventListener("click", ()=> {
    
    const answer = ifSelected();
    if(answer){
        if(answer === quizData[dataCycle].correct){
            score++;
        }
        dataCycle++;
        if(dataCycle<quizData.length){  
            Loading();
        }else{
           quizz.innerHTML =  `<h1 style="margin: 0 0 0 1rem">You answered correctly ${score} out of ${quizData.length}.</h1> <button id="button" onclick ="location.reload()">Reload</button>`   
        }
    };
});

