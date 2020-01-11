import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    margin-top: 0.5rem;
`;

const Form = styled.form`
    background-color: ${props => props.theme.whiteSmoke};
    margin-top: 1rem;
    padding: 1rem;
`;

const Label = styled.label`
    display: block;
    :not(:first-child) {
        margin-top: 0.5rem;
    }
`;

const LabelText = styled.strong`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

export {
    Button,
    Form,
    Label,
    LabelText
}