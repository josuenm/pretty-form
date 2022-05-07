import styled from 'styled-components'



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`


interface InputProps {
    type: string;
}

export const InputContainer = styled.input<InputProps>`
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: .8rem .5rem;
    border-radius: .25rem;
    color: #fff;
    outline: none;

    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }


    ${({ type }) => type === 'number' && `
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    `}

    ${({ type }) => type === 'date' && `
        font-family: 'Roboto', sans-serif;

        &::-webkit-calendar-picker-indicator {
            background-color: #5de861;
            border-radius: .25rem;
        }
    `}
`


export const Error = styled.p`
    font-size: .8rem;
    color: ${({ theme }) => theme.colors.error};
`


interface LabelProps {
    isLine?: boolean;
}

export const LabelContainer = styled.label<LabelProps>`
    color: #fff;

    ${({ isLine }) => isLine && `
        border-bottom: 1px solid #303030;
        padding-bottom: 1rem;
        margin-bottom: .5rem;
    `}
`



export const SelectContainer = styled.select`
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: .8rem .5rem;
    border-radius: .25rem;
    color: #fff;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;

    &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }
`

export const SelectProvider = styled.div`
    position: relative;
    width: 100%;
`

export const Arrows = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    width: 50px;
    height: 100%;
    background: ${({ theme }) => theme.colors.black19};
    pointer-events: none;

    border-right: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.border};

    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;

    &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }

    &::before {
        content: '▼';
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-55%, -50%) rotate(180deg);
        color: ${({ theme }) => theme.colors.primary};
        opacity: .3;
        transition: ease .4s all;
    }
    
    &::after {
        content: '▼';
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${({ theme }) => theme.colors.primary};
        opacity: .3;
        transition: ease .4s all;
    }

    select:hover + &{
        &::before {
            opacity: 1;
        }
    
        &::after {
            opacity: 1;
        }
    }
`


export const OptionContainer = styled.option`
    background: #202020;
    font-size: 1.05rem;
`


export const CheckboxProvider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .2rem 0;
`


interface CheckboxNameProps {
    htmlFor: string;
}

export const CheckboxName = styled.label<CheckboxNameProps>`
    width: 100%;
    cursor: pointer;
    color: #fff;

    ${({ htmlFor }) => htmlFor && `
        &:hover + input#${htmlFor} {
            border: 1px solid #5de861;
        }
    `}
`


export const CheckboxInput = styled.input`
    appearance: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: .25rem;
    background: ${({ theme }) => theme.colors.black19};
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &.error {
        border: 1px solid ${({ theme }) => theme.colors.error};
    }

    transition: ease .4s all;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &:checked::after {
        content: '\f00c';
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        font-size: 15px;
        color: ${({ theme }) => theme.colors.primary};
    }
`



export const SubmitButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: .25rem;
    padding: 1rem 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    cursor: pointer;

    transition: ease .4s all;
    &:hover {
        filter: brightness(.75);
    }
`