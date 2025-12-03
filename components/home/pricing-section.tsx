import { PricingTable } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

interface PricingSectionProps {
  compact?: boolean;
}

export function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Neutral Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-900">
              Simple, <span className="bg-linear-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="flex justify-center w-full">
            <div className={compact ? "max-w-4xl w-full" : "max-w-5xl w-full"}>
              <PricingTable
                appearance={{
                  variables: {
                    colorPrimary: "#18181b", // Zinc-900 for checkmarks/accents
                    colorText: "#18181b",
                  },
                  elements: {
                    pricingTableCardHeader: {
                      background: "linear-gradient(180deg, rgb(24 24 27), rgb(39 39 42))", // Zinc-950 to Zinc-800
                      color: "white",
                      borderRadius: "1rem 1rem 0 0",
                      padding: compact ? "2rem" : "2.5rem",
                      borderBottom: "1px solid rgb(63 63 70)", // Zinc-700
                    },
                    pricingTableCardTitle: {
                      fontSize: compact ? "1.75rem" : "2.25rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "0.5rem",
                      letterSpacing: "-0.02em",
                    },
                    pricingTableCardDescription: {
                      fontSize: compact ? "0.95rem" : "1.1rem",
                      color: "rgb(161 161 170)", // Zinc-400
                      fontWeight: "400",
                    },
                    pricingTableCardFee: {
                      color: "white",
                      fontWeight: "700",
                      fontSize: compact ? "2.5rem" : "3rem",
                      letterSpacing: "-0.03em",
                    },
                    pricingTableCardFeePeriod: {
                      color: "rgb(161 161 170)", // Zinc-400
                      fontSize: "1.1rem",
                      fontWeight: "400",
                    },
                    pricingTableCard: {
                      borderRadius: "1rem",
                      border: "1px solid rgb(228 228 231)", // Zinc-200
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)", // Subtle black shadow
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                      background: "white",
                    },
                    pricingTableCardBody: {
                      padding: compact ? "2rem" : "2.5rem",
                      background: "white",
                    },
                    pricingTableCardFeatures: {
                      marginTop: "2rem",
                      gap: "1rem",
                    },
                    pricingTableCardFeature: {
                      fontSize: compact ? "0.95rem" : "1.05rem",
                      padding: "0.5rem 0",
                      fontWeight: "500",
                      color: "rgb(82 82 91)", // Zinc-600
                    },
                    pricingTableCardButton: {
                      marginTop: "2rem",
                      borderRadius: "0.5rem",
                      fontWeight: "600",
                      padding: "1rem 2.5rem",
                      transition: "all 0.2s ease",
                      fontSize: "1rem",
                      background: "rgb(24 24 27)", // Zinc-900
                      color: "white",
                      border: "1px solid rgb(24 24 27)",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    },
                  },
                }}
                fallback={
                  <div className="flex items-center justify-center py-20">
                    <div className="text-center space-y-4 bg-white p-12 rounded-2xl border border-zinc-200 shadow-sm">
                      <Loader2 className="h-10 w-10 animate-spin text-zinc-900 mx-auto" />
                      <p className="text-zinc-500 text-sm font-medium">Loading pricing options...</p>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}