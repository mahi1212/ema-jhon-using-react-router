import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth()
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder='Address' defaultValue="" {...register("address")} />
                <input placeholder='City' defaultValue="" {...register("city")} />
                <input placeholder='Phone Number' defaultValue="" {...register("phone")} />
                
                {errors.email && <span className='error'>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};
export default Shipping;