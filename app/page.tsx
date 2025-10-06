import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Award,
  Users,
  BookOpen,
  Target,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6 relative">
        {/* Logo badge (subtle, centered on md) */}
        <div className="hidden lg:block absolute top-4 left-4 md:top-1/2 md:left-6 md:-translate-y-1/2 z-10 bg-card/60 rounded-md p-1 ring-1 ring-primary/20">
          <Image
            src="/logo.jpg"
            alt="MRCP PACES BD Logo"
            width={110}
            height={70}
            className="drop-shadow-lg rounded-sm"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="font-semibold text-lg">2.5K+ Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold text-lg">Medical & Health</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="font-semibold text-lg">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[33vh] overflow-hidden">
        <Image
          src="/banner.jpg"
          alt="MRCP PACES BD - Most Trusted Course"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
      </section>

      {/* Achievement Highlight (compact, pill-style) */}
      <section className="py-4 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 bg-muted px-4 py-2 rounded-full shadow-sm">
                <div className="flex items-center justify-center bg-secondary text-secondary-foreground rounded-full p-2">
                  <Award className="h-5 w-5" />
                </div>

                <div className="text-left">
                  <p className="text-sm md:text-base font-semibold leading-tight">
                    65 Candidates Passed — RECORD in One Year
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Proven coaching · Mock exams · Focused mentorship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - redesigned two-column layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left: About + Services (wider) */}
            <div className="md:col-span-2 space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                      src="/logo.jpg"
                      alt="MRCP PACES"
                      width={420}
                      height={280}
                      className="rounded-md object-cover mx-auto p-4"
                    />
                  </div>

                  <div className="w-full md:w-2/3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary uppercase">
                      About MRCP PACES BD
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MRCP PACES BD is a premier medical training institute
                      specializing in MRCP PACES preparation in Bangladesh. We
                      focus on practical clinical skills, mock exams, and
                      one-on-one mentorship to help candidates succeed.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Expert mentorship and guidance",
                        "Quality-focused training",
                        "Proven track record of success",
                        "Comprehensive PACES prep",
                        "Mock exams & practice",
                        "Personalised feedback",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary uppercase">
                    Our Services
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "MRCP PACES Exam Prep",
                      "Clinical Skills Training",
                      "Mock Examinations",
                      "Individual Mentorship",
                      "Group Study Sessions",
                      "Exam Strategies & Techniques",
                      "Continuous Support",
                      "Expert Consultation",
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact (sticky) + small stats/testimonial */}
            <aside className="md:col-span-1">
              <Card className="shadow-lg hover:shadow-xl md:sticky md:top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 uppercase">Contact</h3>
                  <p className="text-muted-foreground mb-4">
                    Get in touch for mentorship, schedules, and bookings.
                  </p>

                  <div className="space-y-3">
                    <a
                      href="tel:+8801711709436"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="font-medium">+880 1711-709436</span>
                    </a>

                    <a
                      href="mailto:info@mrcppacesbd.com"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="font-medium break-all">
                        info@mrcppacesbd.com
                      </span>
                    </a>

                    <a
                      href="https://www.facebook.com/people/MRCP-PACES-BD/61557073753549/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                      <span className="font-medium">Facebook Page</span>
                    </a>

                    <a
                      // href="https://www.google.com/maps/search/?api=1&query=House+%23+B-31%2F6,+Jaleshwar,+Aricha+Road,+Savar,+Dhaka-1340"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                    >
                      <MapPin className="h-5 w-5 shrink-0 text-primary" />
                      <span className="font-medium break-words">
                        House # B-31/6, Jaleshwar, Aricha Road, Savar,
                        Dhaka-1340
                      </span>
                    </a>
                  </div>

                  <div className="mt-4">
                    <Button size="sm" asChild>
                      <a href="tel:+8801711709436">Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Excel in Your MRCP PACES?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join our successful mentorship program and be part of our
              record-breaking achievements!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="tel:+8801711709436">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base"
              >
                <a href="mailto:info@mrcppacesbd.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base bg-transparent"
              >
                <a
                  href="https://www.facebook.com/people/MRCP-PACES-BD/61557073753549/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Follow Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium mb-2">MRCP PACES BD</p>
          <p className="text-sm opacity-90 italic">
            "Believe on Quality not Quantity"
          </p>
        </div>
      </footer>
    </main>
  );
}
