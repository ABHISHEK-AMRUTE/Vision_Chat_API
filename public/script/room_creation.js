
document.getElementById('submit').addEventListener('click',function(){
 fetch('/createRoom/'+document.getElementById('input').value).then((res)=>{
    res.json().then((data)=>{
        document.getElementById('message').innerHTML = data.url + '<BR>copy this link in your application web view to integrate vison chat api'
        
    }) 
   
 })
})


