const result = document.querySelector('.advice');
const btn = document.querySelector('.dice');
const id = document.querySelector('.heading span');


btn.addEventListener('click' ,() => {
    APIcall();
});

window.onload = ()=>{
    APIcall();
};

function APIcall(){
fetch('https://api.adviceslip.com/advice').then(response =>{
    return response.json();
}).then(adviceData=>{
    const adviceobj = adviceData.slip;
    result.innerHTML =`<p>${adviceobj.advice}</p>`;
    id.innerHTML = `<span>${adviceobj.id}</span>`;
}).catch(error =>{
    console.log(error);
})
}
