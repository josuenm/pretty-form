import React, { Dispatch, SetStateAction } from "react";
import { Container, LabelContainer, SelectProvider, SelectContainer, OptionContainer, Arrows, Error } from "./styles";



interface SelectProps {
    options: string[];
    name: string;
    label?: string;
    error: boolean;
    gender: string;
    setGender: Dispatch<SetStateAction<string>>;
}


export function Select({
    options,
    name,
    label = "",
    gender,
    setGender,
    error,
    ...rest

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
                    onChange={(e) => setGender(e.target.value)}
                    {...rest}>

                    <OptionContainer value="">
                        Selecione um gênero
                    </OptionContainer>

                    {options.map((item, index) => (
                        <OptionContainer 
                            key={index} 
                            value={item} >

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