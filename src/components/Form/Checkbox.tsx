import React from "react";
import { ChangeHandler, FieldError, RefCallBack } from "react-hook-form";
import { 
    Container, 
    LabelContainer, 
    CheckboxProvider, 
    CheckboxName, 
    CheckboxInput, 
    Error 
} from "./styles";


type RegisterProps = {
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
}


interface CheckboxProps {
    options: string[];
    label?: string;
    name: string;
    error?: FieldError | undefined;
    register: RegisterProps;
}



export function Checkbox({
    options,
    label = "",
    error,
    name,
    register
}: CheckboxProps) {
    return (
        <Container>
            {label.length > 0 && (
                <LabelContainer isLine={true}>{label}</LabelContainer>
            )}

            {options.map((item, index) => (
                <CheckboxProvider key={index} id={name}>
                    <CheckboxName htmlFor={name}>
                        {item}
                    </CheckboxName>

                    <CheckboxInput 
                        type="checkbox" 
                        value={item}
                        id={item} 
                        className={!!error ? "error" : ""} 
                        {...register} />
                </CheckboxProvider>
            ))}

            {!!error && <Error>"O Campo é obrigatório"</Error>}
        </Container>
    )
}