import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

export default function MainTemplate({ children }) {
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}