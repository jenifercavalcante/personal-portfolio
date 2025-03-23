'use client';

import Button from '@/components/Buttons';
import '@/styles/about-me/index.scss';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <Button.GoBack className="btn-go-back" onClick={() => router.back()} />
    </div>
  );
}
