import React from "react";
import { Container, LabelContainer, InputContainer, Error } from "./styles";


type ErrorProps = {
    type: string;
    message: string;
    ref: any;
}


interface InputProps {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    error?: ErrorProps;
}

export const Input = React.forwardRef(({
    type,
    name,
    label = "",
    placeholder,
    error,
    ...rest
}: InputProps, ref: any) => {

    return (
        <Container>
            {label.length > 0 && (
                <LabelContainer htmlFor={name}>{label}</LabelContainer>
            )}
 
            <InputContainer 
                type={type} 
                placeholder={placeholder} 
                id={name} 
                ref={ref}
                className={!!error ? "error" : ""}
                {...rest}
            />

            {!!error && <Error>{error.message}</Error>}
        </Container>
    )
 })