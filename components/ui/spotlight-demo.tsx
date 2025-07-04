import { GlowCard } from "@/components/ui/spotlight-card";

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  );
}

export function CustomGlowCards() {
  return (
    <div className="min-h-screen bg-black p-8 flex flex-wrap justify-center items-center gap-8">
      <GlowCard
        glowColor="blue"
        size="md"
        customSize={true}
        className="w-64 h-80"
      >
        <div className="text-white p-4">
          <h3 className="text-xl font-bold mb-2">Blue Glow</h3>
          <p className="text-gray-300">Beautiful blue spotlight effect</p>
        </div>
      </GlowCard>

      <GlowCard glowColor="purple" size="lg">
        <div className="text-white p-4">
          <h3 className="text-xl font-bold mb-2">Purple Glow</h3>
          <p className="text-gray-300">Stunning purple lighting</p>
        </div>
      </GlowCard>

      <GlowCard glowColor="green" size="sm">
        <div className="text-white p-4">
          <h3 className="text-lg font-bold mb-2">Green Glow</h3>
          <p className="text-gray-300">Vibrant green effect</p>
        </div>
      </GlowCard>
    </div>
  );
}
