import { Card, CardContent } from "@/components/ui/Card";

export default function MessageCard() {
  const imageUrl = '/photos/Aj.png'; // Path relative to the public folder

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-white">
      {/* Card with full screen width */}
      <Card className="w-full max-w-full bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Message Background with Hover Effect */}
        <div className="bg-gradient-to-r from-red-500 to-red-500 p-6 text-center transform hover:scale-105 transition-all duration-500 ease-in-out">
          <h1 className="text-3xl font-extrabold text-white">Message From AJ Sir</h1>
        </div>

        {/* Card Content with Light Star-like Gradient */}
        <CardContent className="p-6 md:p-8 bg-gradient-to-r from-yellow-200 via-pink-200 to-indigo-200 rounded-lg shadow-inner">
          <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
            <div className="space-y-6 text-gray-900">
              <h2 className="text-2xl font-semibold text-gray-800">Respected Parents & Dear Students,</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  At Mentors EduServ, we believe that the right guidance can transform a student's future. Our mission is to empower each student by providing the tools, resources, and mentorship they need to excel academically and personally.
                </p>

                <p>
                  We offer personalized mentoring services tailored to each student’s unique needs. Whether preparing for exams or navigating post-graduate options, our experienced mentors are committed to supporting students throughout their educational journey.
                </p>

                <p>
                  More than just tutors, Mentors EduServ is a trusted partner in your academic journey. Together, we will shape the future you deserve with dedicated guidance and mentorship.
                </p>
              </div>
            </div>

            {/* Circular Frame for Centered Image */}
            <div className="relative flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-white p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                  {/* Image displayed with full coverage */}
                  <img
                    src={imageUrl}
                    alt="Profile picture"
                    className="object-cover w-full h-full"
                    style={{ objectPosition: "center top" }} // Ensure face is centered and visible
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sir's Description */}
          <div className="pt-6 mt-8 text-center text-gray-600">
            <p className="font-semibold text-xl text-gray-800">Anand Jaiswal</p>
            <p className="font-medium text-lg text-gray-600">Founder & CEO, Mentors EduServ, Patna</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
