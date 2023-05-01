import clsx from "clsx";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";

export const PlanCard = ({
  slug = "",
  name = "",
  product = {},
  price = "",
  billing = "",
  amenities = [],
}) => {
  const splittedName = name.trim().split(" ");
  const ctaText = splittedName[1] || splittedName[0];

  return (
    <section
      className={clsx(
        "flex flex-col justify-between rounded-md border border-t-8 border-gray-300 px-8 py-6",
        (() => {
          if (product.slug === "figma" && slug === "professional") {
            return "border-t-green-600";
          }
          if (product.slug === "figma" && slug === "organization") {
            return "border-t-blue-600";
          }

          if (product.slug === "figjam" && slug === "professional") {
            return "border-t-red-600";
          }

          if (product.slug === "figjam" && slug === "organization") {
            return "border-t-purple-600";
          }
        })()
      )}
    >
      <div>
        <h3 className="mb-8 text-center">{name}</h3>
        <p className="mb-2 text-center text-2xl">{price}</p>
        <p className="mb-8 px-16 text-center text-gray-500">{billing}</p>

        <ul className="mb-8">
          {amenities.map((amenity, index) => {
            return (
              <li
                key={amenity.id}
                className={clsx(
                  "flex items-center leading-8 text-gray-500",
                  index === 0 && slug === "organization" && "font-semibold"
                )}
              >
                <CheckIcon className="mr-2 h-4 w-4" />
                <span>{amenity.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex h-24 flex-col  justify-end  space-y-4 lg:justify-start">
        <a
          href="#"
          className={clsx(
            "block w-full rounded-md border-[3px] px-6 py-3 text-center font-semibold transition hover:-translate-y-0.5",
            (() => {
              if (slug === "starter") {
                return "border-black text-black";
              }
              if (product.slug === "figma" && slug === "professional") {
                return "border-green-600 bg-green-600 text-white";
              }

              if (product.slug === "figma" && slug === "organization") {
                return "border-blue-500 bg-blue-500 text-white";
              }

              if (product.slug === "figjam" && slug === "professional") {
                return "border-red-500 bg-red-500 text-white";
              }
              if (product.slug === "figjam" && slug === "organization") {
                return "border-purple-500 bg-purple-500 text-white";
              }
            })()
          )}
        >
          Choose {ctaText}
        </a>
        {slug !== "starter" && (
          <p className="text-center">
            <a href="#" className="underline">
              Free for students and educators
            </a>
          </p>
        )}
      </div>
    </section>
  );
};
