import { FaStar } from "react-icons/fa";
import { playfair } from "@/app/fonts";

interface TestimonialItemProps {
  className?: string
  name: string
  stars: number
  text: string
}

const TestimonialItem = ({ className, name, stars, text }: TestimonialItemProps) => {

  return (
    <div className={className}>
        <h4 className={`${playfair.className} font-bold text-2xl text-ml-primary mb-2`}>{name}</h4>
        <div className="flex gap-1 items-center mb-6">
        {
          Array.from({length: stars}).map((_, index) => (
            <FaStar key={`star-${index}`} className="text-[#FFBB00]" />
          ))
        }
        </div>
        <p className="font-light italic text-center text-[#2a2a2a]">
          {text}
        </p>
      </div>
  )

}

export default TestimonialItem