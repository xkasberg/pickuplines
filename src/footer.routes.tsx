import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const date = new Date().getFullYear();
const logo = '../public/noun-laugh-2986877.svg';

export default {
  company: {
    href: "isomorphi.cloud",
    name: "isomorphi corporation",
    logo: logo,
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <LinkedInIcon />,
      link: "",
    },
  ],
  links: [
    {
      href: "/privacy",
      name: "privacy policy",
    },
    {
      href: "/terms",
      name: "terms & conditions",
    },
  ],
  light: true,
  date: date
};

