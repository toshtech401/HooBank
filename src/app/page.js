import Billing from '@/components/LandingPage/Billing'
import Business from '@/components/LandingPage/Business'
import CardDeal from '@/components/LandingPage/CardDeal'
import Clients from '@/components/LandingPage/Clients'
import Footer from '@/components/LandingPage/Footer'
import Hero from '@/components/LandingPage/Hero'
import Navbar from '@/components/LandingPage/Navbar'
import Service from '@/components/LandingPage/Service'
import Stats from '@/components/LandingPage/Stats'
import Testimonials from '@/components/LandingPage/Testimonials'

export default function Home() {
  return (
    <div className='bg-primary text-white flex flex-col gap-[30px] items-center justify-center  w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <Service />
      <Footer />
    </div>
  )
}
