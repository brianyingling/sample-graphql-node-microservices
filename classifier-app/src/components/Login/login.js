import React from 'react'
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextInput from '#root/components/shared/TextInput';

const Label = styled.label`
    display: block;
    :not(:first-child) {
        margin-top: 0.75rem;
    }
`;

const LabelText = styled.strong`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
`;

const LoginButton = styled.button`
    display: inline-block;
    margin-top: 0.5rem;
`;

const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUserSession(email:$email, password:$password) {
            id
            user {
                email
                id
            }
        }
    }
`;

const Login = () => {
    const [createUserSession] = useMutation(mutation);
    const { 
        formState: {isSubmitting},
        handleSubmit,
        register,
    } = useForm();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        await createUserSession( { variables: { email, password }});
    });

    return (
        <form onSubmit={onSubmit}>
            <label>
                <LabelText>Email</LabelText>
                <TextInput
                    name="email"
                    type="email"
                    disabled={isSubmitting}
                    ref={register}
                />
            </label>
            <label>
                <LabelText>Password</LabelText>
                <TextInput
                    name="password"
                    type="password"
                    disabled={isSubmitting}
                    ref={register}
                />
            </label>
            <LoginButton 
                disabled={isSubmitting} 
                type="submit"
            >
                Login
            </LoginButton>
        </form>
    )
}

export default Login;
