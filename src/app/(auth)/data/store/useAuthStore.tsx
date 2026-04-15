"use client"

import { create } from "zustand";
import { AuthEntity, AuthInterface } from "../entity/AuthEntity";
import { AuthModeData } from "../sample/AuthData";




interface PropInterface{
    data: AuthInterface,
    authMode: string,
    preData: AuthInterface,
    errors: AuthInterface,
    message: string,
    isLoading: boolean,
    isSubmitting: boolean,
    toggleModal: boolean,
    search: string,
    isSearching: boolean,
    authToken: string
    setAuthMode: (i: string) => void
    setAuthToken: (i: string) => void
    setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setIsSearching: (i: boolean) => void,
    setToggleModal: (i: boolean) => void,
    setInputValue: (
        e: React.ChangeEvent<HTMLInputElement> | 
        React.ChangeEvent<HTMLTextAreaElement> |
        React.ChangeEvent<HTMLSelectElement>
    ) => void
    setError: (name: string, value: string) => void,
    setData: (data: AuthInterface) => void,
    resetData: () => void,
    setIsSubmitting: (i: boolean) => void,
    setMessage: (str: string) => void,
    clearErrors: () => void
    validateField: (name: string, value: string) => string,
    validateRegisterForm: () => { isValid: boolean; errors: AuthInterface },
    validateLoginForm: () => { isValid: boolean; errors: AuthInterface },
}


export const useAuthStore = create<PropInterface>((set, get) => ({ 
    data: AuthEntity,
    preData: AuthEntity,
    errors: AuthEntity,
    message: "",
    search: "",
    authMode: AuthModeData[0].value,
    isSearching: false,
    isLoading: true,
    isSubmitting: false,
    toggleModal: false,
    authToken: "",
    setAuthMode: (i) => {
        set({
            authMode: i
        })
    },
    setAuthToken: (i) => {
        set({
            authToken: i
        })
    },
    setSearch: (e) => {
        const { value } = e.target;
        set({
            search: value
        })
    },
    setIsSearching: (i) => {
        set({
            isSearching: i
        })
    },
    setToggleModal: (i) => {
        set({
            toggleModal: i
        })
    },
    setIsSubmitting: (i) => {
        set({
            isSubmitting: i
        })
    },
    setInputValue: (e) => {
        const { name, value } = e.target;
        const currentData = get().data;
        const currentErrors = get().errors;
        set({
            data: {
                ...currentData,
                [name]: value
            },
            // Clear error for this field if it exists
            errors: currentErrors[name as keyof typeof currentErrors]
                ? { ...currentErrors, [name]: "" }
                : currentErrors
        });
    },
    setData: (i) => {
        set({
            data: i ? i : AuthEntity,
            preData: i ? i : AuthEntity,
            isLoading: false,
        })
    },
    setError: (name, value) => {
        const currentErrors = get().errors;
        set({
            errors: { ...currentErrors, [name]: value }
        })
    },
    resetData: () => {
        set({
            data: AuthEntity,
            preData: AuthEntity,
        })
    },
    setMessage: (i) => {
        set({
            message: i
        })
    },
    clearErrors: () => {
        set({
            errors: AuthEntity,
        })
    },
    validateField: (name, value) => {
        const { data } = get();
        let error = ""
        switch(name){
            case "email":
                if(!value.trim()){
                    error = "Email is required.";
                } 
                break;
            case "password":
                if (!value.trim()) {
                    error = "Password is required.";
                }
                break;
            case "passwordConfirm":
                if (!value.trim()) {
                    error = "Confirm Password is required.";
                } else if (value !== data.password) {
                    error = "Passwords do not match.";
                }
                break;
            default:
                break;
        }
        return error
    },

    validateRegisterForm: () => { 
        const { data } = get();
        let errors = { ...AuthEntity };
        let hasError = false;
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate PASSWORD
        const passwordError = get().validateField("password", data.password);
        if (passwordError) {
            errors.password = passwordError;
            hasError = true;
        }
        // Validate PASSWORD CONFIRM
        const passwordConfirmError = get().validateField("passwordConfirm", data.passwordConfirm);
        if (passwordConfirmError) {
            errors.passwordConfirm = passwordConfirmError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },
    validateLoginForm: () => { 
        const { data } = get();
        let errors = { ...AuthEntity };
        let hasError = false;
        // Validate EMAIL
        const emailError = get().validateField("email", data.email);
        if (emailError) {
            errors.email = emailError;
            hasError = true;
        }
        // Validate PASSWORD
        const passwordError = get().validateField("password", data.password);
        if (passwordError) {
            errors.password = passwordError;
            hasError = true;
        }
        set({ errors });
        return {
            isValid: !hasError,
            errors
        };
    },


}))