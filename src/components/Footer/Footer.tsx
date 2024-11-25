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
                <Link
                  href="https://www.linkedin.com/in/jenifer-cavalcante-183417218"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button.White className="social-btn" aria-label="Linkedin">
                    <SlSocialLinkedin size={20} />
                  </Button.White>
                </Link>

                <Link
                  href="https://github.com/jenifercavalcante"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button.White className="social-btn" aria-label="Github">
                    <SlSocialGithub size={20} />
                  </Button.White>
                </Link>

                <Link href="https://t.me/jeninjeni" target="_blank" rel="noopener noreferrer">
                  <Button.White className="social-btn" aria-label="Telegram">
                    <PiTelegramLogo size={20} />
                  </Button.White>
                </Link>

                <Link
                  href="https://www.figma.com/@jenifercavalcan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button.White className="social-btn" aria-label="Figma">
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
