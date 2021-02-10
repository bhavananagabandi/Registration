import { connect } from 'react-redux';

const Confirmation = ({values}) => {
    return (
        <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px'
        }}>
            <h1>Your form has been submitted succesfully!!</h1>
            <p><b>Name:</b> {`${values.FirstName} ${values.LastName}`}</p>
            <p><b>Gender:</b> {`${values.Gender}`}</p>
            <p><b>Age:</b> {`${values.Age}`}</p>
            <p><b>Address:</b> {`${values.Address}`}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { values: state.values.formValues }
}

export default connect(mapStateToProps, {})(Confirmation);