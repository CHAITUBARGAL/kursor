import Image from "next/image"
import logo from '../image/logo.jpg'
import logo2 from '../image/logo2.png'


const Features2 = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="font-bold text-5xl text-white" data-aos="fade-up">
          Write Better Content Faster, The Future Of AI Writing Tools is Here 
          </h1>
      </div>
 <div className="flex mt-12">
      <div className="w-1/3">
        <Image src={logo2} alt="Image 1" width={50} height={50} />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content</h1>
        <p className="text-white mt-5">A Magical Tool to Optimize you content for the first know who you're targeting. Identify your target. 1</p>
        <button className="mt-8 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>


    
      </div>
      <div className="w-1/3">
        <Image src={logo2} alt="Image 3" width={50} height={50}  />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content 3</h1>
        <p className="text-white mt-5">A Magical Tool to Optimize you content for the first know who you're targeting. Identify your target. 3</p>
        <button class=" mt-8 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
      </div>
      <div className="w-1/3">
        <Image src={logo2} alt="Image 4" width={50} height={50}  />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content 4</h1>
        <p className="text-white mt-5">A Magical Tool to Optimize you content for the first know who you're targeting. Identify your target. 4</p>
        <button class=" mt-8 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
      </div>
    </div>

<div className="mt-24">

    <div className="flex">
      <div className="w-1/3">
        <Image src={logo2} alt="Image 1" width={50} height={50} />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content</h1>
        <p className="text-white mt-5">A Magical Tool to Optimize you cong. Identify your target. 1</p>
        <button class=" mt-8 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

    
      </div>
      <div className="w-1/3">
        <Image src={logo2} alt="Image 3" width={50} height={50}  />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content 3</h1>
        <p className="text-white mt-5">A Magical Tool to Optimize you content fify your target. 3</p>
        <button class=" mt-8 bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
      </div>
      <div className="w-1/3">
        <Image src={logo2} alt="Image 4" width={50} height={50}  />
        <h1 className="text-white text-xl font-bold mt-5">Writing Blog Content 4</h1>
        <p className="text-white mt-5">A Magical Tool to Optimizee targeting. Identify your target. 4</p>
        <button class=" mt- bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
</div>
      </div>
    </div>




    </main>
  )
}

export default Features2
