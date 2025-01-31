"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const coursesData = {
  Foundation: [
    { title: "INFANT STEP", description: "For Class 5th Student Moving to 6th", image: "/course/f5.png", redirectUrl: "https://www.mentorsedu.com/courses/foundation/" },
    { title: "PREP STEP", description: "For Class 6th Student Moving to 7th", image: "/course/f6.png", redirectUrl: "https://www.mentorsedu.com/courses/foundation/#PREPSTEP" },
    { title: "FIRST STEP", description: "For Class 7th Student Moving to 8th", image: "/course/f7.png", redirectUrl: "https://www.mentorsedu.com/courses/foundation/#FIRSTSTEP" },
    { title: "GENESIS", description: "For Class 8th Student Moving to 9th", image: "/course/f8.png", redirectUrl: "https://www.mentorsedu.com/courses/foundation/#GENESIS" },
    { title: "CATAPULT", description: "For Class 9th Student Moving to 10th", image: "/course/f9.png", redirectUrl: "https://www.mentorsedu.com/courses/foundation/#CATAPULT" },
  ],
  Engineering: [
    { title: "GROUND ZERO", description: "For Class 10th Student Moving to 11th (Engineering Stream)", image: "/course/e1.png", redirectUrl: "https://www.mentorsedu.com/courses/engineering/#GROUNDZERO" },
    { title: "COUNTDOWN", description: "For Class 11th Student Moving to 12th (Engineering Stream)", image: "/course/e2.png", redirectUrl: "https://www.mentorsedu.com/courses/engineering/#COUNTDOWN" },
    { title: "REBOOST", description: "For Class 12th Passed Students (Engineering Stream)", image: "/course/e3.png", redirectUrl: "https://www.mentorsedu.com/courses/engineering/#REBOOST" },
  ],
  Medical: [
    { title: "MEDICAL GROUND ZERO", description: "For Class 10th Student Moving to 11th (Medical Stream)", image: "/course/m1.png", redirectUrl: "https://www.mentorsedu.com/courses/medical/#MEDICALGROUNDZERO" },
    { title: "MEDICAL COUNTDOWN", description: "For Class 11th Student Moving to 12th (Medical Stream)", image: "/course/m2.png", redirectUrl: "https://www.mentorsedu.com/courses/medical/#MEDICALCOUNTDOWN" },
    { title: "MEDICAL REBOOST", description: "For Class 12th Passed Students (Medical Stream)", image: "/course/m3.png", redirectUrl: "https://www.mentorsedu.com/courses/medical/#MEDICALREBOOST" },
  ],
}

export default function MyCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Foundation")
  const coursesContainerRef = useRef(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const checkScrollPosition = () => {
    if (coursesContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = coursesContainerRef.current
      setIsAtStart(scrollLeft <= 0)
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10)
    }
  }

  const handleNext = () => {
    if (coursesContainerRef.current) {
      const container = coursesContainerRef.current
      const cardWidth = container.children[0].offsetWidth + 24 // Including gap
      const newScrollLeft = container.scrollLeft + cardWidth * 2
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  const handlePrev = () => {
    if (coursesContainerRef.current) {
      const container = coursesContainerRef.current
      const cardWidth = container.children[0].offsetWidth + 24 // Including gap
      const newScrollLeft = container.scrollLeft - cardWidth * 2
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const container = coursesContainerRef.current
    if (container) {
      checkScrollPosition()
      container.addEventListener("scroll", checkScrollPosition)
      return () => container.removeEventListener("scroll", checkScrollPosition)
    }
  }, [selectedCategory])

  const visibleCourses = coursesData[selectedCategory]

  return (
    <div className="bg-gradient-to-r from-yellow-500 to-white py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3B2C21] text-center mb-6">Our Courses</h2>
        <p className="text-[#4C3B2F] text-center mb-10 text-lg max-w-3xl mx-auto leading-relaxed">
          We strive to guide students on their academic journey, unlocking their full potential for success.
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(coursesData).map((category) => (
            <Button
              key={category}
              className={`px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#D7C6B8] text-[white] shadow-lg scale-105"
                  : "bg-[#F9F4E3] text-[#3B2C21] hover:bg-[#D7C6B8] hover:scale-105"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="relative">
          <div ref={coursesContainerRef} className="flex overflow-x-auto gap-6 px-4 py-4 scroll-smooth no-scrollbar">
            {visibleCourses.map((course, index) => (
              <a
                key={index}
                href={course.redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[300px] max-w-[320px] bg-gray-100 rounded-2xl shadow-xl hover:shadow-[0_0_15px_2px_#D7C6B8] transition-all duration-500 ease-in-out transform hover:scale-105 border-2 border-[#F9F4E3]/20 hover:border-[#d5ec3b] hover:ring-4 hover:ring-[#4fe657] cursor-pointer"
              >
                <CardContent className="px-4 py-2">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-xl">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-[#3B2C21] mb-3">{course.title}</h3>
                    <p className="text-[#4C3B2F]/80 text-base">{course.description}</p>
                  </div>
                </CardContent>
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAtStart ? "bg-[#F9F4E3]/50 cursor-not-allowed" : "bg-[#F9F4E3] hover:bg-[#D7C6B8]"
              }`}
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ChevronLeft className="w-6 h-6 text-[#3B2C21] hover:text-[#6A4E2B]" />
            </Button>
            <Button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAtEnd ? "bg-[#F9F4E3]/50 cursor-not-allowed" : "bg-[#F9F4E3] hover:bg-[#D7C6B8]"
              }`}
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ChevronRight className="w-6 h-6 text-[#3B2C21] hover:text-[#6A4E2B]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
