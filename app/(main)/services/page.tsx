'use client'

import React from 'react'
import { Truck, Package, ShieldCheck, Users, Presentation, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const supplyChainServices = [
    {
        icon: Truck,
        title: 'Procurement',
        description: 'We source medicines from reputable manufacturers, ensuring cost-effectiveness and reliability.',
        features: ['Quality suppliers', 'Competitive pricing', 'Bulk purchasing', 'Supply chain optimization'],
        duration: '24-48 hours',
        rating: 4.9
    },
    {
        icon: Package,
        title: 'Logistics',
        description: 'Our logistics team manages storage and distribution, maintaining optimal conditions for medicine integrity.',
        features: ['Cold chain management', 'Secure storage', 'Timely delivery', 'Real-time tracking'],
        duration: '1-3 days',
        rating: 4.8
    },
    {
        icon: ShieldCheck,
        title: 'Quality Assurance',
        description: 'We conduct rigorous quality checks at every stage to guarantee the safety and efficacy of all medicines.',
        features: ['Batch testing', 'Certification verification', 'Expiry monitoring', 'Safety protocols'],
        duration: 'Ongoing',
        rating: 5.0
    },
]

const trainingServices = [
    {
        icon: Users,
        title: 'Healthcare Provider Training',
        description: 'We provide comprehensive training to healthcare professionals on the proper use and management of essential medicines.',
        features: ['Medicine management', 'Dosage protocols', 'Storage guidelines', 'Patient counseling'],
        duration: '2-4 weeks',
        rating: 4.9
    },
    {
        icon: Presentation,
        title: 'Community Health Education',
        description: 'We conduct community outreach programs to educate the public on health issues and the importance of essential medicines.',
        features: ['Health awareness', 'Preventive care', 'Medicine literacy', 'Community engagement'],
        duration: 'Ongoing',
        rating: 4.7
    },
]

const processSteps = [
    {
        step: '01',
        title: 'Assessment',
        description: 'We assess your facility\'s medicine needs and current inventory levels.',
        icon: CheckCircle
    },
    {
        step: '02',
        title: 'Procurement',
        description: 'We source high-quality medicines from verified suppliers at competitive prices.',
        icon: Package
    },
    {
        step: '03',
        title: 'Quality Check',
        description: 'Every medicine undergoes rigorous quality assurance testing before delivery.',
        icon: ShieldCheck
    },
    {
        step: '04',
        title: 'Delivery',
        description: 'Secure and timely delivery to your facility with proper documentation.',
        icon: Truck
    }
]

export default function ServicesPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: supplyRef, isVisible: supplyVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: trainingRef, isVisible: trainingVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: processRef, isVisible: processVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="bg-white">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Enhanced Hero Section */}
                <div ref={heroRef} className="text-center mb-20">
                    <div className={`transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            Our <span className="text-health-600">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            We are dedicated to enhancing healthcare in the Southwest Region of Cameroon by ensuring access to essential medicines. Our comprehensive services encompass every step from procurement to delivery, ensuring quality and efficiency.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-health-600 mr-2" />
                                <span>100+ Healthcare Facilities</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-health-600 mr-2" />
                                <span>50,000+ Patients Served</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-health-600 mr-2" />
                                <span>95% Success Rate</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Steps */}
                <div ref={processRef} className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Work</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Our streamlined process ensures reliable medicine supply
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative transition-all duration-700 transform ${processVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="bg-gradient-to-br from-health-50 to-white p-8 rounded-2xl shadow-lg border border-health-100 text-center relative">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-health-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {step.step}
                                    </div>
                                    <div className="w-16 h-16 bg-health-100 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4">
                                        <step.icon className="h-8 w-8 text-health-700" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow connector */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="h-6 w-6 text-health-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Supply Chain Section */}
                <div ref={supplyRef} className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Essential Medicine Supply Chain</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive supply chain management ensuring quality and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {supplyChainServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={`group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${supplyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-health-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8 text-health-700" />
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-health-600 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{service.duration}</span>
                                    </div>
                                    <button className="text-health-600 hover:text-health-700 font-medium text-sm flex items-center group">
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training Section */}
                <div ref={trainingRef} className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support and Training</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Empowering healthcare professionals and communities through education and support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {trainingServices.map((service, index) => (
                            <div
                                key={service.title}
                                className={`group bg-gradient-to-br from-health-50 to-white rounded-2xl shadow-lg border border-health-100 p-8 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${trainingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-health-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="h-8 w-8 text-health-700" />
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-health-600 mr-3 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-health-100">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{service.duration}</span>
                                    </div>
                                    <button className="text-health-600 hover:text-health-700 font-medium text-sm flex items-center group">
                                        Learn More
                                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-health-600 to-health-700 rounded-3xl p-12 text-center text-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
                        <p className="text-xl text-health-100 mb-8">
                            Join the growing number of healthcare facilities that trust us for their essential medicine needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-health-700 px-8 py-3 rounded-lg font-semibold hover:bg-health-50 transition-colors duration-300">
                                Get Started Today
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-health-700 transition-colors duration-300">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}