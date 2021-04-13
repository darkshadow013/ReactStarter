import React from 'react';
class HomePage extends React.Component {
    render() {
        return (
                <section className="jumbotron text-center" style={{background: "white"}}>
                    <div className="container">
                        <h1 className="jumbotron-heading">Hi There,</h1>
                        <p className="lead text-muted">You are on the homepage. Try checking out some functionalities
                        from menu above.</p>
                    </div>
                </section>
        );
    }
}

export default HomePage;