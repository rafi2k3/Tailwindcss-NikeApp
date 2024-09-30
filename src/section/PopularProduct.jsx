import {PopularProductCard} from "../compoents/PopularProductCard";
import { products } from "../constarn";


export const PopularProduct = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12">
      <div className="flex 
      flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-red-500">Popular</span>  products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore, hic accusantium eligendi cum soluta recusandae suscipit laborum nihil vitae porro aperiam, expedita quis, et qui eius officia? Odit, nostrum. </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
        {products.map((product)=>
          <PopularProductCard key={product.name}{...product}/>

        )}
      </div>
    </section>
  )
}
export default PopularProduct;