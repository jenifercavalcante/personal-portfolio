import '@/styles/home/personal_description.scss';

export default function PersonalDescription() {
  return (
    <div className="personal-description-container">
      <span className="title-wrapper">
        <h1 className="title">
          <span className="hilighted">Hi</span>, <br />
          I&apos;m a Front-End <br />
          Developer!
        </h1>
        <h2 className="subtitle">Building Impactful Web Experiences</h2>
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
