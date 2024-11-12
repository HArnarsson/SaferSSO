import Layout from '../components/Layout'
import Logout from '../components/Logout'

const LogoutPage = () => {
    return (
        <Layout title='SaferSSO | Logout' content='Logout of page'>
            <h1>Logout</h1>
            <Logout/>
        </Layout>
    );
};

export default LogoutPage;