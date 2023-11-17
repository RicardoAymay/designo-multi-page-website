import "./buttonStyle.sass"
interface iButtonProps{
    buttonType: "button" | "reset" | "submit"
    classname: "baseWhite" | "basePeach"
    buttonText: string
    clickFunction?: ()=>void
}
const Buttons = ({buttonType, classname, buttonText, clickFunction}: iButtonProps) => {
  return (
    <button type={buttonType} className={classname} onClick={clickFunction}>
        {buttonText}
    </button>
  )
}

export default Buttons