import React from 'react';

import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const { push } = useHistory;

    return (
        <div>
            <h1>Blog.App</h1>
            <h3>For the individual who updates their Facebook status, posts an Instagram story, and writes a strongly worded Yelp review, but thinks, "you know what? That's just not enough!"</h3>
            <h3>Been here before?</h3>
                {/* <button
                    onClick={() => push("/login")}
                    type="button"
                    className="login"
                >
                    Login!
                </button> */}
                <Link to="/login">
                    <button type="button">
                    Login!
                    </button>
                </Link>
            <h3>Don't Have an account?</h3>
            {/* <button
                onClick={() => push("/signup")}
                type="button"
                className="register"
            >
                Register!
            </button> */}
            <Link to="/signup">
                <button type="button">
                    Register
                </button>
            </Link>
        </div>
    )
}

export default Home;