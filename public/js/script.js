var d = document.getElementsByClassName("filho")
for(var i=0;i < d.length;i++){
d[i].addEventListener('click',(event)=>{
alert(event.target.innerHTML)

},false)
}
