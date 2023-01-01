
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/Register (2).jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [registerError, setRegisterError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const { createUser, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle("Register")
    const [username, setUsername] = useState('')
    console.log(username)
    const values = getValues();
    console.log(values);
    const firstName = values.firstname;
    const lastName = values.lastname;
    console.log(firstName, lastName);
    console.log(typeof firstName)








    const handleRegister = data => {
        saveUser(data.username, data.email, data.password)

    }

    const saveUser = (username, email, password) => {
        const user = { username, email, password };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            console.log(user);
                            verifyEmail()
                                .then(() => {
                                    toast.success('Please verify your Email');
                                    saveUser(data.username, data.email, data.password)

                                })

                            // setName(userName);



                        })
                        .catch(err => {
                            setRegisterError(err.message);
                            console.error(err)
                        })
                    toast.success('User Created Successfully');
                    navigate('/home');

                }
                else {

                    setUsernameError(data.message)
                    setEmailError(data.message2)

                }
            })
    }



    // const firstName = data.firstname;
    // const lastName = data.lastname;
    // const userName = firstName + lastName;
    // console.log(firstName, lastName)

    return (
        <section className='my-28 block lg:flex justify-around'>
            <div className='md:w-full lg:w-1/2 mb-16 lg:mb-0'>
                <img className='md:mx-auto lg:mx-0' src={registerImage} alt="" />
            </div>
            <div className='w-full  md:w-[385px]  shadow-xl  border px-[29px] py-[25px] mx-auto'>
                <h2 className='text-xl text-center text-black'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">First Name</span>
                        </label>
                        <input type="text" {...register("firstname")} className="input input-bordered border-slate-400 w-full  text-black" />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">Last Name</span>
                        </label>
                        <input type="text" {...register("lastname")} className="input input-bordered border-slate-400 w-full  text-black" />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">Username</span>
                        </label>
                        <input type="text" {...register("username")} className="input input-bordered border-slate-400 w-full  text-black " />
                        {
                            usernameError && <p role="alert" className='text-red-700'>{usernameError}</p>
                        }
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full  text-black" />
                        {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                        {
                            emailError && <p role="alert" className='text-red-700'>{emailError}</p>
                        }
                    </div>

                    <div className="form-control w-full  ">
                        <label className="label"><span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full " />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full  ">
                        <label className="label"><span className="label-text text-black">Confirm Password</span>
                        </label>
                        <input type="password" {...register("confirm_password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full " />
                        {errors.confirm_password && <p role="alert" className='text-red-700'>{errors.confirm_password?.message}</p>}
                    </div>


                    <div>
                        {
                            registerError && <p className='text-red-700 mb-5'>{registerError}</p>
                        }
                    </div>

                    <button className="btn btn-error text-white w-full mt-5 mb-[11px]">Register</button>
                    <p className='text-black text-center'>Already have an account? <span className='text-error'><Link to='/'>Please Login</Link></span></p>
                </form>
            </div>
        </section>
    );
};

export default Register;