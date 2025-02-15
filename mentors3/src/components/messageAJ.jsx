import { Card, CardContent } from "@/components/ui/Card";

export default function MessageCard() {
  const imageUrl = '/photos/Aj.png'; // Path relative to the public folder

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-yellow-500 to-white">
      {/* Card with full screen width */}
      <Card className="w-full max-w-full bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Message Background with Hover Effect */}
        <div className="bg-gradient-to-r from-red-500 to-red-500 p-6 text-center transform hover:scale-105 transition-all duration-500 ease-in-out">
          <h1 className="text-3xl font-extrabold text-white">Director's Message</h1>
        </div>

        {/* Card Content with Light Star-like Gradient */}
        <CardContent className="p-6 md:p-8 bg-gradient-to-r from-yellow-200 via-pink-200 to-indigo-200 rounded-lg shadow-inner">
          <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
            <div className="space-y-6 text-gray-900">
              <h2 className="text-2xl font-semibold text-gray-800">Respected Parents & Dear Students,</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to the universe of Mentors Eduserv, a name synonymous
                with quality education and unwavering commitment to nurturing
                young minds. Our journey began with a simple yet powerful vision:
                to provide IIT-JEE and Medical aspirants in Bihar access to
                quality education within their own state.
              </p>
              <p>
                I take immense pride in sharing that over the past 13 years,
                Mentors Eduserv has helped thousands of students fulfill their
                dreams of entering India’s top IITs and Medical colleges. By
                fostering a culture of excellence, we have not only delivered
                outstanding results in Bihar but also expanded our footprint to
                Jharkhand. Today, we are proud to bring our proven approach to
                cities like Patna, Bhagalpur, Saharsa, Gaya, Muzaffarpur, Purnea,
                Ranchi &amp; Bokaro, helping students thrive in their academic
                pursuits without leaving their hometowns.
              </p>
              <p>
                At Mentors Eduserv, we believe that every student is unique and
                success lies in unlocking their individual potential. Our
                “Individual Mentoring System” stands as a testament to this
                belief, providing personalized attention, guidance and
                strategies tailored to each learner’s needs. From a
                pattern-proof teaching methodology to meticulously designed
                courses, quality study materials and advanced testing tools,
                every aspect of our academic framework is engineered to ensure
                success.
              </p>
              <p>
                Innovation remains at the heart of what we do. As we move
                forward, our appetite to serve students better continues to
                grow. With a strong foundation in offline teaching and now also
                through online and hybrid models, we are evolving to meet the
                changing educational landscape and serve students far and wide.
              </p>
              <p>
                Our goal is not just to prepare students for exams but to
                empower them for life. We instill confidence, discipline and a
                passion for learning, ensuring they emerge not just as achievers
                but as leaders in their chosen fields.
              </p>
              <p>
                I extend my heartfelt gratitude to the students and parents who
                have trusted us on this journey. On behalf of my dedicated and
                efficient academic &amp; administrative team, I assure you of an
                enriching and unparalleled learning experience. Let us work
                together to shape the future and turn dreams into reality.
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
