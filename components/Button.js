export default function Button(props) {
  return (
    <>
      <a href={(props.link)}>
        <button className={'rounded-md p-4 my-2 text-white ' + (props.backgroundColor) + " " + (props.extraClasses)} type={props.type}>
          {props.text}
        </button>
      </a>
    </>
  )
}
