//Needed in DOM
const openModal=document.querySelector('#opening');
const disTotal=document.querySelector('#saved-showcase');
const diSaved=document.querySelector('#saved');
const disModSaved=document.querySelector('#mod-total');
//add and get btn functions
const addBtn=document.querySelector('#add-btn');
const getBtn=document.querySelector('#get-btn');
//add and get modal
const hModal=document.querySelector('#exampleModalLabel');
const modWarn=document.querySelector('#msg');
const acBtn=document.querySelector('#modal-btn');
const valInput=document.querySelector('#value');
//computaions
let subSaved;
let subTotal = parseInt(localStorage.getItem('total'));
//GETTING STARTED
const getStarted=document.querySelector('#start-btn');
getStarted.addEventListener('click',()=>{
    localStorage.setItem('saved',0);
    localStorage.setItem('total',0);
    localStorage.setItem('state',false);
    //modal removed
    openModal.remove()
    //day count started
    location.reload();
    
})
const saved=parseInt(localStorage.getItem('saved'));
const total=localStorage.getItem('total');
const hide=localStorage.getItem('state');
//get and add functions
addBtn.addEventListener('click',()=>{
    //show text
    hModal.textContent='Add Saving';
    modWarn.textContent='Amount To Be Added';
    acBtn.textContent='ADD';
})
getBtn.addEventListener('click',()=>{
    //show text
    hModal.textContent='Get Saving';
    modWarn.textContent='Amount To Be Get';
    acBtn.textContent='GET';
})
//Operation
acBtn.addEventListener('click',()=>{
        // Add and Get
        if(valInput.value === ""){
            alert('enter amount');
        }else{
            if(acBtn.textContent == 'ADD'){
                subSaved= saved + parseInt(valInput.value);
                subTotal += parseInt(valInput.value);
                localStorage.setItem('total',subTotal)
                localStorage.setItem('saved',subSaved);
               
            //    location.reload();
            }else if(acBtn.textContent == 'GET'){
                subSaved = saved - parseInt(valInput.value);
                localStorage.setItem('saved',subSaved);
                location.reload();
            }
        }
})
//hiding modal
function getStartedHide(){
    if(hide == 'false'){
        openModal.remove();
    }
    // display disTotal/saved
    disTotal.value=total;
    diSaved.textContent=saved;
    disModSaved.textContent=saved;
};
const showDate = () => {
    const cDate = new Date();
    const disDay=document.querySelector('#day-showcase');
    const showDay=document.querySelector('#show-d');

    showDay.textContent = `${cDate.getMonth()}-${cDate.getDate()}-${cDate.getFullYear()}`;

    disDay.setAttribute('value',`${cDate.getMonth()}-${cDate.getDate()}-${cDate.getFullYear()}`)

    console.log(disDay)
};
showDate();

const state= getStartedHide();









