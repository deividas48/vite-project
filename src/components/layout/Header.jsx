import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <header className='bg-gray-900 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
            <h2>ff</h2>
        </Link>
        </div>
    </header>
    )
}