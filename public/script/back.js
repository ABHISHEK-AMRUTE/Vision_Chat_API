
function getQueryVariable(variable){var query = window.location.search.substring(1);var vars = query.split("&");for (var i=0;i<vars.length;i++){var pair = vars[i].split("=");if(pair[0] == variable){return pair[1];}}return(false);}const stri='/'+'g'+'et'+'ke'+'ys'+'/'+'secu'+'r'+'e'+'l'+'y';var app;fetch(stri).then((res)=>{res.json().then((data)=>{app=firebase.initializeApp(data);})});var userID=getQueryVariable('userID');var name = getQueryVariable('username')
  setTimeout(function(){
   var db = firebase.database(app);
   const username = getQueryVariable('username');
    db.ref('/'+userID+"_info/").on('value', function(snapshot) {
      var data = snapshot.val();
      
      document.getElementById('add_members').innerHTML =""
      var count = 0
      var flag=0
      for(let key in data){
     
       const span = document.createElement('span')
       span.innerHTML=key
       span.setAttribute('class','w3-bar-item w3-button w3-large')
       document.getElementById('add_members').append(span)
       count++;
       if(key==username)
       {
         flag=1
       }
      
       

     }
     if(flag==0)
     {
      window.location.replace('./not_registered.html');
     }
     document.getElementById('count').innerHTML=count
     
    });
     
    db.ref('/'+userID+"/").on('value', function(snapshot) {
    var data = snapshot.val();
    
    document.getElementById('chat_content').innerHTML =""
    for(let key in data){
      
      if(data[key].username==username)
        {
        const div_out = document.createElement('div')
        const header = document.createElement('header')
        const p_header = document.createElement('div')
        const div_in = document.createElement('div')
        const div_co = document.createElement('div')
        const p_in = document.createElement('div')   
        p_header.innerHTML = '<b>'+data[key].username+'</b>'
        p_in.innerHTML = data[key].message

        div_in.append(p_in)
        header.append(p_header)
        div_out.append(header)
        
        div_out.append(div_in)
        div_co.append(div_out)
        div_co.setAttribute('class','w3-container')
        div_out.setAttribute('class','w3-card-2 w3-blue w3-right w3-round-xlarge')
        div_in.setAttribute('class','w3-container')
        header.setAttribute('class','w3-container  w3-large')
        p_header.setAttribute('style','margin-top:12px;margin-bottom:4px;color:white;')
        p_in.setAttribute('style','margin-bottom:4px;height: fit-content;color:black')
        div_out.setAttribute('style','width:fit-content;margin-left: 4px;margin-right: 4px;margin-top:8px;margin-bottom:2px')
        document.getElementById('chat_content').append(div_co)
      }
      else{
        const div_out = document.createElement('div')
        const header = document.createElement('header')
        const p_header = document.createElement('div')
        const div_in = document.createElement('div')
        const div_co = document.createElement('div')
        const p_in = document.createElement('div')   
        p_header.innerHTML = '<b>'+data[key].username+'</b>'
        p_in.innerHTML = data[key].message

        div_in.append(p_in)
        header.append(p_header)
        div_out.append(header)
        
        div_out.append(div_in)
        div_co.append(div_out)
        div_co.setAttribute('class','w3-container')
        div_out.setAttribute('class','w3-card-2 w3-theme-l5 w3-left w3-round-xlarge')
        div_in.setAttribute('class','w3-container')
        header.setAttribute('class','w3-container  w3-large')
        p_header.setAttribute('style','margin-top:12px;margin-bottom:4px;color:blue;')
        p_in.setAttribute('style','margin-bottom:4px;height: fit-content;')
        div_out.setAttribute('style','width:fit-content;margin-left: 4px;margin-right: 4px;margin-top:8px;margin-bottom:2px')
        document.getElementById('chat_content').append(div_co)
      }
    
       document.getElementById('spinner').style.display='none';
    ////////////////PROTOTYPE for chat cards////////////////
    //    <div class='w3-container'>
    //                <div class='w3-card-2 w3-theme-l5 w3-round-xlarge'style='width:fit-content;margin-left: 4px;margin-right: 4px;margin-top:8px;margin-bottom:2px' >
    //                 <header class='w3-container'>
    //                   <div style='margin-top:12px;margin-bottom:4px;color:blue;'>
    //                   sdhjhjashdjasd
    //                   </div>
    //                 </header>
    //                 <div class='w3-container'>
    //                   <div style='margin-bottom:4px;height: fit-content;'>
    //                     sfs 
    //                   </div>
    //                 </div>
    //  </div></div>

    
        
   }
    
    window.scrollTo(0,document.body.scrollHeight);
    // console.log(snapshot.val())
  });

  document.getElementById('submit').addEventListener('click',function(){
    if(document.getElementById('input').value!=""){
    db.ref('/'+userID+"/"+Date.now()).set({username:name,message:document.getElementById('input').value})
    document.getElementById('input').value ="";}
  })
  },2000)
  
  
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  
  }

document.getElementById('headroom').innerHTML = ''+getQueryVariable('userID')+' : '+getQueryVariable('username') + ''
document.getElementById('title').innerHTML=getQueryVariable('userID')