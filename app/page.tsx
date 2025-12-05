"use client"

import { ArrowRight, Terminal, FileText, Database, Linkedin } from "lucide-react"

// Simple reusable button component
const Button = ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden font-sans">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-mono text-sm font-bold">⚙</span>
            </div>
            <span className="font-mono text-lg font-bold tracking-wide">BLUE COLLAR AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#engagement" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Engagement
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          <Button>Book Discovery</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-zinc-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-card border border-primary/30 rounded-sm">
            <span className="text-xs font-mono text-primary">SYSTEM_STATUS: OPTIMIZED</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
            <span className="text-foreground">AUTOMATING THE</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-zinc-400 bg-clip-text text-transparent">
              BORING WORK THAT KILLS EBITDA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            We deploy secure, fixed-price AI automation for Private Equity Portfolio Companies. No strategy decks. Just
            code that cuts SG&A.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-auto text-base px-8 py-6 gap-2">
              BOOK DISCOVERY CALL
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
            STOP OVERPAYING FOR SLOW DEPLOYMENTS. PAY FOR FAST OUTCOMES.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">The Bottleneck</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your OpEx is bloated. High-paid staff are doing low-value work. Data entry, manual QA, and copy-pasting
                between legacy systems is killing your margins.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">The Fix</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't sell open-ended consulting hours. We execute 14-day automation sprints. We clean the data, build the
                pipeline, and hand over the keys. You own the asset forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ENGAGEMENT MODEL */}
      <section id="engagement" className="w-full py-12 md:py-24 lg:py-32 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              The Engagement Model
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              No retainers. No hourly billing. Just results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CARD 1: THE DIAGNOSTIC */}
            <div className="flex flex-col border border-zinc-800 bg-zinc-900 p-8 shadow-sm rounded-none">
              <h3 className="text-2xl font-bold uppercase text-white mb-2">The Diagnostic</h3>
              <div className="text-[#3878F5] font-mono text-xl mb-6">FREE / $2,500</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-zinc-300">
                  <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  Audit one department workflow
                </li>
                <li className="flex items-start text-zinc-300">
                   <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  Identify 3 high-ROI opportunities
                </li>
                 <li className="flex items-start text-zinc-300">
                   <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  Delivery: 48 Hours
                </li>
              </ul>
              
              <div className="mt-auto pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest">IDEAL FOR: ASSESSMENT</p>
              </div>
            </div>

            {/* CARD 2: THE SPRINT */}
            <div className="flex flex-col border-2 border-[#3878F5] bg-zinc-900 p-8 shadow-sm rounded-none relative">
              <div className="absolute top-0 right-0 bg-[#3878F5] text-black text-xs font-bold px-3 py-1 uppercase font-mono">
                Most Popular
              </div>
              
              <h3 className="text-2xl font-bold uppercase text-white mb-2">The Sprint</h3>
              <div className="text-[#3878F5] font-mono text-xl mb-6">$20,000 FIXED FEE</div>
              
               <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start text-zinc-300">
                  <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  One workflow automated end-to-end
                </li>
                <li className="flex items-start text-zinc-300">
                   <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  Full Code Handoff (You own it)
                </li>
                 <li className="flex items-start text-zinc-300">
                   <span className="mr-3 text-[#3878F5] font-bold">/</span>
                  Guarantee: We hit the metric or you don't pay
                </li>
              </ul>
              
               <div className="mt-auto pt-6 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest">IDEAL FOR: EXECUTION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6 border-t border-border bg-gradient-to-b from-card/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Sprint Examples</h2>
            <p className="text-muted-foreground text-lg">
              We don't do "general AI". We solve specific ops problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card border border-border rounded-sm hover:border-primary/50 transition-all duration-300 hover:bg-card/80"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-mono text-primary">{service.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Blue Collar AI</h2>
            <p className="text-muted-foreground text-lg">Built by engineers who understand Private Equity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{capability.title}</h3>
                  <p className="text-muted-foreground text-sm">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-20 px-6 border-t border-border bg-gradient-to-b from-transparent to-card/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Deployed Securely in Your Tenant</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do not host your data. We build using{" "}
              <span className="text-foreground font-mono">'Managed Solutions'</span> inside your existing cloud infrastructure
              (Azure, AWS, or Google Cloud).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {architectureKeyPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border/50 rounded-sm hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  </div>
                  <p className="font-mono text-sm font-bold text-foreground">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a diagnostic call to discuss your portfolio's efficiency gaps.
          </p>
          <Button className="h-auto text-base px-8 py-6">
            BOOK DISCOVERY CALL
          </Button>
          <p className="mt-6 text-muted-foreground text-sm font-mono">
            Or contact us directly: partners@bluecollarailabs.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="font-mono text-sm font-bold mb-2">BLUE COLLAR AI</div>
              <p className="text-xs text-muted-foreground">Operational automation for Private Equity portfolios.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-muted-foreground">
              <div className="flex gap-4">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              </div>
              <div className="flex gap-4 items-center pl-0 md:pl-6 md:border-l border-border/50">
                 <p>&copy; 2025 Blue Collar AI.</p>
                <a href="#" className="hover:text-foreground transition-colors text-primary">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// DATA ARRAYS

const services = [
  {
    icon: Terminal,
    title: "THE REVENUE GRADER",
    description: "Automated QA for 100% of sales & support calls. Enforce methodology adherence without adding headcount to the management layer.",
    tag: "EST. $20k FIXED",
  },
  {
    icon: FileText,
    title: "THE PAPERWORK SHREDDER",
    description: "Automated extraction from PDFs (Invoices, BOLs, POs) directly into your ERP. Reduce AP errors by 90% and cut processing time.",
    tag: "EST. $20k FIXED",
  },
  {
    icon: Database,
    title: "THE OPS CONTROLLER",
    description: "Clean dirty CRM data and legacy inventory files. Predict stock-outs and reduce working capital requirements before exit.",
    tag: "SCOPE DEPENDENT",
  },
]

const capabilities = [
  {
    title: "Private Equity Fluent",
    description: "We understand EBITDA, Hold Periods, and SG&A. We build to expand margins, not just to write code.",
  },
  {
    title: "Enterprise-Grade Safety",
    description: "We deploy inside your existing cloud environment (Azure, AWS, or GCP). Zero data exfiltration. Your IT team stays in control.",
  },
  {
    title: "Zero Vendor Lock-In",
    description: "We are not a SaaS. We hand over the source code and IP. You own the asset forever.",
  },
  {
    title: "ROI Focused",
    description: "Every implementation is tied to a measurable business outcome (Hours Saved or Revenue Protected).",
  },
  {
    title: "Rapid Execution",
    description: "We skip the 6-month strategy decks. We use AI-accelerated development to deploy pilots in 14 days.",
  },
  {
    title: "Continuous Improvement",
    description: "Optional tuning retainers to ensure your models stay accurate as your business data evolves.",
  },
]

const architectureKeyPoints = ["100% Data Sovereignty", "SOC2 Compliant Workflows", "No Vendor Lock-in"]