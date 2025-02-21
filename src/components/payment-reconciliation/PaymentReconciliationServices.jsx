// Platform-specific Payment Reconciliation Services
// Automated reconciliation solutions for e-commerce marketplaces
import { 
  Check
} from 'lucide-react';

const SERVICES = [
  {
    id: 'amazon',
    name: "Amazon Payment Reconciliation",
    description: "Automated payment reconciliation for Amazon including settlement analysis, FBA fee validation, refund tracking, and marketplace commission reconciliation.",
  },
  {
    id: 'flipkart',
    name: "Flipkart Payment Reconciliation",
    description: "Comprehensive payment tracking for Flipkart including commission calculations, returns processing, shipping fee reconciliation, and settlement verification.",
  },
  {
    id: 'meesho',
    name: "Meesho Payment Reconciliation",
    description: "End-to-end payment reconciliation for Meesho including margin calculations, return management, payment cycle tracking, and settlement analysis.",
  },
  {
    id: 'myntra',
    name: "Myntra Payment Reconciliation",
    description: "Complete payment reconciliation for Myntra including commission structure analysis, returns processing, promotional deductions, and settlement tracking.",
  },
  {
    id: 'nykaa',
    name: "Nykaa Payment Reconciliation",
    description: "Detailed payment reconciliation for Nykaa including commission validation, returns management, promotional adjustments, and settlement verification.",
  },
  {
    id: 'ajio',
    name: "AJIO Payment Reconciliation",
    description: "Automated payment reconciliation for AJIO including commission calculations, returns processing, promotional deductions, and settlement analysis.",
  },
  {
    id: 'tatacliq',
    name: "Tata Cliq Payment Reconciliation",
    description: "Comprehensive payment tracking for Tata Cliq including commission structure validation, returns management, and settlement reconciliation.",
  },
  {
    id: 'firstcry',
    name: "FirstCry Payment Reconciliation",
    description: "End-to-end payment reconciliation for FirstCry including commission calculations, returns processing, and settlement verification.",
  },
  {
    id: 'aza',
    name: "AZA Payment Reconciliation",
    description: "Detailed payment tracking for AZA including commission validation, returns management, and luxury segment fee reconciliation.",
  }
];

const FEATURES = [
  "Automated Settlement Analysis",
  "Commission Reconciliation",
  "Returns & Refunds Tracking",
  "Fee Structure Validation",
  "Real-time Payment Monitoring",
  "Detailed Financial Reports"
];

const ServiceCard = ({ service }) => {
  const handleClick = () => {
    window.location.href = `/services/ecommerce-payment-reconciliation/${service.id}`;
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-full bg-orange-100">
          <div className="w-8 h-8 bg-orange-600 rounded-full" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
      </div>
      
      <p className="text-gray-700 mb-6">{service.description}</p>
      
      <ul className="space-y-3 mb-6">
        {FEATURES.map((feature) => (
          <li key={feature} className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-orange-600" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg py-3 px-4 font-bold text-center">
        Track Payments
      </div>
    </div>
  );
};

const PaymentReconciliationServices = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Platform-Specific Payment Reconciliation
          </h2>
          <p className="text-xl text-gray-700">
            Automate your e-commerce payment reconciliation with our platform-specific solutions for accurate financial tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentReconciliationServices;