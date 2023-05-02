import Footer from "./components/Footer"
import Header from "./components/Header"

const CommonContainer = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default CommonContainer