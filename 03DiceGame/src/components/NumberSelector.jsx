import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  setError,
  error,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            $isSelected={value === selectedNumber} // ✅ transient prop
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  &:hover{
    cursor: pointer;
    background-color: black;
    color: white;
  }
  background-color: ${(props) => (props.$isSelected ? "black" : "white")}; // ✅ use $isSelected
  color: ${(props) => (!props.$isSelected ? "black" : "white")};
`;
