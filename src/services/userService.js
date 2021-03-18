'use-strict'
import { Utils } from './utilsService.js';
import { DbService } from './db-service.js';
const KEY='userDb'


export default {
    getUser,
    onChangeUser
}

 async function getUser(){
     console.log('herreee');
    var user = Utils.loadFromStorage(KEY)
    console.log('USER',user);
    if (!user) {
      user = _getEmptyUser();
      console.log('userService',user);
    }
    return user;
}
function _getEmptyUser(){
    return   {
        gender: '',
        reminderTime: {
            hour:0,
            minute:0,
            time:'PM'
        },
        favColor: "",
      }
    
}
function onChangeUser(newUser){
    Utils.storeToStorage(KEY,newUser)
    // return DbService.put(KEY, newUser)

}