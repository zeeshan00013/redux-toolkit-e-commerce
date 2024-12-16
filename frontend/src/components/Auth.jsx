import { useState } from "react";
import { auth ,googleProvider} from "../config/firebase-config";
import { createUserWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages
    const [success, setSuccess] = useState(''); // State to hold success messages
 

    console.log(auth?.currentUser?.photoURL);
    
    const SignIn = async () => {
        setError(''); // Reset error state
        setSuccess(''); // Reset success state

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess('User  created successfully!'); // Set success message
        } catch (error) {
            // Handle specific error codes
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please use a different email or log in.');
            } else {
                setError('Error during sign up: ' + error.message);
            }
        }
    };
    const SignInWithGoogle = async ()=>{
      setError(''); // Reset error state
        setSuccess(''); // Reset success state

        try {
            await signInWithPopup(auth,googleProvider);
            setSuccess('User  created successfully!'); // Set success message
        } catch (error) {
            // Handle specific error codes
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please use a different email or log in.');
            } else {
                setError('Error during sign up: ' + error.message);
            }
        }
    };
    const handleLogout = async() =>{
    try {
      await signOut(auth)
    } catch (error) {
      setError('Error during sign up: ' + error.message);

    }
    }

    return (
        <div className="flex flex-col space-y-4 max-w-sm mx-auto p-6 bg-slate-400 rounded-lg mt-10">
            <input
                type="text"
                placeholder="Email..."
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password..."
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="border py-2 px-2" onClick={SignIn}>Sign In</button>
            <button className="border py-2 px-2" onClick={SignInWithGoogle}>Sign In with google</button>
            <button className="border py-2 px-2" onClick={handleLogout}>logout</button>


            {/* Display error messages */}
            {error && <div className="text-red-500">{error}</div>}
            {/* Display success messages */}
            {success && <div className="text-green-500">{success}</div>}
        </div>
    );
}

export default Auth;