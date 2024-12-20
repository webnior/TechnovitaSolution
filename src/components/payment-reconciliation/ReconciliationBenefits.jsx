import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2,
  Clock,
  ShieldAlert,
  CircleDollarSign,
  BookOpen,
  TrendingUp,
  FileText,
  Users,
  Cloud
} from 'lucide-react';

const ReconciliationBenefits = () => {
  const benefits = [
    {
      icon: BarChart2,
      title: "99.9% Accurate Reconciliation",
      description: "Achieve near-perfect payment reconciliation accuracy with our advanced automated matching algorithms and verification systems."
    },
    {
      icon: Clock,
      title: "85% Time Savings",
      description: "Reduce manual reconciliation effort by up to 85% with our automated e-commerce payment reconciliation software."
    },
    {
      icon: ShieldAlert,
      title: "Error Prevention",
      description: "Automatically detect and prevent payment reconciliation errors with real-time validation and intelligent matching."
    },
    {
      icon: CircleDollarSign,
      title: "Cost Reduction",
      description: "Minimize operational costs with automated payment reconciliation processes and improved efficiency."
    },
    {
      icon: BookOpen,
      title: "Audit-Ready Reports",
      description: "Generate comprehensive audit trails and detailed reports for all reconciliation activities across platforms."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Access live payment reconciliation analytics and insights across all your e-commerce channels."
    },
    {
      icon: FileText,
      title: "Compliance Ready",
      description: "Meet all regulatory requirements with our compliant payment reconciliation services and detailed documentation."
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Get round-the-clock assistance from our payment reconciliation experts for any queries or issues."
    },
    {
      icon: Cloud,
      title: "Cloud-Based Solution",
      description: "Access your payment reconciliation dashboard anywhere, anytime with our secure cloud-based platform."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Benefits of Automated Payment Reconciliation
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transform your e-commerce payment reconciliation process with our advanced solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-600 mb-4">
                <benefit.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Payment Reconciliation Process?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of e-commerce businesses using our automated reconciliation solutions
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-all duration-300">
            Schedule a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReconciliationBenefits;