import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, Award, Users, BookOpen, Target, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-svM4f5G5vnjTt8a4H8c3A2V7xGV6F1.jpg"
          alt="MRCP PACES BD - Most Trusted Course"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />

        {/* Logo overlay */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-TwCDPEJaJqpxWg6nzhFBo8ksgC2Xc7.jpg"
            alt="MRCP PACES BD Logo"
            width={150}
            height={90}
            className="drop-shadow-2xl"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-6">
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
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-lg">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Great Achievement
            </h2>
            <p className="text-2xl md:text-3xl font-semibold">65 Candidates Passed (RECORD) in ONE YEAR! 🏆</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* About Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-[family-name:var(--font-playfair)]">
                  About MRCP PACES BD
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  MRCP PACES BD is a premier medical training institute specializing in MRCP PACES (Membership of the
                  Royal College of Physicians - Practical Assessment of Clinical Examination Skills) preparation in
                  Bangladesh.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is to provide high-quality medical education and mentorship to help medical professionals
                  excel in their MRCP PACES examinations.
                </p>

                <div className="space-y-3">
                  {[
                    "Expert mentorship and guidance",
                    "Quality-focused training approach",
                    "Proven track record of success",
                    "Comprehensive PACES preparation",
                    "Professional medical coaching",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-[family-name:var(--font-playfair)]">
                  Our Services
                </h2>
                <div className="space-y-3">
                  {[
                    "MRCP PACES Examination Preparation",
                    "Clinical Skills Training",
                    "Mock Examinations and Practice Sessions",
                    "Individual Mentorship Programs",
                    "Group Study Sessions",
                    "Expert Guidance and Consultation",
                    "Continuous Support and Follow-up",
                    "Examination Strategies and Techniques",
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-[family-name:var(--font-playfair)]">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+8801711709436"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">+880 1711-709436</span>
                  </a>

                  <a
                    href="mailto:mrcppacesbd@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium break-all">mrcppacesbd@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">Always Open</span>
                  </div>

                  <a
                    href="https://www.facebook.com/people/MRCP-PACES-BD/61557073753549/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <Facebook className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Facebook Page</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)] text-balance">
              Ready to Excel in Your MRCP PACES?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join our successful mentorship program and be part of our record-breaking achievements!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="text-base">
                <a href="tel:+8801711709436">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button size="lg" variant="secondary" asChild className="text-base">
                <a href="mailto:mrcppacesbd@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild className="text-base bg-transparent">
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
          <p className="text-sm opacity-90 italic">"Believe on Quality not Quantity"</p>
        </div>
      </footer>
    </main>
  )
}
