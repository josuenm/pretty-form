import { Column, Container, Content } from "src/styles/pages/HomeStyles";
import { useForm } from "react-hook-form";
import { Checkbox } from "src/components/Form/Checkbox";
import { Input } from "src/components/Form/Input";
import { Select } from "src/components/Form/Select";
import { Submit } from "src/components/Form/Submit";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect } from "react";


interface IFormData {
    name: string;
    email: string;
    password: string;
    age: number;
    date: string;
    gender: string;
    performance: string;
}


export default function Home() {

    const genderOptions = ["Masculino", "Feminino"]
    const performanceOptions = ["Mobile", "Web", "Desktop"]

    function todaysDateConstructor() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const todaysDate = `${year}/${month}/${day}`;

        return todaysDate
    }

    const today = todaysDateConstructor()

     

    const schema = yup.object().shape({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Email inválido").required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatório"),
        age: yup.number().typeError("A idade é obrigatório").positive().integer().required("A idade é obrigatório"),
        date: yup.date().min(today, "A data não pode ser no passado").max("2022/12/30").typeError("A data é obrigatória").required("A data é obrigatória"),
        gender: yup.string().oneOf(genderOptions).required("O genêro é obrigatório"),
        performance: yup.array().required("A area de atuação é obrigatório")
    })



    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: IFormData) => {

        const date = new Date(data.date)
        const day = date.getDate()
        const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
        const year = date.getFullYear()

        const formattedDate = `${year}-${month}-${day}`

        localStorage.setItem("user", JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            age: data.age,
            date: formattedDate,
            gender: data.gender,
            performance: data.performance
        }))
    }

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("user") as string)

        if(!!data === true) {
            setValue("name", data.name)
            setValue("email", data.email)
            setValue("password", data.password)
            setValue("age", data.age)
            setValue("date", data.date)
            setValue("gender", data.gender)
            setValue("performance", data.performance)
        }

    }, [setValue])



    return (
        <Container>
            <Content>
                <Column gap="2" onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        label="Nome:"
                        register={{...register("name")}}
                        error={errors.name}
                        name="name" />


                    <Input 
                        type="email" 
                        placeholder="Digite seu e-mail" 
                        label="E-mail:"
                        register={{...register("email")}} 
                        error={errors.email} 
                        name="email" />

                    <Input 
                        type="password" 
                        placeholder="Digite sua senha" 
                        label="Senha:"
                        register={{...register("password")}} 
                        error={errors.password}
                        name="password" />

                    <Input 
                        type="number" 
                        placeholder="Digite sua idade" 
                        label="Idade:"
                        register={{...register("age")}} 
                        error={errors.age} 
                        name="age" />

                    <Input 
                        type="date" 
                        placeholder="Selecione a data da sua prova" 
                        label="Data da prova esse ano:"
                        register={{...register("date")}} 
                        error={errors.date} 
                        name="date" />


                    <Select 
                        options={genderOptions}
                        label="Genêro:" 
                        register={{...register("gender")}}
                        error={errors.gender} 
                        name="select" />


                    <Checkbox 
                        label="Qual area você domina?" 
                        register={{...register("performance")}} 
                        options={performanceOptions}
                        error={errors.performance} 
                        name="checkbox" />

                    <Submit title="Salvar" />
                </Column>                
            </Content>
        </Container>
    )
}