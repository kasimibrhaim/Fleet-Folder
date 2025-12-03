export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3 max-w-sm">
            <p className="text-sm font-semibold">FleetFolder</p>
            <p className="text-sm text-muted-foreground">
              Compliance, documents, and detention claims in one simple workspace
              for small and mid-size trucking companies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-medium text-foreground">Product</p>
              <ul className="space-y-1">
                <li>Driver files</li>
                <li>Equipment records</li>
                <li>Detention resolver</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">Company</p>
              <ul className="space-y-1">
                <li>Pricing</li>
                <li>Support</li>
                <li>Roadmap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} FleetFolder. All rights reserved.</p>
          <p>Built for carriers with 1–50 trucks.</p>
        </div>
      </div>
    </footer>
  );
}
