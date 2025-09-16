import TestimonialSliderClient from "./TestimonialSliderClient";

const testimonials = [
  {
    id: 1,
    name: "Customer 1",
    image: "/assets/images/testi.jpg",
    rating: 4.4,
    stars: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel morbi cursus sed sodales molestie",
  },
  {
    id: 2,
    name: "Customer 2",
    image: "/assets/images/testi.jpg",
    rating: 4.6,
    stars: 5,
    text: "Another example testimonial with slightly different text to show variation in content and styling.",
  },
  {
    id: 3,
    name: "Customer 3",
    image: "/assets/images/testi.jpg",
    rating: 4.2,
    stars: 4,
    text: "More testimonial text here. Great service and friendly support, highly recommended!",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="max-w-[1400px] w-[95%] mx-auto md:py-10 py-0">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Customer Says
      </h2>
      <TestimonialSliderClient testimonials={testimonials} />
    </section>
  );
}
