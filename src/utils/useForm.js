import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CallApi from "../api/api";
import { updateAuth } from "../redux/auth/auth.actions";

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
    setErrors((errors) => ({ ...errors, [e.target.name]: "" }));
  };

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitting) {
      setAuthError(null);
      const signIn = async () => {
        let auth = await CallApi.post("/auth", {
          body: {
            login: `${values.email}`,
            password: `${values.password}`,
            type: "web",
          },
        });
        if (auth.success) {
          let accessToken = await auth.data.accessToken;
          localStorage.setItem("accessToken", `${accessToken}`);
          dispatch(updateAuth());
        } else {
          setAuthError(auth.errors[0]);
        }
      };
      signIn();
    }
  }, [values.email, values.password, isSubmitting, errors, dispatch]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    authError,
  };
};

export default useForm;

const validate = (values) => {
  let errors = {};
  if (!values.email || !emailValidation(values.email)) {
    errors.email = "Введите корректный email";
  }
  if (!values.password) {
    errors.password = "Введите пароль";
  }
  return errors;
};

const emailValidation = (input) => {
  const emailValidationRegEx = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );
  return emailValidationRegEx.test(input);
};
