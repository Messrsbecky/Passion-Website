import footerPattern from "../assets/Images/largeFooterPattern.png";
import ig from "../assets/Icons/instagram.svg";
import x from "../assets/Icons/X.svg";
import tg from "../assets/Icons/telegram.svg";
import tel from "../assets/Icons/phone.svg";
import mail from "../assets/Icons/email.svg";
function Footer() {
  return (
    <footer
      className="bg-Yellow bg-center bg-cover flex flex-col items-center gap-10 py-16 "
      style={{ backgroundImage: `url(${footerPattern})` }}
    >
      <div className="">
        <h2 className="text-DarkPurple">Contact Me</h2>
      </div>
      <div className="flex flex-col items-center w-full gap-10  sm:flex-row sm:justify-between sm:px-10 md:px-20 lg:px-40">
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5 items-center md:items-start">
            <h4 className="text-DarkPurple md:text-xl sm:text-lg lg:text-2xl">
              {" "}
              <img
                src={tel}
                alt="phone number"
                width={28}
                height={28}
                className="inline-flex"
              />{" "}
              Call us on
            </h4>
            <li className="text-[#3C3A3A]">
              <a
                href="tel:+23408167773022365"
                target="_self"
                rel="noopener noreferrer"
                className="text-[#3C3A3A] hover:font-bold hover:text-yellow-900 active:text-[#283b56] active:font-bold"
              >
                +234 08163022365
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5 items-center md:items-start">
            <h4 className="text-DarkPurple sm:text-lg md:text-xl lg:text-2xl">
              <img
                src={mail}
                alt="Email address"
                width={28}
                height={28}
                className="inline-flex mr-2"
              />
              Email Us At
            </h4>
            <li className="text-[#3C3A3A]">
              <a
                href="mailto:ojouyiduyilemi@gmail.com"
                target="_self"
                rel="noopener noreferrer"
                className="text-[#3C3A3A] hover:font-bold hover:text-yellow-900 active:text-[#283b56] active:font-bold"
              >
                ojouyiduyilemi@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <div>
            <h4 className="text-DarkPurple sm:text-lg md:text-xl lg:text-2xl">
              Reach us on Socials
            </h4>
          </div>
          <div className="flex items-center justify-center gap-5">
            <ul className="list-none flex items-center justify-center gap-5">
              <li className="rounded-lg active:outline-[#283b56] active:p-2">
                <a
                  href="https://www.instagram.com/mystic_union?igsh=cm5zYWFxZnBvMjhu"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ig}
                    alt="instagram link icon"
                    width={20}
                    height={20}
                    className="w-6 h-6 rounded-lg hover:pb-2 active:border active:outline-[#283b56]"
                  />
                </a>
              </li>
              <li className="rounded-lg active:outline-[#283b56] active:p-2">
                <a
                  href="https://x.com/Mystic_Union?t=gupQb-yumfwGAxEy6McRZg&s=08"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <img
                    src={x}
                    alt="x link icon"
                    width={20}
                    height={20}
                    className="w-6 h-6 rounded-lg hover:pb-2 active:border active:outline-[#283b56]"
                  />
                </a>
              </li>
              <li className="rounded-lg active:outline-[#283b56] active:p-2">
                <a
                  href="http://t.me/De_PASSIONN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={tg}
                    alt="telegram link icon"
                    width={20}
                    height={20}
                    className="w-6 h-6 hover:pb-2 active:outline rounded-lg active:outline-[#283b56]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
