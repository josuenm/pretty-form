import React from "react";
import { ChangeHandler, FieldError, RefCallBack } from "react-hook-form";
import { 
    Container,
    LabelContainer, 
    SelectProvider, 
    SelectContainer, 
    OptionContainer, 
    Arrows, 
    Error 
} from "./styles";




type RegisterProps = {
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
}


interface SelectProps {
    options: string[];
    name: string;
    label?: string;
    error?: FieldError | undefined;
    register: RegisterProps;
}


export function Select({
    options,
    name,
    label = "",
    error,
    register
}: SelectProps) {
    return (
        <Container>
            {label.length > 0 && (
                <LabelContainer htmlFor={name}>{label}</LabelContainer>
            )}
 
            <SelectProvider>
                <SelectContainer 
                    id={name} 
                    className={!!error ? "error" : ""} 
                    {...register}>

                    <OptionContainer>
                        --Selecione um gênero--
                    </OptionContainer>

                    {options.map((item) => (
                        <OptionContainer 
                            key={item} 
                            value={item}>

                            {item}

                        </OptionContainer>
                    ))}

                </SelectContainer>
                <Arrows className={!!error ? "error" : ""} />
            </SelectProvider>

            {!!error && <Error>"O campo é obrigatório"</Error>}
        </Container>
    )
}