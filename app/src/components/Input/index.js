import React from "react";
import { InputComponent, InputWrapper, Label } from "./styles";

export default function Input({ value, setValue, refer, label, handleRequest }) {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <InputComponent 
                ref={refer}
                value={value}
                onChangeText={setValue}
                onEndEditing={handleRequest}
            />
        </InputWrapper>
    )
}