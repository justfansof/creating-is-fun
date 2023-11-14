export default function Text(props) {
    return (
      <>
        {
            (() => {
                if(props.type === "h1") {
                    return (
                        <h1 className={"text-xl text-white text-center md:text-center md:text-xxxl" + " " + (props.className)}>{props.text}</h1>
                    )
                } else if (props.type === "h2") {
                    return (
                        <h2 className={"text-xxl font-black md:text-xxl" + " " + (props.className)}>{props.text}</h2>
                    ) 
                } else if (props.type === "h3") {
                    return (
                        <h3 className={"text-xl text-white md:text-xxl" + " " + (props.className)}>{props.text}</h3>
                    ) 
                } else if (props.type === "h4") {
                    return (
                        <h4 className={"text-lg font-black text-center" + " " + (props.className)}>{props.text}</h4>
                    ) 
                } else if (props.type === "h5") {
                    return (
                        <h5 className={"text-base text-white" + " " + (props.className)}>{props.text}</h5>
                    ) 
                } else if (props.type === "h6") {
                    return (
                        <h6>{props.text}</h6>
                    ) 
                }   else if (props.type === "p") {
                    return (
                        <p className={"py-4" + " " + (props.className)}>{props.text}</p>
                    ) 
                } else if (props.type === "a") {
                    return (
                        <a href={(props.link)} className={"py-4" + " " + (props.className)}>{props.text}</a>
                    ) 
                } else {
                        return (
                            "ERR"
                        )
                    }
                }
            )() 
        }
      </>
    )
  }
  