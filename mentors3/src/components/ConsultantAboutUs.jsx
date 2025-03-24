"use client"

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#B22222] mb-10">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Who We Are */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">Who We Are</h2>
          <p className="text-sm">
            Motion is one of the top institutes of Kota for JEE-MAIN & ADVANCED, NEET, AIIMS, NTSE, KVPY & Olympiads and
            a well-known name in the education industry to provide valuable Edu-services to students.
          </p>
        </div>

        {/* What We AIM For */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">What We AIM For</h2>
          <p className="text-sm">
            Our vision is to become a leading education service provider company and to accomplish this, we are
            contributing to our country through excellence in Pre-Engineering & Pre-Medical Entrance Examinations. Kota.
          </p>
        </div>

        {/* How We Started */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">How We Started</h2>
          <p className="text-sm">
            The foundation of MOTION was laid with the establishment of MOTION IIT-JEE in Dec 2007. MOTION IIT-JEE was
            the culmination of a desire to start an entrepreneurial venture in Pre-engineering examinations coaching in
            development of human potential.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-bold text-center mb-4">Mission</h2>
          <p className="text-sm">
            Motion intends to fill the supply side gap in the education sector by providing a platform to budding
            entrepreneurs to unleash their potential & innovative skills while remaining committed to the cause of
            development of human potential.
          </p>
        </div>
      </div>

      {/* Responsibilities Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-[#B22222] mb-6">Responsibilities Of Education Consultant</h2>
        <p className="text-center max-w-5xl mx-auto mb-10">
          Education Consultant will promote Motion's courses among their local area within student network. The
          Education Consultant will make students aware of the different Courses of Motion's classroom and Online
          courses and the benefits of the same to students. We offer a range of programs for students from Foundation
          courses to full-time multi-year JEE and NEET test preparation courses. Students can prepare for competitive
          exams through Motion's classroom, Digital, and Distance Learning Programs.
        </p>
      </div>

      {/* Support Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* 24x7 Counseling Support */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="/placeholder.svg" alt="24x7 Counseling Support" width="80" height="80" className="mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-center">24x7 Counseling Support</h3>
        </div>

        {/* Marketing Support */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="/placeholder.svg" alt="Marketing Support" width="80" height="80" className="mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-center">Marketing Support</h3>
        </div>

        {/* IEC Support */}
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <img src="/placeholder.svg" alt="IEC Support" width="80" height="80" className="mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-center">
            IEC –Information, Education & Communication Support
          </h3>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="block">
          <div className="bg-green-500 rounded-full p-3 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}
