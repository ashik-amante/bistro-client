import useCart from "../../../hooks/useCart";


const CArt = () => {
    const [carts] = useCart()
    const totalPrice = carts.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl ">Items: {carts.length}</h2>
                <h2 className="text-3xl ">Total Price : {totalPrice}</h2>
                <button className="btn btn-primary">  Pay</button>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts.map((item, index) => <tr key={item._id} item={item}>
                                <th>
                                  {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price} $</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default CArt;