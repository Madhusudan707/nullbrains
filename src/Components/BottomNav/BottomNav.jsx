

export const BottomNav = () => {
    return (
        <div>
            <div className='flex flex-col space-y-4'>
                <ul className='flex justify-center space-x-4 text-gray-500'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Team</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>Terms</li>
                </ul>
                <ul className='flex justify-center space-x-4 text-gray-500'>
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-dribble"></i></li>
                </ul>
                <p className='flex justify-center items-center'>&#169; 2021 SomeCompany, Inc. All rights reserved.</p>
            </div>
            <div>
               
            </div>
        </div>
    )
}
