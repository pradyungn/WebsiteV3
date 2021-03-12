import Head from 'next/head'
import dark from '../styles/Dark.module.css'
import light from '../styles/Light.module.css'

let styles = {"dark":dark, "light":light};
let mode = "dark"

export default function Home() {
  return (
    <div className={styles[mode].container}>
      <Head>
        <title>pradyungn</title>
      </Head>

      <main className={styles[mode].landing}>
        <div className={styles[mode].name}>
            Pradyun Narkadamilli
        </div>
        <div className={styles[mode].tagline}>
            Maker of things, engineering afficionado.
        </div>
        <div className={styles[mode].socials}>
            <div className={(styles[mode].social) + " green"}>
                <span>a</span> 
            </div>
            <div className={styles[mode].social + " blue"}>
                b
            </div>
            <div className={styles[mode].social + " magenta"}>
                c
            </div>
            <div className={styles[mode].social + " purple"}>
                c
            </div>
        </div>
      </main>
    </div>
  )
}
