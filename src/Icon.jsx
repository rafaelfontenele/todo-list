


export const Icon = ( {iconName, className, onClick, style} ) => {

  const iconUrl = `src/assets/${iconName}.svg`;
  const classes = `icon ${className}`;

    return(

        <>

        <img src={iconUrl} alt='Icon' className={classes} onClick={onClick} style={style}/>
        
        </>
    )

}