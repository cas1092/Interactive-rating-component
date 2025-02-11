const input_rating = document.querySelectorAll('input');
const submit_btn=document.getElementById('submit');
const rating=document.getElementById('rating');
const card1=document.getElementById('card1');
const card2=document.getElementById('card2');

let selectedRating
input_rating.forEach((x) => {
   x.addEventListener('click',(e)=>{

    input_rating.forEach((y) =>
        y.classList.remove('rating')
    )
    x.classList.add('rating');

    
    selectedRating = e.target.value;
   })
});

submit_btn.addEventListener('click',()=>{
    card1.classList.add('hidden');
    card2.classList.remove('hidden');
    rating.textContent=selectedRating;
})

