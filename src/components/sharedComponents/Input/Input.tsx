import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';
import { StringLiteralLike } from 'typescript';

interface inputType{
    name: string;
    placeholder: string;
}

export const Input = forwardRef((props: inputType, ref) => {
    return (
        <TextField
        variant = 'outlined'
        margin='normal'
        inputRef = {ref}
        fullWidth
        type='text'
        {...props}
        >

        </TextField>
    )
})