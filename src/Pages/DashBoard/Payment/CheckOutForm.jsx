import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const [err, setError] = useState('')
    const [clientSecret, setClientSecret] = useState()
    const [trxId, setTrxId] = useState('')

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()



    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (!card) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message)

        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
        // confirem paymenrt
        const { paymentIntent, error: confiremError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymus',
                    name: user?.displayName || 'anonymus'
                }
            }
        })
        if (confiremError) {
            console.log('confirem error ', confiremError);
        }
        else {
            console.log('payment intent ', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction is ', paymentIntent.id);
                setTrxId(paymentIntent.id)

                // save payment in database 
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(), //add moment js 
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending',
                    transactionId: paymentIntent.id

                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('paymet resu;t save to db', res);
                refetch()
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Taka paid ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-success btn-sm my-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-700 text-xl mt-4'>{err}</p>
            {trxId && <p className='text-xl text-green-600 '>Your transaction id : {trxId}</p>}
        </form>
    );
};

export default CheckOutForm;