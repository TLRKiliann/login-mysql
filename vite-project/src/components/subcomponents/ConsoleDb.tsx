type DataProps = {
    datas: {
        id: number;
        username: string;
        password: string;
        status: string | undefined;
    }[]
}

export default function ConsoleDb(props: DataProps) {
  return (
    <div className='database'>
        <h4>Data from Database :</h4> 
        {props.datas?.map((u) => (
            <span key={u.id}>
            <p>{u.id} - {u.username} - {u.password} - {u.status}</p>
            </span>
        ))}
  </div>
  )
}
