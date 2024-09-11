import React from 'react'

import LocationDetailCard from '../component/location/LocationDetailCard';

const Location = () => {
  return (
    <>
      <div className="w-full lg:h-[20rem] flex justify-center items-center bg-[#F7F7F7]">
        <div className="container flex gap-4 p-4">
          <div className="sm:w-[65%] w-[50%] flex items-center">
            <h1 className="sm:text-4xl sm:font-bold text-base font-medium text-[#333333] sm:w-[45rem] w-full">
              Food Delivery from Dhaka’s Best Restaurants
            </h1>
          </div>
          <div className="sm:w-[35%] w-[50%]">
            <img
              src="https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-bd.png?width=1920"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="container p-4 flex flex-col gap-4">
          <h4 className="text-2xl font-bold mt-[4rem] text-[#333333]">
            All restaurants
          </h4>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
            }}
          >
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
            <LocationDetailCard />
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#707070]">
                Fast food delivery in Dhaka
              </h4>
              <p className="text-sm text-justify text-[#707070]">
                As the bustling capital of Bangladesh, it's no wonder that
                Dhaka's culinary scene is something special. This cultural hub
                offers plenty in the way of delicious dishes, from authentic
                Bangladesh recipes perfected over generations, to fabulous
                fusion dishes that bring together the best flavours and
                ingredients from across southern Asia and beyond. With
                foodpanda, you've easy access to this diverse dining scene, with
                straightforward online ordering and express delivery so you can
                enjoy eating in style without breaking a sweat. Whether it's a
                brilliant brunch or last-minute lunch, mouth-watering dinner or
                late-night feast, you've plenty to pick from in Dhaka.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#707070]">
                Dine in the easy way with foodpanda
              </h4>
              <p className="text-sm text-justify text-[#707070]">
                As the bustling capital of Bangladesh, it's no wonder that
                Dhaka's culinary scene is something special. This cultural hub
                offers plenty in the way of delicious dishes, from authentic
                Bangladesh recipes perfected over generations, to fabulous
                fusion dishes that bring together the best flavours and
                ingredients from across southern Asia and beyond. With
                foodpanda, you've easy access to this diverse dining scene, with
                straightforward online ordering and express delivery so you can
                enjoy eating in style without breaking a sweat. Whether it's a
                brilliant brunch or last-minute lunch, mouth-watering dinner or
                late-night feast, you've plenty to pick from in Dhaka.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#707070]">
                Browse first-rate menus from the best restaurants in town
              </h4>
              <p className="text-sm text-justify text-[#707070]">
                Ordering food online can be a risky venture. If you've had bad
                luck in the past with second-rate food and poor service, let
                foodpanda change the way you think about ordering online. Our
                team has picked through some of the best restaurant menus in the
                city, bringing you a first class selection of cuisines that will
                suit every palate. Looking to keep it simple? Order in from your
                favourite fast food chains like Burger King. Craving a slice of
                freshly cooked pizza? Pizza End, Italian Pizza House and Pizza
                Margherita are just a few of the popular eateries you'll find
                with foodpanda. What's more, we're constantly adding new menu to
                our directory, meaning you'll never be short on options when it
                comes to ordering in.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-bold text-[#707070]">
                Take your pick from classic Dhaka dishes and specialties
              </h4>
              <p className="text-sm text-justify text-[#707070]">
                Like much of Bangladesh, Dhaka is known for its staples of fish,
                vegetables, lentils and rice, while curries are commonplace.
                There's plenty of comforting flavours and generous portions to
                be found at many a restaurant in this bustling city. Feast on
                fresh naans and kebabs packed with succulent fillings, bite into
                meaty biryani or indulge your taste buds with local delicacies
                like Morog Pulao. However big or small your appetite, you'll
                find something to satisfy when you opt to order food delivery
                with foodpanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location