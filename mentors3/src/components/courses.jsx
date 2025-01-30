"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const coursesData = {
  Foundation: [
    { title: "INFANT STEP", description: "For Class 5th Student Moving to 6th", image: "/course/f5.png" },
    { title: "PREP STEP", description: "For Class 6th Student Moving to 7th", image: "/course/f6.png" },
    { title: "FIRST STEP", description: "For Class 7th Student Moving to 8th", image: "/course/f7.png" },
    { title: "GENESIS", description: "For Class 8th Student Moving to 9th", image: "/course/f8.png" },
    { title: "CATAPULT", description: "For Class 9th Student Moving to 10th", image: "/course/f9.png" },
  ],
  Engineering: [
    {
      title: "GROUND ZERO",
      description: "For Class 10th Student Moving to 11th (Engineering Stream)",
      image: "/course/e1.png",
    },
    {
      title: "COUNTDOWN",
      description: "For Class 11th Student Moving to 12th (Engineering Stream)",
      image: "/course/e2.png",
    },
    { title: "REBOOST", description: "For Class 12th Passed Students (Engineering Stream)", image: "/course/e3.png" },
  ],
  Medical: [
    {
      title: "MEDICAL GROUND ZERO",
      description: "For Class 10th Student Moving to 11th (Medical Stream)",
      image: "/course/m1.png",
    },
    {
      title: "MEDICAL COUNTDOWN",
      description: "For Class 11th Student Moving to 12th (Medical Stream)",
      image: "/course/m2.png",
    },
    {
      title: "MEDICAL REBOOST",
      description: "For Class 12th Passed Students (Medical Stream)",
      image: "/course/m3.png",
    },
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
  }, [selectedCategory]) // Removed unnecessary dependency

  const visibleCourses = coursesData[selectedCategory]

  return (
    <div className="bg-gradient-to-b from-[#FBE9D0] to-[#FFF5E1] py-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#762D17] text-center mb-6">Our Courses</h2>
        <p className="text-[#8C3B1E] text-center mb-10 text-lg max-w-3xl mx-auto leading-relaxed">
        We strive to guide students on their academic journey, unlocking their full potential for success.
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(coursesData).map((category) => (
            <Button
              key={category}
              className={`px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#8C3B1E] text-white shadow-lg scale-105"
                  : "bg-[#FAD02E] text-[#762D17] hover:bg-[#E6B800] hover:scale-105"
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
              <Card
                key={index}
                className="min-w-[300px] max-w-[320px] bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 border-2 border-[#E6B800]/20 hover:border-[#FAD02E] hover:shadow-[0_0_15px_2px_#FAD02E]"
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
                    <h3 className="text-2xl font-bold text-[#8C3B1E] mb-3">{course.title}</h3>
                    <p className="text-[#762D17]/80 text-base">{course.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAtStart ? "bg-[#FAD02E]/50 cursor-not-allowed" : "bg-[#FAD02E] hover:bg-[#E6B800]"
              }`}
              onClick={handlePrev}
              disabled={isAtStart}
            >
              <ChevronLeft className="w-6 h-6 text-[#762D17]" />
            </Button>
            <Button
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isAtEnd ? "bg-[#FAD02E]/50 cursor-not-allowed" : "bg-[#FAD02E] hover:bg-[#E6B800]"
              }`}
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <ChevronRight className="w-6 h-6 text-[#762D17]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
