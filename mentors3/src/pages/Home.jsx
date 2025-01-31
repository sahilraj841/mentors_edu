"use client";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WhatsAppButton from "@/components/WhatsappButton";
import AdmissionBanner from "@/components/banner";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Menu,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  School,
  Users,
  MessageCircle,
  UserCheck,
  Globe,
  BookCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import BannerSlider from "@/components/BannerSlider";
import WhyMentors from "@/components/whymentors";
import MyCourses from "@/components/courses";
import MessageCard from "@/components/messageAJ"; 

const bannerPhotos = [
  { id: 1, src: "/photos/mentors1.jpeg", alt: "Banner 1" },
  {
    id: 2,
    src: "/photos/advance.png",
    alt: "Banner 2",
  },
  { id: 3, src: "/photos/neet.png", 
    alt: "Banner 3" 
  },
  { id: 4, src: "/photos/olympiad.png", 
    alt: "Banner 4" 
  },
  
];


const courses = [
  {
    title: "IIT-JEE (Main + Advanced)",
    description: "For Class 11th, 12th, & 12th Pass",
    icon: GraduationCap,
  },
  {
    title: "NEET Preparation",
    description: "For Class 11th, 12th, & 12th Pass",
    icon: BookOpen,
  },
  {
    title: "Foundation Course",
    description: "For Class 6th to 10th",
    icon: School,
  },
];

const features = [
  {
    icon: BookOpen,
    title: "12+ Year of legacy in JEE/NEET Coaching",
  },
  {
    icon: MessageCircle,
    title: "Doubt solving facilities with quick response time",
  },
  {
    icon: Users,
    title: "Regular Communication with Parents & Students",
  },
  {
    icon: UserCheck,
    title: "Personal Mentor for Guidance & Counselling",
  },
  {
    icon: Globe,
    title: "Provide Online and Offline Batches",
  },
  {
    icon: BookCheck,
    title: "Well Researched & Comprehensive Study Material",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};




export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerPhotos.length);
    }, 5001);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerPhotos.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerPhotos.length) % bannerPhotos.length);
  };

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    class: "",

    
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setIsLoading(true)


    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.class || !formData.school) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      })
      setIsLoading(false)
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address",
      })
      setIsLoading(false)
      return
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.phone)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid 10-digit phone number",
      })
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      // Log form data to console
      const response= await axios.post('http://localhost:5001/submit-form',formData);
      console.log("Form submitted with data:", formData)
      if(response.status===200){
        toast({
            title: "Success!",
            description: "Your form has been submitted successfully.",
          })
          alert("Form Submitted Successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            class: "",
            school: ""
          })
      }
    // Reset form
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      console.error("Error submitting form:",error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Banner Head */}
      <AdmissionBanner/>
      <BannerSlider/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Results Section */}
        <div className="flex-1">
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">ACHIEVEMENTS</h2>
            
          </div>
          {/* Banner Slider */}
          <div className="relative bg-yellow-50 p-6 rounded-b-lg mt-4">
            
            <div className="relative h-[500px] sm:h-[450px] w-[800px] overflow-hidden rounded-lg">
              {bannerPhotos.map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1500 ${
                    index === currentBanner ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <button
                onClick={prevBanner}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextBanner}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="text-center text-red-600 text-xl mt-4 font-semibold">
            Get Ignited...
          </div>
        </div>
        

      {/* Form Section */}
        
      <div className="w-full lg:w-96 mt-8 lg:mt-0">
      <div className="bg-yellow-400 p-4 rounded-t-lg text-center text-lg sm:text-xl">
        Submit form for free counselling & scholarship
      </div>
      <div className="bg-gray-100 p-4 rounded-b-lg">
        <form 
        onSubmit={handleSubmit} 
        className="space-y-4"
        
        >
          <div>
            <Input
              name="name"
              placeholder="Enter Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="text-sm sm:text-base"
              disabled={isLoading}
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Id *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="text-sm sm:text-base"
              disabled={isLoading}
            />
          </div>

          <div>
            <Input
              name="phone"
              placeholder="Mobile Number *"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="text-sm sm:text-base"
              disabled={isLoading}
              maxLength={10}
            />
          </div>
          <div>
            <Input
              name="school"
              placeholder="School Name *"
              value={formData.school}
              onChange={handleInputChange}
              required
              className="text-sm sm:text-base"
              disabled={isLoading}
            />
          </div>

          <Select
            value={formData.course}
            name="course"
            onValueChange={(value) => handleSelectChange("course", value)}
            disabled={isLoading}
          >
            <SelectTrigger className="text-sm sm:text-base">
              <SelectValue placeholder="Select Courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jee">JEE</SelectItem>
              
              <SelectItem value="neet">NEET</SelectItem>
              <SelectItem value="foundation">Foundation</SelectItem>
              
            </SelectContent>
          </Select>

          <Select
            value={formData.class}
            name="class"
            onValueChange={(value) => handleSelectChange("class", value)}
            disabled={isLoading}
          >
            <SelectTrigger className="text-sm sm:text-base">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">Class 6</SelectItem>
              <SelectItem value="7">Class 7</SelectItem>
              <SelectItem value="8">Class 8</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
              <SelectItem value="11">Class 11</SelectItem>
              <SelectItem value="12">Class 12</SelectItem>
              <SelectItem value="12-pass">12th Pass</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-sm sm:text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
      
    </div>
    </div>

      {/* Message Section */}
      <MessageCard/>

      {/* Features Section */}
      <WhyMentors/>

      {/* Courses Section */}
      <MyCourses/>

      <WhatsAppButton/>
    </div>
  );
}