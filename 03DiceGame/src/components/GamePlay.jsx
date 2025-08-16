import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector"
import styled from "styled-components";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";

const GamePlay = () => {

    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score,setScore] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [error,setError] = useState("");  
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const handleDiceClick = () => {
        setIsFlipping(true);
        if(selectedNumber === undefined) {
            setError("You have not selected any number");
            setIsFlipping(false);
            return;
        }
        setError("");
        setTimeout(() => {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }

        selectedNumber(undefined)
        setIsFlipping(false);
        }, 400); // Duration matches animation
    };
    const resetScore = () => {
        setScore(0);
    };
  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector 
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber}
            setError={setError}
            error={error}/>    
        </div>
        <div>
            <RoleDice 
            currentDice={currentDice}
            handleDiceClick={handleDiceClick}
            isFlipping={isFlipping}
            />
        </div>
        <div className="button_container">
            <OutlineButton    lineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={() => setShowRules((prev) => !prev)}>
                    {showRules ? "Hide" : "Show"} Rules
            </Button>
        </div>
        
        {showRules && <Rules />}

    </MainContainer>
  );
};

export default GamePlay;


const MainContainer = styled.div`
padding-top: 70px;
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .button_container {
        margin-top: 40px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
}
`;

