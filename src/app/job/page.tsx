export default function JobListingPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-1 sm:px-2 md:px-4 mt-2 sm:mt-4 md:mt-6">
          <div className="flex flex-col lg:flex-row gap-1 sm:gap-2 md:gap-4">
            {/* Filter Section */}
            <aside className="bg-white shadow-md rounded-md p-1 sm:p-2 md:p-4 w-full lg:w-1/4">
              <h2 className="font-bold mb-1 sm:mb-2 md:mb-4 text-xs sm:text-sm md:text-lg">Filter</h2>
              <div className="mb-1 sm:mb-2 md:mb-4">
                <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Pakistan"
                  className="w-full px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-2 border rounded-md text-xs sm:text-sm md:text-base"
                />
              </div>
              <div className="mb-1 sm:mb-2 md:mb-4">
                <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Services</label>
                <div className="space-y-1 sm:space-y-2">
                  {['Babysitter', 'Nanny', 'School Pickups'].map((service, index) => (
                    <div key={index} className="flex items-center space-x-1 sm:space-x-2">
                      <input type="checkbox" id={service} className="form-checkbox" />
                      <label htmlFor={service} className="text-xs sm:text-sm md:text-base">{service}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-1 sm:mb-2 md:mb-4">
                <label className="block text-xs sm:text-sm md:text-base font-medium mb-1">Price</label>
                <div className="flex items-center justify-between text-xs sm:text-sm md:text-base">
                  <span>$32/h</span>
                  <span>$80/h</span>
                </div>
                <input type="range" min="32" max="80" defaultValue="56" className="w-full" />
              </div>
              <button className="w-full py-1 sm:py-2 md:py-3 bg-orange-500 text-white font-bold rounded-md text-xs sm:text-sm md:text-base">
                Apply Filter
              </button>
              <button className="w-full py-1 sm:py-2 md:py-3 mt-1 sm:mt-2 bg-gray-200 font-bold rounded-md text-xs sm:text-sm md:text-base">
                Reset Filter
              </button>
            </aside>
  
            {/* Job Listings Section */}
            <section className="w-full lg:w-3/4">
              <div className="mb-1 sm:mb-2 md:mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <h2 className="font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-0">124 Results</h2>
                <input
                  type="text"
                  placeholder="Search job"
                  className="px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-2 border rounded-md w-full sm:w-1/2 text-xs sm:text-sm md:text-base"
                />
              </div>
  
              <div className="space-y-1 sm:space-y-2 md:space-y-4">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-md rounded-md p-1 sm:p-2 md:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between"
                  >
                    <div className="flex items-start">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                        alt="Profile"
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full mr-1 sm:mr-2 md:mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-xs sm:text-sm md:text-base">Alanna Doe</h3>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base">Need a Trustworthy Babysitter</p>
                        <p className="text-gray-500 text-xs sm:text-sm md:text-base">Melbourne · 11km</p>
                      </div>
                    </div>
                    <div className="mt-1 sm:mt-2 md:mt-0">
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base">1 Child · 8h/Day · $32/h · 98% match</p>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                      </p>
                    </div>
                    <div className="mt-1 sm:mt-2 md:mt-0">
                      <button className="py-1 px-2 sm:py-2 sm:px-4 md:py-3 md:px-6 bg-orange-500 text-white rounded-md text-xs sm:text-sm md:text-base">
                        View Job and Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
  