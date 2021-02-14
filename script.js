
var daysElem=document.querySelector('#day');
var hrsElem=document.querySelector('#hrs');
var minElem=document.querySelector('#mins');
var secElem=document.querySelector('#secs');


setInterval(function(){
    var todaydate= new Date();
    var future= new Date(2021,1,1,0,0,0,0);
    
    var diff=future-todaydate;
    var sec =Math.floor( (diff /1000));
    var min = Math.floor((diff /(1000*60)));
    var hrs = Math.floor((diff / (1000*60*60)));
    var days = Math.floor((diff / (1000*60*60*24)));
    
    hrs=hrs%24;
    min=min%60;
    sec=sec%60;
    
    daysElem.textContent=days;
    hrsElem.textContent=hrs;
    minElem.textContent=min;
    secElem.textContent=sec;
    
},1000)
