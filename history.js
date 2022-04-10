let history=[];

const hstryLst=document.querySelector('#h-list');
const btnMdl=document.querySelector('#modal-btn');

btnMdl.addEventListener('click',()=>{
    if(btnMdl.textContent == 'ADD'){
        const amnt=document.querySelector('#value').value;
        const remark=document.querySelector('#remark').value;
        const dt=new Date();
        if(remark === ''){
            history.unshift({amount:`+${amnt}`,date:`${dt.getMonth()}-${dt.getDate()}-${dt.getFullYear()}`,remark:`not set`});
            
            localStorage.setItem('history',JSON.stringify(history));
        }else{
            history.unshift({amount:`+${amnt}`,date:`${dt.getMonth()}-${dt.getDate()}-${dt.getFullYear()}`,remark:remark})
        
            localStorage.setItem('history',JSON.stringify(history));
        }
        location.reload();
    }else if(btnMdl.textContent == 'GET'){
        const amnt=document.querySelector('#value').value;
        const remark=document.querySelector('#remark').value;
        const dt=new Date();
        if(remark === ''){
            history.unshift({amount:`-${amnt}`,date:`${dt.getMonth()}-${dt.getDate()}-${dt.getFullYear()}`,remark:`not set`});
            
            localStorage.setItem('history',JSON.stringify(history));
        }else{
            history.unshift({amount:`-${amnt}`,date:`${dt.getMonth()}-${dt.getDate()}-${dt.getFullYear()}`,remark:remark})
        
            localStorage.setItem('history',JSON.stringify(history));
        }
        location.reload();
    }
})
function output(){
    history.forEach(hstry=>{
        const tr=document.createElement('tr');
        tr.className='hc';
        tr.innerHTML =`
            <td>${hstry.amount}</td>
            <td>${hstry.date}</td>
            <td>${hstry.remark}
        `
        hstryLst.append(tr);
        
        if(history.length > 5){
            const fullList=document.querySelector('#full-his-toggle');
            fullList.style.display="inline";
        }
    })
}
function displayOnFullList(table){
    history.forEach(hstry=>{
        const tr=document.createElement('tr');
        tr.innerHTML +=`
            <td>${hstry.amount}</td>
            <td>${hstry.date}</td>
            <td>${hstry.remark}</td>
        `
        table.append(tr);
})}
function removed(){
    const column=document.querySelectorAll('tbody tr');
    for(i=5;i < column.length ;i++){
        column[i].style.display='none';
    }
}
if(localStorage.getItem('history')){
    history=JSON.parse(localStorage.getItem('history'));
    const xct=output();
    const rem=removed();
    const fullHist=displayOnFullList(document.querySelector('#full-history-list'))
}


