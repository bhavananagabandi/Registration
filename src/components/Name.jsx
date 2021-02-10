import { Form } from "react-final-form";
import { useHistory } from 'react-router';
import { saveValues } from '../actions';
import { connect } from 'react-redux';
import {FormField} from '../components/Field';
import {Button} from '../components/Button';

const Name = (props) => {
    const { FirstName, LastName, saveFormValues} = props;
    const history = useHistory();
    const onSubmit = async values => {
        saveFormValues(values);
        history.push('./PersonalInfo');
      }
    return (
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
        <Form
        onSubmit={onSubmit}
        initialValues={{FirstName, LastName}}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit} data-testid="name-form">
            <h1>Let's collect some basic information</h1>
              <FormField name = 'FirstName' type = 'text' />
              <FormField name = 'LastName' type = 'text' />
             <div>
              <Button isDisabled = {invalid}/>
            </div>
          </form>
          
        )}
        
      />
      </div>
    );
};

const mapStateToProps = (state) => {
    const { FirstName, LastName } = state.values.formValues;
    return {
        FirstName,
        LastName
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFormValues : (values) => {
      dispatch(saveValues(values));
    }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Name);