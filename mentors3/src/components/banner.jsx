export default function AdmissionBanner() {
    return (
      <div className="w-full relative">
        {/* Background with gradient */}
        <div className="bg-gradient-to-b from-red-700 to-red-800">
          {/* Top Bar */}
          <div className="bg-red-700 py-3 px-4 flex flex-col md:flex-row justify-between items-center border-b-4 border-yellow-300">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white text-3xl md:text-5xl font-bold" style={{ fontFamily: "Arial" }}>
                <span className="mr-1">M</span>entors Eduserv
                <sup className="text-xs">®</sup>
              </span>
            </div>
  
            {/* Muzaffarpur Text */}
            <div
              className="text-yellow-300 text-2xl md:text-4xl font-extrabold tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
            >
              NOW ALSO @ MUZAFFARPUR
            </div>
          </div>
  
          {/* Main Content Area */}
          <div className="bg-yellow-300 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8 px-4">
              {/* Admission Section */}
              <div className="bg-red-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-center space-y-3">
                  <h2
                    className="text-white text-4xl md:text-5xl font-extrabold mb-2"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    ADMISSION OPEN
                  </h2>
                  <div className="text-white text-2xl md:text-3xl font-bold">NEW SESSION 2025-26</div>
                  <div className="text-white text-xl md:text-2xl font-semibold mt-4">FOR CLASS</div>
                  <div className="flex justify-center gap-3 items-center flex-wrap">
                    <span className="bg-yellow-300 text-red-700 px-4 py-1 rounded-full font-bold text-xl">6 to 12</span>
                    <span className="text-white">&</span>
                    <span className="bg-yellow-300 text-red-700 px-4 py-1 rounded-full font-bold text-xl">12th PASS</span>
                  </div>
                </div>
              </div>
  
              {/* Fee Benefit Section */}
              <div className="relative">
                <div className="bg-white rounded-full px-12 py-8 border-8 border-red-700 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                  <div className="text-center space-y-2">
                    <div className="text-xl md:text-2xl font-bold">JOIN EARLY FOR</div>
                    <div className="text-3xl md:text-4xl font-extrabold text-red-700">SPECIAL</div>
                    <div className="text-3xl md:text-4xl font-extrabold">FEE BENEFIT</div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -left-4 top-1/2 w-8 h-16 bg-red-700 rounded-l-full"></div>
                <div className="absolute -right-4 top-1/2 w-8 h-16 bg-red-700 rounded-r-full"></div>
              </div>
            </div>
          </div>
  
          {/* Footer Address */}
          <div className="bg-red-700 p-3 text-center">
            <div
              className="text-yellow-300 font-semibold text-lg tracking-wide"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            >
              MUZAFFARPUR OFFICE: PRATEEK TOWER&apos;S, 2ND & 3RD FLOOR, KALAMBAGH ROAD, MUZAFFARPUR-01
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  