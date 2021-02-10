import Name from "./components/Name";
import Address from "./components/Address";
import PersonalInfo from "./components/PersonalInfo";
import {Welcome} from "./components/Welcome";
import Confirmation from "./components/Confirmation";

export const renderComponent = (component) => {
    switch(component) {
        case 'Name':
            return <Name/>;
        case 'PersonalInfo': 
            return <PersonalInfo/>
        case 'Address': 
            return <Address/>
        case 'Confirmation': 
            return <Confirmation/>
        default:
            return <Welcome/>
    }
};

export const required = value => (value ? undefined : "Required");
export const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
export const checkValidations = (name) => {
    return name === 'Age' ? composeValidators(required,mustBeNumber,minValue(18)) : composeValidators(required);
}
