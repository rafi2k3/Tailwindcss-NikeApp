export const Button = ({label,iconURL,backgroundColor,borderColor,textColor}) => {
  return (
      <button className={`flex justify-center broder items-center gap-2 px-7
      py-4 font-montserrat text-lg leading-none ${backgroundColor ?`${textColor}${borderColor}`:"bg-coral-red text-white border-coral-red"}
       rounded-full  "} `}> 
        {label}
      { iconURL && <img src={iconURL} alt="arrow" 
        className="ml-6 rounded-full
        w-5 h-5"/>}
       </button>
  )
}
export default Button;