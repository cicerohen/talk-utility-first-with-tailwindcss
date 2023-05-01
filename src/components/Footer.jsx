export const Footer = () => {
  return (
    <footer className=" h-32">
      <div className="flex h-full flex-col items-center justify-center space-y-4 px-12">
        <p className="text-center font-semibold lg:max-w-2xl">
          Obviously, it not the official Figma website. This page is just a page
          to show how easy it is to use TailwindCSS and the utilify-first
          approach to build beautyful screens.
        </p>
        <p className="text-center">
          <a href="https://github.com/cicerohen/talk-utility-first-with-tailwindcss">
            See it on Github
          </a>
        </p>
      </div>
    </footer>
  );
};
