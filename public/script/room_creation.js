
document.getElementById('submit').addEventListener('click',function(){
 fetch('/createRoom/'+document.getElementById('input').value).then((res)=>{
    document.getElementById('message').innerHTML = res.url
    console.log(res.url)
 })
})


