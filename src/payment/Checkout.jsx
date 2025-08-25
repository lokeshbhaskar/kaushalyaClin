import React from "react";

const Checkout = () => {
  const handlePayment = async () => {
    const response = await fetch("http://localhost:5000/payment/orders", {
      method: "POST",
    });
    const order = await response.json();

    const options = {
      key: "rzp_test_R76qFJDLPCMbjs", // Replace with your test key
      amount: order.amount,
      currency: order.currency,
      name: "Kaushalya Clinic",
      description: "Doctor Consultation Fee",
      order_id: order.id,
      handler: function (response) {
        alert("Payment successful: " + response.razorpay_payment_id);
        // Call backend to verify payment
      },
      prefill: {
        name: "Lokesh",
        email: "lokesh@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold">Doctor Consultation</h1>
      <p className="text-lg mt-2">₹500</p>
      <button
        onClick={handlePayment}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
