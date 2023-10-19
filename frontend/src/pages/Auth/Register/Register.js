import { Credentials } from "./steps/Credentials";
import forms from "../forms";
import { useState } from "react";
import validation from "../validation";
import Button from "src/theme/overrides/Button";
import { Form, Formik } from "formik";
import formInitialValues from "../formInitialValues";
import { CircularProgress } from "@mui/material";
const steps = ["Business Overview", "Business Profile", "Contact Details"];
export default function Register() {
  const { formField, formId } = forms;
  const [value, setValue] = useState(null);
  const currentValidationSchema = validation[value];
  const isLastStep = value === steps.length - 1;
  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <Credentials formField={formField} />;
      default:
        return <div>Not Found</div>;
    }
  }

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setValue(value + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setValue(value + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setValue(value - 1);
  }

  return (
    <>
      <>
        {value === steps.length ? (
          <></>
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(value)}

                <div>
                  <Button
                    onClick={_handleBack}
                    disabled={value === 0}
                    // className={
                    //   value === 0 ? classes.disabledButton : classes.backButton
                    // }
                  >
                    Back
                  </Button>
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {isLastStep ? "Finish" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        // className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </>
    </>
  );
}
