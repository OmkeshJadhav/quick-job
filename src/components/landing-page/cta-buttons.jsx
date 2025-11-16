import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const CtaButtons = () => {
    return (
        <div className='flex justify-center gap-6'>
            <Link to="/jobs">
                <Button variant="blue" size="xl">Find Jobs</Button>
            </Link>
            <Link to="/post-job">
                <Button variant="destructive" size="xl">Post a Job</Button>
            </Link>
        </div>
    )
}

export default CtaButtons