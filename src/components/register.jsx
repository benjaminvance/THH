import "./sign.css";
import { useContext } from "react";

const Register = () => {
    return (
        <div>
            <h1 class="sign">Create an account...</h1>
            <form class="form">

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">First Name</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Last Name</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Phone Number</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>


                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div class="col">

                        <a href="./home">Return Home</a>
                    </div>
                </div>


                <button type="button" class="btn btn-success btn-block mb-4">Register</button>


                <div class="text-center">
                    <p>Already a member? <a href="./sign">Sign in here</a></p>
                </div>
            </form >
        </div >
    );
};

export default Register;