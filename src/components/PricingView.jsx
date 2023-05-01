import clsx from "clsx";
import { Tab } from "@headlessui/react";
import { PlanCard } from "./PlanCard";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const PricingView = ({ plans = [], user = {}, nav = [] }) => {
  const figmaPlans = plans.filter((plan) => plan.product.slug === "figma");
  const figjamPlans = plans.filter((plan) => plan.product.slug === "figjam");
  return (
    <div>
      <Header user={user} nav={nav} />
      <main>
        <Tab.Group as="div">
          <Tab.List className="sticky top-0 flex flex-col justify-center bg-white px-8 py-4">
            <div className="flex justify-center">
              <div className="flex max-w-xl flex-1 justify-center space-x-1 rounded-md bg-gray-200 p-1">
                <Tab
                  className={({ selected }) =>
                    clsx(
                      "flex-1 rounded-md p-2 sm:text-lg lg:p-4",
                      selected && "bg-white"
                    )
                  }
                >
                  <span className="hidden sm:block">
                    <span className="font-semibold">Figma</span> for design +
                    prototyping
                  </span>
                  <span className="sm:hidden">
                    <span className="font-semibold">Figma</span> design
                  </span>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    clsx(
                      "flex-1 rounded-md p-2 sm:text-lg lg:p-4",
                      selected && "bg-white"
                    )
                  }
                >
                  <span className="hidden sm:block">
                    <span className="font-semibold">FigJam</span> for
                    whiteboarding
                  </span>
                  <span className="sm:hidden">
                    <span className="font-semibold">FigJam</span> whiteboarding
                  </span>
                </Tab>
              </div>
            </div>
          </Tab.List>
          <Tab.Panels className="mt-20 px-8 lg:mx-auto lg:max-w-7xl">
            <h2 className="mb-16 text-center text-4xl font-semibold  md:text-5xl lg:text-6xl">
              Pricing
            </h2>
            <Tab.Panel className="mx-auto grid max-w-sm gap-8 lg:max-w-max lg:grid-cols-3">
              {figmaPlans.map((plan) => (
                <PlanCard key={plan.id} {...plan} />
              ))}
            </Tab.Panel>
            <Tab.Panel className="mx-auto grid max-w-sm gap-8 lg:max-w-max lg:grid-cols-3">
              {figjamPlans.map((plan) => (
                <PlanCard key={plan.id} {...plan} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <Footer />
    </div>
  );
};
