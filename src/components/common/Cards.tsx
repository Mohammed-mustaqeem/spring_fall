import styled from "styled-components";

const aboutContent = [
  {
    title: "Our Mission",
    description:
      "Spring/Fall USA is dedicated to empowering international students with the knowledge, resources, and support needed to successfully navigate the F-1 visa process and achieve their dreams of studying in the United States.",
  },
  {
    title: "Our Story",
    description:
      "Founded in 2019 by former international students who faced the challenges of the visa process firsthand, Spring/Fall USA has grown into a trusted community where prospective students can find guidance, share experiences, and gain confidence in their visa journey.",
  },
  {
    title: "Our Values",
    description: [
      "Integrity & Transparency",
      "Community Support",
      "Educational Excellence",
      "Global Perspective",
    ],
  },
];

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        {aboutContent.map((item, index) => (
          <div className="card" key={index}>
            <div className="card__content">
              <h3 className="card__title">{item.title}</h3>
              {Array.isArray(item.description) ? (
                <ul className="card__list">
                  {item.description.map((point, i) => (
                    <li key={i} className="card__list-item">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="card__text">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    flex-wrap: wrap;
    // background-color: #05062d;
  }

  .card {
    width: 340px;
    height: auto;
    border-radius: 20px;
    padding: 4px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    font-family: "Inter", sans-serif;
  }

  .card__content {
    background: #05062d;
    border-radius: 17px;
    padding: 1.8rem;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  .card__text {
    font-size: 0.95rem;
    line-height: 1.9;
    color: #d1d1d1;
  }

  .card__list {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .card__list-item {
    font-size: 1rem;
    color: #ffffffcc;
  }

  @media (max-width: 1024px) {
    .card-container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Card;
