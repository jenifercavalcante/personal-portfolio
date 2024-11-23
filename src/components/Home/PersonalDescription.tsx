import '@/styles/home/personal_description.scss';

export default function PersonalDescription() {
  return (
    <div className="personal-description-container">
      <span className="title-wrapper">
        <span className="title">
          <span className="hilighted">Hi</span>, <br />
          I&apos;m a Front-End <br />
          Developer!
        </span>
        <span className="subtitle">Building Impactful Web Experiences</span>
      </span>

      <span className="description">
        I&apos;m passionate about delivering clean, maintainable code and building interfaces that
        delight users while driving measurable results. Let&apos;s create something remarkable
        together!
      </span>

      <div className="actions"></div>
    </div>
  );
}
