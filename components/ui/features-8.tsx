import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Shield, Zap, Clock, Target } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your business performance with real-time analytics and comprehensive reporting tools.",
    badge: "Popular",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Seamlessly work together with your team through integrated communication and project management features.",
    badge: null,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.",
    badge: "Secure",
  },
  {
    icon: Zap,
    title: "Automation Tools",
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce manual errors.",
    badge: "New",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Monitor time spent on projects and tasks with built-in time tracking and productivity analytics.",
    badge: null,
  },
  {
    icon: Target,
    title: "Goal Management",
    description:
      "Set, track, and achieve your business objectives with powerful goal management and KPI tracking.",
    badge: null,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E3EAFC] to-[#DBEAFE] text-[#1E3A8A] text-sm font-semibold mb-8 border border-[#1E3A8A]/20 shadow-lg shadow-[#1E3A8A]/10">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6">
            Everything you need to manage your business
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Powerful features designed to streamline your operations and drive
            growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E3EAFC] to-[#DBEAFE] rounded-lg flex items-center justify-center mb-4 border border-[#0B82F0]/20">
                      <IconComponent className="h-6 w-6 text-[#0B82F0]" />
                    </div>
                    {feature.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-[#F26B0A] to-[#EA4335] text-white border-0"
                      >
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1F2937]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
