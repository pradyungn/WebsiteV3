import Head from 'next/head'
import {useState, useEffect} from "react"
import Cookies from "js-cookie"

import dark from '../styles/Dark.module.css'
import light from '../styles/Light.module.css'
import Header from '../components/Header'


let styles = {"dark":dark, "light":light};

function Home() {
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

    return (
        <>
            <Head>
                <title>pradyungn</title>
            </Head>

            <Header mode={mode} toggle={colortoggle}/>

            <div className={styles[mode].container}>

                <main className={styles[mode].landing}>
                    <div className={styles[mode].name}>
                        Pradyun Narkadamilli
                    </div>
                    <div className={styles[mode].tagline}>
                        Maker of things, engineering afficionado.
                    </div>
                    <div className={styles[mode].socials}>
                        <a className={(styles[mode].social) + " green"}
                            href="https://www.linkedin.com/in/pradyun-n-958499b8/">
                            li 
                        </a>
                        <a className={styles[mode].social + " purple"}
                            href="https://github.com/pradyungn">
                            gh
                        </a>
                        <a className={styles[mode].social + " pink"}
                            href="https://instagram.com/pradyungn">
                            ig
                        </a>
                        <a className={styles[mode].social + " blue"}
                            href="https://twitter.com/pradyungn">
                            tw
                        </a>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
