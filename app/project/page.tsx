import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, Target, Cog, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Project Description
                </h1>
                <p className="text-xl text-white/90">
                  Engineering Sustainable Biofuel Production Through Synthetic Biology
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problem Statement */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Lightbulb className="mr-3 h-6 w-6 text-yellow-300" />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-4">
              <p>
                The world faces an urgent need for sustainable energy alternatives as fossil fuel reserves dwindle and
                environmental concerns mount. Current biofuel production methods are often inefficient, expensive, and
                compete with food production for agricultural resources.
              </p>
              <p>
                Agricultural waste, including cellulose and hemicellulose from crop residues, represents an abundant and
                underutilized resource that could be converted into valuable biofuels without competing with food
                production.
              </p>
            </CardContent>
          </Card>

          {/* Solution Overview */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Target className="mr-3 h-6 w-6 text-green-300" />
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-4">
              <p>
                We have engineered <em>Escherichia coli</em> strains with enhanced capabilities for converting
                agricultural waste into biofuels through a multi-step synthetic biology approach:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Enhanced Enzyme Expression</h4>
                  <p className="text-sm text-white/80">
                    Optimized cellulase and hemicellulase enzymes for efficient biomass degradation
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Metabolic Pathway Engineering</h4>
                  <p className="text-sm text-white/80">Redirected metabolic flux towards biofuel production pathways</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Regulatory Circuit Design</h4>
                  <p className="text-sm text-white/80">
                    Implemented feedback control systems for optimal production efficiency
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Stress Tolerance</h4>
                  <p className="text-sm text-white/80">
                    Enhanced bacterial resistance to toxic byproducts and environmental stress
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Approach */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Cog className="mr-3 h-6 w-6 text-blue-300" />
                Technical Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 1: Enzyme Engineering</h4>
                  <p className="mb-3">
                    We began by identifying and optimizing key enzymes required for cellulose and hemicellulose
                    degradation. Through directed evolution and rational design, we enhanced enzyme activity and
                    stability.
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Cellulase optimization for improved cellulose binding and hydrolysis</li>
                    <li>Hemicellulase engineering for enhanced xylan degradation</li>
                    <li>β-glucosidase modification for efficient glucose release</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 2: Metabolic Engineering</h4>
                  <p className="mb-3">
                    We redesigned the central metabolic pathways in <em>E. coli</em> to channel carbon flux towards
                    biofuel production while maintaining cell viability.
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Overexpression of key enzymes in the ethanol production pathway</li>
                    <li>Knockout of competing pathways to reduce byproduct formation</li>
                    <li>Implementation of dynamic regulation systems</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Phase 3: System Integration</h4>
                  <p className="mb-3">
                    The final phase involved integrating all components into a cohesive system capable of processing raw
                    agricultural waste into biofuels.
                  </p>
                  <ul className="list-disc list-inside text-white/80 space-y-1">
                    <li>Optimization of enzyme expression ratios</li>
                    <li>Development of fed-batch fermentation protocols</li>
                    <li>Implementation of real-time monitoring systems</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expected Impact */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <TrendingUp className="mr-3 h-6 w-6 text-purple-300" />
                Expected Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">75%</div>
                  <p className="text-sm">Reduction in production costs compared to traditional methods</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300 mb-2">2.5x</div>
                  <p className="text-sm">Increase in conversion efficiency from agricultural waste</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">90%</div>
                  <p className="text-sm">Reduction in greenhouse gas emissions</p>
                </div>
              </div>
              <p className="mt-6 text-center">
                Our solution has the potential to transform agricultural waste management while providing a sustainable
                source of renewable energy for communities worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
