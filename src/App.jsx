import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

const App = () => {
  // State to store form submission data
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">User Information</h1>
        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setSubmittedData(values); // Store submitted data in state
            resetForm(); // Optionally reset form after submission
            //console data
            console.log(values);
          }}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name:</label>
              <Field
                name="name"
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
              <Field
                name="email"
                type="email"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </Form>
        </Formik>

        {/* Display the submitted data */}
        {submittedData && (
          <div className="mt-8 p-6 bg-green-50 border border-green-300 rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-green-800">Submitted Data</h2>
            <div className="mt-4">
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
