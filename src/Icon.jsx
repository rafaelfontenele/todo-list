


export const Icon = ( props ) => {
//{iconName, className, onClick, style}
  const iconUrl = `src/assets/${props.iconName}.svg`;
  const classes = `icon ${props.className}`;
  const onClick = props.onClick ? props.onClick : null;
  const style = props.style;
  const onMouseDown = props.onMouseDown ? props.onMouseDown : null;
  const onMouseOut =  props.onMouseOut ? props.onMouseOut : null;
  const onMouseUp = props.onMouseUp ? props.onMouseUp : null;
//onMouseDown={onMouseDown}
    return(

        <>

        <img src={iconUrl} alt='Icon' className={classes} 
         onClick={onClick} style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseOut={onMouseOut} />
        
        </>
    )

}