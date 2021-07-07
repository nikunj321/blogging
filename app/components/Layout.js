import Container from "./Container";
import TopNavbar from "./TopNavbar";

const Layout = ({ children }) => {
    return (
        <Container>
            <TopNavbar />
            {children}
        </Container>
    )
}

export default Layout;