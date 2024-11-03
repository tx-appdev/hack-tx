import './CherryBlossom.css';

const CherryBlossomPetals = () => {
  const petals = Array.from({ length: 36 });

  return (
    <div className="petals-container">
      {petals.map((_, index) => (
        <div className="petal" key={index} />
      ))}
    </div>
  );
};

export default CherryBlossomPetals;