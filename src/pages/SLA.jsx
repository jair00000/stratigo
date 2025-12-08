import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const SLA = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Helmet>
        <title>Service Level Agreement (SLA) | Stratigo Hosting Services</title>
        <meta 
          name="description" 
          content="Review Stratigo's Service Level Agreement for Managed VPS Hosting - uptime guarantees, support commitments, and service standards." 
        />
        <meta 
          name="keywords" 
          content="Stratigo SLA, service level agreement, VPS uptime guarantee, hosting reliability, managed hosting support" 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-4 sm:px-6 md:px-12">
            <Heading level={1} variant="hero" className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
              Service Level Agreement
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
              Uptime Guarantee & Service Commitments
            </Text>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-xs sm:text-sm md:text-base">
              Last Updated: {lastUpdated}
            </Text>
          </div>
        </div>
      </section>

      {/* SLA Content */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-5 sm:p-6 md:p-8 lg:p-12">
              
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-lg text-gray-700 leading-relaxed mb-4">
                  This Service Level Agreement ("SLA") applies to Stratigo's Managed VPS Hosting Services and defines our commitment to service availability, performance, and support for active hosting clients.
                </Text>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This SLA is part of your hosting service agreement and applies only to services provided directly by Stratigo.
                </Text>
              </div>

              {/* 1. Service Availability Commitment */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  1. Service Availability Commitment
                </Heading>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-5 md:p-6 mb-3 sm:mb-4">
                  <div className="flex items-center mb-1.5 sm:mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-base sm:text-lg font-bold text-green-900">
                      99.9% Monthly Uptime Guarantee
                    </Text>
                  </div>
                  <Text className="text-sm sm:text-base text-green-800">
                    We commit to maintaining at least 99.9% uptime for your hosting service each calendar month, excluding scheduled maintenance.
                  </Text>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-navy mb-2 sm:mb-3">What This Means:</h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                        Maximum expected downtime: approximately 43 minutes per month
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                        Calculated monthly, not annually
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                        Measured from our internal monitoring systems
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2. Scheduled Maintenance */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  2. Scheduled Maintenance
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  Stratigo reserves the right to perform scheduled maintenance for system updates, security patches, and infrastructure improvements.
                </Text>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Advance Notice:</strong> At least 48 hours' notice for planned maintenance (when possible)
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Maintenance Window:</strong> Typically scheduled during low-traffic hours
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Emergency Maintenance:</strong> May be performed without advance notice for critical security or stability issues
                    </Text>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Text className="text-yellow-900 text-sm">
                    <strong>Note:</strong> Scheduled maintenance windows are excluded from uptime calculations.
                  </Text>
                </div>
              </div>

              {/* 3. Support Response Times */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  3. Support Response Times
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  Stratigo provides technical support during business hours. Response times are based on issue severity:
                </Text>
                
                <div className="space-y-4">
                  {/* Critical Issues */}
                  <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded mr-3">CRITICAL</span>
                      <Text className="font-bold text-red-900">Complete Service Outage</Text>
                    </div>
                    <Text className="text-red-800 text-sm">
                      <strong>Response Time:</strong> Within 2 hours (business hours) | Best effort outside business hours
                    </Text>
                  </div>

                  {/* High Priority */}
                  <div className="border-l-4 border-orange bg-orange-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded mr-3">HIGH</span>
                      <Text className="font-bold text-orange-900">Major Performance Issues</Text>
                    </div>
                    <Text className="text-orange-800 text-sm">
                      <strong>Response Time:</strong> Within 4 hours (business hours)
                    </Text>
                  </div>

                  {/* Medium Priority */}
                  <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded mr-3">MEDIUM</span>
                      <Text className="font-bold text-blue-900">General Technical Support</Text>
                    </div>
                    <Text className="text-blue-800 text-sm">
                      <strong>Response Time:</strong> Within 8 hours (business hours)
                    </Text>
                  </div>

                  {/* Low Priority */}
                  <div className="border-l-4 border-gray-400 bg-gray-50 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded mr-3">LOW</span>
                      <Text className="font-bold text-gray-900">General Inquiries & Requests</Text>
                    </div>
                    <Text className="text-gray-700 text-sm">
                      <strong>Response Time:</strong> Within 24 hours (business hours)
                    </Text>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Text className="text-blue-900">
                    <strong>Business Hours:</strong> Monday–Friday, 9:00 AM – 6:00 PM (Central Standard Time)
                  </Text>
                  <Text className="text-blue-800 text-sm mt-2">
                    Response times are measured from ticket submission during business hours. Tickets submitted outside business hours will be addressed on the next business day.
                  </Text>
                </div>
              </div>

              {/* 4. Service Credits */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  4. Service Credits for SLA Breach
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  If we fail to meet our 99.9% monthly uptime commitment, eligible clients may receive service credits according to the following schedule:
                </Text>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-navy text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Monthly Uptime Percentage</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Service Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3">99.0% – 99.8%</td>
                        <td className="border border-gray-300 px-4 py-3">10% of monthly hosting fee</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">95.0% – 98.9%</td>
                        <td className="border border-gray-300 px-4 py-3">25% of monthly hosting fee</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-4 py-3">Below 95.0%</td>
                        <td className="border border-gray-300 px-4 py-3">50% of monthly hosting fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <Text className="text-blue-900 font-medium mb-2">To Request a Service Credit:</Text>
                    <ul className="space-y-1 text-blue-800 text-sm ml-4">
                      <li>• Submit a written request to <a href="mailto:support@stratigo.io" className="text-electric hover:underline">support@stratigo.io</a> within 30 days of the incident</li>
                      <li>• Include details of the downtime experienced</li>
                      <li>• Credits are applied to your next monthly invoice</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <Text className="text-yellow-900 text-sm">
                      <strong>Important:</strong> Service credits are your sole remedy for SLA breaches. Credits cannot be redeemed for cash and do not apply to exclusions listed in this agreement.
                    </Text>
                  </div>
                </div>
              </div>

              {/* 5. SLA Exclusions */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  5. SLA Exclusions
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  This SLA does not apply to service interruptions caused by:
                </Text>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Scheduled maintenance performed according to Section 2
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Issues caused by client applications, scripts, or custom configurations
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Third-party service failures (DNS providers, CDN, payment processors, etc.)
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      DDoS attacks, cyber attacks, or malicious traffic targeting your site
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Force majeure events (natural disasters, power outages, internet backbone failures, etc.)
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Issues arising from suspended or terminated accounts
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Client's failure to follow recommended security practices or apply updates
                    </Text>
                  </li>
                </ul>
              </div>

              {/* 6. Monitoring and Reporting */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  6. Monitoring and Reporting
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Stratigo uses automated monitoring systems to track server uptime and performance
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Uptime statistics are calculated based on our internal monitoring data
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      Clients may request uptime reports by contacting support
                    </Text>
                  </li>
                </ul>
              </div>

              {/* 7. Backup Policy */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  7. Backup Policy
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  Stratigo performs regular backups of hosted data as part of our managed service:
                </Text>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Backup Frequency:</strong> Weekly automated backups
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Retention Period:</strong> Last 4 backups retained (approximately 1 month)
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                      <Text className="text-sm sm:text-base text-gray-700">
                      <strong>Restore Requests:</strong> Contact support for backup restoration
                    </Text>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Text className="text-yellow-900 text-sm">
                    <strong>Disclaimer:</strong> While we perform regular backups, clients are responsible for maintaining their own backup copies of critical data. Stratigo is not liable for data loss due to circumstances beyond our control.
                  </Text>
                </div>
              </div>

              {/* 8. Changes to This SLA */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  8. Changes to This SLA
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Stratigo reserves the right to modify this SLA at any time to reflect changes in our services, technology, or operational requirements.
                </Text>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Material changes will be communicated to active clients via email at least 30 days before taking effect.
                </Text>
              </div>

              {/* 9. Contact Information */}
              <div className="mb-6 sm:mb-8">
                <Heading level={2} className="text-xl sm:text-2xl font-bold text-navy mb-3 sm:mb-4">
                  9. Contact Information
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  For questions about this SLA, uptime reports, or service credit requests, please contact:
                </Text>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:support@stratigo.io" className="text-electric hover:underline font-medium">
                        support@stratigo.io
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="https://www.stratigo.io" className="text-electric hover:underline font-medium">
                        www.stratigo.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-8 border-t border-gray-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <Text className="text-blue-900 text-center font-medium">
                    This SLA applies only to Stratigo Managed VPS Hosting Services and is governed by our Terms of Service.
                  </Text>
                  <Text className="text-blue-800 text-center text-sm mt-2">
                    For complete terms, please review our <a href="/terms" className="text-electric hover:underline">Terms of Service</a>.
                  </Text>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SLA;

