"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Users } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 mesh-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-gradient/40 bg-white/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-6 glass-card">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
          Built for fleets with 1–50 trucks in the USA
        </div>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight gradient-emerald-text">
          One workspace for{" "}
          <span className="whitespace-nowrap">drivers, equipment,</span>{" "}
          & detention.
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          FleetFolder replaces paper folders, spreadsheets, and scattered apps with
          an audit-ready hub for driver files, equipment documents, and detention
          claims—built specifically for small trucking fleets.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/sign-up">
            <Button className="gradient-emerald text-white px-7 py-2.5 text-sm md:text-base rounded-xl shadow-lg hover-scale hover-glow">
              Start free — no card
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/detention-demo">
            <Button
              variant="outline"
              className="px-7 py-2.5 text-sm md:text-base rounded-xl hover-lift"
            >
              Try detention claim demo
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left text-xs md:text-sm">
          <div className="glass-card rounded-xl p-4 flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-secondary px-2.5 py-2">
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Driver qualification files</p>
              <p className="text-muted-foreground mt-1">
                CDL, med card, MVRs and signed policies in one digital folder per
                driver.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 flex items-start gap-3">
            <div className="mt-0.5 rounded-lg bg-secondary px-2.5 py-2">
              <Truck className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Equipment & inspections</p>
              <p className="text-muted-foreground mt-1">
                Titles, registrations and inspection reminders for trucks & trailers.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 flex items-start gap-3 sm:col-span-1 col-span-full">
            <div className="mt-0.5 rounded-lg bg-secondary px-2.5 py-2">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Audit & billing ready</p>
              <p className="text-muted-foreground mt-1">
                Organized documents so DOT audits and detention claims feel routine,
                not chaotic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
