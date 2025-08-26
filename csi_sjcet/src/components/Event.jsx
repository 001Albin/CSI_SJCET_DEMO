import React, { useEffect, useRef, useState } from "react";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";

const eventImages = [event1, event2, event3, event4, event5];
const eventTitles = [
  "Tech Symposium 2023",
  "Hackathon Excellence",
  "Industry Workshop",
  "Career Development Summit",
  "Innovation Challenge"
];
const eventDescriptions = [
  "Annual technology conference featuring expert speakers and cutting-edge topics",
  "24-hour coding competition showcasing student talent and creativity",
  "Hands-on session with industry professionals on emerging technologies",
  "Career guidance and networking event with top tech companies",
  "Competition to develop innovative solutions for real-world problems"
];

const Events = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.1; // slower auto-scroll

    const animateScroll = (time) => {
      if (previousTimeRef.current !== undefined && !isPaused) {
        const deltaTime = time - previousTimeRef.current;
        const scrollDelta = scrollSpeed * deltaTime;

        scrollPosition += scrollDelta;

        // Reset when end reached
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateScroll);
    };

    requestRef.current = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  // manual scroll handlers
  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden"
      id="Event"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Events</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the exciting events and activities conducted by CSI SJCET
          </p>
        </div>

        {/* Auto-scrolling row */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}   // 👈 mobile pause
          onTouchEnd={() => setIsPaused(false)}    // 👈 mobile resume
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-4"
          >
            {[...eventImages, ...eventImages].map((image, idx) => {
              const actualIdx = idx % eventImages.length;
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                    isHovered ? "scale-110 z-10 shadow-2xl" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(idx)}   // 👈 mobile zoom effect
                  onTouchEnd={() => setHoveredIndex(null)}    // 👈 reset zoom on release
                >
                  <div className="relative h-3/5 overflow-hidden">
                    <img
                      src={image}
                      alt={`Event ${actualIdx + 1}`}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-500 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-white text-sm font-medium">
                        Tap to view more
                      </span>
                    </div>
                  </div>
                  <div className="p-6 h-2/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {eventTitles[actualIdx]}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {eventDescriptions[actualIdx]}
                      </p>
                    </div>
                    <button className="mt-4 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center">
                      View details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center mt-10 items-center space-x-4">
          <div className="flex space-x-2">
            {eventImages.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 bg-gray-300 rounded-full hover:bg-blue-600 transition-colors cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
