import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const menu = useLoaderData()
    const { name, recipe,category, price ,_id} = menu
    console.log(menu);


    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        // uplpad image and get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_Api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the data 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount>0) {
                // shoe success popup
                // reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated to menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    }


    return (
        <div>

            <SectionTitle heading='Update an Item' subHeading='Refresh Info'></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input type="text"
                        defaultValue={name}
                            placeholder="Type here"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select defaultValue='default' {...register('category')} required className="select select-bordered w-full ">
                                <option defaultValue={category} disabled value='default'>Select a category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="text"
                                placeholder="Price"
                                defaultValue={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full " />

                        </div>
                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Detail*</span>
                        </label>
                        <br />
                        <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered w-full h-24" placeholder="Bio"></textarea>

                    </div>
                    {/* file input */}
                    <div className="form-control w-full my-6 ">
                        <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn ">
                        Update  Items 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;