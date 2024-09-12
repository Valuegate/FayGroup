import TransformImage from "@/public/assets/blogs/transformBusiness.svg";
import Website from "@/public/assets/blogs/website.svg";
import Components from "@/public/assets/blogs/Content Components.svg";

export const allBlogs = [
  {
    title:
      "Transform Your Business Digitally, Digital Transformation Strategy, Future-Proof Business",
    image: TransformImage,
    link: "embrace-the-future-transform-your-business-digitally",
    description:
      "Digital transformation involves integrating digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.",
    alt: "Transform Your Business Digitally",
  },
  {
    title:
      "10 Essential Tips to Design a User-Friendly Website That Drives Conversions",
    image: Website,
    link: "user-friendly-website-design-tips",
    alt: "10 Essential Tips to Design a User-Friendly Website That Drives Conversions",
  },
  {
    title:
      "How to Create Content That Resonates: A Guide to Effective Content Marketing",
    image: Components,
    link: "how-to-create-content-that-resonates",
    alt: "How to Create Content That Resonates",
  },
];

const baseEbookPath = "https://mbfaygroup.com/ebooks";

export const allEbooks = [
  {
    name: "Ultimate Guide to Enhancing Your Digital Presence",
    image: `/assets/ebooks/Ultimate Guide to Enhancing Your Digital Presence.png`,
    path: `${baseEbookPath}/Ultimate%20Guide%20to%20Enhancing%20Your%20Digital%20Presence.pdf`,
  },
];
