import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../Components/SectionTitle';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>

            <SectionTitle heading='Payment history' subHeading='At a galance '></SectionTitle>

            <h2>total papyment : {payments.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>email</th>
                                <th>Transaction Id</th>
                                <th>Toatal Price</th>
                                <th>Payment date </th>
                                <th>Status </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item,index) => <tr key={item._id} className="bg-base-200">
                                    <th>{index +1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.transactionId}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;