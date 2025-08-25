import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import Appointment from "../models/Appointment.js";

export const createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // convert to paise
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    appointment,
  } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    try {
      const newAppointment = new Appointment({
        ...appointment,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        signature: razorpay_signature,
        status: "success",
      });
      await newAppointment.save();
      res.json({
        success: true,
        message: "Payment Verified and appointment saved",
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "DB error", error });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "Payment verification failed" });
  }
};
