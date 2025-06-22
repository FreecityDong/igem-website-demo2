import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Team Leader & Principal Investigator",
      department: "Bioengineering",
      year: "PhD Candidate",
      bio: "Specializes in metabolic engineering and synthetic biology. Leading the overall project strategy and enzyme optimization.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Alex Rodriguez",
      role: "Wet Lab Manager",
      department: "Biochemistry",
      year: "Senior",
      bio: "Expert in molecular cloning and protein expression. Responsible for all experimental protocols and lab safety.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emily Zhang",
      role: "Modeling Lead",
      department: "Chemical Engineering",
      year: "Junior",
      bio: "Develops mathematical models for metabolic pathways and fermentation optimization.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marcus Johnson",
      role: "Human Practices Coordinator",
      department: "Environmental Science",
      year: "Senior",
      bio: "Focuses on stakeholder engagement and assessing the societal impact of our project.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Patel",
      role: "Safety Officer",
      department: "Microbiology",
      year: "Junior",
      bio: "Ensures all experiments meet safety standards and develops risk assessment protocols.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "David Kim",
      role: "Wiki & Design Lead",
      department: "Computer Science",
      year: "Sophomore",
      bio: "Manages the team's digital presence and creates visual materials for presentations.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
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
              <CardContent className="p-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Meet Our Team
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  A diverse group of passionate students from various disciplines, united by our commitment to solving
                  global challenges through synthetic biology
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-300 mb-2">12</div>
                <p className="text-white/80">Team Members</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">6</div>
                <p className="text-white/80">Departments</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">3</div>
                <p className="text-white/80">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1</div>
                <p className="text-white/80">Shared Vision</p>
              </CardContent>
            </Card>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-200 font-medium mb-1">{member.role}</p>
                    <p className="text-white/70 text-sm">
                      {member.department} • {member.year}
                    </p>
                  </div>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Philosophy */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Our Team Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-lg font-semibold text-purple-200 mb-3">Collaboration</h4>
                  <p className="text-white/80 text-sm">
                    We believe that the best solutions emerge when diverse perspectives come together. Our
                    interdisciplinary approach strengthens every aspect of our project.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">Innovation</h4>
                  <p className="text-white/80 text-sm">
                    We push the boundaries of what's possible in synthetic biology, always seeking creative solutions to
                    complex global challenges.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-200 mb-3">Impact</h4>
                  <p className="text-white/80 text-sm">
                    Every decision we make is guided by our commitment to creating positive change for communities and
                    the environment worldwide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
