type PasswordProps = {
    value: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

export default function PasswordComp(props: PasswordProps) {

  return (
    <>
        <label htmlFor="password" className="login--label">
            Password
        </label>
        <input
            type="password"
            name="password"
            value={props.value}
            onChange={(e) => props.handleInputChange(e)}
            placeholder="password"
            className="input--custom"
            required
        />
        {props.error &&
        <div className="error password"> 
            {props.error} 
        </div>
        } 
    </>
  )
}
