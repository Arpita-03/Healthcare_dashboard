import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const ageOptions = [
  { value: '18-25', label: '18-25' },
  { value: '26-35', label: '26-35' },
  { value: '36-45', label: '36-45' },
  { value: '46-60', label: '46-60' },
  { value: '60+', label: '60+' },
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  age: Yup.string().required('Age is required'),
  file: Yup.mixed().required('File is required').nullable(),
});

const FormComponent = () => {
  const [submitMessage, setSubmitMessage] = useState(''); // State to handle success message

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    
    // Display success message after form submission
    setSubmitMessage('Form submitted successfully!');
    
    // Optionally, you can reset the form or handle backend requests here
  };

  return (
    <Formik
      initialValues={{ name: '', age: '', file: null }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field
              id="name"
              name="name"
              className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
            />
            {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <Field
              id="age"
              name="age"
              as="select"
              className={`form-select ${touched.age && errors.age ? 'is-invalid' : ''}`}
            >
              <option value="" disabled>
                Select Age
              </option>
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            {touched.age && errors.age && <div className="invalid-feedback">{errors.age}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Upload File
            </label>
            <input
              id="file"
              name="file"
              type="file"
              className="form-control"
              onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}
            />
            {touched.file && errors.file && <div className="text-danger mt-2">{errors.file}</div>}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>

          {/* Display success message if form is submitted */}
          {submitMessage && <div className="mt-3 alert alert-success">{submitMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
