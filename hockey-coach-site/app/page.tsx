"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Play, Download, Mail } from "lucide-react"

export default function HockeyCoachSite() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const drillVideos = [
    {
      id: 1,
      title: "Basic Skating Drills",
      description: "Fundamental skating techniques for beginners",
      duration: "5:30",
    },
    {
      id: 2,
      title: "Passing & Receiving",
      description: "Essential passing drills for all skill levels",
      duration: "7:15",
    },
    {
      id: 3,
      title: "Shooting Practice",
      description: "Improve accuracy and power with these drills",
      duration: "6:45",
    },
    {
      id: 4,
      title: "Defensive Positioning",
      description: "Learn proper defensive stance and movement",
      duration: "8:20",
    },
    {
      id: 5,
      title: "Power Play Setup",
      description: "Effective power play formations and strategies",
      duration: "9:10",
    },
    {
      id: 6,
      title: "Goalie Training",
      description: "Specialized drills for goalkeepers",
      duration: "6:55",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Hockey IQ Development</h1>
          <p className="text-blue-100 text-center mt-2 text-lg">Video-based system for smarter hockey players</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Build Smarter Players.
            <br />
            Faster.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            A proven video-based system that teaches your team the habits, structure, and decision-making skills that
            drive elite Hockey IQ — all in the same 30–35 hours you already spend watching video.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
            <Play className="h-6 w-6 mr-2" />
            Click Here to See How it Works
          </Button>
        </div>
      </section>

      {/* Drill Videos Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Video Instruction</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Every module focuses on a core Hockey IQ skill or system — from individual skills like shooting and stride,
            to advanced tactics like D-Zone coverage and O-Zone entries. Each topic includes video breakdowns,
            voice-over teaching, and real game examples your players will understand and retain.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8">HockeyIQ Development Model</h3>

          <div className="text-center mb-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-05%20at%2012.57.11%E2%80%AFPM-89lBxIZy9rKmD0e4iexlSaS337oJvY.png"
              alt="HockeyIQ Development Model - 5 step progression from Concept Introduction to Repeat with Increased Complexity"
              className="mx-auto max-w-full h-auto"
            />
          </div>

          {/* Video Categories with Placeholders */}
          <div className="space-y-12 mt-16">
            {[
              {
                step: 1,
                title: "Individual Skills",
                description: "Fundamental hockey skills for player development",
                videos: [
                  { title: "Skating Technique & Power", duration: "8:45" },
                  { title: "Shooting Accuracy & Release", duration: "7:20" },
                  { title: "Puck Handling Fundamentals", duration: "6:50" },
                  { title: "Passing & Receiving", duration: "5:30" },
                ],
              },
              {
                step: 2,
                title: "Individual Tactics",
                description: "Decision-making and positioning for individual players",
                videos: [
                  { title: "Reading the Play", duration: "9:15" },
                  { title: "1-on-1 Defensive Play", duration: "7:45" },
                  { title: "Offensive Zone Positioning", duration: "8:20" },
                  { title: "Transition Game Awareness", duration: "6:40" },
                ],
              },
              {
                step: 3,
                title: "Team Structure",
                description: "Systems and formations for team play",
                videos: [
                  { title: "Defensive Zone Coverage", duration: "10:30" },
                  { title: "Neutral Zone Systems", duration: "9:45" },
                  { title: "Offensive Zone Structure", duration: "8:55" },
                  { title: "Breakout Patterns", duration: "7:25" },
                ],
              },
              {
                step: 4,
                title: "Special Teams",
                description: "Power play and penalty kill strategies",
                videos: [
                  { title: "Power Play Formations", duration: "11:20" },
                  { title: "Penalty Kill Systems", duration: "9:50" },
                  { title: "Face-off Strategies", duration: "6:15" },
                  { title: "4-on-4 Situations", duration: "8:30" },
                ],
              },
              {
                step: 5,
                title: "Common Situations",
                description: "Game scenarios and situational awareness",
                videos: [
                  { title: "2-on-1 & 3-on-2 Rushes", duration: "8:45" },
                  { title: "Defensive Zone Battles", duration: "7:30" },
                  { title: "Overtime Strategies", duration: "6:45" },
                  { title: "End Game Situations", duration: "9:10" },
                ],
              },
            ].map((category) => (
              <div key={category.step} className="bg-white rounded-lg p-8 shadow-sm border">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.videos.map((video, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                          <img
                            src={`/placeholder_image.png?height=120&width=200&text=${encodeURIComponent(video.title)}`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <Button size="sm" className="bg-red-600 hover:bg-red-700">
                              <Play className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                            {video.duration}
                          </div>
                        </div>
                        <h4 className="font-semibold text-sm text-gray-800 leading-tight">{video.title}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Real Impact. Real Players. Real Coaches.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                quote:
                  "Video let me see the game in a totally new way... I executed a play I saw in video the very next game.",
                author: "Payton H., University Captain",
              },
              {
                quote:
                  "The video work gave me confidence to read opponents and avoid mistakes before they even happened.",
                author: "Logan A., US College Hockey",
              },
              {
                quote: "As a parent, I could finally see what my son was being taught and help him grow from it.",
                author: "Rep Hockey Parent",
              },
              {
                quote:
                  "Some kids just don't absorb the whiteboard. Video lets them watch it over and over — until it clicks.",
                author: "Mike H., 20-Year Minor Hockey Coach",
              },
              {
                quote: "When I changed positions, the videos helped me learn fast. They were better than any drill.",
                author: "Tommy, U15 Minor Hockey",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold text-gray-800">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <Download className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">"Want access to the Playbook?"</h2>
            <p className="text-lg text-blue-100 mb-8">Fill out form to receive the template & content</p>
          </div>

          <Card className="bg-white text-gray-800 max-w-md mx-auto">
            <CardContent className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-left block font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="coach@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-lg py-3"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3" size="lg">
                    <Mail className="h-5 w-5 mr-2" />
                    Get My Annual Plan Playbook
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">We respect your privacy. No spam, ever.</p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="text-green-600 text-lg font-semibold mb-2">✓ Success!</div>
                  <p className="text-gray-600">Check your email for the playbook download link.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Hockey IQ Development</h3>
          <p className="text-gray-400">Building smarter players through proven video-based learning.</p>
          <div className="mt-4 text-sm text-gray-500">© 2025 x. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
