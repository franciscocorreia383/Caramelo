import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    background-color: skyblue;
    border-radius: 10px;
    
    height: 100px;
    padding: 0px 10px;
    margin-top: 10px;
`;

export const Info = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;