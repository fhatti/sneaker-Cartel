import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/FirebaseClient";
export default class User {
    
    constructor() {
        this.auth = auth;
    }

    async registerUser(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            const user = userCredential.user;
            console.log("User signed up:", user);
            return user;
        } catch (error) {
            console.error("Error during sign up:", error);
            return { errorCode: error.code, errorMessage: error.message };
        }
    }

    async logInUser(){
        try {
        const userCredential = await signInWithEmailAndPassword(this.auth,email,password)
        const user = userCredential.user
        console.log("User logged in successfully",user);
        } catch (error) {
            console.error("Error during logging in:", error);
            return { errorCode: error.code, errorMessage: error.message };
        }
    }
}
