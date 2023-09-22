import classes from "./Footer.module.css";

export default function Footer() {
    return(<>
    <footer className={classes.footer}>
        <h3 className={classes.footerText}>Do-Task @{new Date().getFullYear()}</h3>
    </footer>
    </>)
}