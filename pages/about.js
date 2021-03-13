import {useState, useEffect} from "react"
import Cookies from "js-cookie"

import dark from '../styles/Dark.module.css'
import light from '../styles/Light.module.css'

import Header from '../components/Header'
import Meta from '../components/Meta'


let styles = {"dark":dark, "light":light};

function About() {
    const [mode, setMode] = useState("dark");

    function colortoggle() {
        if (mode === "light") {
            setMode("dark");
            Cookies.set("mode", "dark");
        } else {
            setMode("light");
            Cookies.set("mode", "light");
        }
    }

    let c = styles[mode]

    return (
        <>
            <Meta title="about" desc="(not) all about me!"/> 
            <Header mode={mode} toggle={colortoggle} active="About"/>

            <div className={styles[mode].container}>
                <main className={c.about}>
                    <div className={c.abtext}>
                        <div className={c.hello}>Hello!</div>
                        <div className={c.aboutbody}>A little about me - I love making! Be it a solution or something fun, making is my lifeblood as a person.</div>
                        <br/>
                        <div className={c.aboutbody}>Feel free to reach out to me at my email. Don’t remember to smoke your daily dose of crack!</div>
                    </div>
                    <img className={c.pfp} src="/pfp.jpg"/>
                </main>
            </div>
        </>
    )
}

export default About
