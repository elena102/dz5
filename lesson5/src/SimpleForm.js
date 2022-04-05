import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checkbox, Form } from 'semantic-ui-react';

const renderCheckBox = ({ input, label }) => {
  return (
    <Form.Field>
      <Checkbox
        label={label}
        checked={input.value ? true : false}
        onChange={(e, { checked }) => input.onChange(checked)}
      />
    </Form.Field>
  );
};

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Example</label>
        <div>
          <Field
            name="activated"
            label="Activate?"
            component={renderCheckBox}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
