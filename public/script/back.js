
function getQueryVariable(variable){var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0;i<vars.length;i++){var pair = vars[i].split("=");if(pair[0] == variable){return pair[1];}}return(false);}const stri='/'+'g'+'et'+'ke'+'ys'+'/'+'secu'+'r'+'e'+'l'+'y';var app;fetch(stri).then((res)=>{res.json().then((data)=>{app=firebase.initializeApp(data);})});var userID=getQueryVariable('userID');var name = getQueryVariable('username')
  setTimeout(function(){
   var db = firebase.database(app);

  db.ref('/'+userID+"/").on('value', function(snapshot) {
    var data = snapshot.val();
    
    document.getElementById('chat_content').innerHTML =""
    for(let key in data){
      
      
        const div_out = document.createElement('div')
        const header = document.createElement('header')
        const p_header = document.createElement('p')
        const div_in = document.createElement('div')
       
        const p_in = document.createElement('p')   
        p_header.innerHTML = data[key].username
        p_in.innerHTML = data[key].message

        div_in.append(p_in)
        header.append(p_header)
        div_out.append(header)
        
        div_out.append(div_in)

        div_out.setAttribute('class','w3-card-2 w3-theme-l5')
        div_in.setAttribute('class','w3-container')
        header.setAttribute('class','w3-container  w3-large')
        div_out.setAttribute('style','margin-left: 4px;margin-right: 4px;margin-top:8px;margin-bottom:2px')
        document.getElementById('chat_content').append(div_out)
       // st = st+'<BR>'+data[key].username+'<BR>'+data[key].message+'<BR>'


        
   }
    
    window.scrollTo(0,document.body.scrollHeight);
    // console.log(snapshot.val())
  });

  document.getElementById('submit').addEventListener('click',function(){
    
    db.ref('/'+userID+"/"+Date.now()).set({username:name,message:document.getElementById('input').value})
  })
  },2000)
  
  


document.getElementById('headroom').innerHTML = ''+getQueryVariable('userID')+' : '+getQueryVariable('username') + ''
