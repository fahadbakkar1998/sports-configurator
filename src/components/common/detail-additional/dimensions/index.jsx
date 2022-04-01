import BasicBox from '../../basic-box';
import './index.scss';

const items = ['W    42 ft', 'L     70 ft', 'H    16 ft'];

const Dimensions = () => (
  <BasicBox label="Dimensions" icon="true">
    {items.map((item, key) => (
      <div className="dimentions-item" key={key}>
        {item}
      </div>
    ))}
  </BasicBox>
);

export default Dimensions;
