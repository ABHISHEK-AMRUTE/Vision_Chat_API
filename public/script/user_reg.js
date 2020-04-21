function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
const userID= getQueryVariable('roomID')
console.log('user room name '+userID)
document.getElementById('submit').addEventListener('click',function(){
   document.getElementById('error_message').innerHTML=""
    
    fetch('/add_user/to_list?roomID='+userID+'&user_name='+document.getElementById('input').value).then((res)=>{
        res.json().then((data)=>{
            if(data.error)
            {
               document.getElementById('error_message').innerHTML=data.error
            }
            else{
               window.location.replace('../html/chat.html?userID='+ userID
               +'&username='+document.getElementById('input').value);
            }
        }) 
       
     })

    
    

})
