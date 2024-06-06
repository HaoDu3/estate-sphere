import * as config from '../config.mjs';
import emailValidator from 'email-validator';
import User from '../models/user.mjs';

// Email template style
const style =`
    background-color: #eee;
    padding: 20px;
    border-radius: 20px;
`
export const emailTemplate = (email, content, replyTo, subject) => {
    return {
      Source: config.EMAIL_FROM,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
                  <html>
                      <div style="${style}">
                          <h1>View a Message from EstateSphere</h1>
                          ${content}
                          <p>&copy; ${new Date().getFullYear()}</p>
                      </div>
                  </html>
                `,
          },
        },
        Subject: {
          // Subject of the email
          Charset: "UTF-8",
          Data: "Welcome to EstateSphere",
        },
      },
    };
  };

export const emailChecker = async (email,password) => {
    let error;
    if (!emailValidator.validate(email)){
        return error = "Invalid email address";
    }
    if(!password){
        return error = "Password is required";
    } else if(password.length < 6){
        return error = "Password must be at least 6 characters long";
    }
    const user = await User.findOne({email});
    if(user){
        return error = "Email is already taken";
    }

    return error;
}