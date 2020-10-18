import React from "react";

// function component disini

const styles = {
    width: "70vw",
    margin: "0 15vw",
    marginTop: "5vh",
    height: "40vh",
    padding: "2rem",
    background: "#fff"
};
const styles2 = {
    border: "1px solid rgba(0, 0, 0, 0.403)",
    padding: ".5rem"
}

const About = () => {
    return (
        <div style={styles}>
            <div style={styles2}>
                <h3>Data Peserta Sanbercode Bootcamp Reactjs</h3>
                <ol>
                    <li><strong>Nama:</strong> Junio Akarda</li>
                    <li><strong>Email:</strong> junio.akarda26@gmail.com</li>
                    <li><strong>Sistem Operasi yang digunakan:</strong> Windows</li>
                    <li><strong>Akun Github: </strong> Juuni26</li>
                    <li><strong>Akun Telegram:</strong> Jun Akarda</li>
                </ol>
            </div>
        </div>
    );
};

export default About;
