


export const Icon = ( {iconName, className, onClick} ) => {

  const iconUrl = `src/assets/${iconName}.svg`
  const classes = `icon ${className}`
  

    return(

        <>

        <img src={iconUrl} alt='Icon' className={classes} onClick={onClick} />
        
        </>
    )

}