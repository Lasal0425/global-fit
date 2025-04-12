"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, MessageCircle, Globe, Heart, Users, Calendar, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="font-sans">
      {/* Hero Section with enhanced gradient and pattern */}
      <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-12 bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/placeholder.svg?height=500&width=500")',
              backgroundSize: "50px",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-8 max-w-4xl relative z-10">
          <Badge className="mb-4 px-4 py-1 text-sm bg-white/20 hover:bg-white/30 text-white border-none">
            Join 10,000+ volunteers worldwide
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find your perfect <span className="text-yellow-300">volunteering</span> match
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover life-changing projects abroad that align with your skills and passions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10"
        >
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-yellow-300 hover:text-emerald-700 font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
            >
              <Link href="/match" className="flex items-center">
                Start Matching <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-6 px-8 rounded-full text-lg transition-all duration-300"
            >
              <Link href="/browse" className="flex items-center">
                Browse Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-8"
        >
          <div className="flex space-x-1 cursor-pointer animate-bounce">
            <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-emerald-100 text-emerald-700 border-none">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How We Make Volunteering Better</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects passionate volunteers with meaningful projects around the globe
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Globe className="h-10 w-10 text-emerald-500" />,
                title: "Global Projects",
                desc: "Access to 1000+ projects across 60+ countries",
              },
              {
                icon: <Heart className="h-10 w-10 text-emerald-500" />,
                title: "Personalized Matching",
                desc: "AI-powered matching based on your skills and interests",
              },
              {
                icon: <Users className="h-10 w-10 text-emerald-500" />,
                title: "Community Support",
                desc: "Connect with a network of like-minded volunteers",
              },
              {
                icon: <Calendar className="h-10 w-10 text-emerald-500" />,
                title: "Flexible Duration",
                desc: "Options from 1 week to 12 months commitments",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="rounded-full bg-emerald-50 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg">
              <Link href="/features" className="flex items-center">
                Learn More About Our Features
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-yellow-100 text-yellow-700 border-none">
              Volunteer Stories
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Volunteers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from people who found their perfect volunteering match
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Johnson",
                location: "Wildlife Conservation, Costa Rica",
                quote:
                  "Finding my project through this platform was the best decision I've made. The matching process was spot on!",
              },
              {
                name: "Michael Chen",
                location: "Teaching Program, Thailand",
                quote:
                  "The community support before and during my volunteering experience was incredible. I felt prepared and supported.",
              },
              {
                name: "Aisha Patel",
                location: "Healthcare Outreach, Kenya",
                quote:
                  "As a medical student, I found the perfect program to apply my skills while learning about global healthcare.",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-50">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              <Link href="/testimonials" className="flex items-center">
                Read More Stories
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-12 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to make a difference?</h2>
            <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
              Join thousands of volunteers who found their perfect match and embarked on a life-changing journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-yellow-300 hover:text-emerald-700 font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Link href="/signup" className="flex items-center">
                  Create Free Account
                  <motion.div animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="ml-2" />
                  </motion.div>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-bold py-6 px-8 rounded-full text-lg transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky chat button with enhanced animation */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="absolute -top-10 right-0 bg-white text-emerald-600 px-4 py-2 rounded-full text-sm font-medium shadow-md whitespace-nowrap"
          >
            Need help? Chat with us!
          </motion.span>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 h-14 w-14 md:w-auto md:px-6 rounded-full shadow-lg flex items-center justify-center"
          >
            <MessageCircle size={24} />
            <span className="ml-2 hidden md:inline">Chat with us</span>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
