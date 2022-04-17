import { Column, Container, Content } from "src/styles/pages/HomeStyles";
import { useForm } from "react-hook-form";
import { Checkbox } from "src/components/Form/Checkbox";
import { Input } from "src/components/Form/Input";
import { Select } from "src/components/Form/Select";
import { Submit } from "src/components/Form/Submit";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormEvent, useEffect, useState } from "react";


export default function Home() {

    const [gender, setGender] = useState('')
    const [area, setArea] = useState('')
    const [specialErrors, setSpecialErrors] = useState({
        gender: false,
        area: false
    })


    const schema = yup.object({
        name: yup.string().required("O nome é obrigátorio"),
        email: yup.string().email("Email inválido").required("O email é obrigátorio"),
        password: yup.string().required("A senha é obrigátorio"),
        number: yup.number().required("A idade é obrigátorio"),
        birth: yup.date().required("A data é obrigátorio"),
    }).required()


    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => console.log(data);
    
    function handleForm() {
        gender === '' 
            ? setSpecialErrors((prev) => ({...prev, gender: true}))
            : setSpecialErrors((prev) => ({...prev, gender: false}))

        area === ''
            ? setSpecialErrors((prev) => ({...prev, area: true}))
            : setSpecialErrors((prev) => ({...prev, area: false}))
    }

    return(
        <Container>
            <Content>
                <Column gap="2" onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        label="Nome:"
                        {...register("name", {required:true})}
                        error={errors.name} />

                    <Input 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        label="E-mail:"
                        {...register("email", {required: true})} 
                        error={errors.email} />

                    <Input 
                        type="password" 
                        placeholder="Digite sua senha" 
                        label="Senha:"
                        {...register("password", {required: true})} 
                        error={errors.password} />

                    <Input 
                        type="number" 
                        placeholder="Digite sua idade" 
                        label="Idade:"
                        {...register("age", {required: true})} 
                        error={errors.number} />

                    <Input 
                        type="date" 
                        placeholder="Selecione sua data de aniversário" 
                        label="Aniversário:"
                        {...register("birth", {required: true})} 
                        error={errors.birth} />

                    <Select 
                        options={["Masculino", "Feminino"]}
                        label="Genêro:" 
                        name="gender"
                        gender={gender} 
                        setGender={setGender}
                        error={specialErrors.gender} />


                    <Checkbox 
                        control={control}
                        label="Selecione sua área"
                        options={["Front-end", "Back-end", "Full-Stack"]}
                        setArea={setArea}
                        area={area} 
                        error={specialErrors.area}/>

                    <Submit title="Salvar" onClick={handleForm} />
                </Column>
            </Content>
        </Container>
    )
}