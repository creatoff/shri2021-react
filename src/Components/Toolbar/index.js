import './styles.scss';

function Toolbar({children, style}) {
  return ( 
    <div className="toolbar" style={style}>{children}</div>
   );
}

export default Toolbar;