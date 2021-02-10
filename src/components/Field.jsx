import { Field } from "react-final-form";
import { checkValidations } from '../utils';

export const FormField = ({name, type}) => {
    return (
        <div style = {{padding: '10px', margin: '10px', fontSize: '24px'}}>
        <Field name= {`${name}`} validate={checkValidations(name)}>
                    {({ input, meta }) => (
                    <div>
                        <label>{`${name}`}: </label>
                        <input style = {{fontSize: '24px'}} {...input} type={`${type}`} placeholder={`${name}`} value={input.value} />
                        {meta.error && meta.touched && <span style={{color: 'red', paddingLeft: '5px'}}>{meta.error}</span>}
                    </div>
                    )}
        </Field>
        </div>
    )
}