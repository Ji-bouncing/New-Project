document.querySelector('#check').addEventListener('click', showList)

document.querySelector('.show').addEventListener('click', showQuestion)

document.querySelector('.showOne').addEventListener('click', showQuestionOne)

document.querySelector('.showTwo').addEventListener('click', showQuestionTwo)

document.querySelector('.showThree').addEventListener('click', showQuestionThree)

function showList(){
    document.querySelector('#hidList').classList.toggle('hidden')
}

function showQuestion(){
    document.querySelector('.hidQuestion').classList.toggle('hidden')
}


function showQuestionOne(){
    document.querySelector('.hidQuestionOne').classList.toggle('hidden')
}


function showQuestionTwo(){
    document.querySelector('.hidQuestionTwo').classList.toggle('hidden')
}


function showQuestionThree(){
    document.querySelector('.hidQuestionThree').classList.toggle('hidden')
}