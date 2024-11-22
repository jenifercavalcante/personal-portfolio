export default function Stars() {
  const starsArray = Array.from({ length: 200 }, (_, index) => index + 1);

  return (
    <div className="stars">
      {starsArray.map((star) => {
        return (
          <span
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            key={star}
          ></span>
        );
      })}
    </div>
  );
}
