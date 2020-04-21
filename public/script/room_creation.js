
// document.getElementById('submit').addEventListener('click',function  
// })
function callme(){
    
    var str =  encodeURIComponent(document.getElementById('input').value)
    
    fetch('/createRoom?userId='+str).then((res)=>{
       res.json().then((data)=>{
         if(data.url){
           document.getElementById('message').value = data.url 
           }
           else{
            name_message()
           }
       }) 
      
    })
}
function name_message() {
    
  var x = document.getElementById("snackbar");
  x.innerHTML="Room name already taken! Try to be unique."

  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  

}
function copy_to() {
    
    var x = document.getElementById("snackbar");
    x.innerHTML="Text copied to clipboard"
  
    x.className = "show";
  
    
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
function myFunction() {
    
    var copyText = document.getElementById("message");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    copy_to();  
  }

 