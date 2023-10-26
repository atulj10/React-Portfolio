import { Link } from 'react-router-dom';
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

    const nameArray = ['t', 'u', 'l']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'l', 'o', 'p', 'e', 'r', '.']

    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass}_12`} >i</span> 
                        <br />
                        <span className={`${letterClass}_13`} >I</span>
                        <span className={`${letterClass}_14`} >'m</span>
                        {/* Something is wrong with the className that why the hover and starting effect isn't working */}
                        <img src={LogoS} alt="Developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray} idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray} idx={22} />
                    </h1>
                    <h2>Frontend Developer / React Freshman / Student</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo/>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Home;