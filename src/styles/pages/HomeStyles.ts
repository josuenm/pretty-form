import styled from 'styled-components'




export const Container = styled.div`
    width: 100%;
    padding: 5rem 0;


    background: ${({ theme }) => theme.colors.background};

    display: flex;
    justify-content: center;
    align-items: center;
`


export const Content = styled.div`
    width: 450px;

    padding: 1rem;
    border-radius: .5rem;
    background: ${({ theme }) => theme.colors.secondary};
`


interface ColumnProps {
    gap?: string | number;
}

export const Column = styled.form<ColumnProps>`
    display: flex;
    flex-direction: column;

    ${({ gap }) => gap && `
        gap: ${gap}rem;
    `}
`
