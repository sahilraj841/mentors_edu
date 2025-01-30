
import { motion } from "framer-motion";
import { BookOpen, MessageCircle, Users, UserCheck, Globe, FileText } from "lucide-react";
import { Card as CustomCard, CardContent as CustomCardContent } from "../components/ui/Card";


const features = [
  { icon: BookOpen, title: "12+ Years of Legacy", description: "Proven excellence in JEE/NEET coaching." },
  { icon: MessageCircle, title: "Quick Doubt Solving", description: "Instant query resolution by expert faculties." },
  { icon: Users, title: "Regular Communication", description: "Constant updates for students and parents." },
  { icon: UserCheck, title: "Personal Mentorship", description: "Dedicated mentors for guidance & counseling." },
  { icon: Globe, title: "Online & Offline Batches", description: "Flexible learning options to suit your needs." },
  { icon: FileText, title: "Comprehensive Study Material", description: "Well-researched content for thorough preparation." }
];

export default function WhyMentors() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">Why Choose Mentors?</h2>
        <p className="text-lg text-gray-100 mb-10">Experience excellence in coaching with unmatched features.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, translateY: -8, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <CustomCard className="bg-white text-gray-900 shadow-2xl border border-gray-300 p-8 rounded-3xl transition duration-500 hover:shadow-yellow-400 hover:bg-gradient-to-b from-white to-yellow-100">
                <CustomCardContent className="flex flex-col items-center text-center">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <feature.icon className="h-16 w-16 text-red-600 mb-4 drop-shadow-md" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </CustomCardContent>
              </CustomCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
