import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

    register(email : string, password : string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log("User Registered Successfully!", response);
            }).catch(err => console.log(err));
    }

    login(){}

}

// npm install firebase --save