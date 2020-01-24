import React from 'react'
import Textarea from '#root/components/Shared/Textarea';
import { Label, LabelText } from './styles';

const Description = ({ isSubmitting, register }) => {
    return (
        <Label>
            <LabelText>Description</LabelText>
            <Textarea
                disabled={isSubmitting}
                name="description"
                ref={register}
                type="text"
            />
        </Label>
    );
}

export default Description
