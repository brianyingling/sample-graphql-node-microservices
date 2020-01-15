import React from 'react'
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { CREATE_LISTING } from './mutations';
import Title from './Title';
import Description from './Description';
import {
    Button,
    Form,
    Label,
    LabelText
} from './styles';

const AddListing = ({ onAddListing: pushAddListing}) => {
    const [createListing] = useMutation(CREATE_LISTING);
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
