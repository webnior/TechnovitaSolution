// components/Account-management/WhyChooseUs.js
import WhatsAppCTA from '../WhatsappCTA';

const WhyChooseUs = ({ config }) => {
  return (
    <section className="relative sm:py-2">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-full text-orange-600 text-sm font-medium">
            <span>Why Choose Us</span>
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            <span>Trusted by {config.badge.trustedSellers} Sellers</span>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {config.title}
          </h2>
        </div>

        {/* Main content with enhanced layout */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
              {config.description}
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {config.features.map((feature, index) => (
                <div key={index} className="bg-orange-50/50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2.5 h-2.5 bg-orange-600 rounded-full"></div>
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <WhatsAppCTA
            phoneNumber="917451073504"
            message="Have questions about our services?"
            showMessage={true}
            buttonText="Message Us"
            className="my-8"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;