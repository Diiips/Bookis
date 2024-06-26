import './AboutPage.css'
import Image from '../Images/Book shelf.png'

export default function AboutPage() {
    return (
        <div className='Aboutpg'>
            <div className='background'>
                <h1>About Us</h1>
            </div>
            <div className='Aboutpg-content'>
                <img src={Image}></img>
                <p>Welcome to Bookies,<br/><br/>Created by Engineering Students. This platform is designed specifically for engineering students,providing a space where you can buy and sell textbooks and other academic resources. Additionally ,you can request new books to be added to our collection.<br/><br/>Our mission is to make essential reading materials affordable and accessible. With a user-friendly interface and secure transactions,we aim to support your academic journey.Join our community today! For questions or feedback, contact us. Happy reading'</p>
            </div>
        </div>
    )
}