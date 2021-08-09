import { IconContext } from 'react-icons';

const Icon = ({ icon, size }) => {
  return (
    <IconContext.Provider value={{ size: size }}>{icon}</IconContext.Provider>
  );
};

export default Icon;
