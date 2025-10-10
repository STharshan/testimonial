import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Olivia Brown",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    title: "Terrific auto repair shop!",
    text: "Came in for walk-in inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    title: "Outstanding service!",
    text: "The team was professional and efficient. They diagnosed the issue quickly and had my car ready ahead of schedule. Pricing was fair and transparent. Will definitely return!",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    title: "Highly professional team",
    text: "I've been coming here for years and they never disappoint. The staff is knowledgeable, honest, and always goes the extra mile. Best auto shop in town!",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    title: "Excellent experience",
    text: "Fast, reliable, and affordable. They kept me updated throughout the repair process and explained everything clearly. Couldn't ask for better service!",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    title: "Trustworthy and reliable",
    text: "Finally found a mechanic I can trust! They're honest about what needs to be fixed and never try to upsell unnecessary services. Quality work at reasonable prices.",
    rating: 5
  },
  {
    id: 6,
    name: "David Martinez",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    title: "Top-notch service",
    text: "Impressed by the attention to detail and customer care. They treated my car like it was their own. The waiting area is comfortable too. Five stars all around!",
    rating: 5
  }
];

export default function App () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, cardsPerView, isAutoPlaying]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Background Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12 sm:mb-16">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop" 
                alt="Auto repair service - mechanic with customer"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-red-500 text-sm sm:text-base font-semibold tracking-wider uppercase mb-2 sm:mb-4">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              What <span className="text-red-500">Customers</span> Say
            </h2>
            <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our auto repair services.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:bg-zinc-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 border border-zinc-800 hover:border-red-500/30">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">
                      {testimonial.title}
                    </h3>

                    {/* Text */}
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-red-500/30"
                      />
                      <div>
                        <p className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Mobile */}
          <div className="flex lg:hidden justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-12">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-red-500 w-8'
                  : 'bg-zinc-700 w-2 hover:bg-zinc-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}