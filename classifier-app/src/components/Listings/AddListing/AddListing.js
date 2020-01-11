import React from 'react'
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import Title from './Title';
import Description from './Description';
import {
    Button,
    Form,
    Label,
    LabelText
} from './styles';

const mutation = gql`
    mutation($description: String!, $title: String!) {
        createListing(description: $description, title: $title) {
            id
        }
    }
`;

const AddListing = ({ onAddListing: pushAddListing}) => {
    const [createListing] = useMutation(mutation);
    const {
        formState: { isSubmitting},
        handleSubmit,
        register,
        reset
    } = useForm();

    const session = useSelector(state => state.session);

    if (!session) 
        return (<p>Login to add listing</p>);
    
    const onSubmit = handleSubmit(async ({description, title}) => {
        await createListing({ variables: { description, title }});
        reset();
        pushAddListing();
    });

    return (
        <Form onSubmit={onSubmit}>
            <Title 
                isSubmitting={isSubmitting}
                register={register}
            />
            <Description 
                isSubmitting={isSubmitting}
                register={register}
            />
            <Button 
                disabled={isSubmitting} 
                type="submit"
            >
                Add Listing
            </Button>
        </Form>
    );
}

export default AddListing;
