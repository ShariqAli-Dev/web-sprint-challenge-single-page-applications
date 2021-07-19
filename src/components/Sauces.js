import styled from "styled-components";

const StyledSauces = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;

  label {
    margin: 1%;
  }
`;

export default function Sauces() {
  const sauces = ["Original", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"];

  return (
    <StyledSauces>
      {sauces.map((sauce) => {
        return (
          <label key={sauce.toLowerCase()}>
            {sauce}
            <input type="radio" name="sauce" value={sauce.toLowerCase()} />
          </label>
        );
      })}
    </StyledSauces>
  );
}
