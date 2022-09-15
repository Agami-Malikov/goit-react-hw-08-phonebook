import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find Contacts by Name</label>
      <input value={value} type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
