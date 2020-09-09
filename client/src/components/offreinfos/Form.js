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
          htmlFor={`offreinfos_${data.input.name}`}
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
          id={`offreinfos_${data.input.name}`}
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
          name="AnneeDebut"
          type="dateTime"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="AnneeFin"
          type="dateTime"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="coutEuro"
          type="number"
          step="0.1"
          placeholder=""
          normalize={v => parseFloat(v)}
        />
        <Field
          component={this.renderField}
          name="Intitule"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="Aide"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="Formule"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="TitreCatalogue"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="Structure"
          type="text"
          placeholder=""
        />
        <Field
          component={this.renderField}
          name="offre"
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
  form: 'offreinfos',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form);
