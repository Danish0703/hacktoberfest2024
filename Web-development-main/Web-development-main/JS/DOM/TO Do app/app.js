let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');
btn.addEventListener('click',function(){
    let li=document.createElement('li');
    li.textContent=inp.value;

    let donebtn=document.createElement('button');
    donebtn.textContent='Done';
    donebtn.classList.add('done');
    li.appendChild(donebtn);
    ul.appendChild(li);
    inp.value='';
    });
ul.addEventListener('click',function(e){
    if(e.target.nodeName=='BUTTON'){
        let listItems=e.target.parentElement;
        listItems.remove();
        console.log("task done");
    }
    });