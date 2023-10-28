import { Link } from 'react-router-dom'

export default function HomeSubscribe() {
  return (
    <div className='form--link'>
        <p className="form--subscribe">
        <Link
            to="/subscribe"
            className="link--subscribe"
        >
            Subscribe
        </Link>
        </p>
        <p className="form--subscribe">
        <Link
            to="/"
            className="link--subscribe"
        >
            Home
        </Link>
        </p>
    </div>
  )
}
