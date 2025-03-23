'use client';

import Button from '@/components/Buttons';
import Text from '@/components/Text';
import '@/styles/about-me/index.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <Button.GoBack className="btn-go-back" onClick={() => router.back()} />

      <div className="container-center">
        <div className="about-me-container">
          <div className="about-me-content">
            <Text.Wrapper>
              <Text.Hilighted>About Me?</Text.Hilighted>

              <Text.Title>I&apos;m Jenifer Cavalcante!</Text.Title>

              <Text.Subtitle>Passionate About Building & Creating with Code</Text.Subtitle>

              <Text.Description>
                I&apos;m a 24-year-old Front-End Developer who has been passionate about technology
                since childhood. I started exploring coding at a young age and turned my passion
                into a profession in 2021. I love creating clean, maintainable code and crafting
                user-friendly interfaces that provide seamless experiences.
                <br />
                <br />
                For me, development is more than just writing code—it&apos;s about bringing ideas to
                life and making a real impact. Let&apos;s build something incredible together!
              </Text.Description>
            </Text.Wrapper>

            <Button.White outline={true}>Get In Touch</Button.White>
          </div>

          <div className="about-me-image">
            <Image src="/images/Me.png" alt="Jenifer Cavalcante" width={450} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
}
