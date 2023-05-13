import Image from "next/image"
import { Fragment } from 'react';
import ExploreImage from '../image/hero-image-01.jpg'
import InfoImage from '../image/info.jpg'
import InfoImage2 from '../image/info2.jpg'
const Feature = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6">
    {/* Feature 1 */}
    <div class="flex flex-col lg:flex-row mt-7">
  <div class="lg:w-1/2 lg:p-4">
    <p class="text-white">Features 1</p>
    <h2 class="text-white text-3xl font-bold mb-4">Let's Create AI-Powered Content With A Single Click.</h2>
    <p class="text-white text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam at magna iaculis gravida. Fusce bibendum suscipit arcu vel venenatis. Pellentesque semper laoreet mauris, id bibendum justo tristique eget.</p>
    <button class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </div>
  <div class="lg:w-1/2">
    <Image class="w-full h-full object-cover" src={ExploreImage} alt="Random Image" />
  </div>
</div>


{/* feature 2 */}
<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8  mt-36">
      <div className="md:w-1/2">
        <Image
          src={ExploreImage}
          alt="Example image" height={200} width={200}
          className="w-full object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
      <p className="text-white">Features 2</p>
        <h2 className="text-white text-3xl font-bold mb-4">Let's Create AI-Powered Content With A Single Click.</h2>
        <p className="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna magna, sit amet maximus nulla vestibulum ac. Suspendisse tempor, tortor ut venenatis mollis, odio est ullamcorper est, quis dictum justo ex at elit. Donec lobortis augue eu elit auctor interdum.
        </p>
        <button className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
      </div>
    </div>


{/* for optional feature 2 */}
{/* 

    <div class="flex flex-col lg:flex-row mt-7">
  <div class="lg:w-1/2 lg:p-4">
    <p class="text-white">Features 1</p>
    <h2 class="text-white text-3xl font-bold mb-4">Let's Create AI-Powered Content With A Single Click.</h2>
    <p class="text-white text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam at magna iaculis gravida. Fusce bibendum suscipit arcu vel venenatis. Pellentesque semper laoreet mauris, id bibendum justo tristique eget.</p>
    <button class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </div>
  <div class="lg:w-1/2">
    <Image class="w-full h-full object-cover" src={ExploreImage} alt="Random Image" />
  </div>
</div> */}



{/* Feature 3 */}
<div class="flex flex-col lg:flex-row mt-36">
  <div class="lg:w-1/2 lg:p-4">
    <p class="text-white">Features 3</p>
    <h2 class="text-white text-3xl font-bold mb-4">Let's Create AI-Powered Content With A Single Click.</h2>
    <p class="text-white text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec quam at magna iaculis gravida. Fusce bibendum suscipit arcu vel venenatis. Pellentesque semper laoreet mauris, id bibendum justo tristique eget.</p>
    <button class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
  </div>
  <div class="lg:w-1/2">
    <Image class="w-full h-full object-cover" src={ExploreImage} alt="Random Image" />
  </div>
</div>

    </main>
  )
}

export default Feature
