import Hero from '@/customcomps/hero'
import Heroright from '@/customcomps/heroright';

export default function Home() {
  return (
    <>
      <h1 className='font-bold text-xl p-2'>Latest Blogs</h1>
      <div >
        <Hero />
        
        <div
          
        >
          <Heroright />
        </div>
      </div>
    </>
  );
}
