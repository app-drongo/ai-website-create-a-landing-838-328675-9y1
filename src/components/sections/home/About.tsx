'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const values = [
    {
      icon: Target,
      title: 'Strategic Excellence',
      description:
        'We deliver comprehensive SAP integration strategies that align with your business objectives and drive measurable ROI across all enterprise functions.',
    },
    {
      icon: Lightbulb,
      title: 'Technical Innovation',
      description:
        'Leveraging cutting-edge SAP technologies including S/4HANA, Cloud Platform, and AI-powered analytics to future-proof your enterprise systems.',
    },
    {
      icon: Heart,
      title: 'Partnership Focus',
      description:
        'Your digital transformation success is our priority. We provide dedicated support throughout every phase of your SAP journey.',
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description:
        "From multinational corporations to growing enterprises, we've successfully implemented SAP solutions across diverse industries worldwide.",
    },
  ];

  const stats = [
    { value: '2015', label: 'SAP Partner Since', icon: Award },
    { value: '500+', label: 'Successful Implementations', icon: Users },
    { value: '99.8%', label: 'Project Success Rate', icon: TrendingUp },
    { value: '35+', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Marcus Weber',
      role: 'SAP Practice Director',
      image: 'MW',
      bio: 'Former SAP AG consultant. 20+ years implementing enterprise solutions across Fortune 500 companies.',
    },
    {
      name: 'Priya Sharma',
      role: 'S/4HANA Lead Architect',
      image: 'PS',
      bio: 'SAP-certified expert in digital core transformations. Specialized in complex system migrations and integrations.',
    },
    {
      name: 'Andreas Mueller',
      role: 'Integration Solutions Manager',
      image: 'AM',
      bio: 'Expert in SAP Cloud Platform and API management. Led 200+ successful cloud integration projects.',
    },
    {
      name: 'Jennifer Liu',
      role: 'Change Management Director',
      image: 'JL',
      bio: 'Organizational transformation specialist. Ensures seamless user adoption and business process optimization.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30">
            SAP Integration Excellence
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Enterprises with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP Integration Mastery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are SAP integration specialists dedicated to delivering seamless ERP transformations
            that optimize business processes, enhance operational efficiency, and drive sustainable
            growth.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our SAP Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015 by seasoned SAP consultants, we recognized the critical need for
                specialized expertise in enterprise system integration and digital transformation
                initiatives.
              </p>
              <p>
                After witnessing countless organizations struggle with complex SAP implementations,
                inconsistent data flows, and failed integration projects, we established our
                practice to deliver guaranteed success.
              </p>
              <p>
                Today, we're the trusted SAP integration partner for over 500 enterprises globally,
                delivering transformative solutions that streamline operations and accelerate
                business growth.
              </p>
            </div>
            <Button onClick={handlePrimaryAction} className="group bg-primary hover:bg-primary/90">
              Explore Our SAP Solutions
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every SAP integration should deliver measurable business value, not just
                      technical connectivity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Marcus Weber, SAP Practice Director
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-primary/20 hover:border-primary/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Principles</h3>
            <p className="text-muted-foreground">
              The foundational values that drive our SAP integration methodology and client
              partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">SAP Integration Experts</h3>
            <p className="text-muted-foreground">
              Our certified SAP professionals bring decades of enterprise integration experience to
              deliver exceptional results for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleSecondaryAction}
              variant="outline"
              className="group border-primary/30 hover:border-primary"
            >
              Meet Our Full SAP Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Their SAP S/4HANA migration transformed our operations completely. What seemed
                impossible was delivered flawlessly, on time and within budget. Our efficiency
                improved by 40%."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold">
                  RK
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Klein</div>
                  <div className="text-sm text-muted-foreground">
                    CIO, Global Manufacturing Corp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
