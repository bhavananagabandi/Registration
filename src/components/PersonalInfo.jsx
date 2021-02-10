import { Form,Field } from "react-final-form";
import { useHistory } from 'react-router';
import { saveValues } from '../actions';
import { connect } from 'react-redux';
import { FormField } from './Field';
import {Button} from '../components/Button';

const PersonalInfo = (props) => {
    const { Gender, Age, saveFormValues} = props;
    const history = useHistory();
    const onSubmit = async values => {
        saveFormValues(values);
        history.push('./Address');
      }
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <Form
        onSubmit={onSubmit}
        initialValues={{Gender, Age}}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div style = {{padding: '10px', margin: '10px', fontSize: '24px'}}>
              <h1>Let's collect your personal information</h1>
            <label>Gender</label>
            <div>
              <label>
                <Field
                  name="Gender"
                  component="input"
                  type="radio"
                  value="Male"
                  required
                />{' '}
                Male
              </label>
              <label>
                <Field
                  name="Gender"
                  component="input"
                  type="radio"
                  value="Female"
                  required
                />{' '}
                Female
              </label>
              </div>
          </div>
              <FormField name = 'Age' type = 'text'/>
             <div>
              <Button isDisabled={invalid}/>
            </div>
          </form>
        )}
      />
      </div>
    );
};

const mapStateToProps = (state) => {
    const { Gender, Age } = state.values.formValues;
    return {
        Gender,
        Age
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFormValues : (values) => {
      dispatch(saveValues(values));
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(PersonalInfo);