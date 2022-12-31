import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import registerImage from '../../assets/Register (2).jpg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [registerError, setRegisterError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate('/');
    const [name, setName] = useState('');
    console.log(name);
    const values = getValues();
    console.log(values);
    const firstName = values.firstname;
    const lastName = values.lastname;
    const userName = firstName + lastName;
    console.log(userName);

    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // setName(userName);
                navigate('/');
                toast.success('User created successfully')
                toast.success(`Username: ${userName}`)
            })
            .catch(err => {
                setRegisterError(err.message);
                console.error(err)
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
            <div className='w-full  md:w-[385px] h-[690px] shadow-xl  border px-[29px] py-[25px] mx-auto'>
                <h2 className='text-xl text-center text-black'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">First Name</span>
                        </label>
                        <input type="text" {...register("firstname")} className="input input-bordered border-slate-400 w-full max-w-xs text-black" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Last Name</span>
                        </label>
                        <input type="text" {...register("lastname")} className="input input-bordered border-slate-400 w-full max-w-xs text-black" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Username</span>
                        </label>
                        <input type="text" {...register("username")} value={userName} className="input input-bordered border-slate-400 w-full max-w-xs text-black bg-slate-200" readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-black">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-black">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label"><span className="label-text text-black">Confirm Password</span>
                        </label>
                        <input type="password" {...register("confirm_password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.confirm_password && <p role="alert" className='text-red-700'>{errors.confirm_password?.message}</p>}
                    </div>


                    <div>
                        {
                            registerError && <p className='text-red-700 mb-5'>{registerError}</p>
                        }
                    </div>

                    <button className="btn btn-success text-white w-full mt-5 mb-[11px]">Register</button>
                    <p className='text-black text-center'>Already have an account? <span className='text-success'><Link to='/login'>Please Login</Link></span></p>
                </form>
            </div>
        </section>
    );
};

export default Register;