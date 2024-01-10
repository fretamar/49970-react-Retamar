const Logo = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col" style={{ width: "100px", height: "100px", overflow: "hidden" }}>
                     <img src="./src/assets/car-logo.png" alt="logo" style={{ width: "20%", height: "100%", objectFit: "cover" }} />
                </div>
            </div>
        </div>
    )
}

export default Logo;