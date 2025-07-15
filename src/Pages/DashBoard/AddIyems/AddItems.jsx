import { useForm } from "react-hook-form"
import SectionTitle from '../../../Components/SectionTitle';
import { FaUtensils } from "react-icons/fa6";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <div>
            <SectionTitle subHeading='Whats new' heading='add an item'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>

                        </label>
                        <input type="text"
                            placeholder="Type here"
                            {...register('name',{required:true})}
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select {...register('category')} required className="select select-bordered w-full ">
                                <option disabled selected>Select a category</option>
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
                                {...register('price',{required:true})}
                                className="input input-bordered w-full " />

                        </div>
                    </div>

                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Detail*</span>
                        </label>
                        <br />
                        <textarea {...register('recipe',{required:true})} className="textarea textarea-bordered w-full h-24" placeholder="Bio"></textarea>

                    </div>
                    {/* file input */}
                    <div className="form-control w-full my-6 ">
                        <input {...register('image', {required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    
                    <button className="btn ">
                        Add Items <FaUtensils className="ml-4
                        "></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;