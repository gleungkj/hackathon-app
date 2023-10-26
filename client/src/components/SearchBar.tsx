import React from 'react';
import './SearchBar.css'
import { Field, Form, Formik } from "formik";
import { initialQueryValues, travellerNumbers } from '../const/initialValues';

export const SearchBar: React.FC = (): JSX.Element => {
  return (
    <Formik initialValues={initialQueryValues} onSubmit={() => {return}}>
      <Form id='queryForm'>
        <Field name='from' placeholder='From (City or Airport)' required='true' type='text' />
        <Field name='To' placeholder='To (City or Airport)' required='true' type='text' />
        <Field name='depart' placeholder='Depart' required='true' type='date' />
        <Field name='return' placeholder='Return' required='true' type='date' />
        <Field as='select' name='Travellers' placeholder='Travellers' required='false'>
          {travellerNumbers.map((index) => (
          <option value={index.toString()}>{index.toString()}</option>
          ))}
        </Field>
        <Field name='budget' placeholder='Budget' required='true' type='number' />
        <button type="submit" className='buttonStyle'>
          Search
        </button>
      </Form>
    </Formik>
  );
}
