import React, {useState} from 'react';
import { useHistory } from 'react-router';
import PlacesAutocomplete from 'react-places-autocomplete';
import {Button} from '../components/Button';
import { saveValues } from '../actions';
import { connect } from 'react-redux';

const Address = (props) => {
    const {Address = '' , saveFormValues} = props;
    const [place, setPlace] = useState(Address);

    const history = useHistory();
    const handleChange = async value => {
        setPlace(value);
        saveFormValues({Address: value})
    }
    const onSubmit = () => {
        history.push('/Confirmation')
    }
    
    return (
            <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <h1>We need this last piece of information before you submit this form</h1>
            <label style = {{PaddingRight:'10px', fontSize: '24px'}}>Address</label>
            <form onSubmit={onSubmit}>
           <PlacesAutocomplete value={place} onChange={setPlace} onSelect={handleChange}>
           {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div >
                <input style = {{fontSize: '24px'}} name='Address'
                {...getInputProps({
                    placeholder: 'Enter your place...',
                })}
                />
                <div>
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                        const style = suggestion.active
                        ? { backgroundColor: '#d9d9f3', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                            style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                        );
                    })}
                </div>
            </div>
           )}
            </PlacesAutocomplete> 
            <div>
              <Button/>
            </div>
            </form>
            </div>
    );
};

const mapStateToProps = (state) => {
    const { Address } = state.values.formValues;
    return {
        Address
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      saveFormValues : (values) => {
        dispatch(saveValues(values));
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Address);