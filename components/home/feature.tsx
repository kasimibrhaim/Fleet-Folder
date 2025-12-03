"use client";

import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Editable DQ Files",
    description:
      "Keep CDL, medical cards, MVRs, and safety documents in one organized driver folder that’s easy to update.",
    icon: FileText,
  },
  {
    title: "Driver Onboarding Made Simple",
    description:
      "Collect applications and required documents online so you can qualify and hire drivers without paperwork delays.",
    icon: Users,
  },
  {
    title: "Equipment & Lease Documents",
    description:
      "Store titles, registrations, 2290s, and lease agreements for each truck and trailer in one clean record.",
    icon: Truck,
  },
  {
    title: "Document Expiry Reminders",
    description:
      "Automatically track expiration dates for driver and vehicle files so you never lose compliance due to missed renewals.",
    icon: ShieldCheck,
  },
  {
    title: "Detention Invoice Builder",
    description:
      "Generate clean detention claim PDFs using arrival times, departure times, and BOL details your customers can’t ignore.",
    icon: ClipboardCheck,
  },
  {
    title: "Outstanding Claim Tracking",
    description:
      "See which customers still owe you detention money and follow up without digging through emails or spreadsheets.",
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 mesh-background-subtle">
      <div className="container max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-emerald-text">
            All your fleet documents in one organized workspace.
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            FleetFolder keeps your driver files, equipment documents, and detention
            claims in one place—easy to update, easy to find, and ready when you need them.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover-lift"
            >
              <div className="mb-4 rounded-full bg-secondary px-3 py-3 inline-flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
