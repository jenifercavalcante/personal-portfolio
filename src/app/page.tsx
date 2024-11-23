import PersonalDescription from '@/components/Home/PersonalDescription';
import Terminal from '@/components/Terminal/Terminal';

export default function Home() {
  return (
    <div className="home-container">
      <PersonalDescription />

      <Terminal />
    </div>
  );
}
