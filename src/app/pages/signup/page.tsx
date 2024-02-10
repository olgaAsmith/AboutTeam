'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './page.module.scss';
import { useState } from 'react';
interface SignUpData {
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<SignUpData>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handlePasswordVisability = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const matchPassword = (value: string) => {
    const password = getValues('password');
    return password === value || 'Пароли не совпадают';
  };

  console.log(errors);
  return (
    <section className={styles.signup}>
      <form className={styles.signup__form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.signup__title}>Регистрация</h1>
        <div className={styles.signup__inputarea}>
          <label className={styles.signup__label} htmlFor="userName">
            Имя
          </label>
          <input
            className={styles.signup__input}
            type="text"
            id="userName"
            placeholder="Артур"
            {...register('user', {
              required: 'Обязательное поле',
              minLength: {
                value: 3,
                message: 'Слишком короткое имя'
              },
              pattern: {
                value: /^[a-zA-Zа-яА-Я]+$/,
                message: 'Имя должно содержать только буквы'
              }
            })}
          />
          {errors.user && <p className={styles.signup__error}>{errors.user.message}</p>}
        </div>
        <div className={styles.signup__inputarea}>
          <label className={styles.signup__label} htmlFor="email">
            Электронная почта
          </label>
          <input
            className={styles.signup__input}
            type="email"
            id="email"
            placeholder="example@mail.ru"
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
                message: 'Некорректынй адрес почты'
              }
            })}
          />
          {errors.email && <p className={styles.signup__error}>{errors.email.message}</p>}
        </div>
        <div className={styles.signup__inputarea}>
          <label className={styles.signup__label} htmlFor="password">
            Пароль
          </label>
          <input
            className={styles.signup__input}
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            placeholder="******"
            autoComplete="off"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 6,
                message: 'Минимально - 6 символов'
              },
              pattern: {
                value: /^[A-Za-z\d!@#$%^&*()-_+=<>?]{6,20}$/,
                message: 'Только латинские буквы и символы'
              },
              validate: matchPassword
            })}
          />
          {errors.password && <p className={styles.signup__error}>{errors.password.message}</p>}
          <div className={styles.signup__hider} onClick={handlePasswordVisability}></div>
        </div>
        <div className={styles.signup__inputarea}>
          <label className={styles.signup__label} htmlFor="confirmPassword">
            Подтвердите пароль
          </label>
          <input
            className={styles.signup__input}
            type={isPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="******"
            autoComplete="off"
            {...register('confirmPassword', {
              required: 'Обязательное поле',
              minLength: {
                value: 6,
                message: 'Минимально - 6 символов'
              },
              pattern: {
                value: /^[A-Za-z\d!@#$%^&*()-_+=<>?]{6,20}$/,
                message: 'Только латинские буквы и символы'
              },
              validate: matchPassword
            })}
          />
          {errors.confirmPassword && (
            <p className={styles.signup__error}>{errors.confirmPassword.message}</p>
          )}
          <div className={styles.signup__hider} onClick={handlePasswordVisability}></div>
        </div>
        <button type="submit" className={styles.signup__button}>
          Зарегистрироваться
        </button>
      </form>
    </section>
  );
}
