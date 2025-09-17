'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Database,
  Settings,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart3,
  Workflow,
} from 'lucide-react';

export default function Services() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const services = [
    {
      id: 'sap-implementation',
      title: 'SAP S/4HANA Implementation',
      description: 'Complete SAP S/4HANA deployment with minimal business disruption',
      longDescription:
        'Our certified SAP consultants guide your organization through a seamless S/4HANA implementation, ensuring optimal configuration for your industry-specific requirements while maintaining business continuity throughout the transition.',
      icon: Database,
      benefits: [
        'Greenfield and brownfield implementation approaches',
        'Industry-specific best practices integration',
        'Real-time analytics and reporting setup',
        'Mobile-ready user experience configuration',
      ],
      pricing: 'Starting at $150,000',
      timeline: '6-18 months implementation',
      featured: true,
      badge: 'Enterprise Ready',
    },
    {
      id: 'system-integration',
      title: 'Enterprise System Integration',
      description: 'Seamless integration between SAP and third-party applications',
      longDescription:
        'Connect your SAP ecosystem with CRM, e-commerce, manufacturing, and financial systems. Our integration specialists ensure data consistency and process automation across your entire technology stack.',
      icon: Workflow,
      benefits: [
        'API-first integration architecture',
        'Real-time data synchronization',
        'Custom middleware development',
        'Legacy system modernization',
      ],
      pricing: 'Project-based from $25,000',
      timeline: '8-16 weeks per integration',
    },
    {
      id: 'cloud-migration',
      title: 'SAP Cloud Migration Services',
      description: 'Secure migration to SAP Cloud with optimized performance',
      longDescription:
        'Transition your on-premise SAP environment to the cloud with our proven migration methodology. We ensure security, compliance, and performance optimization while reducing total cost of ownership.',
      icon: Cloud,
      benefits: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategies',
        'Cloud security and compliance setup',
        'Performance optimization and monitoring',
      ],
      pricing: 'Starting at $75,000',
      timeline: '3-8 months migration',
      badge: 'Cloud Certified',
    },
    {
      id: 'support-optimization',
      title: 'SAP Support & Optimization',
      description: '24/7 support with continuous system performance enhancement',
      longDescription:
        'Maximize your SAP investment with our comprehensive support services. From incident resolution to proactive optimization, we ensure your SAP systems deliver peak performance and business value.',
      icon: Settings,
      benefits: [
        '24/7 technical support coverage',
        'Proactive system health monitoring',
        'Performance tuning and optimization',
        'User training and change management',
      ],
      pricing: 'Monthly retainer from $8,000',
      timeline: 'Ongoing partnership',
      badge: 'Mission Critical',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            SAP Integration Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise SAP Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Your Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP ERP integration services designed to transform your business
            operations and drive digital excellence
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.id}>
                <div
                  className={`
                  group relative overflow-hidden rounded-2xl
                  ${
                    service.featured
                      ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8'
                      : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}
                >
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${
                          service.featured
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary'
                        }
                      `}
                      >
                        <Icon className="size-7" />
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        {service.badge && (
                          <Badge variant={service.featured ? 'default' : 'secondary'}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-primary text-primary" />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">{service.description}</p>

                      {service.longDescription && (
                        <p className="text-muted-foreground">{service.longDescription}</p>
                      )}

                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">{service.pricing}</span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">{service.timeline}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          variant={service.featured ? 'default' : 'outline'}
                          className="group/btn"
                          onClick={handlePrimaryAction}
                        >
                          Request SAP Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between items */}
                {index < services.length - 1 && <Separator className="my-8" />}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your SAP Environment?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our certified SAP consultants are ready to assess your current systems and design a
            tailored integration strategy for your enterprise.
          </p>
          <Button size="lg" onClick={handleSecondaryAction}>
            Schedule SAP Assessment
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
