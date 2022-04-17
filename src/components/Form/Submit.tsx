import { SubmitButton } from "./styles";




interface SubmitProps {
    title: string; 
    onClick: () => void;
}


export function Submit({ title, ...rest }: SubmitProps) {
    return (
        <SubmitButton type="submit" {...rest}>
            {title}
        </SubmitButton>
    )
}