console.log(Date.now())
import * as database from "../../src/firebase/firebase";
const add = ()=>{
    alert('write')
    database.ref('/user/'+Date.now()).set({"namam":"hi there"})
}