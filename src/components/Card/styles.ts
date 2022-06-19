import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    
    height: 100px;
    padding: 0px 10px;
    margin-top: 10px;

    border: 2px solid #303134;
`;

export const Info = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: white;
`;

export const Donor = styled.Text`
    color: white;
`;
