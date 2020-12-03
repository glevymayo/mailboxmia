import React from 'react'
import './home-admin.styles.scss'


const HomeAdmin = () => (
    <div className="sign-in-admin">
            <span>Sign in with your user and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" 
                name="email" 
                handleChange={this.handleChange} 
                value={this.state.email} 
                label="Email"
                required/>

                <FormInput type="password" 
                name="password" 
                handleChange={this.handleChange} 
                value={this.state.password}  
                label="Password"
                required/>

                <div className="buttons">
                    <CustomButton type="submit" onSubmit={this.handleSubmit}>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
)

export default HomeAdmin