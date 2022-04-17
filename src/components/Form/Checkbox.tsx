import React from "react";
import { Container, LabelContainer, CheckboxProvider, CheckboxName, CheckboxInput, Error } from "./styles";




interface CheckboxProps {
    options: string[];
    label?: string;
    control: any;
    error: boolean;
    area: string;
    setArea: (value: string) => void;
}

export function Checkbox({
    options,
    label = "",
    control,
    area,
    setArea,
    error,
    ...rest
}: CheckboxProps) {
    return (
        <Container>
            {label.length > 0 && (
                <LabelContainer isLine={true}>{label}</LabelContainer>
            )}

            {options.map((item, index) => (
                <CheckboxProvider key={index}>
                    <CheckboxName htmlFor={item}>
                        {item}
                    </CheckboxName>

                    <CheckboxInput 
                        value={item}
                        checked={area === item}
                        onChange={() => setArea(item)}
                        type="checkbox" 
                        id={item}
                        {...rest} />
                </CheckboxProvider>
            ))}

            {!!error && <Error>"O Campo é obrigatório"</Error>}
        </Container>
    )
}