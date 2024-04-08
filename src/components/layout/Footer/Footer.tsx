import { Copyright } from "@common/Copyright";
import { SocialLinks } from "@common/SocialLinks";

export const Footer = () => {
  return (
    <div className=" fixed bottom-0 right-0 left-0 hidden h-16 px-5 lg:flex lg:items-center lg:justify-between lg:px-16 ">
      <div>
        <Copyright />
      </div>
      <div className="flex w-40 justify-between">
        <SocialLinks />
      </div>
    </div>
  );
};
