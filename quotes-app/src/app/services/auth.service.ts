import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

    private token : string = null;

    register(email : string, password : string){
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                resolve("Success!Please go ahead for login.");
            }).catch(err => reject(err.message));
        })
    }

    login(email : string, password: string){
        return new Promise((resolve, reject) => {
            firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then( response => {
                firebase.auth().currentUser.getIdToken()
                    .then(token => {
                        this.token = token;
                        resolve("Logged-in Successfully.");
                    }).catch(err => reject(err.message))
            })
            .catch(err => reject(err.message))
        })    
    }

    getToken(){
        return this.token;
    }

    isUserAuthenticated(){
        return this.token != null;
    }

}

// npm install firebase --save