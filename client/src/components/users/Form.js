import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  renderField = data => {
    data.input.className = 'form-control';

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += ' is-invalid';
      data.input['aria-invalid'] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += ' is-valid';
    }

    return (
      <div className={`form-group`}>
        <label
          htmlFor={`users_${data.input.name}`}
          className="form-control-label"
        >
          {data.input.name}
        </label>
        <input
          {...data.input}
          type={data.type}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`users_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component={this.renderField}
          name="firstName"
          type="text"
          placeholder=""
          required={true}
        />
        <Field
          component={this.renderField}
          name="lastName"
          type="text"
          placeholder=""
          required={true}
        />
        <Field
          component={this.renderField}
          name="nni"
          type="text"
          placeholder=""
          required={true}
        />
        <Field
          component={this.renderField}
          name="password"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="email"
          type="text"
          placeholder=""
          required={true}
        />
        <Field
          component={this.renderField}
          name="isActive"
          type="checkbox"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="salt"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="role"
          type="text"
          placeholder=""
        />

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'users',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form);