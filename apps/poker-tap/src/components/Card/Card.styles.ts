import styled from "styled-components";

export const StyledCard = styled.div<{ color: string; active?: string }>`
    position: relative;
    width: 100px;
    min-width: 100px;
    height: 150px;
    border: 2px solid #f6e8e0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    color: ${props => (props.color === 'hearts' || props.color === 'diamonds') ? '#ec273f' : '#5e5b8c'};
    transform: ${props => props.active ? 'translateY(-5px)' : 'translateY(0)'};
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: "Bebas Neue", sans-serif;
    user-select: none;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-5px);
    } 
`;

export const SuitAndValueWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100%);
    margin: 5px;
    border: 2px solid transparent;
    border-radius: 6px;
    background:
        linear-gradient(to bottom, #fff, #fff) padding-box,
        linear-gradient(
                to top,
                #f6e8e0 0%,
                #fff 75%,
                #fff 100%
        ) border-box;
    background-clip: content-box, border-box;
`;

export const CardValue = styled.div`
    position: absolute;
    top: -10px;
    left: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
`;

export const CardSuit = styled.div`
    position: absolute;
    top: -10px;
    right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 40px;
    font-size: 20px;
`;

interface BigCardValueProps {
  value: string;
  color: 'hearts' | 'diamonds' | 'spades' | 'clover';
}

export const BigCardValue = styled.div<BigCardValueProps>`
    position: absolute;
    width: 100%;
    bottom: 0;
    font-size: 90px;
    text-align: center;
    font-weight: 800;

    /*
      1. Fallback "color": s’applique dans les navigateurs
         qui ne supportent pas la technique du background-clip: text.
      2. linear-gradient + background-clip: text +
         -webkit-text-fill-color: transparent
         pour appliquer le dégradé dans les navigateurs récents.
    */
    color: ${({ color }) => (color === 'hearts' || color === 'diamonds') ? 'red' : 'black'};
    background: ${({ color }) =>
            (color === 'hearts' || color === 'diamonds')
                    ? 'linear-gradient(to bottom, #ec273f, #ac2847)'
                    : 'linear-gradient(to bottom, #5e5b8c, #3e3b65)'
    };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* Exemple de décalage quand value = 10 */
    ${({ value }) =>
            Number(value) === 10 &&
            `
      transform: translateX(-2px);
    `
    }
`;




