import { ChangeHandler, FieldError, RefCallBack } from "react-hook-form";
import { Container, LabelContainer, InputContainer, Error } from "./styles";








type RegisterProps = {
    name: string;
    onBlur: ChangeHandler;
    onChange: ChangeHandler;
    ref: RefCallBack;
}



interface InputProps {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    error?: FieldError | undefined;
    register: RegisterProps;
}



export function Input({
    type,
    name,
    label = "",
    placeholder,
    error,
    register,
}: InputProps) {




    return (
        <Container>
            {label.length > 0 && (
                <LabelContainer htmlFor={name}>{label}</LabelContainer>
            )}
 
            <InputContainer 
                type={type} 
                placeholder={placeholder} 
                id={name} 
                className={!!error ? "error" : ""} 
                {...register} />

            {!!error && <Error>{error.message}</Error>}
        </Container>
    )
}