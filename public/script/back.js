
function getQueryVariable(variable){var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0;i<vars.length;i++){var pair = vars[i].split("=");if(pair[0] == variable){return pair[1];}}return(false);}const stri='/'+'g'+'et'+'ke'+'ys'+'/'+'secu'+'r'+'e'+'l'+'y';var app;fetch(stri).then((res)=>{res.json().then((data)=>{app=firebase.initializeApp(data);})});var userID=getQueryVariable('userID');var name = getQueryVariable('username')
  setTimeout(function(){
    var db = firebase.database(app);

  db.ref('/'+userID+"/").on('value', function(snapshot) {
    var data = snapshot.val();
    var st = "<BR>"
    for(let key in data){
        
        st = st+'<BR>'+data[key].username+'<BR>'+data[key].message+'<BR>'
        
   }
    document.getElementById('chat_content').innerHTML = st
    // console.log(snapshot.val())
  });

  document.getElementById('submit').addEventListener('click',function(){
    
    db.ref('/'+userID+"/"+Date.now()).set({username:name,message:document.getElementById('input').value})
  })
  },2000)
  
  


document.getElementById('headroom').innerHTML = 'Room name '+getQueryVariable('userID')+' : user name '+getQueryVariable('username')
