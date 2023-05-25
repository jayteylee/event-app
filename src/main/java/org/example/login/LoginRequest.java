package org.example.login;

public class LoginRequest {
    private String email;
    private String password;

    // Get the email
    public String getEmail() {
        return email;
    }

    // Set the email
    public void setUsername(String email) {
        this.email = email;
    }

    // Get the password
    public String getPassword() {
        return password;
    }

    // Set the password
    public void setPassword(String password) {
        this.password = password;
    }
}
