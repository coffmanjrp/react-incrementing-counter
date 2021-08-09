import { useEffect, useState } from 'react';
import Icon from './Icon';

const Counter = ({ data }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      updateCounter();
    }, 5);

    // eslint-disable-next-line
  }, [count]);

  const updateCounter = () => {
    const { counts } = data;
    const increment = counts / 200;

    if (count < counts) {
      setCount(Math.ceil(count + increment));
    } else {
      setCount(counts);
    }
  };

  return (
    <div className="counter-container">
      <Icon icon={data.iconTag} size="3rem" />
      <div className="counter">{count.toString()}</div>
      <span>{data.text}</span>
    </div>
  );
};

export default Counter;
