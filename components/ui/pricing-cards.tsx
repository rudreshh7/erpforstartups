import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge className="bg-gradient-to-r from-[#E3EAFC] to-[#DBEAFE] text-[#1E3A8A] border border-[#1E3A8A]/20">
            Pricing
          </Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-bold text-[#1F2937]">
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-[#6B7280] max-w-xl text-center">
              Choose the perfect plan for your business needs and start growing
              today.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 max-w-5xl gap-8">
            {/* Startup Plan */}
            <Card className="w-full rounded-xl border border-[#E3EAFC] hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-semibold text-[#1F2937]">
                    Startup
                  </span>
                </CardTitle>
                <CardDescription className="text-[#6B7280]">
                  Perfect for small businesses and startups getting started with
                  ERP solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-[#1F2937]">
                      $49
                    </span>
                    <span className="text-sm text-[#6B7280]">/ month</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Up to 5 users
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Perfect for small teams starting out.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Basic analytics
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Essential insights to track your progress.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Email support
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Get help when you need it most.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-4 border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#E3EAFC]"
                  >
                    Get Started <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Growth Plan - Featured */}
            <Card className="w-full shadow-2xl rounded-xl border-2 border-[#F26B0A]/20 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#F26B0A] to-[#FF5A1A] text-white border-0">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-semibold text-[#1F2937]">
                    Growth
                  </span>
                </CardTitle>
                <CardDescription className="text-[#6B7280]">
                  Ideal for growing businesses that need advanced features and
                  scalability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-[#1F2937]">
                      $99
                    </span>
                    <span className="text-sm text-[#6B7280]">/ month</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Up to 50 users
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Scale your team as you grow.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Advanced analytics
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Deep insights and custom reports.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Priority support
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Fast response times when you need help.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="gap-4 bg-gradient-to-r from-[#F26B0A] via-[#FF5A1A] to-[#EA4335] hover:from-[#EA4335] hover:via-[#F26B0A] hover:to-[#FF5A1A] text-white shadow-lg shadow-[#F26B0A]/25">
                    Get Started <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="w-full rounded-xl border border-[#E3EAFC] hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-semibold text-[#1F2937]">
                    Enterprise
                  </span>
                </CardTitle>
                <CardDescription className="text-[#6B7280]">
                  Custom solutions for large organizations with complex
                  requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <p className="flex flex-row items-center gap-2 text-xl">
                    <span className="text-4xl font-bold text-[#1F2937]">
                      Custom
                    </span>
                    <span className="text-sm text-[#6B7280]">pricing</span>
                  </p>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Unlimited users
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          No limits on your team size.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          Custom integrations
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Tailored solutions for your workflow.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-[#10B981]" />
                      <div className="flex flex-col">
                        <p className="text-[#1F2937] font-medium">
                          24/7 dedicated support
                        </p>
                        <p className="text-[#6B7280] text-sm">
                          Always available when you need us.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-4 border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#E3EAFC]"
                  >
                    Contact Sales <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
