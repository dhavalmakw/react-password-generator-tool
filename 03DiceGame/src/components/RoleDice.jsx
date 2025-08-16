import styled, { keyframes } from "styled-components";

const RoleDice = ({
    currentDice,
    handleDiceClick,
    isFlipping,
}) => {

  return (
    <DiceContainer >
      <div onClick={handleDiceClick}>
        <DiceImg
          src={`/images/dice_${currentDice}.png`}
          alt={`Dice ${currentDice}`}
          className={isFlipping ? "flipping" : ""}
        />
      </div>
      <p>
        Click on Dice to roll
      </p>
    </DiceContainer>
  );
};

export default RoleDice;

const flip = keyframes`
  0% { transform: rotateY(0deg);}
  50% { transform: rotateY(90deg);}
  100% { transform: rotateY(0deg);}
`;

const DiceImg = styled.img`
  width: 200px;
  height: 200px;
  &.flipping {
    animation: ${flip} 0.4s;
  }
`;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  p{    
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
`;