const a=document.querySelectorAll('.accordance');

a.forEach(accordance =>{
    const icon=accordance.querySelector('.icon');
    const answer=accordance.querySelector('.answer')

    accordance.addEventListener('click',()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    })
})
