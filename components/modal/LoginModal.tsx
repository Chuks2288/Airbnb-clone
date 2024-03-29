'use client'

import { signIn } from 'next-auth/react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

import { useRouter } from 'next/navigation';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';

import { Button, Heading, Modal } from '..';
import Input from '../input/Input';
import toast from 'react-hot-toast';


const LoginModal = () => {

    const router = useRouter();

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> =
        (data) => {
            setIsLoading(true);

            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((callback) => {
                    setIsLoading(false);

                    if (callback?.ok) {
                        toast.success('Logged in');
                        router.refresh();
                        loginModal.onClose();
                    }

                    if (callback?.error) {
                        toast.error(callback.error);
                    }
                });
        }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title='Welcome back'
                subtitle='Login to your account'
            // center
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-3  mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            />

            <div className="text-neutral-500 text-center mt-4 font-light ">
                <div className="flex flex-row items-center justify-center gap-2">
                    <div className="">
                        First time using Airbnb?
                    </div>
                    <div className="text-rose-500 cursor-pointer hover:underline"
                        onClick={toggle}
                    >
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOPen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal