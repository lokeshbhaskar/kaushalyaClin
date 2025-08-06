import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500">Service not found</div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-6">
        <Icon size={40} className="text-blue-600" />
        <h1 className="text-3xl font-bold">{service.label}</h1>
      </div>

      <p className="text-lg text-gray-700 mb-4">{service.overview}</p>

      <Section title="Why It's Done" content={service.why_its_done} />
      <Section title="Symptoms" content={service.symptoms} />
      <Section title="Procedure" content={service.procedure} />
      <Section title="Benefits" content={service.benefits} />
      <Section title="Recovery" content={service.recovery} />
      <Section title="Post-Surgery Care" content={service.post_surgery} />

      <div className="mt-8 text-center">
        <Link
          to="/book-now"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {service.call_to_action}
        </Link>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default ServiceDetails;
