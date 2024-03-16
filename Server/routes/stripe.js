import Stripe from 'stripe'
import express from "express";

const router = express.Router();

const stripe = new Stripe('sk_test_51N7hl3SHBE45jscN5AtjXTUNJacUegzFPTJHZeSglVfIhi8Vn6ek02Mf11CQoA3TCv0lnLaf1HdNIuCyYGzAo16Z00SRKVA0bE');


router.post('/create-checkout-session', async (req, res) => {

    const courseDetails = req.body.product; // Course details from the request body

    console.log(courseDetails)

    // Format the line items for Stripe session creation
    const lineItems = [{
        price_data: {
            currency: 'inr',
            product_data: {
                name: courseDetails.course_name,
                images: [courseDetails.c_image],
                description: courseDetails.description,
            },
            unit_amount: courseDetails.price*100, // Assuming the price is $10.00 in cents
        },
        quantity: 1,
    }];

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        // success_url: `http://127.0.0.1:3000/paymentDone/${lineItems}`, // Redirect URL after successful payment
        success_url: `http://127.0.0.1:3000/home`, // Redirect URL after successful payment
        cancel_url: 'http://127.0.0.1:3000/dashboard', // Redirect URL if the payment is canceled
    });

    res.json({ id: session.id });
})


export default router