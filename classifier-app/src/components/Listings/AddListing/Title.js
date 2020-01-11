import React from 'react'
import TextInput from '#root/components/Shared/TextInput';
import { Label, LabelText } from './styles';

const Title = ({ isSubmitting, register }) => {
    return (
        <Label>
            <LabelText>Title</LabelText>
            <TextInput
                disabled={isSubmitting}
                name="title"
                ref={register}
                type="text"
            />
        </Label>
    );
}

export default Title
