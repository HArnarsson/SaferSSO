import Layout from '../components/Layout'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <Layout title='SaferSSO | Login' content='Login page'>
            <h1>Login</h1>
            <Login/>
        </Layout>
    );
};

export default LoginPage;