"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "./animations";
import { SignUpButton } from "@clerk/nextjs";

const plans = [
  {
    name: "Starter",
    price: "29",
    period: "month",
    description: "Perfect for small teams getting started",
    icon: Zap,
    features: [
      "Up to 10 employees",
      "Basic project management",
      "Invoice creation",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Professional",
    price: "79",
    period: "month",
    description: "Ideal for growing businesses",
    icon: Crown,
    features: [
      "Up to 50 employees",
      "Advanced project tracking",
      "Financial reporting",
      "Priority support",
      "API access",
      "Custom workflows",
      "Team collaboration tools",
    ],
    popular: true,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "Enterprise",
    price: "199",
    period: "month",
    description: "For large organizations",
    icon: Rocket,
    features: [
      "Unlimited employees",
      "Advanced analytics",
      "Custom integrations",
      "24/7 phone support",
      "Dedicated account manager",
      "Security compliance",
      "Custom training",
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-600",
  },
];

export function PricingSection() {
  return (
    <AnimatedSection
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Choose the perfect plan for your team. Upgrade or downgrade at any
            time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative ${plan.popular ? "lg:scale-105" : ""}`}
            >
              <Card
                className={`h-full ${
                  plan.popular ? "ring-2 ring-blue-500 shadow-2xl" : "shadow-lg"
                } relative overflow-hidden border-0`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader
                  className={`text-center ${
                    plan.popular ? "pt-10" : "pt-8"
                  } pb-4`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}
                  >
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <SignUpButton mode="modal">
                    <Button
                      className={`w-full mb-6 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      Get Started
                    </Button>
                  </SignUpButton>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.05,
                        }}
                        className="flex items-center"
                      >
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500">
            Questions about enterprise pricing?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
