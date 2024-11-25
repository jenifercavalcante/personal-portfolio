import '@/styles/footer.scss';
import Image from 'next/image';
import Button from '../Buttons';
import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import Link from 'next/link';
import { PiFigmaLogo, PiTelegramLogo } from 'react-icons/pi';

export default function FooterContent() {
  return (
    <div className="wrapper">
      <div className="footer-content">
        <Image
          src="/images/overTriangle.png"
          className="over-triangle"
          alt="Triangle decoration"
          width={187}
          height={218}
        />

        <div className="details">
          <div className="footer-info">
            <div className="contact-info">
              <h5 className="title">Have A good WEBsite today</h5>
              <h6 className="subtitle">
                High level experience in web developing and producing quality work.
              </h6>
            </div>

            <div className="contacts-links">
              <span className="title">Contact me</span>

              <div className="buttons">
                <Link href="/">
                  <Button.White className="social-btn">
                    <SlSocialLinkedin size={20} />
                  </Button.White>
                </Link>

                <Link href="/">
                  <Button.White className="social-btn">
                    <SlSocialGithub size={20} />
                  </Button.White>
                </Link>

                <Link href="/">
                  <Button.White className="social-btn">
                    <PiTelegramLogo size={20} />
                  </Button.White>
                </Link>

                <Link href="/">
                  <Button.White className="social-btn">
                    <PiFigmaLogo size={20} />
                  </Button.White>
                </Link>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>

      <div className="copyright">
        <span>© Jenifer Cavalcante | 2024 - Front-end Developer</span>
      </div>
    </div>
  );
}
