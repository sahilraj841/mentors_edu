"use client";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const bannerPhotos = [
  { id: 1, src: "/photos/mentors1.jpeg", alt: "Banner 1" },
  {
    id: 2,
    src: "/photos/mentors4.png",
    alt: "Banner 2",
  },
  { id: 3, src: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Banner 3" },
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
        <div className="   w-full relative overflow-hidden   ">
            <img src="/photos/mentorsBanner.jpg" alt="Main Banner"
            width={1920}
            height={400}
            className=" w-full h-auto object-cover "
            
             />
        </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Results Section */}
        <div className="flex-1">
          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-t-lg">
            <h2 className="text-2xl font-bold">JEE ADVANCED RESULT</h2>
            
          </div>
          {/* Banner Slider */}
          <div className="relative bg-yellow-50 p-6 rounded-b-lg mt-4">
            
            <div className="relative h-72 sm:h-96 overflow-hidden rounded-lg">
              {bannerPhotos.map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
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
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-red-600 text-center mb-12"
        >
          Message From AJ Sir
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-2xl font-semibold">Respected Parents & Dear Students,</h2>
            <p className="text-gray-600">
            At Mentors EduServ, we believe that the right guidance can transform a student’s future. Our mission is to empower learners with the tools, resources, and mentorship they need to excel academically and personally. Whether you're preparing for competitive exams, need help with specific subjects, or are looking for general academic guidance, we are here to provide the support that fosters success.
            </p>
            <p className="text-gray-600">
            We offer personalized mentoring services tailored to each student's unique needs. Our experienced mentors are dedicated to helping students at all stages of their educational journey—whether they're in school, preparing for entrance exams, or navigating their post-graduate options.
            </p>
            <p className="text-gray-600">
            At Mentors EduServ, we understand that every student is unique. We pride ourselves on our individualized approach to mentoring, using proven methods and real-world experience to help each student unlock their full potential. Through one-on-one sessions, engaging resources, and continuous support, we aim to build not just academic excellence, but also confidence and critical thinking skills.
            </p>
            <p className="text-gray-600">
            At Mentors EduServ, we're more than just tutors—we're partners in your academic journey. Join us today, and let's work together to build the future you deserve.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold">Anand Jaiswal</h3>
              <p className="text-gray-600">Founder & CEO, Mentors Eduserv, Patna</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/3 flex justify-center items-center"
          >
            <div className="relative w-60 h-60 lg:w-72 lg:h-72 mx-auto flex justify-center items-center overflow-hidden rounded-full border-4 border-red-600">
              <img
                src="/photos/Aj.png"
                alt="AJ Sir"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </motion.div>


        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Mentors</h2>
            <p className="text-xl text-gray-300">Curious to know what makes us unique?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Learn from Kota's Best & Most Experienced Faculties In Muzaffarpur
            </h2>
            <p className="text-xl text-gray-600">
              Every student is our top priority. To provide the best education, we have various Classroom Courses
              available for JEE, NEET & Foundation.
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-red-600 text-center mb-8"
          >
            Our Courses
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <course.icon className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
