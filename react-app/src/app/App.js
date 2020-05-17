import React, { useState } from "react";
import { Button, CircularProgress, Input, Title, Slide } from "../components";
import { useFormik } from "formik";
import { login } from "../RestService";

const App = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isSubmitting
  } = useFormik({
    initialValues: {
      login: "",
      password: ""
    },
    onSubmit: (values, formikHelpers) => {
      const errors = {};

      if (values.login === "") {
        errors.login = "Login requis";
      }

      if (values.password === "") {
        errors.password = "Veuillez saisir votre mot de passe";
      }

      if (Object.keys(errors).length === 0) {
        login(values.login, values.password)
          .then(response => response.json())
          .then(data => {
            formikHelpers.setSubmitting(false);
            setResponseMessage(data);
          })
          .catch(function() {
             // Throw erreur message to the user
            formikHelpers.setSubmitting(false);
          });
      } else {
        formikHelpers.setErrors(errors);
        formikHelpers.setSubmitting(false);
      }
    }
  });
  return (
    <Slide direction="left" className="auth-form">
      <form
        onSubmit={handleSubmit}
        style={{ padding: "10,10,10,10", marginLeft: "20%", width: "60%" }}
      >
        <Title type={"h6"}>{"Formulaire de login"}</Title>
        <Input
          label={"Login"}
          type="login"
          name="login"
          value={values.login}
          onChange={handleChange}
          error={errors.login}
          required
        />
        <Input
          label={"Password"}
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
        <div className="submit-container" style={{ marginTop: "20px" }}>
          {!isSubmitting && (
            <Button type="submit" raised>
              {"Se connecter"}
            </Button>
          )}
          {isSubmitting && <CircularProgress size={36} />}
        </div>
        {
          responseMessage && responseMessage.access === true && (
            <div style={{marginTop: 15, color: 'green'}}>Réponse: Authentification validée</div>
          )
        }
        {
          responseMessage && responseMessage.access === false && (
              <div style={{marginTop: 15, color: 'red'}}>Réponse: Erreur d'authentification</div>
          )
        }
      </form>
    </Slide>
  );
};

export default App;
