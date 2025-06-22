import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dna, Users, FlaskConical, Target, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Dna className="h-8 w-8 text-white" />
                    <span className="text-xl font-bold text-white">BioSynth Team</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-white hover:text-purple-200 transition-colors">
                      Home
                    </Link>
                    <Link href="/project" className="text-white/80 hover:text-purple-200 transition-colors">
                      Project
                    </Link>
                    <Link href="/team" className="text-white/80 hover:text-purple-200 transition-colors">
                      Team
                    </Link>
                    <Link href="/experiments" className="text-white/80 hover:text-purple-200 transition-colors">
                      Experiments
                    </Link>
                    <Link href="/results" className="text-white/80 hover:text-purple-200 transition-colors">
                      Results
                    </Link>
                    <Link href="/safety" className="text-white/80 hover:text-purple-200 transition-colors">
                      Safety
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-12">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  BioSynth 2024
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Engineering synthetic biology solutions for sustainable biofuel production using novel enzymatic
                  pathways
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg">
                    Explore Our Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-3 text-lg"
                  >
                    View Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Project Description</h3>
                  <p className="text-white/80">
                    Developing engineered E. coli strains for efficient conversion of agricultural waste into biofuels
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Our Team</h3>
                  <p className="text-white/80">
                    12 passionate students from diverse backgrounds working together to solve global challenges
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <FlaskConical className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Experiments</h3>
                  <p className="text-white/80">
                    Comprehensive wet lab and dry lab experiments validating our synthetic biology approach
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Safety</h3>
                  <p className="text-white/80">
                    Rigorous safety protocols and risk assessment for all experimental procedures
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Heart className="h-12 w-12 text-pink-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Human Practices</h3>
                  <p className="text-white/80">
                    Engaging with stakeholders and communities to understand real-world impact
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Dna className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Modeling</h3>
                  <p className="text-white/80">
                    Mathematical models predicting system behavior and optimizing production efficiency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Abstract Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Project Abstract</h2>
                <div className="prose prose-lg text-white/90 max-w-none">
                  <p className="mb-4">
                    The global energy crisis and environmental concerns have intensified the search for sustainable
                    alternatives to fossil fuels. Our team, BioSynth, has developed an innovative synthetic biology
                    approach to address this challenge through the engineering of <em>Escherichia coli</em> for
                    efficient biofuel production.
                  </p>
                  <p className="mb-4">
                    We have designed and constructed novel metabolic pathways that enable the conversion of agricultural
                    waste, specifically cellulose and hemicellulose, into high-value biofuels. Our engineered system
                    incorporates optimized enzymes for biomass degradation and metabolic flux redirection towards fuel
                    production.
                  </p>
                  <p>
                    Through comprehensive modeling, experimental validation, and stakeholder engagement, we demonstrate
                    the feasibility and potential impact of our solution in addressing global sustainability challenges
                    while maintaining strict safety standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="p-6 text-center">
                <p className="text-white/70">
                  © 2024 BioSynth iGEM Team. All rights reserved. |
                  <span className="ml-2">Contact us: biosynth@university.edu</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </footer>
      </div>
    </div>
  )
}
