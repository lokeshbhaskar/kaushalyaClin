import { Link } from "react-router-dom";

import {
  Stethoscope,
  FileHeart,
  Thermometer,
  Syringe,
  ShieldPlus,
  Bandage,
  Biohazard,
  ActivitySquare,
  Apple,
  ClipboardList,
} from "lucide-react";

export const services = [
  {
    slug: "health-checkup",
    label: "Comprehensive Health Checkups",
    icon: FileHeart,
    path: "/services/comprehensive-health-checkups",
  },
  {
    slug: "diagnosis-checkup",
    label: "Diagnosis and Treatment of Common Illnesses",
    icon: ClipboardList,
    path: "/services/common-illnesses-treatment",
  },
  {
    slug: "fever-cold-checkup",
    label: "Fever, Cold & Cough Management",
    icon: Thermometer,
    path: "/services/fever-cold-cough",
  },
  {
    slug: "hypertension-checkup",
    label: "Hypertension & Diabetes Management",
    icon: ShieldPlus,
    path: "/services/hypertension-diabetes",
  },
  {
    slug: "infection-checkup",
    label: "Infection Diagnosis and Treatment",
    icon: Biohazard,
    path: "/services/infection-treatment",
  },
  {
    slug: "minor-injury-checkup",
    label: "Minor Injuries & Wound Care",
    icon: Bandage,
    path: "/services/wound-care",
  },
  {
    slug: "vaccination-checkup",
    label: "Vaccination and Immunization",
    icon: Syringe,
    path: "/services/vaccination-immunization",
  },
  {
    slug: "allergy-checkup",
    label: "Allergy & Asthma Care",
    icon: ActivitySquare,
    path: "/services/allergy-asthma",
  },
  {
    slug: "nutritional-checkup",
    label: "Nutritional & Lifestyle Advice",
    icon: Apple,
    path: "/services/nutrition-lifestyle",
  },
  {
    slug: "routine-checkup",
    label: "Routine Physical Examinations",
    icon: Stethoscope,
    path: "/services/physical-examinations",
  },
];
const Services = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-6 px-4">
    {services.map((service, i) => {
      const Icon = service.icon;
      // const slug = slugify(service.label);
      return (
        <Link to={`/service/${service.slug}`} key={i}>
          <div
            className="group flex flex-col items-center justify-center bg-white shadow-md p-5 rounded-xl text-center 
              transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <Icon className="w-8 h-8 text-teal-700 group-hover:text-teal-500 transition-colors duration-300 mb-2" />
            <p className="text-sm font-semibold text-gray-700 group-hover:text-teal-700 transition-colors duration-300">
              {service.label}
            </p>
          </div>
        </Link>
      );
    })}
  </div>
);

export default Services;
