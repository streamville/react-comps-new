import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName  }) {  
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500', 
    className,
    currentPath === to && activeClassName);


  const handleClick = (e) => {
    if (e.metakey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    
    navigate(to);
  };



  return (
    <a className={classes} onClick={handleClick}>{children}</a>
  );
}

export default Link;