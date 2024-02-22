// for section FAQS
const toggle=document.querySelectorAll('.faq-top')
const answer0=document.querySelector('#answer1')
const answer1=document.querySelector('#answer2')
const answer2=document.querySelector('#answer3')
const icon0=document.querySelector('#icon1')
const icon1=document.querySelector('#icon2')
const icon2=document.querySelector('#icon3')

const overlay=document.querySelector('#overlay');
const form=document.querySelector('#form');
const modalclose=document.querySelector('#modal-close');

//for open and close burger
const openburger=document.getElementById('burgeropen');
const burger=document.getElementById('burger');
const closeburger=document.getElementById('burgerclose')

// open and close FAQS
toggle.forEach((element,i)=>{
    element.addEventListener('click',()=>{
        if(i==0){
            answer0.classList.toggle('active')
            icon0.classList.toggle('active-toggle')
        }
        if(i==1){
            answer1.classList.toggle('active')
            icon1.classList.toggle('active-toggle')
        }
        if(i==2){
            answer2.classList.toggle('active')
            icon2.classList.toggle('active-toggle')
        }
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    overlay.classList.remove('hide')
    setTimeout(()=>{
        overlay.classList.add('hide')
        form.reset();
    },5000)
    const name=form.inputName.value;
    const number=form.inputNumber.value;
    let Text=`Yangi buyurtma!!! %0AMijozning ismi: ${name} %0AMijozning raqami: ${number}`
    getData(Text);
})
modalclose.addEventListener('click',()=>{
    overlay.classList.add('hide')
    form.reset();
})






openburger.addEventListener('click',()=>{
    burger.classList.add('burger-active')
})
closeburger.addEventListener('click',()=>{
    burger.classList.remove('burger-active')
})
burger.addEventListener('click',()=>{
    burger.classList.remove('burger-active')
})


// send data to telegram bot
const getData=async(massage)=>{
    const chat_id='5055000310';
    const token='6320259214:AAFV5YV2q1-99uTtchQpNipvrfkX2qMZchY';
    const request= await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${massage}`);
}
