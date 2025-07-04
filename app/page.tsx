import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModernNavbar } from "@/components/landing/modern-navbar";
import {
  AnimatedSection,
  FloatingElement,
} from "@/components/landing/animations";
import { AnimatedText } from "@/components/landing/animated-text";
import { Footer } from "@/components/landing/footer";
import { Pricing } from "@/components/ui/pricing-cards";
import { GlowCard } from "@/components/ui/spotlight-card";
import { BarChart3, TrendingUp, Award, Star } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();

  // Redirect authenticated users to dashboard
  if (user) {
    redirect("/dashboard");
  }

  const integrations = [
    { name: "Anthropic", logo: "/icons8-anthropic.svg" },
    { name: "Apple Inc", logo: "/icons8-apple-inc.svg" },
    { name: "Apple Intelligence", logo: "/icons8-apple-intelligence.svg" },
    { name: "DeepAI", logo: "/icons8-deepai.svg" },
    { name: "Google", logo: "/icons8-anthropic.svg" },
    { name: "Microsoft", logo: "/icons8-apple-inc.svg" },
    { name: "Slack", logo: "/icons8-deepai.svg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar */}
      <ModernNavbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-white to-[#E3EAFC]" />

        {/* Floating Avatars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0.5}>
            <div className="absolute top-32 left-4 lg:left-20 w-16 h-16 rounded-full bg-white shadow-xl border-2 border-[#E3EAFC] overflow-hidden">
              <Image
                src="/avatar1.png"
                alt="User avatar 1"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </FloatingElement>
          <FloatingElement delay={0.7}>
            <div className="absolute top-48 right-4 lg:right-32 w-20 h-20 rounded-full bg-white shadow-xl border-2 border-[#E3EAFC] overflow-hidden">
              <Image
                src="/avatar2.png"
                alt="User avatar 2"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </FloatingElement>
          <FloatingElement delay={0.9}>
            <div className="absolute bottom-60 left-4 lg:left-32 w-16 h-16 rounded-full bg-white shadow-xl border-2 border-[#E3EAFC] overflow-hidden">
              <Image
                src="/avatar3.png"
                alt="User avatar 3"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </FloatingElement>
          <FloatingElement delay={1.1}>
            <div className="absolute bottom-48 right-4 lg:right-24 w-16 h-16 rounded-full bg-white shadow-xl border-2 border-[#E3EAFC] overflow-hidden">
              <Image
                src="/avatar1.png"
                alt="User avatar 4"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </FloatingElement>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FloatingElement delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E3EAFC] to-[#DBEAFE] text-[#1E3A8A] text-sm font-semibold mb-8 border border-[#1E3A8A]/20 shadow-lg shadow-[#1E3A8A]/10">
                <Award className="h-4 w-4 mr-2 text-[#F26B0A]" />
                More than 10K+ companies choose rudrERP
              </div>
            </FloatingElement>

            <FloatingElement delay={0.4}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mb-8 leading-tight">
                One tool to{" "}
                <AnimatedText
                  words={["manage", "plan", "track"]}
                  className="bg-gradient-to-r from-[#F26B0A] via-[#FF5A1A] to-[#EA4335] bg-clip-text text-transparent"
                />
                <br />
                <span className="text-[#374151]">business and your team</span>
              </h1>
            </FloatingElement>

            <FloatingElement delay={0.6}>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] mb-12 max-w-4xl mx-auto leading-relaxed">
                Grow digital teams easily, faster, smarter and more efficiently,
                delivering the visibility and data-driven insights to navigate
                any business complexity.
              </p>
            </FloatingElement>

            <FloatingElement delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F26B0A] via-[#FF5A1A] to-[#EA4335] hover:from-[#EA4335] hover:via-[#F26B0A] hover:to-[#FF5A1A] text-white text-lg px-8 py-4 rounded-xl font-semibold w-full sm:w-auto shadow-xl shadow-[#F26B0A]/25 hover:shadow-2xl hover:shadow-[#F26B0A]/30 transition-all duration-300"
                  >
                    Start for free
                  </Button>
                </SignUpButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 rounded-xl w-full sm:w-auto border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#E3EAFC] hover:border-[#1E3A8A]/40 transition-all duration-300 font-semibold"
                >
                  Get a demo
                </Button>
              </div>
            </FloatingElement>
          </div>

          {/* Dashboard Demo Image */}
          <FloatingElement delay={1.0}>
            <div className="relative max-w-6xl mx-auto mt-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E3EAFC] bg-white">
                <Image
                  src="/landingdemo.webp"
                  alt="rudrERP Dashboard Demo"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating UI elements around the demo */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-[#E3EAFC] hidden lg:block">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-[#0B82F0]" />
                  <div>
                    <div className="text-sm font-semibold text-[#1F2937]">
                      Analytics
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      Real-time insights
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-[#E3EAFC] hidden lg:block">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-[#10B981]" />
                  <div>
                    <div className="text-sm font-semibold text-[#1F2937]">
                      Growth
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      +24% this month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* Integration Logos */}
          <FloatingElement delay={1.2}>
            <div className="border-t border-[#E3EAFC] pt-12 text-center">
              <p className="text-sm text-[#6B7280] mb-8">
                More than 50+ companies provide integration
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#F8FAFC] to-[#E3EAFC] rounded-lg hover:opacity-100 transition-opacity duration-200 border border-[#E3EAFC]/50"
                  >
                    <Image
                      src={integration.logo}
                      alt={`${integration.name} logo`}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="font-medium text-[#374151]">
                      {integration.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FloatingElement>
        </div>
      </section>
      {/* Features Section - Redesigned */}
      {/*  */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Feature with Demo Image */}
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E3EAFC] to-[#DBEAFE] text-[#1E3A8A] text-sm font-semibold mb-8 border border-[#1E3A8A]/20 shadow-lg shadow-[#1E3A8A]/10">
              Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6">
              Solve your team&apos;s
              <br />
              biggest challenges
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto mb-16">
              Streamline your workflow, boost productivity, and keep everything
              organized in one powerful platform.
            </p>
          </AnimatedSection>

          {/* Three Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#F26B0A]/20">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#F26B0A] to-[#EA4335] rounded-sm"></div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                  Ensure your team is always on the same page
                </h3>
                <p className="text-[#6B7280] text-sm">
                  Keep everyone aligned and transparent updates.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E3EAFC] to-[#DBEAFE] rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#0B82F0]/20">
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#0B82F0] to-[#1976D2] rounded"></div>
                    <div className="w-1 h-4 bg-gradient-to-b from-[#0B82F0] to-[#1976D2] rounded"></div>
                    <div className="w-1 h-5 bg-gradient-to-b from-[#0B82F0] to-[#1976D2] rounded"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                  Prioritize and manage tasks effectively
                </h3>
                <p className="text-[#6B7280] text-sm">
                  Focus on what matters most without the need for constant
                  check-ins.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] rounded-lg flex items-center justify-center mx-auto mb-4 border border-[#10B981]/20">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                  Hold everyone accountable
                </h3>
                <p className="text-[#6B7280] text-sm">
                  Track progress and ensure accountability without the need for
                  constant check-ins.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Large Demo Image Section */}
          <AnimatedSection delay={0.4}>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#E3EAFC] to-[#C7D2FE] rounded-3xl p-8 lg:p-12 border border-[#1E3A8A]/10">
                <div className="relative">
                  <Image
                    src="/landingdemo.webp"
                    alt="rudrERP Complete Dashboard Overview"
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-2xl shadow-2xl border border-white/50"
                  />
                  {/* Calendar indicator */}
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl border border-[#E3EAFC]">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1F2937]">
                        20
                      </div>
                      <div className="text-sm text-[#6B7280]">Dec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Features Grid */}

          {/* Design Features Section */}
          <AnimatedSection delay={0.6} className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#E3EAFC] to-[#DBEAFE] text-[#1E3A8A] text-sm font-semibold mb-8 border border-[#1E3A8A]/20 shadow-lg shadow-[#1E3A8A]/10">
                Design Excellence
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1F2937] mb-4">
                Beautiful & Interactive Design
              </h3>
              <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                Experience our modern, responsive interface with stunning visual
                effects and smooth interactions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <GlowCard
                glowColor="blue"
                size="md"
                customSize={true}
                className="w-64 h-80"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E3EAFC] to-[#DBEAFE] rounded-lg flex items-center justify-center mb-4 border border-[#0B82F0]/20">
                      <BarChart3 className="h-6 w-6 text-[#0B82F0]" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Analytics Dashboard
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Real-time insights with beautiful charts and interactive
                      data visualization.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard
                glowColor="purple"
                size="md"
                customSize={true}
                className="w-64 h-80"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] rounded-lg flex items-center justify-center mb-4 border border-[#F26B0A]/20">
                      <TrendingUp className="h-6 w-6 text-[#F26B0A]" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Growth Tracking
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Monitor your business growth with advanced metrics and
                      performance indicators.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard
                glowColor="green"
                size="md"
                customSize={true}
                className="w-64 h-80"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0] rounded-lg flex items-center justify-center mb-4 border border-[#10B981]/20">
                      <Award className="h-6 w-6 text-[#10B981]" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Award-Winning UI
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Experience our premium interface design that sets new
                      standards in usability.
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Keep Everything in One Place Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
              Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Keep everything in one place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forget complex project management tools.
            </p>
          </AnimatedSection>

          {/* Feature Cards with Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Seamless Collaboration
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Work together with your team effortlessly, share tasks and
                    update progress in real-time.
                  </p>
                  <div className="relative">
                    <Image
                      src="/landingdemo.webp"
                      alt="Collaboration features"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Time Management Tools
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Optimize your time with integrated tools for timers,
                    reminders and schedules.
                  </p>
                  <div className="relative">
                    <Image
                      src="/landingdemo.webp"
                      alt="Time management tools"
                      width={400}
                      height={250}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Advanced task tracking
                </h3>
                <p className="text-gray-600 mb-6">
                  Keep track of yourself and your entire team and web
                  productivity.
                </p>
                <div className="relative">
                  <Image
                    src="/landingdemo.webp"
                    alt="Advanced task tracking"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customizable Workspaces
                </h3>
                <p className="text-gray-600 mb-6">
                  Create personalized workspaces that fit your team&apos;s
                  unique workflow and preferences.
                </p>
                <div className="relative">
                  <Image
                    src="/landingdemo.webp"
                    alt="Customizable workspaces"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Testimonial Section - Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="mb-8">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                &ldquo;rudrERP is helping our company to decrease operational
                expenses and turnaround time, while increasing compliance,
                resource allocation and effectiveness of our business
                management.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Caroline Robertson
                </div>
                <div className="text-gray-600">Product Manager at TechFlow</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Stats Section - Redesigned */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection delay={0.1}>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                  2021
                </div>
                <div className="text-gray-600">Founded</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                  50K+
                </div>
                <div className="text-gray-600">Happy Users</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                  1K+
                </div>
                <div className="text-gray-600">Growing Business</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section - Redesigned */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
