import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="Dices" />
        </div>
        <div className='Content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
}

const Container = styled.div`
    max-width: 1180px;    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    .Content h1{
        font-size: 96px;
        white-space: nowrap;
}
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    border-radius: 8px;
    background-color: black;
    color: white;
    border: none;
    font-size: 16px;
    &:hover{
        background-color: #333;
        cursor: pointer;
    }
`;

export default StartGame;