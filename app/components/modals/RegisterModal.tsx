'use client'
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (date) => {
        setIsLoading(true)

        axios.post('/api/register', date)
            .then(() => {
                registerModal.onClose()
            })
            .catch((error) =>{
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcom to Airbnb"
                subtitle="Create an account!"
            />
            <Input
                id='email'
                label='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )


    return ( 
        <Modal
            disabled = {isLoading}
            isOpen = {registerModal.isOpen}
            title = 'Register'
            actionLabel = "Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
     );
}
 
export default RegisterModal;