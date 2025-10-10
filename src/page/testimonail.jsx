import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Olivia Brown",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      title: "Terrific auto repair shop!",
      text: "Came in for 'walk-in' inspection and oil change. Brown is delight to deal with. He took my car right in, and completed work in a short time. Highly recommend the shop.",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    },
    {
      name: "James Wilson",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      title: "Outstanding service!",
      text: "The team was professional and efficient. They diagnosed the issue quickly and had my car ready ahead of schedule. Pricing was fair and transparent. Will definitely return!",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1603481546579-96b9cb4e1e7a?w=800&h=600&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      title: "Highly professional team",
      text: "I've been coming here for years and they never disappoint. The staff is knowledgeable, honest, and always goes the extra mile. Best auto shop in town!",
      rating: 5,
      bgImage:
        "https://images.unsplash.com/photo-1619642767438-6c62bfc6a9cf?w=800&h=600&fit=crop",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-red-500 uppercase font-semibold text-sm tracking-widest mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          What <span className="text-red-500">Customers</span> Say
        </h2>
      </div>

      {/* Main Testimonial Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-500 ease-in-out">
        {/* Left Side - Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
            alt={testimonial.name}
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover grayscale"
          />
        </div>

        {/* Right Side - Testimonial Card */}
        <div className="relative bg-white text-gray-900 rounded-2xl shadow-2xl p-6 sm:p-10">
          {/* Stars */}
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
            {testimonial.title}
          </h3>

          {/* Text */}
          <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>

          {/* Profile */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-red-500/30"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>

          {/* Quotation mark */}
          <div className="text-red-500/20 text-6xl font-serif absolute bottom-8 right-10 hidden sm:block">
            &rdquo;
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={handlePrev}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={handleNext}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-red-500 w-8"
                : "bg-zinc-700 w-2 hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
