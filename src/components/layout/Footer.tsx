'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const footerSections = [
    {
      title: 'SAP Solutions',
      links: [
        { name: 'ERP Implementation', href: '#services' },
        { name: 'System Integration', href: '#integration' },
        { name: 'Data Migration', href: '/migration' },
        { name: 'Custom Development', href: '/development' },
        { name: 'Cloud Solutions', href: '/cloud' },
        { name: 'Support & Maintenance', href: '/support' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { name: 'Manufacturing', href: '/manufacturing' },
        { name: 'Retail & Distribution', href: '/retail' },
        { name: 'Financial Services', href: '/finance' },
        { name: 'Healthcare', href: '/healthcare' },
        { name: 'Energy & Utilities', href: '/energy' },
        { name: 'Public Sector', href: '/public' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Implementation Guide', href: '/guide' },
        { name: 'Best Practices', href: '/practices' },
        { name: 'Case Studies', href: '/cases' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'SAP Certification', href: '/certification' },
        { name: 'Knowledge Base', href: '/knowledge' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About SAPIntegrator', href: '/about' },
        { name: 'Our Expertise', href: '/expertise' },
        { name: 'Partnership Program', href: '/partners' },
        { name: 'Careers', href: '/careers' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sapintegrator' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/sapintegrator' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/sapintegrator' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sapintegrator' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sapintegrator' },
  ];

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">S</span>
                </div>
                <span className="font-bold text-xl text-foreground">SAPIntegrator</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming businesses through seamless SAP ERP integration. With over 15 years of
                expertise, we deliver enterprise solutions that drive operational excellence and
                digital transformation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">solutions@sapintegrator.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 742-3477</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Enterprise Plaza, 2500 Technology Dr</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">SAP Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button
                  size="sm"
                  className="px-3 bg-primary hover:bg-primary/90"
                  onClick={handleNewsletterSignup}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get monthly SAP updates, implementation tips, and industry insights. Unsubscribe
                anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SAPIntegrator. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Certified SAP Partner <Heart className="size-3 text-primary fill-current" />
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/compliance"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              SOC 2 Compliance
            </Link>
            <Link
              href="/security"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Data Security
            </Link>
            <Link
              href="/gdpr"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              GDPR Compliance
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
