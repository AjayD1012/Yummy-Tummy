import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-[100px]">
      <div className="w-[85%] mx-auto my-5 ">
        <h1 className="font-bold text-3xl font-Josefin Sans text-[#1a2f33] ">
          Welcome to Yummy Tummy!
        </h1>
        <p className="text-xl py-2 text-justify font-[Josefin Sans]">
          We believe food is an experience that brings joy and excitement to
          life. Born out of a love for culinary delights, Yummy Tummy started in
          a small kitchen where we experimented with flavors and ingredients.
          Today, we've grown into a platform sharing our favorite recipes,
          cooking tips, and food stories.
        </p>
        <div className="container flex mx-auto px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://cdn.hashtagloyalty.com/thrive-microsite/special.svg"
              alt=""
              className=" object-cover object-center rounded gap-3"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center">
            <h1 className=" font-[Josefin Sans] sm:text-4xl text-3xl mb-4 font-medium text-[#1a2f33] ">
              Our Mission
            </h1>
            <p className="text-xl py-2 text-justify gap-1 pb-2">
              Our mission is to inspire and empower you to create delightful
              meals at home. Whether you're a seasoned chef or a beginner, our
              recipes are easy to follow, nutritious, and incredibly tasty. From
              quick weeknight dinners to elaborate holiday feasts, our diverse
              collection caters to all tastes and dietary preferences.
            </p>
          </div>
        </div>

        <div className="container flex mx-auto px-5 py-14 md:flex-row flex-col items-center">
          <div
            className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center"
            id="josefin"
          >
            <h2 className="font-bold py-3 text-2xl text-[#1a2f33]">
              Too Far? No Problem!
            </h2>
            <p className="text-xl py-2 text-justify gap-1 pb-2">
              Craving Yummy Tummy but can't visit us in person? We've got you
              covered with our convenient delivery service. Enjoy your favorite
              dishes delivered straight to your doorstep, ensuring you never
              miss out on a delicious meal, no matter where you are.
            </p>
            <p className="text-xl py-2 text-justify gap-1 pb-2">
              We share our best tips and tricks to help you master the art of
              cooking, making your time in the kitchen enjoyable and
              stress-free. Discover the stories behind your favorite dishes, the
              cultural significance of different foods, and personal anecdotes
              that make cooking a cherished activity. Meet our team of food
              enthusiasts, chefs, and home cooks dedicated to creating and
              sharing delicious recipes. Each recipe we share is tried, tested,
              and loved. Thank you for visiting Yummy Tummy. Let's make every
              meal a celebration of flavors and joy!{" "}
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://cdn.hashtagloyalty.com/thrive-microsite/delivery-far.svg"
              alt=""
              className=" object-cover object-center rounded"
            />
          </div>
        </div>
      </div>

      {/* <div className='container flex mx-auto px-5 py-24 md:flex-row flex-col items-center'>
      
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center'> */}

      {/* <h3 className='font-bold py-3 text-2xl '>
Too Far? No Problem!</h3>
<p className='py-3'>Craving Yummy Tummy but can't visit us in person? We've got you covered with our convenient delivery service. Enjoy your favorite dishes delivered straight to your doorstep, ensuring you never miss out on a delicious meal, no matter where you are.</p>

We share our best tips and tricks to help you master the art of cooking, making your time in the kitchen enjoyable and stress-free. Discover the stories behind your favorite dishes, the cultural significance of different foods, and personal anecdotes that make cooking a cherished activity.

Meet our team of food enthusiasts, chefs, and home cooks dedicated to creating and sharing delicious recipes. Each recipe we share is tried, tested, and loved.

Join the Yummy Tummy community! Share your cooking experiences, try our recipes, and let us know how they turned out. Follow us on social media, subscribe to our newsletter, and be a part of our culinary adventure.

Thank you for visiting Yummy Tummy. Let's make every meal a celebration of flavors and joy!

          
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
         
        <img src="https://cdn.hashtagloyalty.com/thrive-microsite/delivery-far.svg" alt="" className=' object-cover object-center rounded' /> */}
      {/* </div>
       </div> */}
    </div>
  );
};

export default AboutUs;
