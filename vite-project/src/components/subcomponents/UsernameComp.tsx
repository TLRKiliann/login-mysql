type UserProps = {
    value: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

function UsernameComp(props: UserProps) {
  return (
    <>
        <label htmlFor="username" className="login--label">
            Username
        </label>
        <input
            type="text"
            name="username"
            value={props.value}
            onChange={(e) => props.handleInputChange(e)}
            placeholder="username"
            autoComplete="off"
            className="input--custom"
            required
        />
        {props.error &&
        <div className="error username"> 
            {props.error} 
        </div>
        } 
    </>
  )
}

export default UsernameComp