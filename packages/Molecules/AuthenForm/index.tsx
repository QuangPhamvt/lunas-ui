import { DefaultLogoWithIcon, LocalGoogleIcon } from '@/Icons'
import { Flex } from '@/Layout'
import {
  forwardRef,
  HTMLAttributes,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import EmailInput from './components/EmailInput'
import PasswordInput from './components/PasswordInput'
import { Button, Form, FormField } from '@/Atoms'
import FullNameInput from './components/FullNameInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/libs'
import { ControllerRenderProps, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { SignInModel, SignUpModel } from './model'
import { PuffLoader } from 'react-spinners'

interface IAuthFormProps extends HTMLAttributes<HTMLDivElement> {
  initialTitle?: 'SIGN_IN' | 'SIGN_OUT'
  isLoading?: boolean
  onSignIn?: (parameters: z.infer<typeof SignInModel>) => void
  onSignUp?: (parameters: z.infer<typeof SignUpModel>) => void
  onChangeToSignIn?: () => void
  onChangeToSignUp?: () => void
}
const AuthForm = memo(
  forwardRef<HTMLDivElement, IAuthFormProps>(
    (
      {
        initialTitle = 'SIGN_IN',
        isLoading = false,
        onSignIn,
        onSignUp,
        onChangeToSignIn,
        onChangeToSignUp,
        ...props
      },
      reference,
    ) => {
      const [state, setState] = useState<'SIGN_IN' | 'SIGN_OUT'>(initialTitle)
      const [registerStep, setRegisterStep] = useState<'FIRST' | 'SECOND'>('FIRST')
      const [isDisabledSignIn, setIsDisabledSignIn] = useState<boolean>(true)
      const [isDisabledSignOut, setIsDisabledSignOut] = useState<boolean>(true)

      const signInForm = useForm<z.infer<typeof SignInModel>>({
        resolver: zodResolver(SignInModel),
        defaultValues: {
          email: '',
          password: '',
        },
        mode: 'onTouched',
      })

      const signUpForm = useForm<z.infer<typeof SignUpModel>>({
        resolver: zodResolver(SignUpModel),
        defaultValues: {
          email: '',
          fullname: '',
          password: '',
          confirmPassword: '',
        },
        mode: 'onTouched',
      })

      const { control: signInControl, formState: signInFormState } = signInForm

      const { control: signUpControl, formState: signUpFormState } = signUpForm

      const signInEmail = useWatch({ control: signInControl, name: 'email' })

      const signInPassword = useWatch({ control: signInControl, name: 'password' })

      const signUpEmail = useWatch({ control: signUpControl, name: 'email' })

      const signUpFullname = useWatch({ control: signUpControl, name: 'fullname' })

      const signUpPassword = useWatch({ control: signUpControl, name: 'password' })

      const signUpConfirmPassword = useWatch({ control: signUpControl, name: 'confirmPassword' })

      const handleChangeToSignIn = useCallback(() => {
        setState('SIGN_IN')
        onChangeToSignIn?.()
      }, [onChangeToSignIn])

      const handleChangeToSignUp = useCallback(() => {
        setState('SIGN_OUT')
        onChangeToSignUp?.()
      }, [onChangeToSignUp])

      const handleSignUpFirstStep = useCallback(() => {
        setRegisterStep('FIRST')
      }, [])

      const handleSignUpSecondStep = useCallback(() => {
        setRegisterStep('SECOND')
      }, [])

      const onSignInSubmit = useCallback(
        (data: z.infer<typeof SignInModel>) => {
          onSignIn?.(data)
        },
        [onSignIn],
      )

      const onSignUpSubmit = useCallback(
        (data: z.infer<typeof SignUpModel>) => {
          onSignUp?.(data)
        },
        [onSignUp],
      )

      const headerRender = useMemo(
        () => (
          <Flex vertical gapY={5} p={0} justify="center">
            <DefaultLogoWithIcon />
            <h1 className="text-2xl font-bold text-ui-text-700">
              {state === 'SIGN_IN' ? 'Đăng nhập' : 'Đăng ký'}
            </h1>
          </Flex>
        ),
        [state],
      )

      const emailErrorMessage = useMemo(
        () => signInFormState.errors.email?.message,
        [signInFormState.errors.email?.message],
      )

      const passwordErrorMessage = useMemo(
        () => signInFormState.errors.password?.message,
        [signInFormState.errors.password?.message],
      )

      const signUpEmailErrorMessage = useMemo(
        () => signUpFormState.errors.email?.message,
        [signUpFormState.errors.email?.message],
      )

      const signUpFullnameErrorMessage = useMemo(
        () => signUpFormState.errors.fullname?.message,
        [signUpFormState.errors.fullname?.message],
      )

      const signUpPasswordErrorMessage = useMemo(
        () => signUpFormState.errors.password?.message,
        [signUpFormState.errors.password?.message],
      )

      const signUpConfirmPasswordErrorMessage = useMemo(
        () => signUpFormState.errors.confirmPassword?.message,
        [signUpFormState.errors.confirmPassword?.message],
      )

      const signInEmailFieldRender = useCallback(
        ({ field }: { field: ControllerRenderProps<z.infer<typeof SignInModel>, 'email'> }) => (
          <EmailInput errorMessage={emailErrorMessage} {...field} />
        ),
        [emailErrorMessage],
      )

      const signInPwdFieldRender = useCallback(
        ({ field }: { field: ControllerRenderProps<z.infer<typeof SignInModel>, 'password'> }) => (
          <PasswordInput placeholder="Mật khẩu" errorMessage={passwordErrorMessage} {...field} />
        ),
        [passwordErrorMessage],
      )

      const signUpEmailFieldRender = useCallback(
        ({ field }: { field: ControllerRenderProps<z.infer<typeof SignUpModel>, 'email'> }) => (
          <EmailInput errorMessage={signUpEmailErrorMessage} {...field} />
        ),
        [signUpEmailErrorMessage],
      )

      const signUpFullnameFieldRender = useCallback(
        ({ field }: { field: ControllerRenderProps<z.infer<typeof SignUpModel>, 'fullname'> }) => (
          <FullNameInput errorMessage={signUpFullnameErrorMessage} {...field} />
        ),
        [signUpFullnameErrorMessage],
      )

      const signUpPwdFieldRender = useCallback(
        ({ field }: { field: ControllerRenderProps<z.infer<typeof SignUpModel>, 'password'> }) => (
          <PasswordInput
            placeholder="Mật khẩu"
            errorMessage={signUpPasswordErrorMessage}
            {...field}
          />
        ),
        [signUpPasswordErrorMessage],
      )

      const signUpConfirmPwdFieldRender = useCallback(
        ({
          field,
        }: {
          field: ControllerRenderProps<z.infer<typeof SignUpModel>, 'confirmPassword'>
        }) => (
          <PasswordInput
            placeholder="Nhập lại mật khẩu"
            errorMessage={signUpConfirmPasswordErrorMessage}
            {...field}
          />
        ),
        [signUpConfirmPasswordErrorMessage],
      )

      const signInRender = useMemo(
        () => (
          <Form {...signInForm}>
            <form
              className={cn('flex w-full flex-col gap-y-4', {
                hidden: state !== 'SIGN_IN',
              })}
              onSubmit={signInForm.handleSubmit(onSignInSubmit)}
            >
              <Flex
                vertical
                width="full"
                gapY={emailErrorMessage ? 8 : 4}
                p={0}
                pb={passwordErrorMessage ? 4 : 0}
                className="overflow-visible"
              >
                <FormField control={signInControl} name="email" render={signInEmailFieldRender} />

                <FormField control={signInControl} name="password" render={signInPwdFieldRender} />
              </Flex>

              <Flex vertical gapY={3} width="full" p={0} className="overflow-visible">
                <Button
                  type="submit"
                  disabled={isDisabledSignIn}
                  className={cn('w-full rounded-sm py-2', {
                    'duration-[3000ms] animate-pulse opacity-60': isLoading,
                  })}
                >
                  {isLoading ? <PuffLoader color="#fff" size={24} /> : <span>Đăng nhập</span>}
                </Button>

                <Flex justify="between" width="full" p={0} className="text-ui-tertiary-400">
                  <span className="text-ui-small-note">Quên mật khẩu</span>
                  <button type="button" onClick={handleChangeToSignUp}>
                    <span className="text-ui-small-note">Tạo tài khoản</span>
                  </button>
                </Flex>
              </Flex>
            </form>
          </Form>
        ),
        [
          isLoading,
          state,
          isDisabledSignIn,
          signInControl,
          signInForm,
          emailErrorMessage,
          passwordErrorMessage,
          handleChangeToSignUp,
          signInEmailFieldRender,
          signInPwdFieldRender,
          onSignInSubmit,
        ],
      )

      const signUpRender = useMemo(
        () => (
          <Form {...signUpForm}>
            <form
              className={cn('flex w-full flex-col gap-y-4', {
                hidden: state !== 'SIGN_OUT',
              })}
              onSubmit={signUpForm.handleSubmit(onSignUpSubmit)}
            >
              <Flex
                vertical
                gapY={signUpEmailErrorMessage ? 8 : 4}
                width="full"
                p={0}
                pb={signUpFullnameErrorMessage ? 4 : 0}
                className={cn('grow overflow-visible', {
                  hidden: registerStep !== 'FIRST',
                })}
              >
                <FormField name="email" control={signUpControl} render={signUpEmailFieldRender} />

                <FormField
                  name="fullname"
                  control={signUpControl}
                  render={signUpFullnameFieldRender}
                />
              </Flex>

              <Flex
                vertical
                gapY={signUpPasswordErrorMessage ? 8 : 4}
                width="full"
                p={0}
                pb={signUpConfirmPasswordErrorMessage ? 4 : 0}
                className={cn('grow overflow-visible', {
                  hidden: registerStep !== 'SECOND',
                })}
              >
                <FormField control={signUpControl} name="password" render={signUpPwdFieldRender} />

                <FormField
                  control={signUpControl}
                  name="confirmPassword"
                  render={signUpConfirmPwdFieldRender}
                />
              </Flex>

              <Flex gapX={2} height="fit" p={0} justify="start" width="full">
                <button
                  type="button"
                  className={cn('h-2 w-8 rounded-full bg-neutral-300', {
                    'bg-ui-tertiary-300': registerStep === 'FIRST',
                  })}
                  onClick={handleSignUpFirstStep}
                />

                <button
                  type="button"
                  className={cn('h-2 w-8 rounded-full bg-neutral-300', {
                    'bg-ui-tertiary-300': registerStep === 'SECOND',
                  })}
                  onClick={handleSignUpSecondStep}
                />
              </Flex>

              <Flex vertical gapY={3} width="full" p={0} className="overflow-visible">
                <Button
                  type="submit"
                  disabled={isDisabledSignOut}
                  className={cn('w-full rounded-sm py-2', {
                    'duration-[3000ms] animate-pulse opacity-60': isLoading,
                  })}
                >
                  {isLoading ? <PuffLoader color="#fff" size={24} /> : <span>Đăng ký</span>}
                </Button>

                <Flex justify="between" width="full" p={0} className="text-ui-tertiary-400">
                  <span className="text-ui-small-note">Quên mật khẩu</span>

                  <button type="button" onClick={handleChangeToSignIn}>
                    <span className="text-ui-small-note">Đăng nhập lại</span>
                  </button>
                </Flex>
              </Flex>
            </form>
          </Form>
        ),
        [
          isLoading,
          state,
          registerStep,
          signUpForm,
          signUpControl,
          signUpEmailErrorMessage,
          signUpFullnameErrorMessage,
          signUpPasswordErrorMessage,
          signUpConfirmPasswordErrorMessage,
          isDisabledSignOut,
          handleChangeToSignIn,
          handleSignUpFirstStep,
          handleSignUpSecondStep,
          signUpEmailFieldRender,
          signUpFullnameFieldRender,
          signUpPwdFieldRender,
          signUpConfirmPwdFieldRender,
          onSignUpSubmit,
        ],
      )

      const oauthRender = useMemo(() => {
        return (
          <Flex vertical gapY={4} p={0} width="full" className="overflow-visible">
            <Flex gapX={3} p={0} justify="center" width="full">
              <div className="grow border-t border-ui-text-300 bg-ui-text-300" />
              <span className="w-fit font-medium text-ui-text-600">Đăng nhập bằng</span>
              <div className="grow border-t border-ui-text-300 bg-ui-text-300" />
            </Flex>

            <Button className="w-full rounded-sm" variant="outline">
              <LocalGoogleIcon size={24} />
              <span className="text-ui-p text-ui-text-300">Google</span>
            </Button>
          </Flex>
        )
      }, [])

      useLayoutEffect(() => {
        const { isValid, isDirty } = signInFormState
        const isDisabled = !isValid || !isDirty || !signInEmail || !signInPassword
        setIsDisabledSignIn(isDisabled)
      }, [signInFormState, signInEmail, signInPassword])

      useLayoutEffect(() => {
        const { isValid, isDirty } = signUpFormState
        const isDisabled =
          !isValid ||
          !isDirty ||
          !signUpEmail ||
          !signUpFullname ||
          !signUpPassword ||
          !signUpConfirmPassword
        setIsDisabledSignOut(isDisabled)
      }, [signUpEmail, signUpFullname, signUpPassword, signUpFormState, signUpConfirmPassword])

      return (
        <Flex
          ref={reference}
          vertical
          width={480}
          gapY={6}
          py={8}
          className="rounded-xl bg-ui-white px-12 shadow-ui-muli"
          {...props}
        >
          {headerRender}

          {signInRender}

          {signUpRender}

          {oauthRender}
        </Flex>
      )
    },
  ),
)
AuthForm.displayName = 'AuthForm'
export default AuthForm
