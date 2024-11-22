import Layout from '../components/Layout';

const UpdatePage = () => {
    return (
        <Layout title="SaferSSO | Update User" content="Update your account details">
            <div className="container mt-4">
                <h1>Update Your Information</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="favoriteColor" className="form-label">
                            Favorite Color
                        </label>
                        <input type="text" className="form-control" id="favoriteColor" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default UpdatePage;