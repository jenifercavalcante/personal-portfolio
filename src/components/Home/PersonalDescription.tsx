'use client';

import '@/styles/home/personal_description.scss';
import Button from '../Buttons';
import { useRouter } from 'next/navigation';
import Text from '../Text';

export default function PersonalDescription() {
  const router = useRouter();

  return (
    <div className="personal-description-container">
      <Text.Wrapper>
        <Text.Title>
          <Text.Hilighted>Hi</Text.Hilighted>, <br />
          I&apos;m a Front-End <br />
          Developer!
        </Text.Title>

        <Text.Subtitle>Building Impactful Web Experiences</Text.Subtitle>

        <Text.Description>
          I&apos;m passionate about delivering clean, maintainable code and building interfaces that
          delight users while driving measurable results. Let&apos;s create something remarkable
          together!
        </Text.Description>
      </Text.Wrapper>

      <div className="actions">
        <Button.White
          onClick={() => {
            router.push('/about-me');
          }}
        >
          About Me
        </Button.White>
        <Button.White outline={true}>Get In Touch</Button.White>
      </div>
    </div>
  );
}
