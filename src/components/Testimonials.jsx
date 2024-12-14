import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-7xl text-center my-10 lg:my-20 tracking-wider">What people are saying</h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((Testimonial,index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-700 font-thin">
              <p>{Testimonial.text}</p>
            <div className="flex mt-8 items-center">
              <img className="h-12 w-12 mr-6 border border-neutral-300 rounded-full" src={Testimonial.image} alt={Testimonial.user}/>
              <div>
                <h6>{Testimonial.user}</h6>
                <span className=" text-sm font-normal italic text-neutral-600">{Testimonial.company}</span>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
