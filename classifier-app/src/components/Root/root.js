import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gql from 'graphql-tag';
import styled from 'styled-components';
import graphqlClient from '#root/api/graphqlClient';
import { setSession } from '#root/store/ducks/session';
import AccountDetails from '../AccountDetails';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    width: 80rem;
`;

const Content = styled.div`
    flex: 1;
    margin-right: 1rem;
`;

const Sidebar = styled.div`
    flex: 0 auto;
    width: 10rem;
`;

const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    padding: 1rem;
    width: 100%;
`;

const query = gql`
    {
        userSession(me: true) {
            id 
            user {
                email 
                id
            }
        }
    }
`;

const Root = () => {
    const dispatch = useDispatch();
    const [ initialized, setInitialized ] = useState(false);

    useEffect(() => {
        graphqlClient.query({ query }).then(({ data }) => {
            if (data.userSession) {
                dispatch(setSession(data.userSession));
            }
            setInitialized(true);
        });
    }, [])

    if (!initialized)
        return "Loading...";
    return (
        <Wrapper>
            <Container>
                <Content>Blah</Content>
                <Sidebar>
                    <AccountDetails/>
                </Sidebar>
            </Container>
        </Wrapper>
    );
};

export default Root;
