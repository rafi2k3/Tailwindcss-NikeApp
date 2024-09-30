import { services } from "../constarn";
import ServiceCard from '../compoents/ServiceCard'

export const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service)=>(<ServiceCard key={service.label}{...service}/>)
    )}
    </section>)
}
export default Service;
