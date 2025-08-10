import { PhoneCall, MessageCircleMore } from "lucide-react";

const BookNow = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-teal-800 mb-6">Book Your Appointment</h2>
        
        <div className="space-y-4">
          {/* Call Option */}
          <a
            href="tel:+917367848333"
            className="flex items-center justify-center gap-3 bg-teal-600 text-white py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition"
          >
            <PhoneCall /> Call Now
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/917367848333?text=Hi%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition"
          >
            <MessageCircleMore /> WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
