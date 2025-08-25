import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    date: String,
    time: String,
    doctor: String,
    paymentId: String,
    orderId: String,
    signature: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", AppointmentSchema);
