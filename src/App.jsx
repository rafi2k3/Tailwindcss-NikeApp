
import Navbar from "./compoents/Navbar";
import {Hero,PopularProduct,Service,SpecialOffer,Subcribe,SuperQuality,Footer, CustomerReviews}  from "./section/index"

const App=()=>(
  <main className="relative">
   <section className="xl:padding-1
   wide:paddng-r padding-b" >
     <Navbar/>
     <Hero/>
    
   </section>
   <section className="padding">
     <PopularProduct/>
    
   </section>
   <section className="padding">
     <SuperQuality/>
   </section>
   <section className="padding">
     <Service/>
   </section>
   <section className="padding">
    <SpecialOffer/>
   
   </section>
   <section className="bg-pale-blue padding">
     <CustomerReviews/>
   </section>
   <section className="padding-x
   sm:py-32 py-16 w-full">
     <Subcribe/>
   </section>
   <section className="bg-black
   padding-x padding-t pb-8">
     <Footer/>
   </section>
  </main>
);
export default App;